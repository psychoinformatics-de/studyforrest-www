Susceptibility-weighted scans
*****************************

:status: hidden
:slug: mod_swi
:JavaScripts: papaya.js
:Stylesheets: papaya.css

**Venography**

Susceptibility-weighted imaging is sensitive to venous blood, hemorrhage and
iron storage. For example, veins appear black in the example magnitude image
below.
`More information on this image type 
<http://en.wikipedia.org/wiki/Susceptibility_weighted_imaging">`_.

.. raw:: html

  <script type="text/javascript">
      var params = [];
      params["worldSpace"] = false;
      params["images"] = ["/data/swi_mag.nii.gz"];
      params["expandable"] = true;
      params["kioskMode"] = true;
      params["swi_mag.nii.gz"] = {"min": 50, "max": 200};
  </script>

  <div class="row">
    <div class="col-md-12">
      <div class="papaya papayaviewer" data-params="[]"
           onclick="papaya.Container.resetViewer(0, params); this.onclick=null;">
        <img class="img-responsive"
             src="/pics/mod_swi_viewer_preview.jpg"
             title="Click to load interactive viewer"
             alt="SW-weighted example image" />
      </div>
    </div><!-- /.col-md-12 -->
  </div><!-- /.row -->


Technical details
=================

Full-brain volumetric images (512x512x500) in NIfTI format recorded with a
Philips MR scanner at 3 Tesla using a 3D Presto FFE sequence
(0.43x0.43x0.3 mm voxel size). Facial features have been removed from
these images for de-identification. Separate phase and magnitude images are
provided.
