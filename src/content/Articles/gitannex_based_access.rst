Working with big data without losing track
******************************************

:date: 2014-06-16 01:00
:tags: git-annex
:author: Michael Hanke
:summary: Git-annex based access to the entire dataset available
:slug: gitannex_based_access

Data sharing can be very simple: just put a few files on a web-server.
However, without (at least) proper documentation re-using a dataset that has
been *thrown over the wall* can be a fairly expensive endeavour.

But even with proper documentation providing mere file access is insufficient.
There is a simple reason: **data are not static**. Once released data keep
evolving: file formats can change, bugs will be fixed, new data are added,
derived data needs to be integrated. Any proper data-sharing setup needs to
provide means for data consumers to track and obtain modifications of a data
set. These necessities are identical to those of software releases. Version
control systems are a de-facto standard for open source software development.
Their utility for streamlining collaborative development is obvious and
documented by the vast number of project using social coding sites like `Github
<http://www.github.com>`_.

In this project we have already gathered lots of 1st-hand experience with the
disadvantages of absent version control for data. It took less than a week for
the first report of some data inconsistency to arrive after the data became
publicly available.  It took minutes to fix it, but pushing out updated data is
still an ongoing process. Why is that?

This dataset is available from multiple locations. Sometimes as single files,
sometimes as gigantic tarballs, sometimes (partially) incorporated in
databases. All these locations need to be updated now, which involves lots of
emails to discuss which sites are affected and how to best obtain the changes
without having to download 355 GB. Of course, only known data consumers can be
emailed.

So far, our best solution for this problem was to provide `rsync
<http://rsync.samba.org/>`_-based access. This allows for automated
re-synchronization in a way that only obtains the portions of data that
actually changed. This doesn't magically update tarballs, but at least
minimizes the bandwidth demands. However, rsync has no inherent concept of
nature of modifications. If two problems were fixed since the last
synchronization, it will obtain both fixes at once without a clear association
of each fix with changes in the documentation or a changelog.

rsync also doesn't help with managing the evolution of the dataset. Internally,
we are already working on the next data release. For each update of the
released portion we have to go and "hand-pick" the files that need to be
updated on the public webserver. This is tedious, error-prone, and takes the
fun out of data sharing.

Treating data like source code (almost)
=======================================



.. |---| unicode:: U+02014 .. em dash

