#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

AUTHOR = u'Michael Hanke'
SITENAME = u'studyforrest.org'
SITESUBTITLE = u'A de-centralized mass-collaboration attempt'
SITEURL = ''

TIMEZONE = 'Europe/Berlin'

DEFAULT_LANG = u'en'
LOCALE = u'en_US.UTF-8'

THEME = '../pelican-theme'

DIRECT_TEMPLATES = ['index', 'categories', 'authors', 'archives', 'search']

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None

# Blogroll
LINKS = (('Psychoinformatics', 'http://psychoinformatics.de'),
         ('Real-Life Cognition Channel', 'http://f1000research.com/channels/real-cognition'),
         ('NeuroDebian', 'http://neuro.debian.net'),
         ('PyMVPA', 'http://www.pymvpa.org'))

# Social widget
SOCIAL = (('twitter', 'http://twitter.com/studyforrest'),
          ('github', 'http://github.com/hanke/gumpdata'),)

DEFAULT_PAGINATION = 10

# Uncomment following line if you want document-relative URLs when developing
#RELATIVE_URLS = False

STATIC_PATHS = ['images', 'pics', 'css', 'js', 'data']

PLUGIN_PATHS = ['../pelican-plugins']
PLUGINS = ['twitter_bootstrap_rst_directives', 'bootstrapify', 'tipue_search',
           'pelican_javascript']

DISPLAY_PAGES_ON_MENU = True

DISPLAY_TAGS_INLINE = True
DISPLAY_ARTICLE_INFO_ON_INDEX = True
DISPLAY_BREADCRUMBS = False
DISPLAY_CATEGORIES_ON_MENU = True

ADDTHIS_PROFILE = 'ra-53a573780cc42d73'
ADDTHIS_DATA_TRACK_ADDRESSBAR = False

RESPONSIVE_IMAGES = True

GOOGLE_ANALYTICS = "UA-46839658-1"


TWITTER_USERNAME = 'studyforrest'
TWITTER_WIDGET_ID = '435327568237965312'

WITH_FUTURE_DATES = True

SHOW_ARTICLE_AUTHOR = True
