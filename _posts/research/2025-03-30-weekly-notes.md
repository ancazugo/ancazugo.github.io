---
layout: "page"
title: "2025-03-30 Weekly Notes"
subtitle: "Weekly notes"
image: /assets/images/projects/research/2025-03-30-week.jpeg
date: 2025-03-30
interactive: false
categories: research outreach
permalink: /:categories/:year/:month/:day/:title.html
---

The past week or so I've been working on cleaning the code in my 3-30-300 analysis repo. Most of the code was running fine but many functions were repeated in the modules, and it wasn't really structured as a package. This was partially motivated by a workshop about good coding practices by the photonics group in the department of electrical engineering. Having a clean repo makes all the difference when running your experiments.

In my meeting with [Anil](https://anil.recoil.org/) we discussed on the best ways to measure the Gini coefficient for green space accessibility and availability and how they relate to equity. Although, widely used in econometrics, it presents some problems when it comes to scale. For this reason, I am calculating the 3-30-300 metrics and the remote sensing-derived metrics at the different statistical geographies in the UK (OA, LSOA, MSOA, LAD, RGN), because I feel that, especially for the 3 and 300 components, the gini coefficient is a better measure of the zonal behaviour than just averaging the count for all the buildings. So what I am testing is: for any given geography at any level (a block in Cambridge), estimate the 3 (number of trees around a radius) and 300 (distance to park) for all the buildings inside the area and calculate the gini coefficient, normalised by population. I have to say that this was the other reason why I decided to restructure the code because I tried to run it at the other scales and it broke. Hence, why I swithced all my input data to parquet format that I can come back to using R or Python (I prefer R for graphics 😂). I've been messing around with duckdb (kudos to [Michael](https://digitalflapjack.com/)) and clickhouse (as suggested once by Anil) and they work great; the only problem is in their spatial support, where Apache Sedona and Spark have the edge at the moment.

Finally, I got to help [Charles Emogor](https://charlesemogor.com/) one last time (in-person at least) before his trip to Harvard for his postdoc. It was mostly related in setting up his coding workspace in VS Code and Positron (R version of VS Code), as well as updating his webpage and some geospatial operations. 