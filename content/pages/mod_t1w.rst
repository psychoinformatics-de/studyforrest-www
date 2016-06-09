T1-weighted MRI scans
*********************
:status: hidden
:slug: mod_t1w
:JavaScripts: papaya.js
:Stylesheets: papaya.css


This type of MR scan exhibits **gray-white brain tissue contrast**. White brain
tissue (fibers) appears bright, while the gray matter, where most neurons are
located, is darker, and cerebrospinal fluid (liquor) is black. The bright
"shell" around the brain is not the skull, but the fat layer in the scalp.
The provided images have been recorded in 0.67 mm resolution.
For more information on this image type see `Wikipedia
<http://en.wikipedia.org/wiki/Spin%E2%80%93lattice_relaxation>`_.
The complete description of this acquisition
has been published in:

  Hanke et al. (2014). `A high-resolution 7-Tesla fMRI dataset from complex
  natural stimulation with an audio movie
  <http://www.nature.com/articles/sdata20143>`_. Scientific Data, 1.


.. raw:: html

  <script type="text/javascript">
      var params = [];
      params["worldSpace"] = false;
      params["images"] = ["/data/t1w.nii.gz"];
      params["expandable"] = true;
      params["kioskMode"] = true;
      params["t1w.nii.gz"] = {"min": 0, "max": 76};
  </script>

  <div class="row">
    <div class="col-md-12">
      <div class="papaya-preview" data-params="params">
        <img class="img-responsive"
             src="/pics/mod_t1w_viewer_preview.jpg"
             title="Click to load interactive viewer"
             alt="T1-weighted example image"
             onclick="$(this.parentNode).addClass('papaya'); papaya.Container.startPapaya(); this.parentNode.removeChild(this);" />
      </div>
    </div><!-- /.col-md-12 -->
  </div><!-- /.row -->
