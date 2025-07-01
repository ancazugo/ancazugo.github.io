---
layout: "page"
title: "2025-06-29 Weekly Notes"
subtitle: "Weekly notes"
image: /assets/images/projects/research/2025-06-29-week.png
date: 2025-06-29
interactive: false
categories: research outreach
permalink: /:categories/:year/:month/:day/:title.html
---

Last week was unexpectedly devoted to sorting things out with my scholarship due to an unforeseen issue. However, I managed to finish all the sections in the 3-30-300 paper, except for the discussion which needs polishing. I added a couple of plots and rearranged the results with a story for each subsection. I'm really becoming a power user of Gemini for correcting writing style to fit an academic text. Linked below is a plot that summarises one of the points I make in the manuscript about how the 3-30-300 is reflected in population numbers.

I briefly tried to use ApacheSedona to do zonal statistics on the buildings dataset to create a 30-metric per building using a buffer area, but it wasn't very easy to do, due to the size and extent of the images. This was only to test if I could add more granularity to the paper methods for some of the spectral indexes, but using census polygons should be good enough.

Also, I finally had a meeting with a couple of people interested in the project I worked on for about room occupancy for Estates and they were very impressed with my app. The main conclusion from the pilot study for this is that a University of this size should have a more centralised system to know their facilities. The nature of the insitution makes it difficult but it should be a matter of gathering all parties involved (departments, colleges, etc) to create a unified way to quantify room occupancy.

Later in the week, the [Urban Analytics Lab](https://ual.sg/) from NUS came to visit Cambridge and gave short presentations (I also did one). Most of the PhD students work on using Street View images to quantify different aspects of cities from traffic, to energy use and building type. This came right on time as I wrote about this [a couple of weeks ago]({% post_url 2025-06-08-weekly-notes %}). Of particular relevance was Winston's [Urbanity project](https://ual.sg/post/2023/07/31/new-paper-and-open-source-software-urbanity-automated-modelling-and-analysis-of-multidimensional-networks-in-cities/) which I'll have to try, as well as the group-wide [Global Streetscapes dataset](https://www.sciencedirect.com/science/article/pii/S0924271624002612). Also, interesting talks by Zicheng's work on [nightime stree imagery](https://www.sciencedirect.com/science/article/pii/S2210670724006863) and Xiucheng's [OpenFACADES](https://arxiv.org/abs/2504.02866). Yixin Wu's (unpublished) work on carbon sequestration by urban trees seems highly relevant for my work as it is a very understudied ecosystem service provided by urban green infrastructure.

Also, from this week on I will be implementing the Zettelkasten method to record my literature review so I don't have to do double the work from notes to writing. This is based on the book titled [How to Take Smart Notes](https://www.soenkeahrens.de/en/takesmartnotes) by Sönke Ahrens, based on the method made popular by sociologist Niklas Luhmann. I decided to do this because I felt that my notes and highlights were not going anywhere and were not as effective, so I did some research a while ago and finished reading the book recently. This was also motivated by my struggle with writing, which I believe is quite common in academia (particularly for those whose first language is not English). I will update how my knowledge graph grows in Obsidian and how I implement the writing in my thesis and papers, alongside other LLM-based tools.

Finally, to hold myself accountable for stuff I need to do, I will start posting my weekly objectives here and come back to them the following week to see how I did. I will post them from top to lowest priority and with sub goals.

## Weekly Goals

- FINISH THE PAPER MANUSCRIPT!!!!
  - Add the references to all the sections
  - Organise the supplementary material
- Move the trees dataset to an Earth Engine App
  - Decide on publishing all segmented trees or just the ones I defined as proper trees (height > 3 m & crown area > 10 m^2)
  - Figure out how to split the data for massive upload to Google Cloud
- Start the Zettelkasten method
  - Link Obsidian with my previous notes from notebook and iPad notes
- Resume documenting the code for the 3-30-300 paper
  - Update the docstring for some functions that have changed
  - Use mkdocs to create the github pages website to link in the paper