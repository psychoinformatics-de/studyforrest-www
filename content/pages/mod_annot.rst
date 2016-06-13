Stimulus annotations & surveys
******************************

:status: hidden
:slug: mod_annot
:JavaScripts: d3.v3.min.js, forrest_misc.js

**Confounds and category labels**

Movie Stimulus
==============

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

Here is a brief description of all annotations included in the public dataset.

* Speech_
* `Movie structure`_ (scenes and shots)
* Emotions_
* Music_
* `Non-speech vocalizations`_


.. _speech:

|

Audio-description transcript
----------------------------

This transcript contains all information on the audio-movie content that cannot
be inferred from the DVD release |---| in a plain text, comma-separated-value
table. Start and end time stamp, as well as the spoken text are provided for
each continuous audio description segment.

.. raw:: html

  <div id="audio_descr_annot_table"></div>

Dialog transcript
-----------------

A complete transcript of the dialog in the movie (for the English original, as
well as the German dubbing) has been created. It is currently being validated
and will be made available shortly. Please contact `info@studyforrest.org
<mailto:info@studyforrest.org?subject=studyforrest.org>`_ if you are interested
in getting early access.


.. _movie structure:

|

Movie scenes
------------

A plain text, comma-separated-value table with start and end time for all 198
scenes in the presented movie cut. In addition, each table row contains whether
a scene takes place indoors or outdoors.

.. raw:: html

  <div id="scene_annot_table"></div>

Movie shots
-----------

A plain text table with a single column that contains the location of all cuts
in the movie (only applicable to visual stimulation). Cuts were initially
detected using an automated procedure and later curated by hand.

.. _emotions:

|

Portrayed emotions
------------------

Characterization of the temporal location and duration of portrayed emotions by
independent 12 observers. The nature of an emotion was characterized with basic
attributes, such as arousal and valence, as well as 22 explicit emotion
category labels. In addition, annotations include a record of the perceptual
evidence for the presence of an emotion. Both variant of the stimulus
(audio-only and auto-visual) were annotated separately. In addition to raw
annotations, aggregate time series of inter-observer agreement are provided
that can be used as probabilistic indicators of particular attributes of
portrayed emotions. All data is provided as plain text (comma-separated value)
tables.

A detailed data descriptor has been published in `F1000Research
<http://dx.doi.org/10.12688/f1000research.6230.1>`_. The data itself has been
integrated with the main dataset, but is also available for download from the
article at F1000Research.

.. _music:

|

Music
-----

There is an initial description of all musical pieces in the movie. Please
contact `info@studyforrest.org
<mailto:info@studyforrest.org?subject=studyforrest.org>`_ if you are interested
in getting early access.

.. _non-speech vocalizations:

|

Non-speech vocalizations
------------------------

There is an initial description of all non-speech vocalizations in the movie,
i.e. sounds produced by a human voice that are not speech.  Please contact
`info@studyforrest.org
<mailto:info@studyforrest.org?subject=studyforrest.org>`_ if you are interested
in getting early access.


.. _questionaire:

|

Participant questionnaire
=========================

A plain text, comma-separated-value table with all participants' responses to a
questionnaire on demographic information, musical preference and background, as
well as familiarity with the "Forrest Gump" movie.

.. raw:: html

  <script>
  $(function() {
    csvtable_preview('#audio_descr_annot_table',
                     "/data/german_audio_description.csv",
                     ["Start", "End", "Transcript"],
                     3, 3);
    csvtable_preview('#scene_annot_table', "/data/scenes.csv",
                     ["Time", "Location", "Time of day", "Interior/exterior"],
                     3, 3);
  });
  </script>

.. |---| unicode:: U+02014 .. em dash
