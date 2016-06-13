Speech annotation
*****************

:status: hidden
:slug: annot_speech
:JavaScripts: d3.v3.min.js, forrest_misc.js

In a movie, speech not only conveys abstract information, but also provides
insight into the emotional state of the speaker. Additionally, in our
audio-movie stimulus, almost all information about the story |---| including the
visual appearance |---| is communicated via speech.

Here we collect information on the speech content of the movie. All published
annotations are available in a `repository on GitHub
<https://github.com/psychoinformatics-de/studyforrest-data-annotations>`_ where
a dedicated README describes the content and format of all files.


Audio-description transcript
----------------------------

Any content of the audio-movie stimulus that cannot be inferred from the
regular DVD release is provided as an annotation. This is the transcript
of the additional voice-over narrator that describes the visual content of
the movie.

.. raw:: html

  <div id="audio_descr_annot_table"></div>

Dialog transcript
-----------------

A complete transcript of the dialog in the movie (for the English original as
well as the German dubbing) has been created. It is currently being validated
and will be made available shortly. Please contact `info@studyforrest.org
<mailto:info@studyforrest.org?subject=studyforrest.org>`_ if you are interested
in getting early access.

.. raw:: html

  <script>
  $(function() {
    csvtable_preview('#audio_descr_annot_table',
                     "/data/german_audio_description.csv",
                     ["Start", "End", "Transcript"],
                     3, 3);
  });
  </script>


.. |---| unicode:: U+02014 .. em dash
