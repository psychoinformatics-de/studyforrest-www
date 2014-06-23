A high-resolution 7-Tesla fMRI dataset from complex natural stimulation with an audio movie
*******************************************************************************************

:date: 2014-01-27 01:00
:modified: 2014-06-21 14:25
:tags: data descriptor, 7-Tesla, fMRI, sMRI, dMRI, physiological data
:author: Michael Hanke, Florian J. Baumgartner, Pierre Ibe, Falko Kaule,
         Stefan Pollmann, Oliver Speck, Wolf Zinke, Jörg Stadler
:summary: Multi-modal brain imaging dataset with versatile auxiliary measurements
:slug: ds_7tad

Here we present the first deliverable of this project: a high-resolution
functional magnetic resonance (fMRI) dataset |---| 20 participants recorded at
high field strength (7-Tesla) during prolonged stimulation with an
auditory feature film ("Forrest Gump"). In addition, a comprehensive set of
auxiliary data (T1w, T2w, DWI, susceptibility-weighted image, angiography) as
well as measurements to assess technical and physiological noise components
have been acquired (see `overview <{filename}/pages/resources.rst>`_).
An initial analysis confirms that these data can be used to
study common and idiosyncratic brain response patterns to complex auditory
stimulation.

.. figure:: {filename}/pics/study1_feat_fig.jpg
    :align: right
    :alt: Response pattern similarity distribution rendered on the cortical surface

    Inter-subject brain response pattern similarity

    BOLD time series correlation and pattern similarity estimated from
    representational similarity analysis on anatomically aligned data reveal
    consistent brain responses to quasi natural auditory stimulation across all
    participants. Areas of maximum similarity in both hemispheres are centered
    on the anterolateral portion of the Planum Temporale |---| part of the
    auditory ventrolateral pathway and known to be involved in processing
    complex sounds and speech.

Among the potential uses of this dataset are the study of auditory attention
and cognition, language and music perception, and social perception.  The
auxiliary measurements enable a large variety of additional analysis strategies
that relate functional response patterns to structural properties of the brain.
Alongside the acquired data, we provide source code and detailed information on
all employed procedures |---| from stimulus creation to data analysis.  In
order to facilitate replicative and derived works, only free and open-source
software was utilized.

A detailed data descriptor has been published in the inaugural issue of
`Scientific Data <http://www.nature.com/scientificdata>`_, the new open-access
journal of the Nature Publishing Group. As of now, the full dataset with its
355 GB is available from `openfmri.org <http://openfmri.org/dataset/ds000113>`_
and from a `file server at the University of Magdeburg
<http://psydata.ovgu.de/forrest_gump>`_.

Acknowledgements
================

This research was funded by the German Federal Ministry of Education and
Research (BMBF) as part of a US-German collaboration in computational
neuroscience (CRCNS), co-funded by the BMBF and the US National Science
Foundation (BMBF 01GQ1112; NSF 1129855).


Citation
========

Hanke, M., Baumgartner, F.J., Ibe, P., Kaule, F.R., Pollmann, S., Speck, O.,
Zinke, W. & Stadler, J. (2014). `A high-resolution 7-Tesla fMRI dataset
from complex natural stimulation with an audio movie
<http://www.nature.com/articles/sdata20143>`_. `Scientific Data`_, 1.

.. |---| unicode:: U+02014 .. em dash

