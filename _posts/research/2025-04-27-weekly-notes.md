---
layout: "page"
title: "2025-04-27 Weekly Notes"
subtitle: "Weekly notes"
image: /assets/images/projects/research/2025-04-27-week.png
date: 2025-04-27
interactive: false
categories: research outreach
permalink: /:categories/:year/:month/:day/:title.html
---

This week I modtly focused on refining the inequality metric I talked about in last week's post. After talking with Anil, I decided to try the Euclidean/Manhattan ratio as a measurement to include in the paper, but the problem is that it will be the same for two observations where the distances are equally high or equally low, meaning that the absolute value is lost. Also, Ronita suggested not to do this as equity, which is what I was trying to see is not actually a quantifiable metric, but just a conceptual framework. On the other hand (in)equality, using the Gini or Theil index (which is not that common in literature) is much more reproducible. In the image below, you'll see what the most "park-deprived" residential buildings in London are, measured as the walking distance (Manhattan). Now what I need to do is figure out if this actually matches other forms of deprivation and the other green and blue metrics I've calculated.

In the side project with the Estates department I've hit a wall in the automation of creating the CAD files for import in ArcGIS, as the unique identifiers of the polygons are lost in the processing, meaning that in ArcGIS they are not recognised as individual features. I need to find a way to explode (in CAD terms) the geometries, so they can be correctly identified when generating the geodatabase.

Finally, I've resumed and almost finished reading [Good Nature](https://www.bloomsbury.com/uk/good-nature-9781526664891/) by Professor Kathy Willis from Oxford. Highly inspiring book and a lot to take away. Nice read to commemorate Earth's Day (April 22nd).
