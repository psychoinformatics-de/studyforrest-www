#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

#
# About the site
#
AUTHOR = u'Michael Hanke & Alex Waite'
SITENAME = u'studyforrest.org'
SITEURL = ''

TIMEZONE = 'Europe/Berlin'
DEFAULT_LANG = u'en'
LOCALE = u'en_US.UTF-8'

#
# Configure Pelican a bit
#
PLUGIN_PATHS = ['pelican-plugins']
PLUGINS = ['better_tables', 'bootstrap-rst', 'pelican_javascript', 'tipue_search',]

THEME = 'pelican-theme'
DIRECT_TEMPLATES = ['archives', 'search'] # unset all templates; use these

FEED_ALL_ATOM = None

#
# Configure the site
#
STATIC_PATHS = ['img', 'pics', 'css', 'js', 'data']
MENUITEMS = (
            ('About', 'about.html'),
            ('Access', 'access.html'),
            ('Data', 'data.html'),
            ('Publications', 'publications.html'),
            ('Log', 'archives.html'),
)

#
# Social media jazz
#
GOOGLE_ANALYTICS = "UA-46839658-1"
