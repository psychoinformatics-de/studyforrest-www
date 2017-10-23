Movie structure annotations
***************************

:status: hidden
:slug: annot_structure
:JavaScripts: jquery.min.js, d3.v3.min.js, forrest_misc.js

A movie is a highly engineered stimulus that primarily consists of scenes
(parts of the plot that take places at a consecutive segment of space and time)
and shots (uninterrupted observation of events by the camera). The sequence and
particular composition of these two elements convey a lot of information that
is critical for story comprehension and helps the viewer (or listener) orient
themselves in the world of the movie.

Here we collect information on the movie structure. All published annotations
are available in a `repository on GitHub
<https://github.com/psychoinformatics-de/studyforrest-data-annotations>`_ where
a dedicated README describes the content and format of all files.

Movie scenes
------------

Start and end times for all scenes in the cut of the movie that is used as the
stimulus. In addition, each annotation contains whether a scene takes place
indoors or outdoors.

.. raw:: html

  <div id="scene_annot_table"></div>

Movie shots
-----------

Temporal location of all cuts in the movie (only applicable to visual
stimulation). Cuts were initially detected using an automated procedure and were
then later curated by hand.

.. raw:: html

  <script>
  $(function() {
    csvtable_preview('#scene_annot_table', "/data/scenes.csv",
                     ["Time", "Location", "Time of day", "Interior/exterior"],
                     3, 3);
  });
  </script>

.. |---| unicode:: U+02014 .. em dash
