---
layout: "page"
title: "2021 SDG Hackathon"
subtitle: "Analysing Swiss data on UN SDGs"
image: /assets/images/projects/tidytuesday/sdg_viz.png
date: 2021-11-06
interactive: false
categories: r tidytuesday
permalink: /:categories/:title.html
---

I participated in the 2021 [SDG Hackathon hosted](sdghackathon.io/) by CORELAID Switzerland and the University of Basel. The data used was obtained from text analysis of projects realted to SDGs in Switzerland using five different systems. Each system detected a number of times each SDG in each project. I wanted to show how commonly each SDG is detected by each system from the dataset and for this purpose I created a rank view of the 17 SDGs using ggbump and integrating it with ggtext and several other packages. You can chekc out the code in the [GitHub repo](https://github.com/ancazugo/sdg-hackathon).