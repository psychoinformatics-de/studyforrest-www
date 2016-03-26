How to Get Data
***************
:save_as: access.html
:url: access.html

The released data are hosted at multiple locations, including `openfmri.org
<http://www.openfmri.org>`_. Due to its permissive license, it is easy to add
additional hosting locations or alternative access methods. All known data
resources are listed below. Please contact `info@studyforrest.org
<mailto:info@studyforrest.org?subject=studyforrest.org>`_ regarding outdated or
missing information.

.. row::

  .. column::
     :width: 8

     :h2:`HTTP`

     Fully extracted dataset for HTTP-based, single-file access with tools like
     :code:`wget`, :code:`curl`, or any web browser.

     .. button:: Browse Dataset
        :class: success
        :target: http://psydata.ovgu.de/forrest_gump/


     :h2:`rsync`

     rsync-daemon with flexible support for single-file and directory-based
     access, and efficient, repeated synchronization.  Note, the entire dataset
     is over *350 GB*. Browse the dataset to determine relevant subsets for
     synchronization, and consult the rsync documentation for details.

     .. code:: sh

         rsync -aL psydata.ovgu.de::forrest_gump dest

     .. button:: Learn About rsync
        :class: success
        :target: http://rsync.samba.org


     :h2:`git-annex`

     Highly flexible data access with built-in versioning. Use this to track the
     complete evolution of this dataset and easily obtain any future updates.
     This access method allows for complete meta-data access in combination with
     full or partial data download. Additional data portions can be obtained at
     any point in the future. Previous versions of data files are accessible
     also.

     #. Obtain meta-data repository::

          git clone http://psydata.ovgu.de/forrest_gump/.git studyforrest

     #. Enter data repository::

          cd studyforrest

     #. Download (selected) data files |---| repeat as necessary. Example: ROI
        time series in CSV format for all subjects and all runs)::

          git annex get sub*/BOLD/task001_run*/*timeseries*.csv.gz

     .. button:: Learn About git
        :class: success
        :target: http://git-scm.com

     .. button:: Learn About git-annex
        :class: success
        :target: https://git-annex.branchable.com


     :h2:`Tarballs`

     Individual tarballs for all available data modalities. The size of the
     tarballs varies from a few hundred kilobytes to almost a hundred gigabytes.
     A README file detailing the tarball content and checksums is available.

     .. button:: Visit openfmri.org
        :class: success
        :target: http://openfmri.org/dataset/ds000113


     :h2:`S3`

     Thanks to OpenfMRI, the entire dataset is also available on Amazon's S3
     cloud storage. This should be the preferred data source if you are working
     in their cloud (e.g. with `NITRC-CE
     <http://www.nitrc.org/plugins/mwiki/index.php/nitrc:User_Guide_-_NITRC_Computational_Environment>`_).::

         s3://openfmri/ds113


     :h2:`XNAT`

     A subset of the dataset (fMRI, T1-weighted anatomical images) is available
     through OpenfMRI's `XNAT server <http://xnat.org>`_. XNAT supports single,
     and multiple file downloads, as well as complex metadata-based queries.

     .. button:: Access openfmri.org's XNAT
        :class: success
        :target: http://xnat.openfmri.org/xnat-openfmri/app/template/Index.vm


  .. column::
     :width: 4

     :h2:`Terms of Use`

     All data are released to the public under the `ODC Public Domain Dedication
     and Licence (PDDL) <http://opendatacommons.org/licenses/pddl/1.0/>`_.

     Offering these data for download or through other means is encouraged; we
     only ask that you add a reference to this website. In order to provide a
     comprehensive overview of entities hosting these data, or any derived data
     artifacts, please let us know at `info@studyforrest.org`_ what kind of data
     access you are offering.


     :h3:`How to Cite`

     If you use these data, please follow good scientific practice and cite any
     relevant publications. A list of all publications can be found `here
     <../category/studies.html>`_.


     :h2:`Acknowledgements`

     We are grateful to all data hosting providers for their support, sponsored
     bandwidth, and storage capacity.

     .. image:: {filename}/img/logo/ovgu.png
        :alt: Otto-von-Guericke-University Magdeburg Logo
        :target: http://www.ovgu.de

     .. image:: {filename}/img/logo/openfmri.png
        :alt: OpenfMRI Logo
        :target: https://openfmri.org

.. |---| unicode:: U+02014 .. em dash
