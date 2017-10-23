T2-weighted MRI scans
*********************

:status: hidden
:slug: mod_t2w
:JavaScripts: jquery.min.js, papaya.js
:Stylesheets: papaya.css

This type of MR scan exhibits **fluid-tissue contrast**.
Stationary water (like cerebrospinal fluid) appears
white, while brain tissue is darker. Blood vessels are black, as the magnetized
protons have been flushed away by the time of the measurement.
The provided images have been recorded in 0.67 mm resolution.
For more information on this image type see `Wikipedia
<http://en.wikipedia.org/wiki/Spin-spin_relaxation_time>`_.
The complete description of this acquisition
has been published in:

  Hanke et al. (2014). `A high-resolution 7-Tesla fMRI dataset from complex
  natural stimulation with an audio movie
  <http://www.nature.com/articles/sdata20143>`_. Scientific Data, 1.


.. raw:: html

  <script type="text/javascript">
      var params = [];
      params["worldSpace"] = false;
      params["images"] = ["/data/t2w.nii.gz"];
      params["expandable"] = true;
      params["kioskMode"] = true;
      params["t2w.nii.gz"] = {"min": 0, "max": 150};
  </script>

  <div class="row">
    <div class="col-md-12">
      <div class="papaya-preview" data-params="params">
        <img class="img-responsive"
             src="/pics/mod_t2w_viewer_preview.jpg"
             title="Click to load interactive viewer"
             alt="T2-weighted example image"
             onclick="$(this.parentNode).addClass('papaya'); papaya.Container.startPapaya(); this.parentNode.removeChild(this);" />
      </div>
    </div><!-- /.col-md-12 -->
  </div><!-- /.row -->
