---
layout: "page"
title: "2025-07-06 Weekly Notes"
subtitle: "Weekly notes"
image: /assets/images/projects/research/2025-07-06-week.png
image_link: https://observablehq.com/embed/0df281655014c807@470?cells=chart
date: 2025-07-06
interactive: true
categories: research outreach
permalink: /:categories/:year/:month/:day/:title.html
---

Last week started by attending the in-person event of [Information is Beautiful's](https://informationisbeautiful.net/) author, [David McCandless](https://davidmccandless.com/) at the Royal Geographical Society, who gave a presentation on how to make data tell a story, based on his experience as a data journalist. This was the inspiration for this week's plot down below using my data. In the paper is shown differently (you'll have to read it to see it) but I thought it should be fun to explore treemaps, which I hadn't done in the past. He made extensive use of this to compare the narrative around expenditure in the army by country in raw numbers, as a proportion of GDP and as proportion of the population. My goal is to show a similar thing but in terms of trees just for now. While doing this I realised that these kinds of plots are not very common in scientific papers, and I'm not really sure why as they explain proportions quite clearly, and way better than the awful pie charts you see everywhere. This also marks my return to D3 after years of not using it, although this time with a significant help from LLMs. Below you'll find a hierarchical treemap of Regions, Local Authorities, and LSOAs according to the number of trees in each geography. This is a work in progress as you'll see that the smallest box doesn't have the right size, so a lot of debugging (go click on each box to see where in that area you can find more trees!!!)

## Past Weekly Objectives
- ~~FINISH THE PAPER MANUSCRIPT!!!!~~
  - ~~Add the references to all the sections~~
  - Organise the supplementary material
- Move the trees dataset to an Earth Engine App (TODO)
  - Publish them in Zenodo as well
  - ~~Decide on publishing all segmented trees or just the ones I defined as proper trees (height > 3 m & crown area > 10 m^2)~~
  - Figure out how to split the data for massive upload to Google Cloud 
- ~~Start the Zettelkasten method (Setup and working)~~
  - ~~Link Obsidian with my previous notes from notebook and iPad notes~~
- Resume documenting the code for the 3-30-300 paper (Sort of started)
  - Update the docstring for some functions that have changed
  - Use mkdocs to create the github pages website to link in the paper

## Weekly Objectives
- Make the corrections to the manuscript
  - Change image order and reduce number of tables
- Apply to [PROPL25](https://propl.dev/)
- Prepare slides for AI4ER training event