Lowering the barrier for non-neuroimaging scientists
****************************************************

:date: 2014-08-08 01:00
:modified: 2014-08-08 01:00
:tags: fMRI, aggregate data
:authors: Michael Hanke
:summary: Aggregate time-series data available in standard file formats
:slug: aggregate-timeseries-data
:JavaScripts: d3.v3.min.js, movietime_roi_connectivity_chord.js

.. |---| unicode:: U+02014 .. em dash

Neuroimaging data are hard to work with: often large in size, full of noise
from all sources under the sun, and usually exclusively available in
domain-specific file formats that need to undergo fragile format conversions.
These and many other reasons may be responsible for the relatively rare
successful (re-)use of neuroimaging data by researchers from other disciplines.
Consequently, neuroimaging is most likely seeing less transfer of new
technology for analysis and visualization from outside its own bubble than
there could be, given the general interest in all things that look like a
brain.

One strategy to improve this situation is to provide software that makes it
almost trivial for "foreign" researchers to access neuroimaging data in their
native formats. The `NiBabel project <http://nipy.org/nibabel>`_ is an
excellent example of this approach |---| a collaborative development effort
that aims to support any relevant neuroimaging file format and to offer access
to data and meta-data using basic data types, such as numerical arrays, that
are universally supported.

Another way is to go one step further and transform neuroimaging data into a
form that is both technically and semantically easier to comprehend for a
non-neuroimaging audience. That is easier said than done. What is a better unit
than a voxel, what is a better format than a binary array?  I don't know the
answer, but I am pretty confident that there is no single one that fits all
cases.

One needs to start somewhere, so we decided to offer the `fMRI data for the
Forrest Gump audio movie <{filename}/pages/mod_fmri.rst>`_ in a format that
should strike a chord with people working with time series data |---| people
that may otherwise work with stock market data, or climate data. Most probably,
it increases the likelihood of some of these researchers to take a look our
fMRI data if we make the data look like any other time series data.  Therefore,
we need to present it in a familiar format, for example a table, and we have to
perform a massive data reduction in order to bring down the number of variable
to a comprehensible level.

There is an almost infinite number of possibilities to perform data reduction
on fMRI data. We went with a simple one: use definitions of cortical and
sub-cortical areas from probabilistic brain atlases (roughly 200 of them from
the Harvard-Oxford cortical and sub-cortical atlases, as well as the Juelich
brain atlas that are shipped with FSL), and for each area we extracted
time series of the mean, median, minimum, maximum, and standard deviation of all
voxels in that area for any given time point. More information on the procedure
and the selected brain areas is available in the dataset's
`README <http://psydata.ovgu.de/forrest_gump/README>`_ (section: "Aggregate BOLD
functional MRI for brain atlas parcellations").

So far so good, but "what for?" |---| a legitimate question. By condensing a
fine-grained pattern of several 100k voxels into 200 time series of more-or-less
arbitrarily chosen brain regions, we have thrown over board most advantages of
high-resolution fMRI. Yet, I would argue that a lot can still be
learned about the relatively macroscopic interplay of brain regions, even from
this dramatically reduced dataset. Furthermore, I would argue that it takes
very little effort with marginal storage costs to provide neuroimaging data in
such an additional format |---| in our case simple tables in text-based CSV
format or plain arrays in HDF5 format. A small investment in the potential
contribution of a researcher that would have otherwise shied away from this
dataset in its original form and complexity. Time will tell whether this
investment will pay off.

Here is a quick demo of what kind of data analysis is now easily possible with
`a few lines of Python code
<https://raw.githubusercontent.com/psychoinformatics-de/studyforrest-www/master/tools/sliding_connectome.py>`_
after downloading a few megabytes of data (in contrast to dozens of gigabytes).
The interactive demo below uses the powerful D3 javascript library to render a
chord plot that shows the correlation of fMRI signal time series for selected
brain regions for each minute of the Forrest Gump movie (the associated
javascript code was derived from work of `Carson Farmer
<https://gist.github.com/cfarmer/11384976>`_).  Each chord indicates a
correlation of two brain regions of 0.5 or higher during the respective minute.
The angular width of the circle segment for a brain regions indicates the
relative magnitude of correlations with all other regions. Hover over the
region label to highlight the chords of an individual brain area.

.. raw:: html

  <style>
    #chart {
      font: 10px sans-serif;
    }

    .chord path {
      fill-opacity: .67;
      stroke: #000;
      stroke-width: .5px;
    }

    #circle circle {
      fill: none;
      pointer-events: all;
    }

    #circle:hover path.fade {
      display: none;
    }

    #control {
      /*position: fixed;*/
      left: 20px;
      top: 20px;
    }
  </style>
  <div id="control">
    <label>Movie minute: </label>&nbsp;<label id="minute" name="minute">000</label>
    <form>
    <input id="slider" type="range" name="slider" min="0" max="0" value="0" step="1"/>
    </form>
  </div>
  <div id="chart" style="text-align:center">
    <span onclick='init_chord()'>
      [click on the preview image to enable the demo and the time slider]
      <img src="/pics/sliding_connectome_preview.jpg" alt="ROi connectivity demo preview" />
    </span>
  </div>
