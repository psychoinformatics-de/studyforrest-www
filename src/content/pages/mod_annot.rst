Stimulus annotations & surveys
******************************

:status: hidden
:slug: mod_annot

**Confounds and category labels**

Stimulus
========

For the phase 1 dataset, participants listened to a German audio-description of
the movie "Forrest Gump" as broadcasted as an additional audio track for
visually impaired listeners on Swiss public television. The audio content is
largely identical to the dubbed German soundtrack of the movie except for
interspersed narrations by a male speaker who describes the visual content of a
scene. To aid reproducibility and further analysis, the audio description
soundtrack was temporally aligned to the audio track of the "Forrest Gump" DVD
release.

Audio-description transcript
----------------------------

This transcript contains all information on the audio-movie content that cannot
be inferred from the DVD release |---| in a plain text, comma-separated-value
table. Start and end time stamp, as well as the spoken text are provided for
each continuous audio description segment.

.. raw:: html

  <div id="audio_descr_annot_table"></div>

Movie scenes
------------

A plain text, comma-separated-value table with start and end time for all 198
scenes in the presented movie cut. In addition, each table row contains whether
a scene takes place indoors or outdoors.

.. raw:: html

  <div id="scene_annot_table"></div>

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

