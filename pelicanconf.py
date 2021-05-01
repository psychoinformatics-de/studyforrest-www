#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

#
# About the site
#
AUTHOR = 'Michael Hanke & Alex Waite'
SITENAME = 'studyforrest.org'
SITEURL = ''

TIMEZONE = 'Europe/Berlin'
DEFAULT_LANG = 'en'
LOCALE = 'en_US.UTF-8'

#
# Configure Pelican a bit
#
PATH = 'content'
PLUGIN_PATHS = ['pelican-plugins']
PLUGINS = ['tipue_search', 'sitemap']
SITEMAP = { 'format': 'xml' }

THEME = 'theme'
DIRECT_TEMPLATES = ['search'] # unset all templates; use these
STATIC_PATHS = ['data/', 'img/', 'metadata/', 'static/']
EXTRA_PATH_METADATA = {
    "static/android-chrome-192x192.png": {'path': ''},
    "static/android-chrome-512x512.png": {'path': ''},
    "static/apple-touch-icon.png": {'path': ''},
    "static/browserconfig.xml": {'path': ''},
    "static/favicon-16x16.png": {'path': ''},
    "static/favicon-32x32.png": {'path': ''},
    "static/favicon.ico": {'path': ''},
    "static/mstile-144x144.png": {'path': ''},
    "static/mstile-150x150.png": {'path': ''},
    "static/mstile-310x150.png": {'path': ''},
    "static/mstile-310x310.png": {'path': ''},
    "static/mstile-70x70.png": {'path': ''},
    "static/safari-pinned-tab.svg": {'path': ''},
    "static/site.webmanifest": {'path': ''},
}

#HEADERID_LINK_CHAR = '<i class="icon-link"></i>'

FEED_ALL_ATOM = None
AUTHOR_SAVE_AS = False

#
# Configure the site
#
MENUITEMS = ( ('About', 'about.html'),
              ('Access', 'access.html'),
              ('Data', 'data.html'),
              ('Explore', 'explore.html'),
              ('Publications', 'publications.html'),
)
