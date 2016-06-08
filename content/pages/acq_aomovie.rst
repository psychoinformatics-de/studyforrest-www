Prolonged quasi-natural stimulation with an audio-movie
*******************************************************

:status: hidden
:slug: acq_aomovie
:JavaScripts: papaya.js, dygraph-combined.js, mod_physio.js
:Stylesheets: papaya.css

This dataset contains functional brain scans for 20 participants that listened
to a two-hour presentation of an audio-only version of the Hollywood feature
film `Forrest Gump <http://en.wikipedia.org/wiki/Forrest_Gump>`_ made for a
visually impaired audience (German dubbing). The complete description of this
dataset, including a number of validation analyses, has been published in:

  Hanke et al. (2014). `A high-resolution 7-Tesla fMRI dataset from complex
  natural stimulation with an audio movie
  <http://www.nature.com/articles/sdata20143>`_. Scientific Data, 1.

Two principle data modalities were acquired: **Blood oxygenation level
dependent (BOLD) fMRI scans**, continuously capturing brain activity at a
spatial resolution of 1.4 mm, and physiological recordings of **heart beat** and
**breathing**. For technical validation, all measurements are also available for
a full-length `gel phantom scan
<http://www.birncommunity.org/tools-catalog/function-birn-stability-phantom-qa-procedures/>`_.

Due to the high scan resolution, the brain coverage of the scans was limited.
The following demo illustrates the average volume captured across participants
(click on the image for an interactive demonstration). In addition to the raw
data, BOLD scans corrected for motion and spatial distortions (see below), and
group-aligned images are provided as part of the data release.

.. raw:: html

  <script type="text/javascript">
      var params = [];
      params["worldSpace"] = false;
      params["images"] = ["/data/7Tad_epi_grp_tmpl.nii.gz"];
      params["expandable"] = true;
      params["kioskMode"] = true;
      params["7Tad_epi_grp_tmpl.nii.gz"] = {"min": 400, "max": 4000};
  </script>

  <div class="row">
    <div class="col-md-12">
      <div class="papaya-preview" data-params="params">
        <img class="img-responsive"
             src="/pics/mod_fmri_7Tad_tmpl_viewer_preview.jpg"
             title="Click to load interactive viewer"
             alt="FMRI group template example image"
             onclick="$(this.parentNode).addClass('papaya'); papaya.Container.startPapaya(); this.parentNode.removeChild(this);" />
      </div>
    </div><!-- /.col-md-12 -->
  </div><!-- /.row -->

Recordings of cardiac and respiratory trace were syncronized with the fMRI scan
for precise temporal alignment. The interactive plot below shows an exemplary
minute of data at 50 Hz sampling rate (actual data is sampled at 200 Hz).

.. raw:: html

  <div class="row">
   <div class="col-md-12">
       <button type="button" class="btn btn-default" onclick="showLF()">Show trends</button>
       <button type="button" class="btn btn-default" onclick="showDetail()">Show details</button>
     <span id="physio_legend" style='width:100%;text-align:right'></span>
     <div id="physio_chart" style='margin-top:10px;width:100%;height=300px'></div>
    <div class="dygraph_help">
         <p>Usage: Click and drag on the lower focus chart to move along the
         time axis. Perform temporal data averaging by specifying the length
         of the window (in samples) in the lower left of the plot.</p>
    </div>
   </div><!-- /.col-md-12 -->
  </div><!-- /.row -->

Lastly, motion estimates are provided for the distortion-corrected scan to
facilitate subsequent filtering or modeling. The plots below show example data
from one subject for an entire movie segment (approx. 15 min).

.. raw:: html

  <div class="row">
   <div class="col-md-12">
     <span id="moco_transl_legend" style='width:100%;text-align:right'></span>
     <div id="moco_transl_chart" style='margin-top:10px;width:100%;height=200px'></div>
     <span id="moco_rot_legend" style='width:100%;text-align:right'></span>
     <div id="moco_rot_chart" style='margin-top:10px;width:100%;height=200px'></div>
    <div class="dygraph_help">
         <p>Usage: Click and drag on the lower focus chart to move along the
         time axis. Perform temporal data averaging by specifying the length
         of the window (in samples) in the lower left of the plot.</p>
    </div>
   </div><!-- /.col-md-12 -->
  </div><!-- /.row -->

.. |---| unicode:: U+02014 .. em dash

