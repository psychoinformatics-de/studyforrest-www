Diffusion tensor MRI scans
**************************

:status: hidden
:slug: mod_dti

**Nerve fibre bundles**

Diffusion tensor imaging (DTI) is a technique that can be used to visualize
neural tracts or nerve fibre bundles by measuring the direction of water
diffusion in brain tissue. The example figure below shows a so-called
**connectome** |---| the structure of all nerve fibre pathways in the brain
|---| estimated from the DTI data of a single individual. The red horizontal
lines in the center of the image show the `corpus callosum
<http://en.wikipedia.org/wiki/Corpus_callosum>`_, the bridge between the two
brain halves. The blue vertical lines in the lower center of the image show the
`corticospinal tract <http://en.wikipedia.org/wiki/Pyramidal_tracts>`_, where
the brain is connected with the nervous system in other parts of the body.
Click on the image to load an interactive viewer to study the complex
three-dimensional structure of the connectome.

.. raw:: html

 <script type="text/javascript">
   function load_xtk_renderer() {
   var r = new X.renderer3D();
   r.container = 'xtk_renderer';
   r.init();
   r.camera.up = [0, 0, 1];
   r.camera.position = [0, 50, -100];
   // create a new X.fibers
   var fibers = new X.fibers();
   // .. associate the TrackVis .TRK file
   fibers.file = '/data/testme.trk';
   // .. add the fibers
   r.add(fibers);

   r.render();
 };
 </script>


  <div class="row">
   <div class="col-md-12">
    <div id='xtk_renderer' class="xtk_renderer">
     <img class="img-responsive center-block"
          onmousedown="load_xtk_renderer();$(this).hide();$('.xtk_help').show()"
          src="/pics/mod_dti_viewer_preview.jpg"
          title="Click to load interactive viewer"
          alt="Brain fiber rendering example" />
    </div>
    <div class="xtk_help">
         <p>Usage: Left-click and drag to rotate the view, middle-click
         to pan, and right-click (or scroll) to zoom in and out.</p>
    </div>
   </div><!-- /.col-md-12 -->
  </div><!-- /.row -->
 
Technical details
=================

Full-brain volumetric images (144x144x70) in NIfTI format recorded with a
Philips MR scanner at 3 Tesla using a diffusion-weighted single-shot spin-echo
EPI sequence (2mm isotropic voxel size). Facial features have been
removed from these images for de-identification. Records of B-values and
B-vector orientations are provided, as well as a fieldmap (3 mm isotropic
voxel size) for distortion correction.
`More information on this image type
<http://en.wikipedia.org/wiki/Diffusion_tensor_imaging>`_

.. raw:: html

  <script src="/js/xtk.js"></script>

.. |---| unicode:: U+02014 .. em dash

