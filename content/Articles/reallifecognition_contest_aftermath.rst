Running the real-life cognition contest: beyond winners
*******************************************************

:date: 2014-12-12 12:00
:tags: contest
:authors: Michael Hanke
:summary: a look back at some lessons learned
:slug: reallifecognition_contest_aftermath

.. |---| unicode:: U+02014 .. em dash

Running this `contest <{filename}/pages/challenge.rst>`_ was interesting and
insightful on many levels. It was motivated by two ideas. The primary
goal was to "kick-start a mass-collaboration to study the brain in its natural
environment", as it said in the announcement. However, there was a secondary
goal: gather first hand experience on data-sharing in neuroimaging research.
The later aim was important to us, because while there is a strong demand for
data-sharing, we wanted to know, what this actually means when put into
practice. What does it cost, what is the benefit? On the society level the
answers are clearly "not so much" and "huge", but on the level of an individual
research group things aren't so obvious.  So here is a first post on the
results of the contest beyond winners.

First of all, a few words on the effect of a deadline.  This is somewhat
expected, but it still feels weird when it actually happens: If you set a
deadline, don't expect anyone to show up earlier. We set a deadline *on or
before Nov 1* and there were very few indications that anyone would submit
anything at all before that day. All submissions were received exactly on Nov
1. And by "all" I mean *three*. Yes, you got that right. Our three awardees
together comprise the entire list of contributors.

In a way, this is great. These three groups invested their scarcest resource,
time, into a risky project and they all got rewarded. Anybody who has tried to
pick up and analyze a dataset acquired elsewhere knows how risky such attempts
can be. However, when viewed through the lens of a researcher thinking about
data sharing, this turnout casts a shadow. With free data, a monetary
incentive, a potential publication ahead, and the chance of getting
a knightly accolade from a high-profile jury, only three groups interpreted
the risk/benefit ratio in favor of participation.

This raises a couple of questions: What has made this contest too challenging
or too unattractive in the perception of other potential contributors? How
representative is this case as sample of what one  might expect as a benefit
for a group that shares a dataset?

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
nor about the data release. Nevertheless, this publication was still more
advertised than the average neuroimaging paper.

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

    Article views according to the `article metrics reported by nature.com
    <http://www.nature.com/articles/sdata20143/metrics>`_.

Maybe those who looked at the data descriptor didn't like what they saw and
moved on? While this must be a frequent scenarios (if only for the diversity of
research interests), a substantial number of downloads of (some portion) of the
dataset were counted. The least frequently downloaded tarball with data of a
particular subject was accessed more than 700 times, on average these tarballs
were hit several thousand times each (these numbers are after removing known
search engine bots and other artifacts). It is hard to conclude anything
concrete from these numbers. However, it is worth pointing out that the data
access figures do not decline over time. The figure below shows the
distribution of unique IPs/networks accessing the data on openfmri.org across months
since data publication. They amount to about 300 in total and are, except for a
peak in August, steady at around 50 per month.  All these figures neither
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
announcement to submission deadline is short. Individual
feedback from some groups seems to confirm that. Unfortunately, given
publication procedures and fiscal necessities there was little that could have
been done differently.

But even with little time lots of smaller contributions would have been
possible. I was surprised to see all of the submissions being based on a
(mostly novel) fMRI-based data analysis. There were no data contributions,
although one can argue that even a relatively simple annotation of the movie
stimulus could have contributed something that would have enabled a completely
different kind of analysis. This is something we chose to work on during that
time, and we are hoping to be able to demonstrate this aspect shortly.
Likewise, I was surprised to see no data cleaning, or artifact detection
procedure being benchmarked against the released data |---| or any kind of
benchmark for that matter.

**"Mass-collaboration", not quite**

Did we manage to "kick-start a mass-collaboration to study the brain in its
natural environment"?  I don't think so. However, given the typical time frame
of studies in neuroimaging, it is still too early to draw a conclusion
regarding the impact of this project.
It is, however, perfectly safe to conclude one thing: *data-sharing is work*.

When this project started, my attitude was something like "sure, anyone must
share data, it is a responsibility". Now, after about one year, I have a lot
more appreciation for researchers that do share their data, and a lot better
concept of valid reasons for *not* doing it.  In contrast to an, I believe,
common conception, I think it isn't some form of fear of transparency to causes
infrequent sharing of neuroimaging data.  It is rather fear of the total cost
of getting a dataset in shape for 3rd-party consumption. This is compounded
with a great uncertainty of whether a dataset actually will be useful for
someone else.  We need to get better at this. We need to have standards for
datasets structures and descriptions. We need to have more and better
publicized examples of "unintentional" data re-use. The classic Haxby et al.
(2001) dataset anyone can get as `ds105 from openfmri.org
<https://openfmri.org/dataset/ds000105>`_ is one example of a small, single-lab
datasets that has been frequently re-used. I am sure there are more.  I have
confidence that once it is widely know in what form it is useful to share data
and we have a track-recorded of (hopefully inter-disciplinary) data re-use, we
will see a lot more shared datasets.  For what could be better than help and
become part of a scientific discovery that, initially, you didn't even think
about.

**The road ahead**

This is not the end of the journey, at least not for Forrest Gump. Even after
the conclusion of the contest, this experiment on a "de-centralized
mass-collaboration" will run for at least 12 more months. We will try to keep
increasing the utility of this resource (at this point two more major data
releases are planned) and we are hoping for your contribution!

.. _openfmri.org: http://www.openfmri.org
