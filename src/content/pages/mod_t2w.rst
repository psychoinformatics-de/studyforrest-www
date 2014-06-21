T2-weighted MRI scans
*********************

:status: hidden
:Template: papaya_mod_demo
:slug: mod_t2w

**Images with fluid-tissue contrast**

In T2-weighted MR images stationary water (like cerebrospinal fluid) appears
white, while brain tissue is darker. Blood vessels are black as the magnetized
protons have been flushed away by the time of the measurement.
`More information on this image type 
<http://en.wikipedia.org/wiki/Spin-spin_relaxation_time>`_.

.. raw:: html

  <script type="text/javascript">
       var params = [];
       params["worldSpace"] = false;
       params["images"] = ["/data/t2w.nii.gz"];
       params["expandable"] = true;
       params["kioskMode"] = true;
       params["t2w.nii.gz"] = {"min": 0, "max": 150};
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
          src="/pics/mod_t2w_viewer_preview.jpg"
          title="Click to load interactive viewer"
          alit="T2-weighted example image" />
    </div>
   </div><!-- /.col-md-12 -->
  </div><!-- /.row -->



Technical details
=================

Full-brain volumetric images (384x384x274) in NIfTI format recorded with a
Philips MR scanner at 3 Tesla using a 3D TSE sequence (0.67 mm isotropic
voxel size). Facial features have been removed from these images for
de-identification.
