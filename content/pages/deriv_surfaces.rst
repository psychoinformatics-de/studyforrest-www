Cortical surface reconstructions
********************************

:status: hidden
:slug: deriv_surfaces
:JavaScripts: xtk.js


Structural brain scans can be used to reconstruct the cortical surface of the
brain. This process estimates various properties of the brain, such as
thickness of the gray matter, or cortical curvature. The example image below
shows both hemispheres of an individual brain. For the left hemisphere the
outer ("pial") surface is shown. For the right hemisphere the white matter
surface is shown with a colored overlay indicating the cortical curvature at
each surface point.

**Reconstructed cortial surfaces meshes** and various associated estimates were
generated from the `T1 <mod_t1w>`_ and `T2-weighted <mod_t2w>`_
images of each participant using the Freesurfer 5.3 image segmentation and
reconstruction pipeline.
The complete description of this processing step has been published in:

  Hanke et al. (2014). `A high-resolution 7-Tesla fMRI dataset from complex
  natural stimulation with an audio movie
  <http://www.nature.com/articles/sdata20143>`_. Scientific Data, 1.



.. raw:: html

 <script type="text/javascript">
   function load_xtk_renderer() {
   var r = new X.renderer3D();
   r.container = 'xtk_renderer';
   r.init();

   var lh = new X.mesh();
   lh.file = '/data/lh.pial';
   lh.color = [0.7, 0.7, 0.7];
   lh.opacity = 1.0;

   var rh = new X.mesh();
   rh.file = '/data/rh.orig';
   rh.opacity = 0.7;
   rh.scalars.file = '/data/rh.smoothwm.C.crv';
   rh.scalars.minColor = [0, 0, 1];
   rh.scalars.maxColor = [1, 1, 1];

   r.add(lh);
   r.add(rh);

   r.camera.position = [130, -130, 60];
   r.camera.up = [0, 0, 1];
   r.render();
 };
 </script>

  <div class="row">
   <div class="col-md-12">
    <div id='xtk_renderer' class="xtk_renderer">
     <img class="img-responsive center-block"
          onmousedown="load_xtk_renderer();$(this).hide();$('.xtk_help').show()"
          src="/pics/mod_surf_viewer_preview.jpg"
          title="Click to load interactive viewer"
          alt="Surface rendering example" />
    </div>
    <div class="xtk_help">
         <p>Usage: Left-click and drag to rotate the view, middle-click
         to pan, and right-click (or scroll) to zoom in and out.</p>
    </div>
   </div><!-- /.col-md-12 -->
  </div><!-- /.row -->
