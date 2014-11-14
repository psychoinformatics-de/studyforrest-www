Ask NeuroVault: Where are brain responses most similar?
*******************************************************

:date: 2015-03-26 01:00
:modified: 2014-06-22 20:00
:tags: NeuroVault, TVA, 7-Tesla, fMRI
:author: Michael Hanke
:summary: Inter-subject similarity extends beyond the temporal voice areas
:slug: tva_comparison

.. raw:: html

 <link rel="stylesheet" type="text/css" href="css/papaya/base.css" />
 <link rel="stylesheet" type="text/css" href="css/papaya/ui/toolbar.css" />
 <link rel="stylesheet" type="text/css" href="css/papaya/ui/menu.css" />
 <link rel="stylesheet" type="text/css" href="css/papaya/ui/dialog.css" />
 <link rel="stylesheet" type="text/css" href="css/papaya/utilities/nojs.css" />
 <link rel="stylesheet" type="text/css" href="css/papaya/utilities/unsupported.css" />
 <link rel="stylesheet" type="text/css" href="css/papaya/viewer/viewer.css" />
 <script type="text/javascript" src="js/papaya/constants.js"></script>
 <script type="text/javascript" src="js/papaya/core/coordinate.js"></script>
 <script type="text/javascript" src="js/papaya/core/point.js"></script>
 <script type="text/javascript" src="js/papaya/volume/header.js"></script>
 <script type="text/javascript" src="js/papaya/volume/imagedata.js"></script>
 <script type="text/javascript" src="js/papaya/volume/imagedescription.js"></script>
 <script type="text/javascript" src="js/papaya/volume/imagedimensions.js"></script>
 <script type="text/javascript" src="js/papaya/volume/imagerange.js"></script>
 <script type="text/javascript" src="js/papaya/volume/imagetype.js"></script>
 <script type="text/javascript" src="js/papaya/volume/orientation.js"></script>
 <script type="text/javascript" src="js/papaya/volume/transform.js"></script>
 <script type="text/javascript" src="js/papaya/volume/volume.js"></script>
 <script type="text/javascript" src="js/papaya/volume/voxeldimensions.js"></script>
 <script type="text/javascript" src="js/papaya/volume/voxelvalue.js"></script>
 <script type="text/javascript" src="js/papaya/volume/nifti/header-nifti.js"></script>
 <script type="text/javascript" src="js/papaya/volume/nifti/nifti.js"></script>
 <script type="text/javascript" src="js/papaya/viewer/colortable.js"></script>
 <script type="text/javascript" src="js/papaya/viewer/display.js"></script>
 <script type="text/javascript" src="js/papaya/viewer/preferences.js"></script>
 <script type="text/javascript" src="js/papaya/viewer/screenslice.js"></script>
 <script type="text/javascript" src="js/papaya/viewer/screenvol.js"></script>
 <script type="text/javascript" src="js/papaya/viewer/viewer.js"></script>
 <script type="text/javascript" src="js/papaya/ui/dialog.js"></script>
 <script type="text/javascript" src="js/papaya/ui/menu.js"></script>
 <script type="text/javascript" src="js/papaya/ui/menuitem.js"></script>
 <script type="text/javascript" src="js/papaya/ui/menuitemcheckbox.js"></script>
 <script type="text/javascript" src="js/papaya/ui/menuitemfilechooser.js"></script>
 <script type="text/javascript" src="js/papaya/ui/menuitemrange.js"></script>
 <script type="text/javascript" src="js/papaya/ui/menuitemslider.js"></script>
 <script type="text/javascript" src="js/papaya/ui/menuitemspacer.js"></script>
 <script type="text/javascript" src="js/papaya/ui/toolbar.js"></script>
 <script type="text/javascript" src="js/papaya/main.js"></script>
 <script type="text/javascript" src="js/papaya/utilities/base64-binary.js"></script>
 <script type="text/javascript" src="js/papaya/utilities/browser.js"></script>
 <script type="text/javascript" src="js/papaya/utilities/gunzip.js"></script>
 <script type="text/javascript" src="js/papaya/utilities/numerics.js"></script>
 <script type="text/javascript" src="js/papaya/utilities/platform.js"></script>
 <script type="text/javascript" src="js/papaya/utilities/utilities.js"></script>
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
     function main_viewer_loaded() {
         $("#main_viewer").show();
     }
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

     <div class="papayaviewer"
         id="main_viewer"
         onclick='addViewer("main_viewer", params, main_viewer_loaded)'>
     <img class="img-responsive"
          src="/pics/study_7Tad_tscorr_tva_viewer_preview.jpg"
          title="Click to load interactive viewer"
          alt="Study results figure (click me!)" />
    </div>

.. |---| unicode:: U+02014 .. em dash

