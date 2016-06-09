Diffusion tensor MRI scans
**************************

:status: hidden
:slug: mod_dwi

Diffusion-weighted imaging (DWI) is a technique that can be used to visualize
neural tracts or **nerve fibre bundles** by measuring the direction of water
diffusion in brain tissue. The example figure below shows a so-called
**connectome** |---| the structure of nerve fibre pathways in the brain
|---| estimated from the DWI data of a single individual. The red horizontal
lines in the center of the image show the `corpus callosum
<http://en.wikipedia.org/wiki/Corpus_callosum>`_, the bridge between the two
brain halves. The blue vertical lines in the lower center of the image show the
`corticospinal tract <http://en.wikipedia.org/wiki/Pyramidal_tracts>`_, where
the brain is connected with the nervous system in other parts of the body.
The provided scans have been made with a standard clinical procedure at 2 mm
spatial resolution. For more more information on this image type see
`Wikipedia <http://en.wikipedia.org/wiki/Diffusion_tensor_imaging>`_
The complete description of this acquisition
has been published in:

  Hanke et al. (2014). `A high-resolution 7-Tesla fMRI dataset from complex
  natural stimulation with an audio movie
  <http://www.nature.com/articles/sdata20143>`_. Scientific Data, 1.


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
   fibers.file = '/data/wm_streamlines.trk';
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
  <script src="/js/xtk.js"></script>

.. |---| unicode:: U+02014 .. em dash

