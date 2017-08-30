#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

# This file is only used when publishing the site (`make publish/rsync_upload/etc`)

import os
import sys
sys.path.append(os.curdir)
from pelicanconf import *

SITEURL = 'http://studyforrest.org'
RELATIVE_URLS = False

DELETE_OUTPUT_DIRECTORY = True
