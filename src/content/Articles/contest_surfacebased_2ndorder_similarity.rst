Interactive surface-based visualization of second-order representational similarity
===================================================================================

:date: 2014-11-01 19:51
:tags: fMRI, 7-Tesla, contest, similarity, surface
:author: Nikolaas N. Oosterhof
:summary: shows how surface-based whole brain second-order representational similarity can be visualized interactively at a random-effect group level using PyMVPA, Python, and AFNI / SUMA
:slug: contest_surfacebased_2ndorder_similarity

This demonstration (in submission for the studyforrest_ competition_) shows how
surface-based whole brain second-order representational similarity can be
visualized interactively at a random-effect group level using PyMVPA_, Python_,
and AFNI_ / SUMA_.

Demos and download materials
-----------------------------

.. raw:: html

   <video style="width:100%" src="/data/contest_cosmomvpa/demo_video.webm" controls>
   This browser does not support HTML5 video. PLease use a different browser
   or download the video file and which it locally.
   </video>

- Download the `demo video
  <{filename}/data/contest_cosmomvpa/demo_video.mov>`_.

- `Scripts, data and documentation (zip archive)
  <{filename}/data/contest_cosmomvpa/surf_2ndorder_insta_rsa.zip>`_.

Functionality
-------------

Using the pipeline described below, the user can select a node on the surface.
Almost instantenousely, the elements of the representational similarity matrix
(time-by-time) associated with the node are correlated (by AFNI's
3dGroupInCorr) with the representational similarity matrices of all nodes on
the surfaces. This is done for each subject separately, resulting in a
correlation map for each subject. The correlation maps are averaged into a
group map, thresholded using a t-test and an a-priori threshold, and visualized
on the surface.


Instructions to run the demo
----------------------------

Get the `precomputed results
<{filename}/data/contest_cosmomvpa/surf_2ndorder_insta_rsa.zip>`_ and make sure
to have a working AFNI installation on a unix-like platform, then:

- ``cd group``

- In one terminal window, run ``3dGroupInCorr -setA ALL.grpincorr.niml -suma``

- In another terminal window, run ``suma -spec mh_ico16_fsavg.spec -niml``

- In the SUMA surface window, use ctrl+shift+rclick (where rclick indicates a
  click with the right-hand mouse button) multiple times to select different
  nodes. 


Methods
-------

Data was preprocessed according to the following pipeline:

- Input data was freesurfer and BOLD data from the studyforrest_ dataset.

- FreeSurfer surfaces were preprocessed using pymvpa2-prep-afni-surf from the
  PyMVPA toolbox, with the "moco" EPI image as reference. This module provides
  two-hemisphere surfaces in standard space at various resolutions. Run with::

    pymvpa2-prep-afni-surf \
       -r moco_ref_ss+orig \
       -d ref/sub[snum] \
       -d freesurfer/sub[snum]/surf

  with *snum* from 011 to 020 and *moco_ref_ss+orig* the output of AFNI's
  **3dSkullStrip** applied to *moco_ref.nii.gz*.

- preproc_data.py: reads data from each run (in the example: one run is used)
  and stores a down-sampled version (in the example: 4 timesteps) as a PyMVPA
  dataset. Run with ``preproc_data.py [snum]``

- neighborhood.py: computes surface-based neighborhood. Run with
  ``neighborhood.py [snum] 16 100`` for an low-res ico value of 16 (see below)
  and about 100 voxels in each searchlight.

- rsm_measures.py: helper module to compute dissimilarity measures

- sl.py: runs a surface-based searchlight using the neighborhood and
  downsampled data with the DSCorrMeasure. For each searchlight, a time-by-time
  similarity matrix is computed, and the upper diagonal elements are flatten
  into a vector. This vector is then treated as a pseudo-timeseries. Run with
  ``sl.py [snum] [snum] 16 100`` for an low-res ico value of 16 (see below) and
  about 100 voxels in each searchlight.

- pseudo-timeseries data was aggregated and preprocessed across subjects using
  the suma_setup_instacorr.py (in PyMVPA mvpa2/support/afni). Run with::

    python suma_setup_instacorr.py \
        -N 5128 -g ALL -p -g _foo -i fn1 fn2 ... fnK

  where 5128=(16**2*10+2)*2 is the number of nodes, and the *fn...* are the
  *.niml.dset* files from the output of the previous step.

- data was visualized interactively using 3dGroupInCorr and SUMA. When in SUMA
  a node is selected as a 'source' node, the correlation between the
  pseudo-timeseries of the source node and all nodes on the surface is
  computed, for each subject. The average correlation is visualized on the
  surface, while the map is tresholded using an a-priori defined threshold and
  node-wise one-sample t-test against zero.


Demo video
----------

The demo video was based using the following parameters:

- low-res ico value: 16 (5128 nodes). This surface is used for visualization.

- high-res ico value: 128 (327684). This surface is used to delineate the
  searchlights (curved cylinders between the pial and white matter surfaces).

- searchlight size: 100 voxels (features).

- participants: BOLD data  studyforrest dataset were used.

- input data: first run of forrest gump dataset of participants 11-20, with the
  data binned in sets of 4 consecutive timepoints.

- visualization was based on the freesurfer surface template.


Possible extensions and future work
-----------------------------------

- depending on available computational resources, higher resolution surfacs and
  longer time series can be used for a better estimate of similarity. (server
  issues around the time of the deadline prevented computing these for the
  submission).

- if multiple repetitions of the same stimulus are measured for each subject,
  the correlations can be computed across repetitions. This could decrease
  potential confounds caused by local (shared voxels) or global (shared common
  signal) similarity values across locations.

- whole-brain Hyperalignment_ preprocessing can be used with this method

- clustering methods can be applied to find networks with shared second-order
  representational similarity, and these can be compared with results from
  other methods (e.g. resting state).


About this work
---------------

This article has been contributed by Nick Oosterhof as a submission to the
`real-life cognition contest <{filename}/pages/challenge.rst>`_. The author
can be contacted by email at *nikolaas dot oosterhof at unitn dot it*.

All referenced source code and materials are copyright (c) 2014, Nikolaas N.
Oosterhof and are made available under the terms of the `MIT license`_.

.. _AFNI: http://afni.nimh.nih.gov
.. _competition: http://studyforrest.org/pages/challenge.html
.. _Hyperalignment: http://dev.pymvpa.org/examples/hyperalignment.html
.. _PyMVPA: http://pymvpa.org
.. _Python: http://python.org
.. _studyforrest: http://studyforrest.org
.. _SUMA: http://afni.nimh.nih.gov/afni/suma
.. _MIT license: http://opensource.org/licenses/MIT
