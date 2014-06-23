How to get data
***************

:Menulabel: Data access
:slug: access

The released data are hosted at multiple locations, including `openfmri.org
<http://www.openfmri.org>`_. Due to its permissive license, it is easy to add
additional hosting locations or alternative access methods.  All known data
resources are listed below. Please contact `info@studyforrest.org
<mailto:info@studyforrest.org?subject=studyforrest.org>`_ regarding outdated or
missing information.


HTTP
====

Fully extracted dataset for HTTP-based, single-file access with tools like
``wget``, ``curl`` or any web browser.

.. raw:: html

   <a class="btn btn-success"
      target="_blank"
      href="http://psydata.ovgu.de/forrest_gump/"
      role="button">Browse dataset</a>

rsync
=====

rsync-daemon with flexible support for single-file and directory-based access,
and efficient, repeated synchronization.  Note, the entire dataset is over
`350 GB`. Browse the dataset to determine relevant subsets for
synchronization, and consult the rsync documentation for details.

.. code:: sh

    rsync -aL psydata.ovgu.de::forrest_gump dest

.. raw:: html

   <a class="btn btn-default"
      target="_blank"
      href="http://rsync.samba.org"
      role="button">Learn about rsync</a></p>


git-annex
=========

Highly flexible data access with built-in versioning. Use this to track the
complete evolution of this dataset and easily obtain any future updates. This
access method allows for complete meta-data access in combination with full or
partial data download. Additional data portions can be obtained at any point in
the future. Previous versions of data files are accessible also.

1. Obtain meta-data repository::

     git clone http://psydata.ovgu.de/forrest_gump/.git studyforrest

2. Enter data repository::

     cd studyforrest

3. Download (selected) data files |---| repeat as necessary. Example: ROI
   time series in CSV format for all subjects and all runs)::

     git annex get sub*/BOLD/task001_run*/*timeseries*.csv.gz


.. raw:: html

   <a class="btn btn-default"
      target="_blank"
      href="http://git-scm.com"
      role="button">Learn about git</a>
   <a class="btn btn-default"
      target="_blank"
      href="https://git-annex.branchable.com"
      role="button">Learn about git-annex</a>

Tarballs
========

Individual tarballs for all available data modalities. The size of the tarballs
varies from a few hundred kilobytes to almost a hundred gigabytes. A README
file detailing the tarball content and checksums is available.

.. raw:: html

   <a class="btn btn-default"
      target="_blank"
      href="http://openfmri.org/dataset/ds000113"
      role="button">Visit openfmri.org</a>

S3
==

Thanks to OpenfMRI, the entire dataset is also available on Amazon's S3 cloud
storage. This should be the preferred data source if you are working in their
cloud (e.g. with `NITRC-CE
<http://www.nitrc.org/plugins/mwiki/index.php/nitrc:User_Guide_-_NITRC_Computational_Environment>`_).

::

    s3://openfmri/ds113

XNAT
====

A subset of the dataset (fMRI, T1-weighted anatomical images) is available
through OpenfMRI's `XNAT server <http://xnat.org>`_. XNAT supports single, and
multiple file downloads, as well as complex metadata-based queries.

.. raw:: html

   <a class="btn btn-default"
      target="_blank"
      href="http://xnat.openfmri.org/xnat-openfmri/app/template/Index.vm"
      role="button">Access openfmri's XNAT</a>

Terms of use
============

All data are released to the public under the `ODC Public Domain Dedication
and Licence (PDDL) <http://opendatacommons.org/licenses/pddl/1.0/>`_.

Offering these data for download or through other means is encouraged; we
only ask that you add a reference to this website.  In order to provide a
comprehensive overview of entities hosting these data, or any derived data
artifacts, please let us know at `info@studyforrest.org`_ what kind of data
access you are offering.

How to cite
-----------

If you use these data, please follow good scientific practice and cite any
relevant publications.  A list of all publications can be found `here
<../category/studies.html>`_.


Acknowledgements
================

We are grateful to all data hosting providers for their support, sponsored
bandwidth, and storage capacity.

.. raw:: html

        <div class="col-sm-6">
         <a href="http://www.ovgu.de"><img class="img-responsive center-block" src="/pics/ovgu_logo.png" alt="OvGU logo"></a>
        </div><!-- /.col-sm-6 -->
        <div class="col-sm-6">
            <a href="http://www.openfmri.org"><img class="img-responsive center-block" src="/pics/openfmri_logo.png" alt="OpenfMRI logo"></a>
        </div><!-- /.col-sm-6 -->

.. |---| unicode:: U+02014 .. em dash

