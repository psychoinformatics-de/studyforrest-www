How to Get Data
***************
:save_as: access.html
:url: access.html

The released data are hosted at multiple locations, and multiple data access
methods are supported.

.. row::

  .. column::
     :width: 8

     :h2:`Browse`

     All data files are directly accessible via any web-browser. This type
     of access is best for a first look at the data, and for downloading
     less than *a lot of files*.

     .. button:: Browse Datasets
        :class: success
        :target: http://psydata.ovgu.de/studyforrest/

     :h2:`Download`

     The simplest way to dowload complete data releases is to obtain data
     archives (tarballs) from `OpenFMRI <http://www.openfmri.org>`_. At
     present OpenFMRI hosts the following datasets:

     * `A high-resolution 7-Tesla fMRI dataset from complex natural stimulation
       with an audio movie <https://openfmri.org/dataset/ds000113>`_

     * `High-resolution 7-Tesla fMRI data on the perception of musical
       genres <https://openfmri.org/dataset/ds000113b>`_

     * `Multi-resolution 7T fMRI data on the representation of visual
       orientation <https://openfmri.org/dataset/ds000113c>`_

     * `Simultaneous fMRI/eyetracking while movie watching, plus visual
       localizers <https://openfmri.org/dataset/ds000113d>`_

     For details on these datasets and further instructions visit the
     respective pages on OpenFMRI.org.

     For users requiring more flexibility rsync-based data access is provided,
     too. Available datasets can be listed via:

     .. code:: sh

         rsync psydata.ovgu.de::studyforrest

     When using rsync to obtain a dataset, it is recommended to use the
     ``-L/--copy-links`` and the ``-a/--archive`` flags, for example:

     .. code:: sh

         rsync -aL psydata.ovgu.de::studyforrest/phase2 dest


     :h2:`Cloud access`

     While users running cloud-based analysis can also use any of the methods
     above, please note that all datasets are also available on Amazon's S3
     cloud storage. This should be the preferred data source if you are working
     in their cloud (e.g. with `NITRC-CE
     <http://www.nitrc.org/plugins/mwiki/index.php/nitrc:User_Guide_-_NITRC_Computational_Environment>`_).
     The bucket names follow the following pattern::
     

         s3://openfmri/ds113

     :h2:`Geek mode`

     If you consider all of the above mediocre, this one may be for you.
     `git-annex <http://git-annex.branchable.com>`_ offers highly flexible data
     access with built-in versioning and enables tracking the
     complete evolution of these datasets and obtaining any future updates.
     This access method allows for complete meta-data access in combination with
     full or partial data download. Additional data portions can be obtained at
     any point in the future. Previous versions of data files are accessible
     also.

     All `data repositories
     <https://github.com/psychoinformatics-de?query=studyforrest-data>`_ for
     the method are publicly available on GitHub (no account required).

     #. Obtain meta-data repository::

          git clone https://github.com/psychoinformatics-de/studyforrest-data-phase2.git phase2

     #. Enter directory and initialize::

          cd phase2
          git annex init

     #. Download (selected) data files |---| repeat as necessary. Example: All
        BOLD time series for the movie acquisition::

          git annex get sub*/ses-movie/func/*bolld.nii.gz


  .. column::
     :width: 4

     :h2:`Terms of Use`

     All data are released to the public under the `ODC Public Domain Dedication
     and Licence (PDDL) <http://opendatacommons.org/licenses/pddl/1.0/>`_.

     Offering these data for download or through other means is encouraged; we
     only ask that you add a reference to this website. In order to provide a
     comprehensive overview of entities hosting these data, or any derived data
     artifacts, please let us know at info@studyforrest.org_ what kind of data
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
