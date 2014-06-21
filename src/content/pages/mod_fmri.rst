Functional brain imaging data
*****************************

:status: hidden
:Template: papaya_mod_demo
:slug: mod_fmri

**Prolonged quasi-natural stimulation**

Auditory stimulation
====================

**Forrest Gump audio movie**

Eight approximately 15 min long recording runs, together comprising the
entire duration of a two-hour presentation of an audio-only version of the
Hollywood feature film `Forrest Gump
<http://en.wikipedia.org/wiki/Forrest_Gump>`_ made for a visually impaired
audience (German dubbing).  Several flavors of raw and preprocessed data are
available:

Blood oxygenation level dependent (BOLD) scans
  These images have partial brain coverage |---| centered on the
  auditory cortices in both brain hemispheres. This raw data type
  suffers from severe geometric distortions and is of limited use
  for further analysis.
Distortion-corrected BOLD images
  Identical to raw BOLD data, but with a scanner-side correction
  for geometric distortions applied (includes correction for
  participant motion). These data are most suitable for
  analysis of individual brains.
Group-aligned BOLD images
  These images have been anatomically aligned to a BOLD group
  template image that was generated from the entire group of
  participants (see figure below). Two alignment flavors are available:
  "linear" (image projection using an affine transformation), and
  "non-linear" (image projection by non-linear warpfields).
  These data are most suitable for group-analyses and inter-individual
  comparisons.

.. raw:: html

  <script type="text/javascript">
       var params = [];
       params["worldSpace"] = false;
        params["images"] = ["/data/7Tad_epi_grp_tmpl.nii.gz"];
       params["expandable"] = true;
       params["kioskMode"] = true;
        params["7Tad_epi_grp_tmpl.nii.gz"] = {"min": 400, "max": 4000};
       function main_viewer_loaded() {
          $("#main_viewer").show();
       }
  </script>

  <div class="row">
   <div class="col-md-12">
    <div class="papayaviewer"
         id="main_viewer"
         onclick='addViewer("main_viewer", params, main_viewer_loaded)'>
     <img class="img-responsive"
          src="/pics/mod_fmri_7Tad_tmpl_viewer_preview.jpg"
          title="Click to load interactive viewer"
          alit="FMRI group template example image" />
    </div>
   </div><!-- /.col-md-12 -->
  </div><!-- /.row -->



Technical details
-----------------

For each run, there are 4D volumetric images (160x160x36)in NIfTI format , one
volume recorded every 2 s, obtain from a Siemens MR scanner at 7 Tesla
using a T2*-weighted gradient-echo EPI sequence (1.4 mm isotropic voxel
size). These images have partial brain coverage |---| centered on the
auditory cortices in both brain hemispheres and include frontal and posterior
portions of the brain.  There is no coverage for the upper portion of the brain
(e.g. large parts of motor and somato-sensory cortices).
`More information on this image type 
<http://en.wikipedia.org/wiki/Functional_magnetic_resonance_imaging>`_.


Phantom data
============
**Technical noise assessment**

Identical imaging set up as the auditory stimulation fMRI, but
scanning a gel phantom instead of a human participant. This data
is a measurement of the technical noise in the fMRI acquisition
pipeline.
`More information on this data type
<http://www.birncommunity.org/tools-catalog/function-birn-stability-phantom-qa-procedures/>`_.

.. |---| unicode:: U+02014 .. em dash

