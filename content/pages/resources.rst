Resources
*********
:save_as: data.html
:url: data.html

.. row::

  .. column::
     :width: 12
     :size: sm

     *Studyforrest* has made several data releases over the past years, and this
     page provides an overview of the available resources. Often, multiple data
     types are available for the same set of participants |---| for example, up
     to 10 hours of different fMRI scans per participant. Further details are
     available from the linked publications and summary pages.

.. row::

  .. column::
     :width: 12
     :size: sm

     :h2:`Data availability overview`

     The following table shows what data are available for each participant.
     Participant IDs are consistent across all acquisitions. Availability codes in
     the table are as follows: **X**: released; **A**: acquired, but not yet
     released, **P**: planned. An empty cell indicates that an acquisition was
     neither done nor is planned.

     Raw and preprocessed data were, and continue to be, released in several
     datasets (parts), and are typically available from multiple locations,
     were some may provide further updates. If you cannot locate a dataset
     component you are interested in, please get in touch. Likewise, if you
     want to re-share data that was preprocessed in a particular way, please
     contact info@studyforrest.org.

.. row::

  .. column::
     :width: 12
     :size: sm

     .. list-table::
        :class: table-striped
        :header-rows: 1
        :stub-columns: 1

        * -
          - 1-3
          - 4
          - 5
          - 6
          - 7-8
          - 9-10
          - 11-13
          - 14-15
          - 16-17
          - 18
          - 19
          - 20
          - 21
          - 22-36

        * - *Structural MRI*
          -
          -
          -
          -
          -
          -
          -
          -
          -
          -
          -
          -
          -
          -

        * - T1, T2, DWI, SWI, Angiography
          - X
          - X
          - X
          - X
          - X
          - X
          - X
          - X
          - X
          - X
          - X
          - X
          - A
          -

        * - *Natural stimulation*
          -
          -
          -
          -
          -
          -
          -
          -
          -
          -
          -
          -
          -
          -

        * - 2h audio movie (7T fMRI, cardiac & respiratory trace)
          - X
          - X
          - X
          - X
          - X
          - X
          - X
          - X
          - X
          - X
          - X
          - X
          -
          -

        * - 2h audio-visual movie (3T fMRI, eyetracking, cardiac & respiratory trace)
          - X
          - X
          - X
          - X
          -
          - X
          -
          - X
          - X
          - X
          - X
          - X
          -
          -

        * - 2h audio-visual movie (in-lab eyetracking)
          -
          -
          -
          -
          -
          -
          -
          -
          -
          -
          -
          -
          -
          - X

        * - *Task fMRI*
          -
          -
          -
          -
          -
          -
          -
          -
          -
          -
          -
          -
          -
          -

        * - Listening to music (7T fMRI, cardiac & respiratory trace)
          - X
          - X
          - X
          - X
          - X
          - X
          - X
          - X
          - X
          - X
          - X
          - X
          -
          -

        * - Retinotopic mapping (3T fMRI)
          - X
          - X
          - X
          - X
          -
          - X
          -
          - X
          - X
          - X
          - X
          - X
          - A
          -

        * - Localizer for visual areas (3T fMRI)
          - X
          - X
          - X
          - X
          -
          - X
          -
          - X
          - X
          - X
          - X
          - X
          -
          -

        * - Flickering oriented gratings (7T fMRI @ 0.8, 1.4, 2, and 3mm)
          -
          - X
          -
          - X
          -
          -
          -
          -
          - X
          - X
          -
          - X
          - X
          -

        * - Flickering oriented gratings (3T fMRI @ 1.4, 2, and 3mm)
          -
          -
          -
          - A
          -
          - A
          -
          -
          - A
          -
          -
          - A
          - A
          -

        * - *Preprocessed data*
          -
          -
          -
          -
          -
          -
          -
          -
          -
          -
          -
          -
          -
          -

        * - Freesurfer cortical surface reconstruction
          - X
          - X
          - X
          - X
          - X
          - X
          - X
          - X
          - X
          - X
          - X
          - X
          -
          -

        * - Participant and scan-specific template MRI images (for alignment, masking, structural properties) & (non-)linear transformations between image spaces
          - X
          - X
          - X
          - X
          - X
          - X
          - X
          - X
          - X
          - X
          - X
          - X
          -
          -

        * - Per-participant aligned fMRI data for within-subject analysis
          - X
          - X
          - X
          - X
          - X
          - X
          - X
          - X
          - X
          - X
          - X
          - X
          -
          -

        * - Audio-visual movie fMRI aggregate ROI timeseries for Shen et al. (2013) cortex parcellation
          - X
          - X
          - X
          - X
          - X
          - X
          - X
          - X
          - X
          - X
          - X
          - X
          -
          -

     :h2:`Data type overview`

     This sections offers an overview of all major components of the
     studyforrest dataset. This includes data on brain structure, brain
     function, and movie stimulus properties.

     :h3:`Behavior and brain function`

.. row::

  .. column::
     :width: 4
     :size: sm
     :class: resource-col

     .. thumbnail::

        .. image:: {filename}/pics/moviefmri_acq_icon_ao_hrfmri.jpg

        .. caption::

           :h5:`High-res 7T fMRI on 2h audio movie (+cardiac/respiration)`

           .. button:: Get the gist »
              :target: {filename}/pages/acq_aomovie.rst

           .. button:: Read publication »
              :target: http://www.nature.com/articles/sdata20143


     .. thumbnail::

        .. image:: {filename}/pics/musicfmri_acq_icon.jpg

        .. caption::

           :h5:`High-res 7T fMRI listening to music (cardiac/respiration)`

           .. button:: Read publication »
              :target: http://dx.doi.org/10.12688/f1000research.6679.1

  .. column::
     :width: 4
     :size: sm
     :class: resource-col middle

     .. thumbnail::

        .. image:: {filename}/pics/moviefmri_acq_icon_av_lrfmri_eyegaze.jpg

        .. caption::

           :h5:`3T fMRI on 2h movie, eyegaze, cardiac/respiration`

           .. button:: Read publication »
              :target: http://www.nature.com/articles/sdata201692

     .. thumbnail::

        .. image:: {filename}/pics/retmap_acq_icon.jpg

        .. caption::

           :h5:`Retinotopic mapping`

           .. button:: Read publication »
              :target: http://www.nature.com/articles/sdata201693

  .. column::
     :width: 4
     :size: sm
     :class: resource-col

     .. thumbnail::

        .. image:: {filename}/pics/visloc_acq_icon.jpg

        .. caption::

           :h5:`Higher visual area localizer`

           .. button:: Read publication »
              :target: http://www.nature.com/articles/sdata201693

     .. thumbnail::

        .. image:: {filename}/pics/orientfmri_acq_icon.jpg

        .. caption::

           :h5:`Multi-res 7T fMRI (0.8-3mm) on visual orientation`

           .. button:: Read publication »
              :target: https://doi.org/10.1016/j.neuroimage.2016.12.040

.. row::

  .. column::
     :width: 12
     :size: sm

     :h3:`Brain structure and connectivity`

.. row::

  .. column::
     :width: 4
     :size: sm
     :class: resource-col

     .. thumbnail::

        .. image:: {filename}/pics/t1w_thumb.jpg

        .. caption::

           :h5:`T1-weighted MRI`

           .. button:: Get the gist »
              :target: {filename}/pages/mod_t1w.rst

     .. thumbnail::

        .. image:: {filename}/pics/t2w_thumb.jpg

        .. caption::

           :h5:`T2-weighted MRI`

           .. button:: Get the gist »
              :target: {filename}/pages/mod_t2w.rst

  .. column::
     :width: 4
     :size: sm
     :class: resource-col middle

     .. thumbnail::

        .. image:: {filename}/pics/swi_thumb.jpg

        .. caption::

           :h5:`Susceptibility-weighted MRI`

           .. button:: Get the gist »
              :target: {filename}/pages/mod_swi.rst

     .. thumbnail::

        .. image:: {filename}/pics/dti_thumb.jpg

        .. caption::

           :h5:`Diffusion-weighted MRI`

           .. button:: Get the gist »
              :target: {filename}/pages/mod_dwi.rst

  .. column::
     :width: 4
     :size: sm
     :class: resource-col

     .. thumbnail::

        .. image:: {filename}/pics/angio_thumb.jpg

        .. caption::

           :h5:`Angiography`

           .. button:: Get the gist »
              :target: {filename}/pages/mod_angio.rst

     .. thumbnail::

        .. image:: {filename}/pics/surf_thumb.jpg

        .. caption::

           :h5:`Cortical surface reconstruction`

           .. button:: Get the gist »
              :target: {filename}/pages/deriv_surfaces.rst

.. row::

  .. column::
     :width: 12
     :size: sm

     :h3:`Movie stimulus annotations`

     We are continuously expanding the set of annotations for particular movie
     properties. The following items show a subset of what we have already in
     store.  If you are planning on using any of these, or you are looking for
     annotations for different properties, please get in touch. We are
     constantly working on improving existing annotations as well, and updates
     may already be available.

.. row::

  .. column::
     :width: 4
     :size: sm
     :class: resource-col

     .. thumbnail::

        .. image:: {filename}/pics/annot_structure_icon.png

        .. caption::

           :h5:`Scenes and shots`

           .. button:: Get the gist »
              :target: {filename}/pages/annot_structure.rst

     .. thumbnail::

        .. image:: {filename}/pics/annot_speech_icon.jpg

        .. caption::

           :h5:`Speech`

           .. button:: Get the gist »
              :target: {filename}/pages/annot_speech.rst

     .. thumbnail::

        .. image:: {filename}/pics/annot_emotion_icon.jpg

        .. caption::

           :h5:`Portrayed emotions`

           .. button:: Read publication »
              :target: http://dx.doi.org/10.12688/f1000research.6230.1

  .. column::
     :width: 4
     :size: sm
     :class: resource-col middle

     .. thumbnail::

        .. image:: {filename}/pics/annot_irony_icon.jpg
           :alt: Hidden beach CC-BY from https://www.flickr.com/photos/carbonnyc/76468122

        .. caption::

           :h5:`Semantic conflict`

           .. button:: Read publication »
              :target: https://f1000research.com/articles/5-2375

     .. thumbnail::

        .. image:: {filename}/pics/annot_locationtime_icon.jpg
           :alt: Cuts in the movie

        .. caption::

           :h5:`Location changes and time progression`

           .. button:: Read publication »
              :target: http://f1000research.com/articles/5-2273

     .. thumbnail::

        .. image:: {filename}/pics/annot_bodycontact_icon.jpg

        .. caption::

           :h5:`Body contact`

           .. button:: Publication in prep.
              :class: disabled

  .. column::
     :width: 4
     :size: sm
     :class: resource-col

     .. thumbnail::

        .. image:: {filename}/pics/annot_eyegaze_icon.jpg

        .. caption::

           :h5:`Eye movement labels`

           .. button:: Publication in prep.
              :class: disabled

     .. thumbnail::

        .. image:: {filename}/pics/annot_music_icon.jpg
           :alt: https://commons.wikimedia.org/wiki/File:Maroper_Music.jpg CC-BY-SA

        .. caption::

           :h5:`Music`

           .. button:: In preparation
              :class: disabled


.. |---| unicode:: U+02014 .. em dash
