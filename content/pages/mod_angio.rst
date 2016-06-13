Time-of-flight inflow angiography
*********************************

:status: hidden
:slug: mod_angio
:JavaScripts: papaya.js
:Stylesheets: papaya.css

An **Arteriography** is available for every participant.  In time-of-flight
angiography, flowing blood, such as the one in arteries, appears much
brighter than stationary brain tissue. The provided images have partial brain
coverage |---| approximately the same volume as the `functional MRI scans for the
audio movie <acq_aomovie>`_. The complete description of this acquisition
has been published in:

  Hanke et al. (2014). `A high-resolution 7-Tesla fMRI dataset from complex
  natural stimulation with an audio movie
  <http://www.nature.com/articles/sdata20143>`_. Scientific Data, 1.

The sample image below is a low-resolution demo of the actual angiographies in
the dataset. For more information on this image type, see `Wikipedia
<http://en.wikipedia.org/wiki/Magnetic_resonance_angiography>`_.

.. raw:: html

  <script type="text/javascript">
      var params = [];
      params["worldSpace"] = false;
      params["images"] = ["/data/angio.nii.gz"];
      params["expandable"] = true;
      params["kioskMode"] = true;
      params["angio.nii.gz"] = {"min": 0, "max": 150};
  </script>

  <div class="row">
    <div class="col-md-12">
      <div class="papaya-preview" data-params="params">
        <img class="img-responsive"
             src="/pics/mod_angio_viewer_preview.jpg"
             title="Click to load interactive viewer"
             alt="Angiography example image"
             onclick="$(this.parentNode).addClass('papaya'); papaya.Container.startPapaya(); this.parentNode.removeChild(this);" />
      </div>
    </div><!-- /.col-md-12 -->
  </div><!-- /.row -->

.. |---| unicode:: U+02014 .. em dash
