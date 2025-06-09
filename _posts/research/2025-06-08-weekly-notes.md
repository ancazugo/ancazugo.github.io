---
layout: "page"
title: "2025-06-08 Weekly Notes"
subtitle: "Weekly notes"
image: /assets/images/projects/research/2025-06-08-week.png
date: 2025-06-08
interactive: false
categories: research outreach
permalink: /:categories/:year/:month/:day/:title.html
---

Two weeks smashed into one due to the annual AI4ER retreat in the Lake District and lack of good wifi 🤣: I finished the analysis of inequality using my 3-30-300, one of the obstacles was trying to account for population size when measuring a given variable in a certain geographical unit; the solution was rather simple, just normalise with the population (n/(n-1)), which roughly keeps the interpretation of Gini the same (higher values more unequal), but it leads to values that might be larger than one, due to imbalance in population size. This is actually good as I can now see two areas that might have a similar Gini Score but may have different number of inhabitants. This led to a rabbithole of trying to find the best way to represent this and I ended up using a bivariate map (see below), which will definitely be in the paper.

On another note, I've always read many papers that quanitfy urban trees use Google Street View, but that's not very scalable to a big city like London without incurring into big expenses in the Maps API in GCP. Thankfully, I found [Mapillary](www.mapillary.com) which is the open source equivalent. Their documentation is not the best but I managed to create a script that downloads all photos from one path, which I can integrate with the LiDAR and high-res RGB to map trees and species (or that's my idea, roughly inspired by [The Auto Arborist Dataset](https://google.github.io/auto-arborist/)). Photos might not be the best quality as Google's but it has good coverage and is open.

Moreover, I found one paper that is relevant for (urban) Foundation Models: [CityML](https://dl.acm.org/doi/10.1145/3627673.3679662), which has better benchmark scores than the most popular framework for vector-based FM, named GeoVectors. This paper is quite interesting because they use the visual context of polygon features, which means that they rasterise several vector layers for the model to learn.

Finally, I also recently shifted my coding workflow from VS Code to Cursor due to their support for better models and an education-based subscription their Pro membership. Unfortunately, I only got it to work with my Colombian university account as their form apparently uses regex to detect *edu* in the email domain, which is not part of Cambridge email accounts. The change to Cursor has definitely sped up the coding process as it is faster than copilot and surprisingly better at writting and formatting R scripts than VS Code.

PS: Interesting discussions I had in the AI4ER retreat with my fellow PhD friends. Worth highlighting the session led by [Orlando](https://orlando-code.github.io/) about PhD struggles and life after the PhD and [Adriano Gualandi](https://www.clarehall.cam.ac.uk/directory/adriano-gualandi/)'s insightful talk about the publishing process.
