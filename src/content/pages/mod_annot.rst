Stimulus annotations & surveys
******************************

:status: hidden
:slug: mod_annot

**Confounds and category labels**

Movie Stimulus
==============

The most important information first: All published annotations are available
in a `repository on GitHub
<https://github.com/psychoinformatics-de/studyforrest_annotations>`_ where a
`dedicated README
<https://github.com/psychoinformatics-de/studyforrest_annotations/blob/master/README.rst>`_
describes the content and format of all files.

.. raw:: html

   <style>.embed-container { 
     position: relative;
     padding-bottom: 56.25%;
     height: 0;
     overflow: hidden;
     max-width: 100%; }
   .embed-container iframe,
   .embed-container object,
   .embed-container embed {
     position: absolute;
     top: 0;
     left: 0;
     width: 100%;
     height: 100%; }</style>
   <div class='embed-container'>
     <iframe src='http://www.youtube.com/embed/bLvqoHBptjg'
             frameborder='0' allowfullscreen></iframe></div>

For the phase 1 dataset, participants listened to a German audio-description of
the movie "Forrest Gump" as broadcasted as an additional audio track for
visually impaired listeners on Swiss public television. The audio content is
largely identical to the dubbed German soundtrack of the movie except for
interspersed narrations by a male speaker who describes the visual content of a
scene. To aid reproducibility and further analysis, the audio description
soundtrack was temporally aligned to the audio track of the "Forrest Gump" DVD
release.

Phase 2 and later use the original audio-visual movie with the dubbed German
soundtrack (without additional narrations) as stimulus. In comparison to the
phase 1 audio-movie, it uses the exact same timing (and cut scenes).
Consequently, the timing information of all available annotation is compatible
with the audio-visual movie too.

Participant questionnaire
=========================

A plain text, comma-separated-value table with all participants' responses to a
questionnaire on demographic information, musical preference and background, as
well as familiarity with the "Forrest Gump" movie.

.. raw:: html

  <script src="/js/jquery.min.js"></script>
  <script src="/js/d3.v3.min.js"></script>
  <script src="/js/forrest_misc.js"></script>
  <script>
  csvtable_preview('#audio_descr_annot_table',
                   "/data/german_audio_description.csv",
                   ["Start", "End", "Transcript"],
                   3, 3);
  csvtable_preview('#scene_annot_table', "/data/scenes.csv",
                   ["Time", "Location", "Time of day", "Interior/exterior"],
                   3, 3);
  </script>


.. |---| unicode:: U+02014 .. em dash

