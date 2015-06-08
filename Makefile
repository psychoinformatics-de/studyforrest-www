WWW_DIR = generated
WWW_UPLOAD_URI=kumo.ovgu.de:/var/www/studyforrest/www
RSYNC_OPTS_UP = -rzlhv --delete --copy-links --exclude drafts
DATADIR = www/data

all:
	$(MAKE) -C src html
	ln -fs pages/challenge.html generated/challenge.html
	ln -fs pages/access.html generated/access.html
	ln -fs pages/resources.html generated/resources.html

prep: xtk/xtk.js d3/d3.v3.min.js
# also needs phantomjs (from Debian package)
	$(MAKE) -C dygraphs
	npm install bower
	node_modules/.bin/bower install bootstrap
	node_modules/.bin/bower install holderjs

publish:
	rm -f generated/fonts
	$(MAKE) -C src publish
	ln -ft generated src/static/*
	mkdir -p generated/publications
	ln -ft generated/publications publications/*

upload: publish
	rsync $(RSYNC_OPTS_UP) $(WWW_DIR)/* $(WWW_UPLOAD_URI)/

data: $(DATADIR) $(DATADIR)/t1w.nii.gz $(DATADIR)/t2w.nii.gz \
      $(DATADIR)/swi_mag.nii.gz $(DATADIR)/angio.nii.gz \
      $(DATADIR)/7Tad_epi_grptmpl.nii.gz \
      $(DATADIR)/lh.pial $(DATADIR)/rh.orig $(DATADIR)/rh.smoothwm.C.crv \
      $(DATADIR)/scenes.csv $(DATADIR)/german_audio_description.csv \
      $(DATADIR)/demographics.csv \
      $(DATADIR)/physio.csv $(DATADIR)/moco_rot.csv \
      $(DATADIR)/wm_streamlines.trk

$(DATADIR):
	mkdir -p $@

$(DATADIR)/t1w.nii.gz:
	wget -O $@ http://psydata.ovgu.de/forrest_gump/sub009/anatomy/highres001.nii.gz
	fslroi $@ $@ 40 190 45 275 130 210
	fslmaths $@ -thr 10 $@ -odt char

$(DATADIR)/t2w.nii.gz:
	wget -O $@ http://psydata.ovgu.de/forrest_gump/sub002/anatomy/other/t2w001.nii.gz
	fslroi $@ $@ 30 210 30 290 130 225
	fslmaths $@ -thr 15 $@ -odt char

$(DATADIR)/swi_mag.nii.gz:
	wget -O $@ http://psydata.ovgu.de/forrest_gump/sub016/anatomy/other/swi001_mag.nii.gz
	fslroi $@ $@ 80 350 30 420 40 410
	fslmaths $@ -s 30 $(DATADIR)/swi_bias
	fslmaths $@ -div $(DATADIR)/swi_bias -thr .7 -mul 100 $@ -odt char
	rm -f $(DATADIR)/swi_bias*

$(DATADIR)/angio.nii.gz:
	wget -O $@ http://psydata.ovgu.de/forrest_gump/sub012/angio/angio001.nii.gz
	fslmaths $@ -subsamp2 -s 20 $(DATADIR)/angio_bias
	fslmaths $@ -subsamp2 -div $(DATADIR)/angio_bias -mul 40 -thr 20 $@ -odt char
	rm -f $(DATADIR)/angio_bias*

$(DATADIR)/7Tad_epi_grp_tmpl.nii.gz:
	wget -O $@ http://psydata.ovgu.de/forrest_gump/templates/grpbold7Tad/brain.nii.gz

$(DATADIR)/rh.smoothwm.C.crv:
	wget -O $@ http://psydata.ovgu.de/forrest_gump/freesurfer/sub006/surf/rh.smoothwm.C.crv

$(DATADIR)/rh.orig:
	wget -O $@ http://psydata.ovgu.de/forrest_gump/freesurfer/sub006/surf/rh.orig

$(DATADIR)/lh.pial:
	wget -O $@ http://psydata.ovgu.de/forrest_gump/freesurfer/sub006/surf/lh.pial

$(DATADIR)/scenes.csv:
	wget -O $@ http://psydata.ovgu.de/forrest_gump/stimulus/task001/annotations/scenes.csv

$(DATADIR)/german_audio_description.csv:
	wget -O $@ http://psydata.ovgu.de/forrest_gump/stimulus/task001/annotations/german_audio_description.csv

$(DATADIR)/demographics.csv:
	wget -O $@ http://psydata.ovgu.de/forrest_gump/demographics.csv

$(DATADIR)/physio.csv:
	wget -O physio.txt.gz http://psydata.ovgu.de/forrest_gump/sub007/physio/task001_run005/physio.txt.gz
	tools/physio2webcsv physio.txt.gz $@ 23000 29000
	rm -f physio.txt.gz

$(DATADIR)/moco_rot.csv:
	wget -O moco.txt http://psydata.ovgu.de/forrest_gump/sub004/BOLD/task001_run005/bold_dico_moco.txt
	tools/moco2webcsv moco.txt www/data/moco
	rm -f moco.txt

$(DATADIR)/wm_streamlines.trk:
	mkdir -p dti_preproc
	wget -O dti_preproc/raw.nii.gz http://psydata.ovgu.de/forrest_gump/sub002/dti/dti001.nii.gz
	wget -O dti_preproc/bvecs http://psydata.ovgu.de/forrest_gump/sub002/dti/dti001.bvecs
	wget -O dti_preproc/bvals http://psydata.ovgu.de/forrest_gump/sub002/dti/dti001.bvals
	fslroi dti_preproc/raw dti_preproc/b0 0 1
	bet dti_preproc/b0 dti_preproc/b0_brain -R -f 0.1 -g 0 -n -m
	fast -t 2 -n 3 -H 0.1 -I 4 -l 20.0 -g --nopve -o dti_preproc/b0_brain dti_preproc/b0_brain
	tools/build_streamlines dti_preproc $@
	rm -rf dti_preproc

d3/d3.v3.min.js:
	mkdir -p d3
	wget -O $@ http://d3js.org/d3.v3.min.js

xtk/xtk.js:
	mkdir -p xtk
	wget -O $@ http://get.goxtk.com/xtk.js

xtk/xtk_xdat.gui.js:
	mkdir -p xtk
	wget -O $@ http://get.goxtk.com/xtk_xdat.gui.js
