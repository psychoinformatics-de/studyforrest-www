WWW_DIR = www
WWW_UPLOAD_URI=kumo.ovgu.de:/var/www/studyforrest/www
RSYNC_OPTS_UP = -rzlhv --delete --copy-links

prep:
	npm install bower
	node_modules/.bin/bower install bootstrap
	node_modules/.bin/bower install holderjs

upload:
	rsync $(RSYNC_OPTS_UP) $(WWW_DIR)/* $(WWW_UPLOAD_URI)/

