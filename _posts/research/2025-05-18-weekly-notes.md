---
layout: "page"
title: "2025-05-18 Weekly Notes"
subtitle: "Weekly notes"
image: /assets/images/projects/research/2025-05-18-week.png
date: 2025-05-18
interactive: false
categories: research outreach
permalink: /:categories/:year/:month/:day/:title.html
---

Most of last week was spent on working on the Estates project, trying to wrap up the Python library and build a quick demo for the team to reuse. So the library and its documentation can be found [here](https://ancazugo.github.io/ucam-digital-twin/) and it takes floor plans in DWG format and converts them to a geodatabase with the building footprints and rooms. To do so, it makes use of AutoCAD and ArcGIS Pro's Python APIs, which makes the manual process of converting files much easier. Then a Streamlit demo (check below) plots the rooms and their type, as well as providing more info about usage. One interesting thing I found while working on this streamlit app is that there is a mismatch in the basemaps from Esri, Google Maps and OpenStreetMaps. It is not a big deal for 99% of cases, but in this case, when I was trying plot the floor plans against a basemap, OSM polygons were visibly south of the actual georreferenced location. And it's not related to projection as all these use Pseudo-Mercator.

In my PhD project, I've been trying to compare my data with the [Tree Equity Score](https://uk.treeequityscore.org/) and the [Forest Research Trees Outside Woodland Dataset](https://www.forestresearch.gov.uk/tools-and-resources/fthr/trees-outside-woodland-map/). In addition, I've been exploring Over-representation analysis for my paper, as recommended by Ronita. It's a group of methods that's normally used in genomics to see if a set of genes is over-represented in a given gene set. I think it could be useful in urban analytics contexts.

Finally, this week I am attending a workshop on Impact Health Assessment (HIA), organised by the Epidemiological Unit from the MRC in Cambridge and the AI4ER Annual Showcase.

PS: I found [this book on 3D Data Science](https://learning.oreilly.com/library/view/3d-data-science/9781098161323/) methods in Python, which was recently published and looks very promising for those working on LiDAR data. 
