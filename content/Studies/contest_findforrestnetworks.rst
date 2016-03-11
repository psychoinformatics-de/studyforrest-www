Identifying task-related activity using periodic graph properties
*****************************************************************

:date: 2014-11-01 12:14
:tags: fMRI, 7-Tesla, contest, networks, graph analysis
:authors: Lars Marstaller, Jeiran Choupan, Arend Hintze
:summary: use simulated annealing to find functional brain networks that
          periodically change their graph properties while participants
          listen to an audio-only version of the movie 'Forrest Gump'
:slug: contest_findforrestnetworks


Background
==========

Previous work using fMRI has established that large-scale functional
connectivity networks in the human brain display graph theoretical properties
such as the combination of a short characteristic path length and high
clustering coefficient (small-world topology) as well as high betweenness
centrality indicating the presence of network hubs (`Basset & Bullmore, 2006
<http://dx.doi.org/10.1177/1073858406293182>`_; `van den Heuvel & Sporns, 2013
<http://dx.doi.org/10.1016/j.tics.2013.09.012>`_). These properties have
been identified initially in slowly fluctuating resting state networks but are
increasingly applied to task-based connectivity data. In contrast to resting
state data, the analysis of task-based fMRI data commonly presupposes control
over the stimulus in order to test hypotheses about the observed effects of an
experimental manipulation. The results obtained from such experiments suffer
from restricted ecological validity and it is questionable to what degree their
conclusions can be generalized.

Our contribution to the forrest challenge is motivated by the idea that graph
theoretical properties are able to 'replace' control over the stimulus as the
set of a priori assumptions necessary for the analysis of task-based functional
connectivity. Instead of searching for functional networks related to certain
stimulus events and measuring their graph theoretical properties, we aim to
find networks that exhibit certain graph theoretical properties and to compare
their topology to known activity patterns related to cognitive processes
presumably involved in the task.

Hypotheses
----------

The stimulus used in the creation of the study forrest data is an audio-only
version of the movie 'Forrest Gump'. We therefore expect to find activity
patterns in superior and middle temporal gyri, inferior frontal gyrus, and
medial temporal lobe related to auditory perception, spoken language
processing, and memory.

Methods
=======

From the available T2* images, we used motion and distortion corrected raw BOLD
images that have been linearly aligned to the group template image. Using
fslmaths we created a binary gray matter mask using the template
(templateSpace_avg152T1_gray.nii.gz) and masked each individual T2* image in
template space to restrict the search space for network nodes to the cortical
gray matter.

To find networks that periodically increase certain network properties, we
used `simulated annealing <http://en.wikipedia.org/wiki/Simulated_annealing>`_
on the power spectrum of temporal graph properties. The basic idea is to
randomly generate networks, measure the periodicity of their network property
and keep the best network. To generate network nodes, we randomly select 12
gray matter voxels. Using a moving time window, we calculate the connection
weights between each pair of nodes as the correlation coefficient of their time
series. For each time point in the resulting series of adjacency matrices, we
then compute one graph theoretical measure (average shortest path length,
average betweenness-centrality, or average clustering coefficient).

In order to find periodically changing networks, we band pass filtered the time
series of graph measures and projected it into the frequency domain using a
Fast Fourier transform. Next, we counted the number of peaks (defined as zero
crossings of the first derivative) and calculated the maximum and the median of
the power spectrum. From these we derive a final singular measure, which is
higher the more 'peaky' the power spectrum and hence the more periodic the
changes in network properties (measure = maximum/[median*peaks]).

To find those networks that cyclically change their network properties, we then
compare the new network with the current best network and retained it as the
current best if its measure is higher. In order to avoid local maxima, we use
the concept of temperature to accept new measures that are lower than the
current best measure: If the new measure is lower than the current best measure
by max 20%, it replaces the new current best measure with probability p. p is
the product of the temperature and the fractional difference between current
and current best measure. The temperature decreases with each iteration from an
initial value of 1 to a final value of 0.01.

After 5000 iterations for each 15 min T2* block and each participant, we used
fslmaths to merge all resulting images into a 4D NIfTI file, binarized and
smoothed it with a 3mm Gaussian kernel, and calculated the final average image.
Final images were thresholded at 2 standard deviations above the mean, which
equates to p < 0.05.

MATLAB Code: `FIND_NETWORKS_V3.M <{filename}/data/contest_findforrestnetworks/find_networks_v3.m>`_

Code was compiled and run on the `University of Queensland's Linux cluster`_.
We used the `Brain Connectivity Toolbox`_ for calculation of graph properties
and the `NIfTI toolbox`_ to manipulate image files.

.. _University of Queensland's Linux cluster: http://www.hpcu.uq.edu.au/hpc/content/barrine-cluster
.. _Brain Connectivity Toolbox: https://sites.google.com/site/bctnet
.. _NIfTI toolbox: http://www.mathworks.com.au/matlabcentral/fileexchange/8797-tools-for-nifti-and-analyze-image

Results
=======

Average shortest path length
----------------------------

Average shortest path length in a network is one of two factors (together with
clustering coefficient) that determine whether a network shares the small-world
property or not.

.. figure:: {filename}/pics/contest_findforrestnetworks/smAll_AvgShPath.png
   :align: center
   :alt: fMRI volume slice image

   Group average image of networks shows peaks in regions related to auditory
   processing (bilateral auditory cortex), the default mode and episodic
   memory network (medial temporal lobe,
   posterior and anterior cingulate cortex), language (superior temporal and
   inferior frontal regions) as well as visual imagery (occipital
   cortex).

.. figure:: {filename}/pics/contest_findforrestnetworks/s1_4_12_powerPlot_5000.jpg
   :align: center
   :alt: line plot

   Representative frequency power spectrum from a single 15 min block of one
   participant showing an average peak at ~0.015 Hz.

Effect of viewing experience
----------------------------

To further investigate our method, we compared the average networks of
participants who had previously seen the movie not more than 3 times (blue,
n=8) and participants who had seen the movie at least 3 times (red, n=8).

.. figure:: {filename}/pics/contest_findforrestnetworks/hiViewRed_loViewBlue_AvgShPath.png
   :align: center
   :alt: fMRI volume slice image

   The results show marked differences between the two groups, especially in
   bilateral auditory cortex.

Average betweenness centrality
------------------------------

.. figure:: {filename}/pics/contest_findforrestnetworks/smAll_BetwCentr.png
   :align: center
   :alt: fMRI volume slice image

   Group average images of networks show activation peaks in insula, anterior
   cingulate cortex, left fusiform gyrus and brainstem.

.. figure:: {filename}/pics/contest_findforrestnetworks/s1_2_12_powerPlot_5000_betwCent.jpg
   :align: center
   :alt: line plot

   Representative frequency power spectrum from a single 15 min block of one
   participant showing a peak at ~0.02 Hz.

Average clustering coefficient
------------------------------

not finished computing yet!

Conclusions
===========

Our results show that different networks alter their network properties at
separate low frequencies: while the networks related to memory, auditory
perception, visual imagery and language peak in their average shortest path
length every 65 seconds, the salience network shows a high average betweenness
centrality every 45 seconds. Taken together, our results provide evidence for
the view that task-related functional brain activity can be analyzed without
prior knowledge about the stimulus structure using only periodic graph
properties.

About this work
===============

This article was a submission to the real-life cognition contest by Lars Marstaller
(U Queensland), Jeiran Choupan (U Queensland), and Arend Hintze (Michigan State
U).

All source code and materials related to this submission are copyright (c) 2014
by Lars Marstaller and are made available under the terms of the `MIT license`_.

.. _MIT license: http://opensource.org/licenses/MIT
