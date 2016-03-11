Convert movie annotation time stamps into fMRI segment timing
*************************************************************

:date: 2015-02-11 10:00
:tags: stimulus, annotation, erratum
:authors: Michael Hanke
:summary: A correct procedure to relate movie annotations to fMRI time series
:slug: annotation_timing

With an increasing number of people working on developing various annotations
for the Forrest Gump movie stimulus, we now get to see a variant of the old
open-source development mantra: "given enough eyeballs all bugs are shallow".

It turns out that details provided in the first data paper, on how the
timing of the whole movie relates to the partially overlapping fMRI stimulus
segments, is not entirely accurate. Here is what is stated in the paper:

  All segments, except for the first one, started by repeating the equivalent
  of three fMRI volumes from the previous segment.  Volume acquisition was
  time-locked across segments with respect to the movie time. The exact
  transition point was determined by taking a scene boundary and locating the
  closest multiple of the volume acquisition time (2 s) prior to this boundary.
  A total of five volumes after this transition point were recorded at the end
  of each segment. The stimulus intensity was faded in (1 s) and out (4 s) at
  the start and end of each segment. Time codes for scene boundaries that were
  used to determine the segment transition points were: 00:14:52.19,
  00:32:00.13, 00:46:47.0, 01:04:58.11, 01:22:18.11, 01:39:36.1, 01:58:44.8,
  02:09:52.2 (timestamp format is identical to the one in Table 1; all time
  codes refer to the original movie and not the shortened version)

Panel (A) of `Figure 3`_ in the paper depicts how the fMRI segments overlap.

It has recently come to my attention that for the transition from segment 0 to
segment 1 only the transition point is located at the closest multiple of the
2s TR **after** the respective scene boundary. For all other transitions it is
**prior** to the boundary, as stated in the paper.

As this error complicates the conversion of annotation time stamps into the
relative timing within an fMRI acquisition stimulus segment, here is simple
strategy to do the conversion correctly:

1. Discard *four* volumes at the end of any preceding segment and at the start
   of the following segment for any transition between segments. Do not discard
   volumes at the start of the first segment, or at the end of the last
   segment.

2. The position of an event from a movie annotation with respect to the cropped
   fMRI time series can now be determined by subtracting the start
   time of the respective segment as listed in the following table:

.. csv-table:: Table 1: Position of the cropped fMRI stimulus segments with respect to the movie time. The last column lists the position of the scene boundary used as a reference for the segment transition. All times are in seconds and refer to the full (unsegmented) stimulus. Note that stimulus is a shorted version of the original movie (see `Table 1 in the data paper`_ for details)
   :header-rows: 1
   :class: table table-condensed table-hover

   "Segment","Start movie time","End movie time","Duration","Scene boundary"
   0,0.0,894.0,894.0,891.24
   1,894.0,1760.0,866.0,1759.2
   2,1760.0,2620.0,860.0,2618.84
   3,2620.0,3580.0,960.0,3578.48
   4,3580.0,4488.0,908.0,4488.0
   5,4488.0,5350.0,862.0,5349.2
   6,5350.0,6418.0,1068.0,6418.12
   7,6418.0,7086.0,668.0,7085.5

If, for some reason, it is more desirable to cut more fMRI volumes at the start
of a segment than at the end, the values given in the table can be shifted by
the respective multiple of the TR of 2s.

.. _Figure 3: http://www.nature.com/articles/sdata20143/figures/3
.. _Table 1 in the data paper: http://www.nature.com/articles/sdata20143/tables/1
