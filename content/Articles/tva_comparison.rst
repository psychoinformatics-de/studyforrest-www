Ask NeuroVault: Where are brain responses most similar?
*******************************************************

:date: 2016-03-26 01:00
:modified: 2014-06-22 20:00
:tags: NeuroVault, TVA, 7-Tesla, fMRI
:authors: Michael Hanke
:summary: Inter-subject similarity extends beyond the temporal voice areas
:slug: tva_comparison
:status: draft
:JavaScripts: papaya.js
:Stylesheets: papaya.css

.. raw:: html

 <script type="text/javascript">
     var params = [];
     params["worldSpace"] = true;
     params["images"] = ["data/7Tad_epi_grp_tmpl.nii.gz", "data/TVA_GGMM_152.nii.gz", "data/7Tad_ts_corr_pval.nii.gz"];
     params["expandable"] = true;
     params["kioskMode"] = false;
     params["7Tad_epi_grp_tmpl.nii.gz"] = {"min": 400, "max": 4000};
     params["TVA_GGMM_152.nii.gz"] = {"alpha": .7, "lut": "Blue Overlay"};
     params["7Tad_ts_corr_pval.nii.gz"] = {"alpha": .8, "min": .8, "max": 1, "lut": "Red-to-Yellow"};
     params["coordinate"] = [50, -20, 8];
 </script>

BOLD time series correlation on anatomically aligned data reveal consistent
brain responses to quasi natural auditory stimulation across all participants.
Areas of maximum similarity in both hemispheres are centered on the
anterolateral portion of the Planum Temporale |---| part of the auditory
ventrolateral pathway and known to be involved in processing complex sounds and
speech.

The figure below shows the relation of the areas of maximum similarity with the
localization of the *human temporal voice area* (TVA, Pernet et al., submitted;
see `NeuroVault <http://neurovault.org/images/106/>`_ for more information).

.. raw:: html

    <div class="papaya-preview" data-params="params">
      <img class="img-responsive"
           src="/pics/study_7Tad_tscorr_tva_viewer_preview.jpg"
           title="Click to load interactive viewer"
           alt="Study results figure (click me!)"
           onclick="$(this.parentNode).addClass('papaya'); papaya.Container.startPapaya(); this.parentNode.removeChild(this);" />
    </div>

.. |---| unicode:: U+02014 .. em dash
