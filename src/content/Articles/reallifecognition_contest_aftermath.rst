Running the real-life cognition contest: beyond winners
*******************************************************

:date: 2014-12-01 10:00
:tags: contest
:author: Michael Hanke
:summary: underwhelming reception of the contest
:slug: reallifecognition_contest_aftermath

.. |---| unicode:: U+02014 .. em dash

Running this contest was interesting and insightful on many levels. Some
aspects are, at least in hindsight, pretty obvious |---| others did truly
surprise me.

First of all, a few words on the effect of a deadline.  This is somewhat
expected, but it still feels weird when it actually happens: If you set a
deadline, don't expect anyone to show up earlier. We set a deadline *on or
before Nov 1* and there were very few indications that anyone would submit
anything at all before that day. All submissions were received exactly on Nov
1.

The most puzzling result of this contest, however, is the low number of
contributions. Low as in **three**. Yes, you got that right. Our three awardees
together comprise the entire list of contributors. Looking back, this is a
great reward for these groups that invested the time and effort to work on this
challenge and I am very grateful that they did! Nevertheless, the question
remains:  *What is it that made this contest too challenging or too unattractive
in the perception of other potential contributors?*

**Never stop talking about it**

Before we get to that, a quick re-cap of what we did to raise awareness about
the contest in the field. We had a press release, actual press coverage, a
conference poster, and a conference keynote referring to the contest. Moreover,
we posted announcements to a number of key mailing lists. In an `earlier summary
of the effect of this announcement strategy
<{filename}/Articles/announcement_impact.rst>`_  we concluded that we basically
reached saturation of the target audience.

Looking back, this conclusion is wrong (at least partially). Maybe we did reach
a lot of people, but clearly not all of those we wanted. Up to the very end of
the contest, there were people we believed to have
"covered" but who apparently  have heard neither about the contest,
nor about the data release.

**A possible interpretation is that nobody really cared enough to participate**

Let's look at some access statistics to see how likely this interpretation is.
At the time of the conclusion of the contest, the nature.com website had
counted almost 5400 views of the `data descriptor
<http://www.nature.com/articles/sdata20143>`_ (that period roughly covers the
first six months after its publication). For a time, it was the most accessed
article in the journal Scientific Data, and still is among the most popular
ones (if we ignore the enormous success of the `Tree of Sex: A database of
sexual systems <http://www.nature.com/articles/sdata201415>`_ for now).  I
guess it is fair to conclude that it was not lack of publicity of the data
descriptor.

.. figure:: {filename}/pics/7tad_descriptor_popularity_Dec14.png
    :alt: Cumulative line plot with article views, 5388 on Nov 1 2014.

    Article views according to the article metrics reported by nature.com.

Maybe those who looked at the data descriptor didn't like what they saw and
moved on? While this must be a frequent scenarios (if only for the diversity of
research interests), a substantial number of downloads of (some portion) of the
dataset were counted. The least frequently downloaded tarball with data of a
particular subject was accessed more than 700 times, on average these tarballs
were hit several thousand times each (these numbers are after removing known
search engine bots and other artifacts). It is hard to conclude anything
concrete from these numbers. However, it is worth pointing out that the data
access figures do not decline over time. The figure below shows the
distribution of unique IPs accessing the data on openfmri.org across months
since data publication. They amount to about 300 in total and are, except for a
peak in August steady at around 50 per month.  All these figures neither
include downloads via rsync from the `main data server in Magdeburg
<http://psydata.ovgu.de>`_ that was not mentioned in the data descriptor, nor
from `nitrc.org <https://www.nitrc.org/projects/studyforrest>`_ that is also
mirroring the dataset.

.. figure:: {filename}/pics/download_unique_IPs_oct14.png
    :alt: Cumulative line plot with article views, 5388 on Nov 1 2014.

    Number of unique IPs of machines accessing the data tarballs on
    openfmri.org per month since their publication until the end of the
    contest (numbers after filtering out known bots and search engine
    crawlers).

If the existence of the data was known, maybe the contest wasn't publicized
enough? But even that doesn't seem likely. The `web page describing the contest
rules <{filename}/pages/challenge.rst>`_ was viewed by more than 1400 of what
Google labels as "unique visitors". Honestly, I have no idea how many one would
expect, but 1400 seems like an order of a magnitude higher than what I would
call an outstanding or spectacular number of contributions.

**If visibility was not the issue...**

Given all these numbers, I am quite curious whether we will see any 3rd-party
use of the released data within the next 12 months. If we do, I'll do my best
to ask the respective scientists whether they knew about the contest, and, if
so, what had prevented them from participating.

**... time certainly was**

I anticipate that a common reason would be "lack of time". Five months from
announcement to submission deadline may have been too short. Individual
feedback from some groups seems to suggest that. Unfortunately, given
publication procedures and fiscal necessities there was little that could have
been done differently.

But even with little time, lots of smaller contributions would have been
possible. I was a little surprised to see all of the submissions be based on a
(mostly novel) fMRI-based data analysis. There were no data contributions,
although one can argue that even a relatively simple annotation of the movie
stimulus could have contributed something that would have enabled a completely
different kind of analysis. This is something we chose to work on during that
time, and we are hoping to be able to demonstrate this aspect shortly.
Likewise, I was surprised to see no data cleaning, or artifact detection
procedure being benchmarked against the released data |---| or any kind of
benchmark for that matter.

**"Mass-collaboration", not quite**

The idea behind running this contest was to "kick-start a mass-collaboration to
study the brain in its natural environment". Did we reach that goal?  No, I
don't think so. But to avoid sounding disillusioned, which I am not, there is a
good chance that it may actually work out as intended |---| in the future.

But back to the last half-year. I had a number of exchanges and experiences
that make me question whether our field is ready for this kind of
de-centralized collaboration, both on a social, as well as on a technical
level.

Too many times I heard the phrase: why are you giving *your data* away?  I
don't have to go into details on how many levels the released data are not
mine. But the concern is real. As a researcher in neuroimaging, one is somewhat
expected to cover the full length of the process: generate hypothesis, design
experiment, acquire data, analyze data, interpret and publish results. And it
makes sense to do it this way |---| anyone who has worked with neuroimaging
data acquired elsewhere, with only written descriptions available knows what I
am talking about. But at the same time, this cannot be the model to "find out
how the brain works". It is one thing to become an expert in data analysis,
linear algebra, signal processing. It is not at all the case that all these
experts have access to an MRI scanner. Likewise, it is one thing to become an
expert for one sensory system, for one aspect of cognition, and so on. It is
whole different magnitude of a problem to become an expert in all of them. But
if you are not an expert in all these areas, how would any individual be able
to see the big picture?

Of course over time this will all be sorted out in the growing body of
literature. But let's face it, just because somebody publishes a paper with a
break-through algorithm, or paradigm, or whatever, it is of very little actual
value until other groups reproduce it. And this is *way* too expensive at this
point. I am not talking about unavailable data and unavailable code. I am
talking about available, but insufficiently described data, about available but
unreliable, over-specialized code. We need standard datasets, public
benchmarks, no "this-is-much-better" claims unless it can be proven by a
reproducible benchmark on a publicly available dataset.

So why don't we have a large battery of such datasets and benchmarks? I am now
able to tell you from first-hand experience: because it requires an inordinate
amount of time, spent on QA, spent on bug fixing, spent on describing
procedures and data artifacts. And even after a dataset is published it doesn't
stop. A dataset is just like software. It has bugs, it needs maintenance, and
sustained attention in order to keep it useful and capable of further
facilitating research.

**Last words**

After about one year into this project, I have a lot of sympathy for all
researchers that do not share their data. Yes, read that again! This sympathy
does not come from a shared fear of transparency or something along those
lines.  It comes from an appreciation of the total cost of getting a dataset in
shape for 3rd-party consumption under a great uncertainty of it being actually
useful for someone else. We need to get better at this. We need to have
standards for datasets structures and descriptions. I am confident that, once
we know in what form it is useful to share data, we will see a lot more shared
datasets.

**Very last words**

This is not the end of the journey, at least not for Forrest Gump. Even after
the conclusion of the contest, we will keep this experiment of a
"de-centralized mass-collaboration" running for at least 12 more months. There
are two more major data releases planned, and I cannot wait to see what kind of
research output will results from what kind of collaborations.

.. _openfmri.org: http://www.openfmri.org
