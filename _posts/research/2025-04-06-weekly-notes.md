---
layout: "page"
title: "2025-04-06 Weekly Notes"
subtitle: "Weekly notes"
image: /assets/images/projects/research/2025-04-06-week.png
date: 2025-04-06
interactive: false
categories: research outreach
permalink: /:categories/:year/:month/:day/:title.html
---

As mentioned in my previous post, I have been working on the Gini Coefficient. However, when trying to run the code at a different geographical scale, it crashed, so I decided to reformat the code into a module following software engineering practices, which has been my sole focus the past week. I realised I had written the same function in multiple scripts, making the code redundant. This resulted in the reduction of the number of files and depedencies now are more clear. I switched the python project from an entirely geopandas-based workflow to a an Apache Sedona-based one, which gives me more flexibility and efficiency. I added a couple of new features that enable the location of trees around multiple buffer for each building in England and I also calculated the euclidean distance between any building and their closest park. In addition to this, I found a workoaround to use spark in R to be able to plot my results using ggplot2, which I prefer over matplotlib, given that it uses the grammar of graphics. Not to mention the GIni Coefficient functions and many other econometric functions are easily available in R. With spark, in R I can do the analysis on the parquet files I created the previous week (I stopped using duckdb, since its analytical operations don't match sparklyr).

This week my work will be focused on integrating the modules into one table, aggregating by the geographic level, which means calculating the Gini Coefficient at the same geographic level of the canopy cover and the spectral indexes (NDVI, NDBI, NDWI). Moreover, I will continue working with the document as some other groups and organisations are working similar goals. Just this past Saturday, [Forest Research](https://www.forestresearch.gov.uk/tools-and-resources/fthr/trees-outside-woodland-map/) introduced a new map for trees outside woodland, which uses a similar approach to [mine]({% post_url 2025-03-23-weekly-notes %}), but my objective is beyond mapping as I want to evaluate green equity. The image is comparison of my map and theirs.

On my side project with the Estates division, I managed to automate the AutoCAD workflow to reformat floor plan files for further use in the ArcGIS ecosystem to build a floor-aware geodatabase. This will save me (and the Estates team) a ton of time when preprocessing DWG files. Following what I've been doing for my own code, I've also implemented good software enginneering practices for this project, which will hopefully become a package for internal use in the University. I've been using uv as a package manager for this project and it's ridiculously fast compared to poetry and the docstring is so easily written by VS Code and Copilot. The next step is to implement the Building class for the geodatabase and create the visualization for occupancy.
