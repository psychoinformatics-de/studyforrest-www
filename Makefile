PY=python
PELICAN=pelican
PELICANOPTS=

BASEDIR=$(CURDIR)
INPUTDIR=$(BASEDIR)/content
OUTPUTDIR=$(BASEDIR)/output
CONFFILE=$(BASEDIR)/pelicanconf.py
PUBLISHCONF=$(BASEDIR)/publishconf.py
DATADIR=$(BASEDIR)/data
TMPDIR=$(BASEDIR)/tmp

SSH_HOST=kumo.ovgu.de
SSH_PORT=22
SSH_USER=
SSH_TARGET_DIR=/var/www/studyforrest/www
RSYNC_OPTS = -rzhv -P --delete --copy-links --exclude drafts --cvs-exclude

VER_JQUERY=2.2.4
VER_BOOTSTRAP=3.3.6
VER_DYGRAPH=1.1.1

DEBUG ?= 0
ifeq ($(DEBUG), 1)
	PELICANOPTS += -D
endif

help:
	@echo 'Makefile for the Studyforrest website                                  '
	@echo '                                                                       '
	@echo 'Usage:                                                                 '
	@echo '   make all                         (re)generate the website and data  '
	@echo '   make clean                       remove the generated files         '
	@echo '   make html                        (re)generate the website           '
	@echo '   make regenerate                  regenerate files upon modification '
	@echo '   make publish                     generate using production settings '
	@echo '   make serve [PORT=8000]           serve site at http://localhost:8000'
	@echo '   make devserver [PORT=8000]       start/restart develop_server.sh    '
	@echo '   make stopserver                  stop local server                  '
	@echo '   make ssh_upload                  upload the website via SSH         '
	@echo '   make rsync_upload                upload the website via rsync+ssh   '
	@echo '                                                                       '
	@echo '   make data                        acquire and process the data       '
	@echo '                                      see makefile for additional      '
	@echo '                                      data targets                     '
	@echo '                                                                       '
	@echo '   make updatedeps                  update all website dependencies    '
	@echo '                                      see makefile for additional      '
	@echo '                                      dependency targets               '
	@echo '   make bootstrap                   download and extract Bootstrap     '
	@echo '   make tipue                       download and extract Tipue Search  '
	@echo '                                                                       '
	@echo 'Set the DEBUG variable to 1 to enable debugging, e.g. make DEBUG=1 html'
	@echo '                                                                       '

all: html data

clean:
	[ ! -d $(OUTPUTDIR) ] || rm -rf $(OUTPUTDIR)
	[ ! -d $(TMPDIR) ] || rm -rf $(TMPDIR)
	pyclean ./

html:
	$(PELICAN) $(INPUTDIR) -o $(OUTPUTDIR) -s $(CONFFILE) $(PELICANOPTS)
	if test -d $(BASEDIR)/static; then rsync -avh $(BASEDIR)/static/ $(OUTPUTDIR)/; fi
	if test -d $(BASEDIR)/data; then rsync -avh $(BASEDIR)/data/ $(OUTPUTDIR)/data/; fi

regenerate:
	$(PELICAN) -r $(INPUTDIR) -o $(OUTPUTDIR) -s $(CONFFILE) $(PELICANOPTS)

serve:
ifdef PORT
	cd $(OUTPUTDIR) && $(PY) -m pelican.server $(PORT)
else
	cd $(OUTPUTDIR) && $(PY) -m pelican.server
endif

devserver:
ifdef PORT
	$(BASEDIR)/develop_server.sh restart $(PORT)
else
	$(BASEDIR)/develop_server.sh restart
endif

stopserver:
	kill -9 `cat pelican.pid`
	kill -9 `cat srv.pid`
	@echo 'Stopped Pelican and SimpleHTTPServer processes running in background.'

publish:
	$(PELICAN) $(INPUTDIR) -o $(OUTPUTDIR) -s $(PUBLISHCONF) $(PELICANOPTS)
	if test -d $(BASEDIR)/static; then rsync -avh $(BASEDIR)/static/ $(OUTPUTDIR)/; fi
	if test -d $(BASEDIR)/data; then rsync -avh $(BASEDIR)/data/ $(OUTPUTDIR)/data/; fi

ssh_upload: data publish
ifdef SSH_USER
	scp -P $(SSH_PORT) -r $(OUTPUTDIR)/* $(SSH_USER)@$(SSH_HOST):$(SSH_TARGET_DIR)
else
	scp -P $(SSH_PORT) -r $(OUTPUTDIR)/* $(SSH_HOST):$(SSH_TARGET_DIR)
endif

rsync_upload: data publish
ifdef SSH_USER
	rsync -e "ssh -p $(SSH_PORT)" $(RSYNC_OPTS) $(OUTPUTDIR)/ $(SSH_USER)@$(SSH_HOST):$(SSH_TARGET_DIR)
else
	rsync -e "ssh -p $(SSH_PORT)" $(RSYNC_OPTS) $(OUTPUTDIR)/ $(SSH_HOST):$(SSH_TARGET_DIR)
endif

updatedeps: $(TMPDIR) content/js/d3.v3.min.js content/js/dygraph-combined.js \
            content/js/xtk.js pelican-theme/static/js/jquery.min.js \
            bootstrap tipue

$(TMPDIR):
	mkdir -p $@

content/js/d3.v3.min.js:
	curl -L -o $@ http://d3js.org/d3.v3.min.js

content/js/dygraph-combined.js:
	curl -L -o $@ http://dygraphs.com/$(VER_DYGRAPH)/dygraph-combined.js

content/js/xtk.js:
	curl -L -o $@ http://get.goxtk.com/xtk.js

content/js/stupidtable.js:
	curl -L -o $@ https://raw.githubusercontent.com/joequery/Stupid-Table-Plugin/master/stupidtable.min.js

pelican-theme/static/js/jquery.min.js:
	curl -L -o $@ http://code.jquery.com/jquery-$(VER_JQUERY).min.js

bootstrap:
	curl -L -o $(TMPDIR)/bs.zip https://github.com/twbs/bootstrap/releases/download/v$(VER_BOOTSTRAP)/bootstrap-$(VER_BOOTSTRAP)-dist.zip
	unzip -j $(TMPDIR)/bs.zip bootstrap-*/js/bootstrap.min.js -d pelican-theme/static/js/
	unzip -j $(TMPDIR)/bs.zip bootstrap-*/css/bootstrap.min.css -d pelican-theme/static/css/

tipue:
	curl -L -o $(TMPDIR)/ts.zip http://www.tipue.com/search/tipuesearch.zip
	unzip -j $(TMPDIR)/ts.zip Tipue\ Search\ */tipuesearch/tipuesearch.min.js -d pelican-theme/static/js/
	unzip -j $(TMPDIR)/ts.zip Tipue\ Search\ */tipuesearch/tipuesearch_set.js -d pelican-theme/static/js/
	unzip -j $(TMPDIR)/ts.zip Tipue\ Search\ */tipuesearch/tipuesearch.css -d pelican-theme/static/css/

data: $(DATADIR) $(DATADIR)/t1w.nii.gz $(DATADIR)/t2w.nii.gz \
      $(DATADIR)/swi_mag.nii.gz $(DATADIR)/angio.nii.gz \
      $(DATADIR)/7Tad_epi_grp_tmpl.nii.gz \
      $(DATADIR)/lh.pial $(DATADIR)/rh.orig $(DATADIR)/rh.smoothwm.C.crv \
      $(DATADIR)/scenes.csv $(DATADIR)/german_audio_description.csv \
      $(DATADIR)/demographics.csv \
      $(DATADIR)/physio.csv $(DATADIR)/moco_rot.csv \
      $(DATADIR)/wm_streamlines.trk

$(DATADIR):
	mkdir -p $@

$(DATADIR)/t1w.nii.gz:
	curl -L -o $@ http://psydata.ovgu.de/forrest_gump/sub009/anatomy/highres001.nii.gz
	fslroi $@ $@ 40 190 45 275 130 210
	fslmaths $@ -thr 10 $@ -odt char

$(DATADIR)/t2w.nii.gz:
	curl -L -o $@ http://psydata.ovgu.de/forrest_gump/sub002/anatomy/other/t2w001.nii.gz
	fslroi $@ $@ 30 210 30 290 130 225
	fslmaths $@ -thr 15 $@ -odt char

$(DATADIR)/swi_mag.nii.gz:
	curl -L -o $@ http://psydata.ovgu.de/forrest_gump/sub016/anatomy/other/swi001_mag.nii.gz
	fslroi $@ $@ 80 350 30 420 40 410
	fslmaths $@ -s 30 $(DATADIR)/swi_bias
	fslmaths $@ -div $(DATADIR)/swi_bias -thr .7 -mul 100 $@ -odt char
	rm -f $(DATADIR)/swi_bias*

$(DATADIR)/angio.nii.gz:
	curl -L -o $@ http://psydata.ovgu.de/forrest_gump/sub012/angio/angio001.nii.gz
	fslmaths $@ -subsamp2 -s 20 $(DATADIR)/angio_bias
	fslmaths $@ -subsamp2 -div $(DATADIR)/angio_bias -mul 40 -thr 20 $@ -odt char
	rm -f $(DATADIR)/angio_bias*

$(DATADIR)/7Tad_epi_grp_tmpl.nii.gz:
	curl -L -o $@ http://psydata.ovgu.de/forrest_gump/templates/grpbold7Tad/brain.nii.gz

$(DATADIR)/rh.smoothwm.C.crv:
	curl -L -o $@ http://psydata.ovgu.de/forrest_gump/freesurfer/sub006/surf/rh.smoothwm.C.crv

$(DATADIR)/rh.orig:
	curl -L -o $@ http://psydata.ovgu.de/forrest_gump/freesurfer/sub006/surf/rh.orig

$(DATADIR)/lh.pial:
	curl -L -o $@ http://psydata.ovgu.de/forrest_gump/freesurfer/sub006/surf/lh.pial

$(DATADIR)/scenes.csv:
	curl -L -o $@ http://psydata.ovgu.de/forrest_gump/stimulus/task001/annotations/scenes.csv

$(DATADIR)/german_audio_description.csv:
	curl -L -o $@ http://psydata.ovgu.de/forrest_gump/stimulus/task001/annotations/german_audio_description.csv

$(DATADIR)/demographics.csv:
	curl -L -o $@ http://psydata.ovgu.de/forrest_gump/demographics.csv

$(DATADIR)/physio.csv:
	curl -L -o physio.txt.gz http://psydata.ovgu.de/forrest_gump/sub007/physio/task001_run005/physio.txt.gz
	tools/physio2webcsv physio.txt.gz $@ 23000 29000
	rm -f physio.txt.gz

$(DATADIR)/moco_rot.csv:
	curl -L -o moco.txt http://psydata.ovgu.de/forrest_gump/sub004/BOLD/task001_run005/bold_dico_moco.txt
	tools/moco2webcsv moco.txt data/moco
	rm -f moco.txt

$(DATADIR)/wm_streamlines.trk:
	mkdir -p dti_preproc
	curl -L -o dti_preproc/raw.nii.gz http://psydata.ovgu.de/forrest_gump/sub002/dti/dti001.nii.gz
	curl -L -o dti_preproc/bvecs http://psydata.ovgu.de/forrest_gump/sub002/dti/dti001.bvecs
	curl -L -o dti_preproc/bvals http://psydata.ovgu.de/forrest_gump/sub002/dti/dti001.bvals
	fslroi dti_preproc/raw dti_preproc/b0 0 1
	bet dti_preproc/b0 dti_preproc/b0_brain -R -f 0.1 -g 0 -n -m
	fast -t 2 -n 3 -H 0.1 -I 4 -l 20.0 -g --nopve -o dti_preproc/b0_brain dti_preproc/b0_brain
	tools/build_streamlines dti_preproc $@
	rm -rf dti_preproc

.PHONY: all clean html help regenerate serve devserver stopserver publish ssh_upload rsync_upload updatedeps bootstrap tipue data pelican-theme/static/js/jquery.min.js content/js/stupidtable.js
