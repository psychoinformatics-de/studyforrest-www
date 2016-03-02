High-resolution 7-Tesla fMRI data on the perception of musical genres
*********************************************************************

:date: 2015-06-29 18:00
:date: 2015-06-29 18:00
:tags: data descriptor, stimulus, music, physiological data, encoding model
:authors: Michael Hanke, Richard Dinga, Christian Häusler,
         J. Swaroop Guntupalli, Michael Casey, Falko R. Kaule, Jörg Stadler
:summary: enabling the validation of encoding models for music
          perception on data from natural stimulation
:slug: 7tmusicdata

We present a new data release that enables comparative studies of the
representation of musical genres (spectrum, timbre, vocal content) with ultra
high-field, high resolution fMRI data of the *studyforrest* participants.
Importantly, the same landmark-based procedure for automatic slice positioning
that was used to align the scanner field-of-view between acquisition sessions,
was used again to align the field-of-view for this acquisition with the one
used for the previously released audio-movie data. In conjunction with the
previous data releases, these new data will further expand the continuum of
research question that can be approached with the joint dataset.  For example,
the development of encoding models for cortical representations of music in
complex auditory stimuli (the audio-movie contains several dozen musical
excerpts from a broad range of genres). To this end, we include extracted audio
features that represent the time-frequency information of each stimulus in four
different views. The views are mapped to different perceptually-motivated
scales (mel and decibel scales) and via a decorrelating linear transformation
(DCT-II). Source code for the implementation of the stimulation paradigm and
audio feature extraction are included in the data release. We hope that
providing these data will catalyze discoveries of auditory stimulus codes in
neural populations.

.. figure:: {filename}/pics/music_stimuli.png
   :align: right
   :alt: music stimulus spectrograms

   Spectrograms for all 25 stimuli showing structural differences in the
   time-frequency characteristics of the five musical genres. Each stimulus was
   a six second excerpt from the middle of a distinct musical piece. Excerpts
   were normalized so that their root-mean-square power values were equal, and
   a 50 ms quarter-sine ramp was applied at the start and end of each excerpt
   to suppress transients. Most prominent are the differences between music
   clips with and without vocal components.

A detailed data descriptor has been published in `F1000Research
<http://dx.doi.org/10.12688/f1000research.6679.1>`_. The data itself is also
availabled for download from openfmri.org. Moreover, it has been integrated
with the full studyforrest dataset (for data access see `the overview
<{filename}/pages/access.rst>`_).

Acknowledgements
================

This research was supported by the German Federal Ministry of Education and
Research (BMBF) as part of a US-German collaboration in computational
neuroscience (CRCNS; awarded to James Haxby, Peter Ramadge, and Michael Hanke),
co-funded by the BMBF and the US National Science Foundation (BMBF 01GQ1112;
NSF 1129855). Work on the data-sharing technology employed for this research
was supported by US-German CRCNS project awarded to Yaroslav O. Halchenko and
Michael Hanke, co-funded by the BMBF and the US National Science Foundation
(BMBF 01GQ1411; NSF 1429999). Michael Hanke was supported by funds from the
German federal state of Saxony-Anhalt, Project: Center for Behavioral Brain
Sciences.

Citation
========

Hanke M., Dinga R., Häusler C., Guntupalli, J. S., Casey, M., Kaule, F. R.
& Stadler, J. (2015). `High-resolution 7-Tesla fMRI data on the
perception of musical genres – an extension to the studyforrest dataset
<http://dx.doi.org/10.12688/f1000research.6679.1>`_.
F1000Research, 4:174.

.. |---| unicode:: U+02014 .. em dash

