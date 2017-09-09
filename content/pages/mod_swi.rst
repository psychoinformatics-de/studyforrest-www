Susceptibility-weighted scans
*****************************

:status: hidden
:slug: mod_swi
:JavaScripts: papaya.js
:Stylesheets: papaya.css

**Venography**

Susceptibility-weighted imaging is used for **venography**, as it is sensitive
to venous blood, hemorrhage, and iron storage. For example, veins appear black
in the example magnitude image below.
For more information on this image type see `Wikipedia
<http://en.wikipedia.org/wiki/Susceptibility_weighted_imaging>`_.

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
      <div class="papaya-preview" data-params="params">
        <img class="img-responsive"
             src="/pics/mod_swi_viewer_preview.jpg"
             title="Click to load interactive viewer"
             alt="SW-weighted example image"
             onclick="$(this.parentNode).addClass('papaya'); papaya.Container.startPapaya(); this.parentNode.removeChild(this);" />
      </div>
    </div><!-- /.col-md-12 -->
  </div><!-- /.row -->
