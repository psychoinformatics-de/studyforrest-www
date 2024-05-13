Pelican ``headerid`` plugin
===========================

This plugin adds an anchor to each heading so you can deep-link to headers.
It is intended for formats such as reStructuredText that do not natively
generate these anchors.

For Markdown, this plugin is less relevant since the Python-Markdown library
includes a Table of Contents extension that will generate link anchors.
To enable the ``toc`` extension, add a line similar to the following example
to your Pelican settings file::

    MD_EXTENSIONS = ["codehilite(css_class=highlight)", "extra", "toc"]

Parameters
----------
Set parameters in ``pelicanconf.py`` config file.

HEADERID_LINK_CHAR: str
    The ``HEADERID_LINK_CHAR`` config can be set to use a different char from ``*``
    for anchor text.

GENERATE_IDS: bool
    If ``True``, the plugin will create IDs for headings
    that have neither ``id`` nor ``name`` attribute.
    Used by link-anchors to reference headings.

SUBTREE: str
    Only parse a subtree of the entire page.
    Provide an ``id``.
    Sets the root of the parsing process from ``<html>``
    to the first tag with a matching ``id`` attribute.