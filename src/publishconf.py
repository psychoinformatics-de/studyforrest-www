#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

# This file is only used if you use `make publish` or
# explicitly specify it as your config file.

import os
import sys
sys.path.append(os.curdir)
from pelicanconf import *

SITEURL = 'http://studyforrest.org'
RELATIVE_URLS = False

FEED_ALL_ATOM = 'feeds/all.atom.xml'
CATEGORY_FEED_ATOM = 'feeds/%s.atom.xml'

DELETE_OUTPUT_DIRECTORY = True

# Following items are often useful when publishing

#GOOGLE_ANALYTICS = ""

#PLUGIN_PATH = "../pelican-plugins"
#PLUGINS = ['sitemap', 'extract_toc', 'tipue_search']
#MD_EXTENSIONS = ['codehilite(css_class=highlight)', 'extra', 'headerid', 'toc']
#DIRECT_TEMPLATES = (('index', 'tags', 'categories','archives', 'search', '404'))
#STATIC_PATHS = ['theme/images', 'images']
#TAG_SAVE_AS = ''
#CATEGORY_SAVE_AS = ''
#AUTHOR_SAVE_AS = ''
#RECENT_ARTICLES_COUNT (integer)  
#SITE_LICENSE ('string')
#SITE_DESCRIPTION ('string')
#EMAIL_SUBSCRIPTION_LABEL ('string')
#EMAIL_FIELD_PLACEHOLDER ('string')
#SUBSCRIBE_BUTTON_TITLE ('string')
#MAILCHIMP_FORM_ACTION ('string')
#SITESUBTITLE ('string')
#LANDING_PAGE_ABOUT ({})
#PROJECTS ([{},...])


