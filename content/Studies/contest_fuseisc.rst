FuSeISC: Functional Segmentation of Brain fMRI during naturalistic stimulus based on Inter-Subject Correlation
**************************************************************************************************************

:date: 2014-11-01 13:38
:tags: fMRI, 7-Tesla, contest, segmentation
:authors: Juha Pajula, Jussi Tohka, Jukka-Pekka Kauppi
:summary: a coarse functional brain parcellation into seven functionally
         similar regions
:slug: contest_fuseisc

.. |---| unicode:: U+02014 .. em dash

We propose a new  Inter Subject Correlation (ISC) based exploratory data
analysis technique termed *Functional Segmentation ISC* (FuSeISC)
analysis. The method provides an ISC based functional parcellation of the
brain, which is based on differences in average ISCs and their subject-wise
variation across different scenes of the movie stimulus. It allows simple and
highly interesting interpretation of the activation/ISCs. The method is rooted
on the basic ISC analysis provided by our openly available ISC toolbox and
couples this with a novel clustering algorithm to allow the detection of brain
areas that have similar ISC properties.

We analyzed a subset of data derived from a *studyforrest* data set, where
participants listened to a German audio-description of the movie "Forrest
Gump". 5 interesting scenes were selected for the analysis based on their
publicity in social media. For each scene and each voxel, an average ISC value
was computed across the subjects and its between-subject variation using the
Jackknife technique. This provided 10 dimensional feature vector for each
voxel. These feature vectors were then used as an input of a robust Gaussian
mixture model based clustering algorithm, where the number of clusters is
automatically decided based on the coarsity parameter. We decided to experiment
the new method with a small number of clusters for easy interpretation of the
clustering results. With the selected parameter value the clustering produced
13 clusters, 7 of which were found to be relevant. The method identified
spatially coherent clusters although no information about the voxels’ spatial
location were used in the clustering process.

Introduction
============

Inter-subject correlation (ISC) analysis has been successfully used in many
functional magnetic resonance imaging (fMRI) studies based on experiments
involving "naturalistic" stimuli, such as movies (Hasson et al. 2004,
Jääskeläinen et al. 2008, Golland et al. 2007). ISC analysis is conceptually
simple, as it merely involves voxel-wise computation of a correlation
coefficient between time-series of the subjects. Once the correlation
coefficients have been computed across all participants exposed to an identical
stimulus, subject-pairwise correlation coefficients for each voxel can be
averaged and subsequently thresholded to obtain brain maps indicating which
regions exhibited ISC during the stimulus (Wilson et al. 2008, Kauppi et al.
2010). A major strength of the ISC based analysis is that the method can
reliably detect activated brain areas without requiring any model for a
hemodynamic response function (Pajula et al. 2012).

The basic form of the ISC analysis ignores the temporal variability in
activation/ISCs caused by rich, dynamic nature of naturalistic stimuli as it
processes the whole time series as whole.  For instance, it is plausible that
during an engaging drama movie, there is spatio-temporal variation in brain
activation from scene to scene for each subject. In this case, a conventional
ISC analysis across a whole stimulus would easily miss interesting findings
which are specific to certain scenes in a movie. Previously, temporal variation
in ISCs has been captured by computing ISCs in short time windows, but
investigation of several 3-dimensional ISC maps becomes easily tedious and more
compact representation of ISC information would be highly preferable.

In addition, similarly to model-based brain mapping methods, ISC-based mapping
represents averaged information across people, i.e., it assumes that brain
mechanisms are similar for all people in different brain areas. This assumption
is violated in practice, since individuals may process exactly same sensory
information highly differently (Speelman and McGann, 2013). Obviously, some
brain mechanisms are more similar across people than others. For instance,
certain mechanisms of low-level visual information processing may be much more
consistent across people than mechanisms of higher-order brain functions. Thus,
a conventional approach based on averaging of the functional information across
subjects easily detects high activation/ISC values in sensory areas but may
completely lose findings in higher-order brain areas due to high intersubject
variability. Therefore, to better understand complex functions of the brain,
such as aspects of social cognition or emotions, more sensitive analysis
methods are needed that can take intersubject variability better into account.

To overcome the aforementioned limitations, we propose a new ISC based
exploratory data analysis technique termed FuSeISC. The method provides an ISC
based functional parcellation of the brain based on differences in average ISCs
and their subject-wise variation across different scenes of the movie stimulus,
allowing simple and highly interesting interpretation of the activation/ISCs.
Our method is rooted on the basic ISC analysis provided by our openly available
ISC toolbox and couples this with a novel clustering algorithm to allow the
detection of brain areas that have similar ISC properties (this algorithm’s
source code is also publicly available). Many functional parcellation
algorithms have been previously proposed in the literature (see e.g. Craddock
et al. 2012, van den Heuvel et al. 2008). However, these approaches require
two-level analysis (subject-level and group-level) and choice of ad hoc
parameters such as the number of clusters or the shape and size of a spatial
neighborhood of interest. FuSeISC extends this conventional approach because it
works directly in group-level, naturally considers similarities and differences
in brain activation between subjects and has only one easily interpretable
parameter to tune. Moreover, our method does not constrain functional
parcellations by any anatomic brain subdivision, allowing finding both small
clusters as well as large-scale functional cluster networks simultaneously.

Methods
=======

Data
----

We analyzed preprocessed fMRI data sets of 19 subjects provided by the
organization committee of the *studyforrest* project and data challenge (Hanke et
al. 2014). The details of the experiment, data collection and preprocessing are
also provided in (Hanke et al. 2014). In brief, the participants listened to a
German audio-description (Koop, Michalski, Beckmann, Meinhardt & Benecke,
produced by Bayrischer Rundfunk, 2009) of the movie "Forrest Gump" (R.
Zemeckis, Paramount Pictures, 1994) as broadcast as an additional audio track
for visually impaired listeners on Swiss public television. The audio content
is largely identical to the dubbed German soundtrack of the movie except for
interspersed narrations by a male speaker who describes the visual content of a
scene. The entire data set consisted of 8 runs (lasting approximately 15
minutes each) for each subject from which we selected five highly attractive
clips for our analysis. We ranked the attractiveness of the clips based on an
internet survey on online video services such as Youtube and movie discussion
forums.

The data set for the analysis was defined from the original preprocessed linear
anatomical alignment set of *studyforrest* data. The exact time points used to
create the five clips are listed in the following table 1:

.. csv-table:: Table 1, Timepoints of used clips in original *studyforrest* data.
   :header-rows: 1
   :class: table table-condensed table-hover
   :widths: 6, 6, 14, 14, 10, 50

   "Clip", "Run", "Start timepoint", "Stop timepoint", "Total length", "Description"
   "Clip0", 1, 1, 50, 50, "Feather flies and actors are described"
   "Clip1", 2, 1, 50, 50, "Scene with 'Run, Forrest, Run' cry"
   "Clip2", "2, 3", "432 (run 2), 1 (run 3)", "441 (run 2), 45 (run 3)", 54, "Scene where Bubba and Forrest discuss about shrimps and how to cook them"
   "Clip3", 6, 158, 404, 246, "Forrest runs accross the USA from coast to coast"
   "Clip4", 7,  46, 107,  51, "Forrest explains to Jenny about his adventures  next to the Jenny’s bed and at the end of the scene Jenny dies"


ISC based feature extraction
----------------------------

We extracted ISC based features from the data sets describing the extent and
between subject variability of the ISC within each clip. First, we computed
average ISC maps separately for each clip across the whole brain using the ISC
toolbox (Kauppi et al. 2014). In these maps, each voxel represents mean of the
correlation coefficients computed across all 171 subject pairs. We call these
five values per voxel as voxel’s mean ISC features. In addition to the mean ISC
features, we computed the variability features of the ISC within each voxel
using a leave-one-subject-out Jackknife procedure. More specifically, we
computed 19 mean ISC maps so that each subject was left out from the original
sample one at a time. The Jackknife standard deviation estimate was then
produced based on these 19 mean ISC maps for each voxel; A similar procedure
has been applied by Pajula and Tohka (2014), where a more technical description
of the procedure can be found. These 5 values per voxel are called variability
features. Because the scale of the mean ISCs and variability features is
different, we balanced the importance of the features by scaling variance
features by a factor 10 before subsequent analysis. Because we computed mean
and variability features separately for each five clips across the whole brain,
we obtained 10 features in total from 457 528 voxels for further analysis.

Clustering of ISC features
--------------------------

Next, we clustered the ISC based features extracted from each voxel across the
whole brain to produce FuSeISC functional segmentation of the brain. The idea
is that the voxels showing similar mean ISC and inter-subject variability
across different stimuli should belong to the same cluster/functional segment.

We used a Gaussian mixture model (GMM) for clustering (Duda et al. 2012),
accompanied with a robust cluster initialization scheme based on automated
shared nearest neighbor (SNN) graph  selection procedure (Kauppi et al. 2011b,
Kauppi 2011c). The proposed clustering method has several advantages when
analyzing large and highly complex fMRI data sets. For instance, 1) our method
can detect clusters of varying densities, shapes and sizes, 2) it can estimate
the number of clusters automatically, 3) it requires only single easily
interpretable parameter as an input, 4) it is robust against outliers, and 5)
it is capable of processing a high number of brain voxels with low memory cost
and in feasible time. The steps of our clustering algorithm are as follows:

* **Compute k-nearest neighbor (k-NN) list of the data.** We used the Euclidean
  distance between ISC features to construct the k-NN list. The selection of k
  is discussed in a separate section below.

* **Compute a weighted SNN graph of the data.**  In a weighted SNN graph, two
  data points are connected only if they belong to each other’s k-NN lists
  (Jarvis and Patrick, 1973). The connections are further weighted by the
  number of shared data points the connected points share in their k-NN lists.

* **Compute SNN density of each data point.** SNN "density" is simply a sum of
  the connection weights associated with each data point in the weighted SNN
  graph (note that despite of its name, SNN density is not a real measure of
  density). The highly interesting property of the SNN density is that it
  obtains a high value when a data point is relatively close to its neighbors
  (in the Euclidean sense) with respect to surrounding data points, allowing
  reliable detection of clusters with varying densities (Ertöz et al. 2002, Tan
  et al. 2013).

* **Create all possible sparsifications of the weighted SNN graph based on SNN
  density values.** Sparsification means removal of those graph connections
  whose weights do not exceed a certain threshold. In our procedure, all
  possible sparsified graphs are created to avoid manual selection of a
  threshold value.

* **Compute centroids of the connected components for each sparsified SNN
  graph.** We used the means of the data points belonging to each component as
  centroids. Note that the number of connected components (and thus the number
  of centroids) can vary notably between the sparsified graphs.

* **Use a minimum error criterion to find centroids (belonging to one
  sparsified SNN graph) which best describe the underlying data.**  We used the
  mean-squared-error (MSE) as the criterion between centroids and data points.
  Interestingly, we have observed in various simulations generated from very
  complex GMMs including a high number of outliers that the proposed model
  selection procedure tends to provide highly meaningful solutions where all
  clusters in data are robustly represented by at least one centroid. Such
  initial solution is highly desirable for subsequent clustering algorithms,
  such as the K-means and the expectation maximization (EM) algorithm, because
  the sensitivity of these methods to converge towards local extrema is
  efficiently reduced.

* **Run K-means clustering using the found centroids to estimate the initial
  mean and covariance matrices of the GMM.**  Obviously, K refers to the number
  of centroids provided in the previous step.

* **Estimate the GMM using the EM algorithm and extract final clusters using
  maximum** *a posteriori* **-rule.**  Due to high complexity of our data, we
  estimated unrestricted and unique covariance matrices for each Gaussian
  component.

* **As a post-processing, for each cluster, find their spatially distinct
  "subclusters" and remove those subclusters whose sizes are smaller than k as
  noise.**

* **For each retained subcluster, find their densest data point for better
  anatomical localization of the clusters.** For each data point, we used the
  minimum distance to kth nearest neighbor as a ranking criterion for density.

Selection of neighborhood size *k*
----------------------------------

Our method contains only a single parameter, neighborhood size k, to adjust.
The selection of this parameter is meaningful because it naturally defines the
resolution of the analysis: To detect all meaningful clusters, k should roughly
equal to the number of data points in the smallest cluster of interest. This
choice guarantees high SNN density values within all clusters (despite of
cluster size and irrespective of the total number of clusters) whose modes are
captured by our algorithm. In practice, the choice of k depends on the goal of
the analysis, because the difference between "noise" (non-interesting
structure) and "cluster" (meaningful structure) in complex fMRI data is subtle.
For instance, it may not be meaningful to use very small k to avoid capturing
non-interesting structures related to noise or effects of spatial smoothing. In
this study, we wanted to analyze a relatively low number of clusters to
simplify interpretations and validate our method. For this reason, we run
clustering several times using increasing values for k and returned the first
solution providing less than 15 clusters (we started from k = 100 and used
increments of 25; the desired solution was achieved with k = 275). 15 clusters
provides obviously very crude parcellation for human brain, but should
nevertheless be enough to identify some main functions during the natural
stimulus. Moreover, with a high number of clusters, reasonability of the
results might be more difficult to check. The clustering algorithm in itself
has been validated in (Kauppi et al. 2011b).

Results
=======

Standard ISC analysis
---------------------

The average ISC maps across subject pairs for the 5 movie clips are displayed
below (the maps were FDR corrected across the whole brain using q = 0.001). As
expected, the highest ISCs were observed in the auditory cortices for all the
clips. Most clips showed also significant ISCs in the frontal cortex,
particularly at anterior cingulum. Some clips (1 and 2) showed significant ISCs
in the occipital cortex particularly in the calcarine and in the lingual gyrus.
With the exception of auditory cortex which was detected  with all the movies
clips, there was marked variation in the ISC patterns between the movie
clips.

.. figure:: {filename}/pics/contest_fuseisc/CorrTh_Clip0.png
    :alt: Thresholded mean ISC map for clip 0

    **Clip 0** Thresholded mean ISC map for clip 0. Used FDR corrected q=0.001
    threshold: 0.0985325798392296
    [See `a high-resolution image (CorrTh_Clip0) <{filename}/pics/contest_fuseisc/CorrTh_Clip0.png>`_ ]

.. figure:: {filename}/pics/contest_fuseisc/CorrTh_Clip1.png
    :alt: Thresholded mean ISC map for clip 1

    **Clip 1** Thresholded mean ISC map for clip 1. Used FDR corrected q=0.001
    threshold: 0.104184940457344
    [See `a high-resolution image (CorrTh_Clip1) <{filename}/pics/contest_fuseisc/CorrTh_Clip1.png>`_]

.. figure:: {filename}/pics/contest_fuseisc/CorrTh_Clip2.png
    :alt: Thresholded mean ISC map for clip 2

    **Clip 2** Thresholded mean ISC map for clip 2. Used FDR corrected q=0.001
    threshold: 0.114330463111401
    [See `a high-resolution image (CorrTh_Clip2) <{filename}/pics/contest_fuseisc/CorrTh_Clip2.png>`_]

.. figure:: {filename}/pics/contest_fuseisc/CorrTh_Clip3.png
    :alt: Thresholded mean ISC map for clip 3

    **Clip 3** Thresholded mean ISC map for clip 3. Used FDR corrected q=0.001
    threshold: 0.0676087811589241
    [See `a high-resolution image (CorrTh_Clip3.) <{filename}/pics/contest_fuseisc/CorrTh_Clip3.png>`_]

.. figure:: {filename}/pics/contest_fuseisc/CorrTh_Clip4.png
    :alt: Thresholded mean ISC map for clip 4

    **Clip 4** Thresholded mean ISC map for clip 4. Used FDR corrected q=0.001
    threshold: 0.0732935667037964
    [See `a high-resolution image (CorrTh_Clip4) <{filename}/pics/contest_fuseisc/CorrTh_Clip4.png>`_]


Functional clustering
---------------------

The FuseISC clustering with k = 275 produced 13 clusters. Seven of these 13
clusters were selected for further inspection by visual judgement. However, it
would not be difficult to implement an algorithm to perform the same task
automatically using a set of heuristics, because the remaining 6 clusters were
clearly noise (many small disconnected components) and/or consisted mainly of
white matter/cerebro-spinal fluid voxels. We provide volumes of all the
clusters (also the spurious ones) as nifti-file to let others to make their own
judgements about the relevance of the clusters. However, we limit our
discussion below to the seven clusters we selected as relevant.

Interestingly, the seven relevant clusters were spatially coherent although no
information about voxels’ spatial locations were  used in the clustering
algorithm and the amount of spatial smoothing was kept minimal following
suggestions of Pajula and Tohka (2014). Also, the clusters seemed to be
functionally relevant although we refrain making specific inferences on the
functional roles of each cluster, since that would be impossible to confirm in
the naturalistic stimulation experiments. The clusters are shown in the images
below and briefly described next.

.. figure:: {filename}/pics/contest_fuseisc/k275_WeigthVar_SelectedClusters_FullCov.png
    :alt: Clustering results with the neighbourhood size k = 275

    **Clustering results with the neighbourhood size k = 275**. Different
    colors correspond to 7 selected clusters. Dark blue: Cluster 1 (auditory);
    Light blue: Cluster 2 (network); Cyan: Cluster 8 (Anterior Frontal); Green:
    Cluster 9 (Posterior Frontal); Yellow: Cluster 10 (Network (language
    areas)); Light red: Cluster 11 (Network); Dark red: Cluster 13 (Visual /
    Occipital)
    [See `a high-resolution image (SelectedClusters_FullCov) <{filename}/pics/contest_fuseisc/k275_WeigthVar_SelectedClusters_FullCov.png>`_]

.. figure:: {filename}/pics/contest_fuseisc/k275_WeigthVar_Cluster13_FullCov.png
    :alt: Visual / Occipital cluster

    **Visual / Occipital** This cluster corresponds to #13 in provided nifti result
    volume.
    [See `a high-resolution image (Cluster13_FullCov) <{filename}/pics/contest_fuseisc/k275_WeigthVar_Cluster13_FullCov.png>`_]

.. figure:: {filename}/pics/contest_fuseisc/k275_WeigthVar_Cluster1_FullCov.png
    :alt: Auditory cluster

    **Auditory** This cluster corresponds to #1 in provided nifti result volume.
    [See `a high-resolution image (Cluster1_FullCov) <{filename}/pics/contest_fuseisc/k275_WeigthVar_Cluster1_FullCov.png>`_]

.. figure:: {filename}/pics/contest_fuseisc/k275_WeigthVar_Cluster8_FullCov.png
    :alt: Anterior frontal cluster

    **Anterior Frontal** This cluster corresponds to #8 in provided nifti result
    volume.
    [See `a high-resolution image (Cluster8_FullCov) <{filename}/pics/contest_fuseisc/k275_WeigthVar_Cluster8_FullCov.png>`_]

.. figure:: {filename}/pics/contest_fuseisc/k275_WeigthVar_Cluster10_FullCov.png
    :alt: Language area cluster

    **Network (language areas)** This cluster corresponds to #10 in provided nifti
    result volume.
    [See `a high-resolution image (Cluster10_FullCov) <{filename}/pics/contest_fuseisc/k275_WeigthVar_Cluster10_FullCov.png>`_]

.. figure:: {filename}/pics/contest_fuseisc/k275_WeigthVar_Cluster11_FullCov.png
    :alt: Network cluster

    **Network** This cluster corresponds to #11 in provided nifti result volume.
    [See `a high-resolution image (Cluster11_FullCov) <{filename}/pics/contest_fuseisc/k275_WeigthVar_Cluster11_FullCov.png>`_]

.. figure:: {filename}/pics/contest_fuseisc/k275_WeigthVar_Cluster9_FullCov.png
    :alt: Posterior frontal cluster

    **Posterior Frontal** This cluster corresponds to #9 in provided nifti result
    volume.
    [See `a high-resolution image (Cluster9_FullCov) <{filename}/pics/contest_fuseisc/k275_WeigthVar_Cluster9_FullCov.png>`_]

.. figure:: {filename}/pics/contest_fuseisc/k275_WeigthVar_Cluster2_FullCov.png
    :alt: Network cluster

    **Network** This cluster corresponds to #2 in provided nifti result volume.
    [See `a high-resolution image (Cluster2_FullCov) <{filename}/pics/contest_fuseisc/k275_WeigthVar_Cluster2_FullCov.png>`_]

Of the seven interesting FuSeISC clusters, Cluster 1 contained voxels only in
the auditory cortices and was characterized by high values for all 10 features.
The identification of the main sensory area for the audio stimulus as a clearly
separable cluster is a promising result. Cluster 13 was concentrated on the
occipital cortex containing voxels from Calcarine, Cuneus, and Lingual Gyrus
and thus could be speculated to be related to the visual imagery. The cluster
was characterized by much higher feature values for the first three clips than
for the remaining two clips.

Clusters 2,10, and 11 could be characterized as network clusters as the voxels
in them  were distributed across the brain. Cluster 2 contained voxels from
several ares including medial frontal cortex, anterior and posterior cingulate,
angular gyrus and surrounding temporal and occipital areas as well as from
cuneus and precuneus. Cluster 10 included voxels from the caudal part of
anterior cingulum as well as from inferior frontal cortex and middle temporal
cortex  - many of these areas have been found to be related to the language
processing. Cluster 11 contained voxels from posterior cingulus, precuneus,
cuneus, insula, middle and superior temporal cortices and middle frontal gyrus.
Clusters 10 and 11 could be clearly distinguished from cluster 2 also based on
their ISC features: the feature values of clusters 10 and 11 were high for Clip
1 whereas the values for cluster 2 were (relatively) high for the two final
clips.

Cluster 8 and 9 encompassed mainly frontal areas, cluster 8 occupied the region
near brain surface and was characterised by very low mean ISC feature values,
typical to noise clusters.  However, the feature values were stable across
different clips and also the variability features had higher values than for
the noise clusters. Cluster 9 contained voxels from different parts of the
frontal cortex and was characterised by smaller feature values for later
clips.

The coordinates of densiest points of selected clusters are listed in table 2.
The table shows in volume spatial coordinates and corresponding MNI
coordinates.

.. csv-table:: Table 2. Densest points of the connected subcomponents of each cluster.
   :header-rows: 1
   :class: table table-condensed table-hover

   "Cluster", "Centroid#", "X", "Y", "Z", "MNI X", "MNI Y", "MNI Z"
    1,1,117,64,34,63.771,-41.7953,21.077
    1,2,22,91,18,-51.5784,-13.8918,-4.0064
    2,1,18,81,10,-56.119,-25.8528,-14.3931
    2,2,106,92,17,50.0362,-11.3904,-4.4035
    2,3,63,149,24,-3.2876,53.0114,0.79509
    2,4,71,67,39,8.0022,-38.8351,27.1857
    2,5,102,43,39,46.0242,-65.5287,29.2189
    2,6,37,44,43,-32.6779,-65.2307,33.8496
    8,1,66,150,47,0.081216,55.777,32.4538
    8,2,64,15,24,0.80997,-98.9695,9.9972
    8,3,24,56,22,-48.446,-53.2837,3.9301
    8,4,18,108,43,-57.0439,7.0406,29.2232
    9,1,92,114,27,32.5205,14.0122,7.6911
    9,2,29,106,26,-43.516,3.7922,6.0749
    9,3,42,139,26,-28.4993,41.4467,3.9742
   10,1,105,71,16,49.2893,-35.2967,-4.3536
   10,2,26,68,18,-46.2434,-39.9126,-2.3791
   10,3,61,141,17,-5.4621,43.4218,-8.326
   10,4,104,114,29,47.0177,14.3547,10.5966
   10,5,21,114,32,-53.4294,13.1421,13.6932
   10,6,99,145,32,40.2693,49.639,12.5416
   10,7,72,146,46,7.4368,51.2736,31.4252
   11,1,96,98,31,37.6631,-3.7937,14.3495
   11,2,27,72,43,-45.3796,-33.6408,31.8045
   11,3,97,144,41,37.7776,49.0888,24.9856
   11,4,73,140,25,8.9942,43.0422,2.915
   11,5,36,131,31,-35.6379,32.6131,11.337
   11,6,80,36,41,19.538,-73.7076,32.1797
   11,7,39,104,36,-31.4785,2.3814,20.1151
   11,8,99,42,38,42.4266,-66.783,27.8722
   11,9,42,34,47,-26.4548,-76.2135,40.1091
   13,1,67,24,14,4.3495,-89.3964,-4.3607
   13,2,114,98,40,59.3464,-2.8677,26.9747
   13,3,18,81,46,-56.4932,-23.3798,35.2083

Conclusions
===========

We propose a new ISC based exploratory data analysis technique termed FuSeISC.
The method provides an ISC based functional parcellation of the brain based on
differences in average ISCs and their subject-wise variation across different
scenes of the movie stimulus, allowing simple and highly interesting
interpretation of the activation/ISCs. We experimented the method with the
*studyforrest* dataset and identified a coarse functional brain parcellation into
seven functionally similar regions. Less coarse parcellations are possible by
simply decreasing the value of the parameter k controlling the coarseness of
the clustering.

Traditionally in functional neuroimaging, high intersubject variability is
regarded merely as noise (Speelman and McGann 2013). However, recent studies
suggest that intersubject variability in functional connectivity is
heterogeneous across the cortex and that this variability contains meaningful
information which should be carefully investigated (Zilles and Amunts 2013,
Mueller 2013). FuSeISC takes such heterogeneity naturally into account, making
the method a highly attractive tool for analysis of human brain functions.

Data
----

All resulting statistics and clusters are provided in following list.

* `Sum binary mask for ISC analysis. Mask contains voxels which are common to functional data of all subjects </data/contest_fuseisc/ISC_binmap.nii.gz>`_
* `Masked MNI-152 template. Original MNI-152 template from *studyforrest*t data repository masked with ISC binary mask. </data/contest_fuseisc/MNI-152_masked.nii.gz>`_
* `Full ISC map for Clip 0 </data/contest_fuseisc/Clip0_ISCmap_Full.nii.gz>`_
* `Full ISC map for Clip 1 </data/contest_fuseisc/Clip1_ISCmap_Full.nii.gz>`_
* `Full ISC map for Clip 2 </data/contest_fuseisc/Clip2_ISCmap_Full.nii.gz>`_
* `Full ISC map for Clip 3 </data/contest_fuseisc/Clip3_ISCmap_Full.nii.gz>`_
* `Full ISC map for Clip 4 </data/contest_fuseisc/Clip4_ISCmap_Full.nii.gz>`_
* `Jackknife std estimate map for Clip 0 </data/contest_fuseisc/Clip0_stdmap.nii.gz>`_
* `Jackknife std estimate map for Clip 1 </data/contest_fuseisc/Clip1_stdmap.nii.gz>`_
* `Jackknife std estimate map for Clip 2 </data/contest_fuseisc/Clip2_stdmap.nii.gz>`_
* `Jackknife std estimate map for Clip 3 </data/contest_fuseisc/Clip3_stdmap.nii.gz>`_
* `Jackknife std estimate map for Clip 4 </data/contest_fuseisc/Clip4_stdmap.nii.gz>`_
* `Functional segmentation map with neighborhood size k=275 </data/contest_fuseisc/k275WeightVar_AllClusters_FullCov.nii.gz>`_


Implementation, codes, and other details needed to reproduce the analysis
=========================================================================

All scripts and software needed for this analysis are available in table 4
after the step descriptions.

Step 1
------

The data is separated from the *studyforrest* GIT-annex repository.  Before this
step, the git-annex meta-data repository for *studyforrest* must be cloned and
set ready to use. See more instructions from
http://studyforrest.org/pages/access.html.

In this step the time points corresponding to the selected movie clips are
separated from the original data. The data is also spatially smoothed with 3mm
FWHM Gaussian kernel using fslmath. This procedure also generates a brain mask
for ISC analysis. The brain mask is used to exclude those voxels which were not
present in every functional data of subjects and it is smaller than the one
originally provided by *studyforrest* data.

This whole step can be done in Linux environment using ForrestDataGenerator.m_
script in Matlab (2014a or newer). The script requires that FSL is installed in
the same environment because Matlab performs the Gaussian smoothing with
fslmath program through unix command. This phase is quite time-consuming and
requires approximately 20 Gb of HDD space.

Step 2
------

Average ISC maps for each five clip are computed separately using the ISC
toolbox. The parameters must be set-up using the ISCtoolbox start-up GUI (in
Matlab: "ISCanalysis"). The parameters for the toolbox are the same for each
clip:

* a single Session where the full directory paths of mat files are listed for
  every subject of the current clip (same order of subjects must be the same
  for each clip). The mat-files were generated in Step 1 for each clip.

* basic ISC analysis

* removal of memory mapped data after analysis

* de-selected template and use the separately defined binary map (generated in
  Step 1)

* ISC map settings:

  - calculate average ISC maps

  - calculate median quartile std and t-score ISC maps

  - Save ISC matrices

  - Resampling based statistical maps:

    * 100 000 realizations

    * 100 batches

    * total of 10 000 000 realizations

* If supported cluster environment is available it can be used by de-selecting
  "Always force local computing" and defining the grid parameters according the
  available grid. Toolbox supports currently Slurm and SGE grid engines.

ISC analysis for each clip can take hours depending on the used computer and
environment. Each ISC result will require approximately 900 MB of HDD space due
to large correlation matrices required in the next phase of this analysis.
During the analysis, each ISC run requires approximately 20 GB of HDD space for
temporary files.

Step 3
------

After all ISC analyses are finished, the variability features of the ISC must
be computed within each voxel using a leave-one-subject-out Jackknife
procedure. This is done in Matlab using StdEstimate.m script. The script needs
the ISCJackKnife -function to compute estimates for the jackknifed ISC
statistics. The ISCJackKnife -function is included in ISCtoolbox svn repository
and will be used in future releases of ISC toolbox. The function is under same
MIT license as ISCtoolbox.

After defining the variability features for each clip the StdEstimate script
vectorizes the data (removes spatial information) and gathers it in a single
feature matrix X. Data is first combined with the corresponding voxel vice mean
ISC values as [2 x 449612] matrices for each clip and then these five matrices
are combined to a complete [10 x 449612] matrix. This matrix defines the 10
dimensional features for each brain voxel inside the brain mask generated in
Step 1.

Step 4
------

The feature matrix X is given to a clustering algorithm to compute the clusters
in 10 dimensional feature space. This procedure can be executed with script
runFuSeISCclustering.m in Matlab (2014a or newer). The script requires FuSeISC
components from ISCtoolbox svn repository which are under MIT license. At the
beginning of the script a result path must be defined. The process saves there
temporary clustering results for the later use. If needed the clustering
sources must be compiled for current environment (the FuSeISC package contains
mex sources but also most common binaries). When binaries are functional the
clustering is performed. After this the resulting clusters are cleaned from too
small instances and finally most densiest points of the clusters are computed
using the temporary files of clustering algorithm.

Step 5
------

As a final phase for the analysis the local Centroids are computed for every
selected clusters. Script ClusterCentroidsAndNifti.m computes these values as
well as MNI coordinates for the detected centroids. The script prints them on
Matlab command line. The clip also generates NifTi file from all detected
clusters and another from the selected clusters. 

The results can be visualized for example with fslview by using the reduced
MNI-152 template as a background image. In the clustering results each voxel
has a single label value corresponding to the cluster number. The results are
in the same space as the linear alignment data of *studyforrest* dataset.

Data
----

+------+---------------------------------------------------+-----------------------------------------------+
| Step | Description                                       | Resource                                      |
+======+===================================================+===============================================+
| 1.   | Data generation script for the analysis           | `ForrestDataGenerator.m`_                     |
+------+---------------------------------------------------+-----------------------------------------------+
| 1.   | FSL software, required for                        | `FSL Homepage`_                               |
|      | `ForrestDataGenerator.m`_ script                  |                                               |
+------+---------------------------------------------------+-----------------------------------------------+
| 2.   | ISCtoolbox for Matlab                             | `ISCtoolbox Homepage`_                        |
+------+---------------------------------------------------+-----------------------------------------------+
| 3.   | StdEstimate Matlab script for ISC results         | `StdEstimate.m`_                              |
+------+---------------------------------------------------+-----------------------------------------------+
| 3.   | ISCJackknife function for StdEstimate scripti     | `ISCJackKnife.m`_ from isc-toolbox SVN        |
+------+---------------------------------------------------+-----------------------------------------------+
| 4.   | FuSeISC script                                    | `runFuSeISCclustering.m`_                     |
+------+---------------------------------------------------+-----------------------------------------------+
| 4.   | FuSeISC components for the clustering procedure   | `fuseISCclustering.zip`_ from isc-toolbox SVN |
+------+---------------------------------------------------+-----------------------------------------------+
| 5.   | ClusterCentroidsAndNifti.m_  script for matlab to | `ClusterCentroidsAndNifti.m`_                 |
|      | compute the centroids and create nifti files for  |                                               |
|      | visual inspection                                 |                                               |
+------+---------------------------------------------------+-----------------------------------------------+

.. _ForrestDataGenerator.m: /data/contest_fuseisc/ForrestDataGenerator.m
.. _FSL Homepage: http://fsl.fmrib.ox.ac.uk/fsl/fslwiki
.. _ISCtoolbox Homepage: https://code.google.com/p/isc-toolbox
.. _StdEstimate.m: /data/contest_fuseisc/StdEstimate.m
.. _ISCJackKnife.m: https://isc-toolbox.googlecode.com/svn/trunk/FuSe/ISCJackKnife.m
.. _runFuSeISCclustering.m: /data/contest_fuseisc/runFuSeISCclustering.m
.. _fuseISCclustering.zip: https://isc-toolbox.googlecode.com/svn/trunk/FuSe/fuseISCclustering.zip
.. _ClusterCentroidsAndNifti.m: /data/contest_fuseisc/ClusterCentroidsAndNifti.m

About this work
===============

This article was a submission to the real-life cognition contest by Juha Pajula
(Department of Signal Processing, Tampere University of Technology), Jussi Tohka
(Department of Signal Processing, Tampere University of Technology), and
Jukka-Pekka Kauppi (Department of Computer Science, University of Helsinki).

All source code and materials related to this submission are copyright (c) 2014
by the authors listed above and are made available under the terms of the
`MIT license`_.

.. _MIT license: http://opensource.org/licenses/MIT

References
==========

* Craddock, RC., James, GA., Holtzheimer, PE., Hu, XP. and Mayberg, HS. A whole
  brain fMRI atlas generated via spatially constrained spectral clustering.
  Human brain mapping, 33(8), 1914-1928, 2012.

* Duda, RO., Hart, PE., and Stork, DG. Pattern Classification. Wiley, 2nd
  Edition, 2012.

* Ertöz, L., Steinbach, M., and Kumar, V. A new shared nearest neighbor
  clustering algorithm and its applications. In Workshop on Clustering High
  Dimensional Data and its Applications at 2nd SIAM International Conference on
  Data Mining, 105-115, 2002.

* Golland, Y., Bentin, S., Gelbard, H., Benjamini, Y., Heller, R., Nir, Y., et
  al. Extrinsic and intrinsic systems in the posterior cortex of the human
  brain revealed during natural sensory stimulation. Cerebral Cortex, 17(4),
  766–777, 2007.

* Hanke, M, Baumgartner, FJ., Ibe, P., Kaule, FR., Pollmann, S., Speck, O.,
  Zinke, W. and Stadler, J. A high-resolution 7-Tesla fMRI dataset from complex
  natural stimulation with an audio movie. Scientific Data 1, Article number:
  140003, 2014. doi:10.1038/sdata.2014.3

* Hasson U, Nir Y, Levy I, Fuhrmann G, Malach R Intersubject synchronization of
  cortical activity during natural vision. Science 303: 1634–1640, 2004. doi:
  10.1126/science.1089506 

* Jarvis, RA., and Patrick, EA. Clustering using a similarity measure based on
  shared near neighbors. IEEE Transactions on Computers, 100(11), 1025-1034,
  1973.

* Jääskeläinen, IP., Koskentalo, K., Balk, MH. et al. Inter-subject
  synchronization of prefrontal cortex hemodynamic activity during natural
  viewing, The Open Neuroimaging Journal 2(14), 2008.

* Kauppi, J-P., Pajula, J., and Tohka, J. A versatile software package for
  inter-subject correlation based analyses of fMRI. Frontiers in
  neuroinformatics 8, 2014.

* Kauppi, J-P., Jääskeläinen, IP., Sams, M., and Tohka, J. Inter-subject
  correlation of brain hemodynamic responses during watching a movie:
  localization in space and frequency, Frontiers in Neuroinformatics 4:5, 2010.

* Kauppi, J-P., Nykter, M., and Niemi, J. Clustering method for data having
  outliers and clusters with varying sizes and densities. Report, Department of
  Signal Processing, Tampere University of Technology, 2011:3, 2011b.

* Kauppi, J-P., Pattern classification method to analyze dynamic complex
  systems: applications with fMRI, gene expression and radar data, PhD thesis,
  Tampere University of Technology, Finland, 2011c.

* Mueller, S., Wang, D., Fox, MD., Yeo, BT., Sepulcre, J., Sabuncu, MR., …, and
  Liu, H. Individual variability in functional connectivity architecture of the
  human brain. Neuron, 77(3), 586-595, 2013.

* Pajula J, Kauppi J-P, Tohka J. Inter-Subject Correlation in fMRI: Method
  Validation against Stimulus-Model Based Analysis. PLoS ONE 7(8): e41196,
  2012. doi:10.1371/journal.pone.0041196 

* Pajula, J. and Tohka, J. Effects of spatial smoothing on inter-subject
  correlation based analysis of FMRI, Magnetic Resonance Imaging, 32(9),
  1114-1124, 2014. http://dx.doi.org/10.1016/j.mri.2014.06.001

* Speelman CP., and McGann M. How mean is the mean? Frontiers in Psychology
  4:451, 2013. doi: 10.3389/fpsyg.2013.00451

* Tan, PN., Steinbach, M, and Kumar, V. Introduction to Data Mining.
  Addison-Wesley, 2nd Edition, 2013.

* van den Heuvel, M., Mandl, R., Hulshoff Pol, H. Normalized cut group
  clustering of resting-state fMRI data. PLoS ONE 3(4): e2001, 2008.
  doi:10.1371/journal.pone.0002001

* Wilson, SM., Molnar-Szakacs, I., and Iacoboni, M. Beyond superior temporal
  cortex: intersubject correlations in narrative speech comprehension, Cerebral
  Cortex 18(1), 230-242, 2008.

* Zilles, K., and Amunts, K. Individual variability is not noise. Trends in
  cognitive sciences, 17(4), 153-155, 2013.
