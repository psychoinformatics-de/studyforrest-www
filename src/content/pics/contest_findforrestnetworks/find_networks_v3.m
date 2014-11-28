function find_networks_v3(input,nNodes,dataFileName,file,nIterations)

    outputPath=['/work1/uqlmarst/forrest/output/s' input '/'];
    dataFileName=[dataFileName 'bin_' file '.nii.gz'];
    nIterations=str2num(nIterations);
    nNodes=str2num(nNodes);

    tracking=zeros(6,nIterations);

    dataMat=load_nii(dataFileName);
    greyMask=zeros(size(dataMat.img,1),size(dataMat.img,2),size(dataMat.img,3));
    greyMask(squeeze(dataMat.img(:,:,:,1))>100)=1;
    grey=find(squeeze(dataMat.img(:,:,:,1))>0);

    currBestValue=0;
    p=1;

    for i=1:nIterations

        Temp=exp(-(-log(0.01)/nIterations)*i);

        seed=datasample(grey,nNodes,'Replace',false);
        dataVector=zeros(nNodes,size(dataMat.img,1),size(dataMat.img,2),size(dataMat.img,3));
        for nv=1:nNodes
            dataVector(nv,seed(nv))=1;
            dataVector(nv,:,:,:)=smooth3(squeeze(dataVector(nv,:,:,:)),'gaussian',9);
            dataVector(nv,:,:,:)=squeeze(dataVector(nv,:,:,:)).*greyMask;
        end
        dataVector(dataVector>0)=1;
        
        nodeValues=zeros(nNodes,size(dataMat.img,4));
        ind=zeros(size(dataVector,2),size(dataVector,3),size(dataVector,4));
        intermed=zeros(size(dataMat.img,1),size(dataMat.img,2),size(dataMat.img,3),size(dataMat.img,4));
        for nv=1:nNodes
            ind=squeeze(dataVector(nv,:,:,:));
            intermed=repmat(ind,1,1,1,size(dataMat.img,4));
            intermed=dataMat.img.*intermed;
            nodeValues(nv,:)=squeeze(mean(mean(mean(intermed))));
        end

        adjMats=zeros(size(dataMat.img,4)-10,nNodes,nNodes);
        winSize=10;
        c=0;
        for tp=(winSize/2)+1:size(dataMat.img,4)-(winSize/2)
            c=c+1;
            adjMats(c,:,:)=corrcoef(nodeValues(:,tp-winSize/2:tp+winSize/2)');
        end

        for am=1:size(adjMats,1)
            vals(am)=charpath(adjMats(am,:,:));
        end
        
        [b,a]=butter(5,[0.05,0.1]);
    	vals=filtfilt(b,a,vals);
   	valsFFT=fft(vals,2^nextpow2(length(vals)))/length(vals);
	NFFT=2^nextpow2(length(vals));
	valsPow=2*abs(valsFFT(1:NFFT/2+1));

        valsDer=diff(valsPow(1,1:length(valsPow)));
        zcd=dsp.ZeroCrossingDetector;
        peaks=double(step(zcd,valsDer'));

        me=median(valsPow(1,round(length(valsPow)/2):length(valsPow)));
        ma=max(valsPow(1,round(length(valsPow)/2):length(valsPow)));

        newValue=ma/(me*peaks);

        valDiff=abs((currBestValue-newValue)/currBestValue);
        p=Temp*valDiff;
        if newValue>currBestValue
            currBestValue=newValue;
            currBest=dataVector;
            currBestPow=valsPow;
	    currBestNFFT=NFFT;
        elseif newValue>=(currBestValue-currBestValue/5)
            if rand()<p
                currBestValue=newValue;
                currBest=dataVector;
                currBestPow=valsPow;
	        currBestNFFT=NFFT;
            end
        end
        tracking(1,i)=currBestValue;
        tracking(2,i)=Temp;
        tracking(3,i)=peaks;
        tracking(4,i)=ma;
        tracking(5,i)=me;
        tracking(6,i)=newValue;

        if mod(i,100)==0
            dataVectorSave=zeros(1,numel(squeeze(dataMat.img(:,:,:,1))));
            newDataMat=dataMat;
            currBest=reshape(currBest,nNodes,size(dataVectorSave,2));
            for nv=1:nNodes
                dataVectorSave(currBest(nv,:)>0)=nv;
            end
            dataVectorSave=reshape(dataVectorSave,size(dataMat.img,1),size(dataMat.img,2),size(dataMat.img,3));
            newDataMat.img=dataVectorSave;
            save_nii(newDataMat,[outputPath file '_' num2str(nNodes) '_' num2str(i) '.nii']);

	    f=0.25*linspace(0,1,currBestNFFT/2+1);
            set(gcf,'Visible','off');
            plot(f,currBestPow(1:length(currBestPow)));
            saveas(gcf,[outputPath file '_' num2str(nNodes) '_powerPlot_' num2str(i)],'fig');
            close all;
        end
 
        if i==(nIterations-1)
            dlmwrite([outputPath file '_' num2str(nNodes) '_results.csv'],tracking);
        end
   end
end
