T1-weighted MRI scans
*********************

:status: hidden
:Template: papaya_mod_demo
:slug: mod_t1w

**Gray-white brain tissue contrast**

In T1-weighted MR images white brain tissue (fibers) appears bright, while the
gray matter, where most neurons are located, is darker, and cerebrospinal fluid
(liquor) is black. The bright "shell" around the brain is not the skull, but
the fat layer in the scalp.
`More information on this image type 
<http://en.wikipedia.org/wiki/Spin%E2%80%93lattice_relaxation>`_.

.. raw:: html

  <script type="text/javascript">
       var params = [];
       params["worldSpace"] = false;
       params["images"] = ["/data/t1w.nii.gz"];
       params["expandable"] = true;
       params["kioskMode"] = true;
       params["t1w.nii.gz"] = {"min": 0, "max": 76};
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
          src="/pics/mod_t1w_viewer_preview.jpg"
          title="Click to load interactive viewer"
          alit="T1-weighted example image" />
    </div>
   </div><!-- /.col-md-12 -->
  </div><!-- /.row -->



Technical details
=================

Full-brain volumetric images (384x384x274) in NIfTI format recorded with a
Philips MR scanner at 3 Tesla using a 3D TFE sequence (0.67&nbsp;mm isotropic
voxel size). Facial features have been removed from these images for
de-identification.
