Real-life cognition challenge
*****************************
:slug: challenge
:status: hidden

**Understand how the brain works, in real life.**

In order to fully understand how the brain works, it is essential to study
the complex inter-play of cognitive processes that are characteristic when
interacting with a rich natural environment. Going beyond the localization
of individual aspects of brain function is pivotal as there are clear
limits to what we can learn about the function of the brain as whole via
restricting investigation to specialized cognitive sub-systems in feature
deprived laboratory settings.

The increasing number of publications focused on multivariate and
data-driven analysis of brain network dynamics is a clear indication that
neuroimaging research embraces this challenge, both on a conceptual and
methodological level.

Resting-state functional magnetic resonance imaging (rs-fMRI) data is by far
the most commonly used brain imaging paradigm in this emerging domain.  It can
be argued that this is due to the fact that it can be easily obtained at
relatively low cost, and, even more importantly, it is more frequently shared
(e.g. `1000 FCP <https://fcon_1000.projects.nitrc.org/>`_) than any other brain
imaging data.

However, rs-fMRI data imposes strict constraints on the kinds of analyses
it can be used for. For example, it is not meaningful to directly study the
change in brain activity patterns through time across a group of
participants, as there is no rich (time-locked) sensory stimulation at the
time of data acquisition.

Quasi-naturalistic stimulation, for example by watching a movie, represents an
alternative paradigm that is compatible with most methods developed for
rs-fMRI, but additionally enables studies of the dynamics of neural processes
across multiple individuals in real life contexts. In their recent review,
`Hasson and Honey (2012)
<http://hlab.princeton.edu/Papers/hasson_honey_neuroimage_2012.pdf>`_
identified this approach as an emerging trend that is likely to play a major
role in brain imaging research over the next decade.

There are two main challenges that will determine the success of this
approach in terms of both quality and quantity of scientific output:


Availability of real-life cognition data
========================================
**More well-described data is needed.**

At present, there are very few datasets available to study complex brain
function in real life contexts. In this project, we have gathered and
published a large dataset comprising of a versatile set of brain imaging
techniques. All data was released freely into the public domain to
facilitate contributions by independent research groups and scientists from
other disciplines. We will continue to extend this dataset with more data
modalities and stimulation paradigms. However, a single dataset and the
resources of a single imaging center will not be enough to address the need
for appropriate data.

The challenge is to provide the scientific community with data in a form
that facilitates re-use, and integration of results and derived or
processed data with the original dataset in order to enable incremental
research for the community at large.

Analysis strategies to study complex concurrent neural processes
================================================================
**Reliable, and readily usable analysis techniques are needed.**

Over the past years many new techniques have been developed for
multivariate, data-driven analysis of brain imaging data, for example
various brain parcellation procedures. At present it is
unclear how reliable these tools work in real life contexts. Often there
are significant technical hurdles that prevent an efficient evaluation of
these new tools before they get integrated with one of the major data
analysis suites.  Consequently, it is all-too-common for such new
methodologies to take years to get adopted by the neuroimaging research
community.

The challenge is to reduce this time-to-adoption by facilitating the
(crowd-sourced) evaluation of new algorithms with public data for
benchmarks, promotion of scientific results in close proximity to the
relevant datasets, and integration of algorithm implementations in readily
usable form, for example via a ready-made computational environment that is
freely available to anyone.

The 2014 Real-life neural processing contest
============================================
**Kick-start a mass-collaboration to study the brain in its
natural environment.**

.. note::

  Please note that this contest is over. This content is only kept here
  for historical purposes. You can read about the contest winners
  in `another article <{filename}/Articles/reallifecognition_contest_results.rst>`_.


We invite research groups and individuals to participate in a contest to master
these challenges. Among all submissions that are received **until November 1
2014** a jury will determine the best contributions in terms of novelty of the
approach, scientific rigor, and potential impact on future research and
application. The best three contributions will receive an **award** (3000,
1500, and 500 Euro respectively) sponsored by the `Center for Behavioral Brain
Sciences <http://www.cbbs.eu>`_, Magdeburg, Germany.

Contest organizers:

* Michael Hanke (Magdeburg University)
* Yaroslav Halchenko (Dartmouth College)

The jury consists of:

* Uri Hasson (Princeton University)
* James Haxby (Dartmouth College)
* Daniel Margulies (MPI Leipzig)
* Russ Poldrack (U Texas, Austin)
* Jean-Baptiste Poline (Neurospin)
* Stefan Pollmann (CBBS, Magdeburg)
* Peter Ramadge (Princeton University)


Participation and evaluation criteria
-------------------------------------

* Each contribution must either **consist of or use data from complex
  quasi-natural stimulation** engaging complex concurrent neural processes,
  such as the dataset provided at http://www.studyforrest.org.
* Each contribution must be accompanied by a **demo web-page** that
  summarizes the contribution and references all necessary components
  (related publications, software, data). This page will be hosted on the contest
  website and is the **primary material for the jury evaluation**.
* All results of a contribution must be **fully reproducible**. This should
  be possible by a (series of) scripts or an otherwise automated process
  using unmodified publicly available data as input. Participants are
  invited to provide a complete computational environment (e.g. a
  `NeuroDebian virtual machine <http://neuro.debian.net/vm.html>`_ to enable
  anyone to reproduce their findings.
  Only results that could be reproduced independently will be considered
  by the jury (except for data contributions).
* All results must be made available in a way that facilitates re-use.

  - For example, this should include public availability of unthresholded
    statistic maps (e.g. deposited at `neurovault.org <http://neurovault.org>`_), if applicable.
  - All data contributions or data required to reproduce a
    contribution must be deposited in a community-recognized repository,
    such as `openfmri.org <http://www.openfmri.org>`_.
  - Source code and data must be licensed under an
    `OSI-approved license <http://opensource.org/licenses>`_, or a
    `Creative Commons license <http://creativecommons.org/choose>`_
    that allows for derivative works, or the `Public Domain Dedication and
    License <http://opendatacommons.org/licenses/pddl/summary>`_
    |---| whichever is most appropriate.

.. Positive independent peer-review of results will be considered by the
  jury. This peer-review can be documented by acceptance of a corresponding
  publication in a peer-reviewed journal, or by public post-publication peer
  review.

See the `Contest rules and conditions (the fine-print)`_ for participation conditions and
procedures.

Submission
----------
* Contest submissions have to be emailed to
  `contest@studyforrest.org <mailto:contest@studyforrest.org>`_ before or on
  **until November 1 2014**.
* Submitters will received a confirmation by email, once all submitted
  materials have been reviewed.
* Prospective contest participants are recommended to email
  `contest@studyforrest.org with subject "SUBSCRIBECONTEST"
  <mailto:contest@studyforrest.org?subject=SUBSCRIBECONTEST>`_
  to receive information on project updates.

Publication venues
------------------

Contest participants are encouraged to publish their contributions in
ways that are suitable for their respective fields. We are working with
other researchers and publishers to identify and/or organize publication
venues that are focused on the analysis of complex real-life data. Here is
a list of confirmed venues (more alternatives will be added once they become
available):

IEEE Special Issue on "Multimodal Modeling and Analysis Informed by Brain Imaging
  This special issue will focus on the synergistic combinations of
  cognitive brain science, brain imaging, and multimedia analysis. It
  aims to capture the latest advances in the research community working
  on brain imaging-informed multimedia analysis, as well as computational
  model of the brain processes driven by multimedia contents.
  We are soliciting original contributions for:

  * Brain encoding and decoding models under natural multimedia
    (image/video/audio) via fMRI and EEG
  * New development of brain computer interface (BCI)
  * Models of brain functional interaction under natural multimedia
    stimulus Brain imaging informed multimedia content representation
  * Brain imaging informed computational models for multimedia
    applications
  * Brain imaging informed multimedia applications, including object
    recognition, image/video/audio categorization, image/video/audio
    retrieval and summarization, image/video/audio emotion or effective
    computing, and image/video/audio recommendation
  * Clinical application of multimedia stimulus in brain disorders

  For more information see the `call for paper
  <http://caid.cs.uga.edu/?name=article_info&xid=2480391402423658454>`_.

Please submit suggestions for additional venues to
`contest@studyforrest.org`_.

Contest rules and conditions (the fine-print)
---------------------------------------------

CONTEST NAME (the 'Contest')
  Real-life cognition contest
CONTEST SPONSOR
  `Center for Behavioral Brain Sciences <http://www.cbbs.eu>`_,
  Magdeburg, Germany
CONTEST WEBSITE
  http://www.studyforrest.org/pages/challenge.html
PRIZES
  5,000 EUR among 3 prizes

These are the complete, official rules for the Contest (the 'Contest
Rules') and incorporate by reference the contents of the Contest Website
listed above.

By submitting an entry to this Contest you are agreeing to be bound by
these Contest Rules which constitute a binding agreement between you and
the Contest Sponsor.

The Contest is sponsored by the Contest Sponsor listed above. The
Contest will run according to the dates listed on the Contest Website.

Each registered individual or Team is referred to as a Participant. The
Contest Sponsor reserves the right to disqualify any Participant who is
found to breach these Contest Rules.

ELIGIBILITY
~~~~~~~~~~~
The Contest is open to all individuals or teams of individuals over the age
of 18 at the time of entry.

You are not eligible to receive any Prize in the Contest if that would
constitute a violation of German laws for the Contest Sponsor.

SUBMISSIONS
~~~~~~~~~~~
'Submission' means the material submitted by you in the manner and format
specified on the Website. Any individual can submit up to two entries.  All
Submissions must be uploaded to the Website in the manner and format specified
on the Website. Submissions must be received prior to the Contest deadline
and adhere to the guidelines for Submissions specified on the Website.
Submissions must comply with all conditions posted on the Contest Website.

All Submissions must include a list of all contributing individuals, and name a
corresponding author who will serve as a contact for the Contests Sponsor
and is authorized to act on behalf of all contribution individuals.

Submissions are free of charge.

Participants grant the contest organizer and Contests Sponsor an
irrevocable license to publicly disseminate any submitted materials after the
submission deadline for the Contest has passed. This includes the right to
use submitted materials in publications and other press coverage related to the
Contest.

WINNING
~~~~~~~
DETERMINING WINNERS
^^^^^^^^^^^^^^^^^^^
This Contest is a challenge of skill and the final results are determined
solely by jury decision (subject to compliance with these Contest Rules).
The list of jury member is posted on the Contest Website.

Jury members individually score and rank-order valid submissions. The five
submissions with the highest average rank enter the final round.  In the final
round each juror has a total of three votes that can be given to any number of
up to three finalists (all three for one, one for each of three, or a
combination of two and one votes for two finalists respectively). A juror
must not vote for a finalist for which a conflict of interest is indicated.
The winners are the three finalists that receive most votes.

Prize awards are subject to verification of eligibility and compliance with
these Contest Rules. All decisions of the Contest Sponsor and judges
will be final and binding on all matters relating to this Contest.  All
further liability is excluded, there is no recourse to the courts. Contest
Sponsor reserves the right to examine the Submission and any associated code or
documentation for compliance with these Contest Rules.  In the event that
the Submission demonstrates a breach of these Contest Rules, Contest
Sponsor may at its discretion take either of the following actions:

* disqualify your Submission(s); or
* require that you remediate within one week all issues identified in your
  Submission(s) (including, without limitation, the resolution of license
  conflicts, the fulfillment of all obligations required by software licenses,
  and the removal of any software that violates the software restrictions).

RESOLVING TIES
^^^^^^^^^^^^^^
A tie between two or more valid and identically ranked submissions will be
resolved in favour of the tied submission that was submitted first.

RECEIVING PRIZES
^^^^^^^^^^^^^^^^
After verification of eligibility, each Prize winner will receive the prize in
the form of a bank transfer to an account identified by the corresponding
author. Allow 30 days from final confirmation for Prize delivery.

Prize winners are responsible for any taxes, fees or other liability resulting
from their receipt of a Prize.

Prize winners will be announced on the Contest Website.

WARRANTIES AND OBLIGATIONS
~~~~~~~~~~~~~~~~~~~~~~~~~~
By participating, you agree that (a) all information you provided is complete,
correct and accurate and (b) your registration may be rejected or terminated
and all Entries submitted by you and/or your Team may be disqualified if any of
the information is (or Contest Sponsor has reasonable grounds to believe it
is) incomplete, incorrect or inaccurate.  All information is
deemed collected in Germany. Participants agree that collected information
is stored electronically.

Participation is subject to all federal, state and local laws and regulations.
Void where prohibited or restricted by law. You are responsible for checking
applicable laws and regulations in your jurisdiction before participating in
the Contest to make sure that your participation is legal. You are
responsible for all taxes and reporting related to any award that you may
receive as part of the Contest. You are responsible for abiding by your
employer's policies regarding participation in the Contest. Contest
Sponsor disclaims any and all liability or responsibility for disputes arising
between you and your employer related to this Contest.

Each Participant is solely responsible for all equipment, including but not
necessarily limited to a computer and internet connection necessary to access
the Website and to develop and upload any Submission, and any telephone, data,
hosting or other service fees associated with such access, as well as all costs
incurred by or behalf of the Entrant in participating in the Contest.

By entering a Submission, you represent and warrant that all information you
enter on the Website is true and complete to the best of your knowledge, that
you have the right and authority to make the Submission (including any
underlying code) on your own behalf or on behalf of the persons and entities
that you specify within the Submission, and that your Submission:

* is your own original work, or is used by permission, in which case full
  and proper credit and identify is given and the third party contributions
  are clearly identified within your Submission;
* does not contain confidential information or trade secrets and is not
  the subject of a registered patent or pending patent application;
* does not violate or infringe upon the patent rights, industrial design
  rights, copyrights, trademarks, rights of privacy, publicity or other
  intellectual property or other rights of any person or entity;
* does not contain malicious code, such as viruses, timebombs,
  cancelbots, worms, Trojan horses or other potentially harmful programs or
  other material or information;
* does not and will not violate any applicable law, statute, ordinance,
  rule or regulation;
* does not trigger any reporting or royalty obligation to any third
  party; and

Any breach of any of these warranties will result in the corresponding
Submission being invalid.

LIMITATION OF LIABILITY
~~~~~~~~~~~~~~~~~~~~~~~
By participating in the Contest, each Participant agrees to release,
indemnify and hold harmless Contest Sponsor, and organizers as applicable,
and each of their respective agents, representatives, officers, directors,
and employees from and against any injuries, losses, damages,
claims, actions and any liability of any kind resulting from or arising out of
your participation in or association with the Contest. Contest Sponsor
is not responsible for any miscommunications such as technical failures related
to computer, telephone, cable, and unavailable network or server connections,
related technical failures, or other failures related to hardware, software or
virus, or incomplete, late or misdirected Submissions. Contest Sponsor
reserves the right to cancel, modify or suspend the Contest should any
computer virus, bug or other technical difficulty or other causes beyond the
control of Contest Sponsor corrupt the administration, security or proper
play of the Contest, and to determine winners from among Submission not
affected by the corruption, if any, in its sole discretion.

The Contest Sponsor nor the organizers are responsible for (a) late, lost,
stolen, damaged, garbled, incomplete, incorrect or misdirected Entries or other
communications, (b) errors, omissions, interruptions, deletions, defects, or
delays in operations or transmission of information, in each case whether
arising by way of technical or other failures or malfunctions of computer
hardware, software, communications devices, or transmission lines, or (c) data
corruption, theft, destruction, unauthorized access to or alteration of
Submission materials, loss or otherwise. Neither Contest Sponsor nor
organizers are responsible for electronic communications or emails which are
undeliverable as a result of any form of active or passive filtering of any
kind, or insufficient space in any email account to receive email messages.
Contest Sponsor disclaims any liability for damage to any computer system
resulting from participation in, or accessing or downloading information in
connection with, the Contest.

RESERVATION OF RIGHTS
~~~~~~~~~~~~~~~~~~~~~
Contest Sponsor reserves the right to modify, remove or add Data to the
Website, or make necessary changes to the Contest rules at any time.
Changes will be communicated on the Contests Website and subscribed
participants will be notified via email. Changes will be communicated in a way
and at a point in time that does not comprimise the fairness of the
competition.  NEITHER ORGANIZERS NOR COMPETITION SPONSOR ARE RESPONSIBLE FOR
ANY FAILURE OF A PARTICIPANT TO RECEIVE DATA CHANGES.

SEVERABILITY
~~~~~~~~~~~~
The invalidity or unenforceability of any provision of these Contest Rules
shall not affect the validity or enforceability of any other provision. In the
event that any provision is determined to be invalid or otherwise unenforceable
or illegal, these Contest Rules shall otherwise remain in effect and be
construed in accordance with their terms as if the invalid or illegal provision
was not contained herein.

LAW
~~~
You agree that these terms and the relationship between you and Contest
Sponsor shall be subject to the laws of the Federal Republic of Germany.
The place of performance shall be Magdeburg, Germany.

.. |---| unicode:: U+02014 .. em dash

