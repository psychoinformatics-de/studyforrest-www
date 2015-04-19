Portrayed emotions in the movie "Forrest Gump"
*******************************************************************************************

:date: 2015-04-19 01:00
:modified: 2015-04-19 01:00
:tags: data descriptor, observation, stimulus, annotation, emotion
:author: Annika Labs, Theresa Reich, Helene Schulenburg, Manuel Boennen,
         Mareike Gehrke, Madleen Golz, Benita Hartigs, Nico Hoffmann,
         Sebastian Keil, Malú Perlow, Anne Katrin Peukmann, Lea Noell Rabe,
         Franca-Rosa von Sobbe, Michael Hanke
:summary: on the utility of the movie and audio-movie stimulus for
          emotion research
:slug: ds_portrayed_emotions

One of the challenges of using natural stimuli for cognitive neuroscience
research is their complexity and the corresponding uncertainty which stimulus
aspects are actually driving cognition at any given time.  The most promising
approach to tackle this challenge is to describe a stimulus in as much detail
as possible, in order to discover and exploit all possible stimulus dimensions.
A two-hour movie, like *Forrest Gump* delivers a gigantic amount of information
in the auditory and the visual domain. Today, many of its properties can be
determined by computer algorithms (detection of faces, scenes and shot
boundaries, even speaker identification via voice recognition). On the other
hand, many aspects that are extremely relevant for social cognition are much
harder to extract. One example is the emotional content.

Here we present a dataset with a description of portrayed emotions in the movie
”Forrest Gump”. A total of 12 observers independently annotated emotional
episodes regarding their temporal location and duration. The nature of an
emotion was characterized with basic attributes, such as arousal and valence,
as well as explicit emotion category labels. In addition, annotations include a
record of the perceptual evidence for the presence of an emotion. Two variants
of the movie were annotated separately: 1) an audio-movie version of Forrest
Gump that has been used as a stimulus for out previously released functional
brain imaging dataset (phase one), and 2) the original audio-visual movie. We
present reliability and consistency estimates that suggest that both stimuli
can be used to study visual and auditory emotion cue processing in real-life
like situations. Raw annotations from all observers are publicly released in
full in order to maximize their utility for a wide range of applications and
possible future extensions. In addition, aggregate time series of
inter-observer agreement with respect to particular attributes of portrayed
emotions are provided to facilitate adoption of these data.

.. figure:: {filename}/pics/study_emotions_intercorr.png
    :align: right
    :alt: Intra-stimulus emotion indicator correlation

    The lower triangular matrix depicts the correlations between the IOA time
    courses for the three primary bipolar emotion attributes (arousal
    [high/low], valence [pos/neg], and direction [self/other]), the 22 emotion
    categories, and the six emotion onset indicators for the audio-visual
    movie. The upper triangular matrix shows the corresponding correlations for
    the audio-only movie. There were no observations for the emotion “fears
    confirmed”, or the facial expression onset cue in the audio-only movie.
    Likewise, there were no observations for the “narrator” onset cue in the
    audio-visual movie. The corresponding undefined correlations are depicted
    as zeros.

In combination with the already publicly available brain imaging data, these
annotations form a two-hour high resolution fMRI measurement for auditory
emotion cue processing from 20 participants. With the addition of a future
publication of brain imaging data recorded from a stimulation with the
audio-visual movie, the full dataset will enable comparative studies
investigating the processing of rich emotional stimuli via different sensory
pathways. Moreover, these new annotations of portrayed emotions are another
step towards a comprehensive description of this reproducible movie stimulus1
and improve its general utility for independent studies on social cognition
with a focus on the perception of emotions in real-life situations.

A detailed data descriptor has been published in `F1000Research
<http://dx.doi.org/10.12688/f1000research.6230.1>`_. The data itself is also
availabled for download from the article at F1000Research. Moreover, it has been
integrated with the full studyforrest dataset (for data access see
`the overview <{filename}/pages/access.rst>`_).

Acknowledgements
================

This research was, in part, supported by the German Federal Ministry of
Education and Research (BMBF) as part of a US-German collaboration in
computational neuroscience (CRCNS; awarded to James Haxby, Peter Ramadge, and
Michael Hanke), co-funded by the BMBF and the US National Science Foundation
(BMBF 01GQ1112; NSF 1129855). Michael Hanke was supported by funds from the
German federal state of Saxony-Anhalt, Project: Center for Behavioral Brain
Sciences. 

Citation
========

Labs, A., Reich, T., Schulenburg, H., Boennen, M., Gehrke, M., Golz, M.,
Hartings, B., Hoffmann, N., Keil, S., Perlow, M., Peukmann, A.  K., Rabe, L.
N., von Sobbe, F.-R. & Hanke, M. (2015). `Portrayed emotions in the movie
“Forrest Gump” <http://dx.doi.org/10.12688/f1000research.6230.1>`_.
F1000Research, 4:92.

.. |---| unicode:: U+02014 .. em dash

