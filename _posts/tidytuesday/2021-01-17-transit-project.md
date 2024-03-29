---
layout: "page"
title: "Transit Cost Project"
subtitle: "Using ggbump and ggflags for ranking analysis"
image: /assets/images/projects/tidytuesday/transit_cost_project.png
date: 2021-01-17
interactive: false
categories: r tidytuesday
permalink: /:categories/:title.html
---

I have seen on Twitter the abundance of amazing visualizations made with R for the last copuple of weeks, so I wanted to give it try in the TidyTuesday contest and this is my first attempt. I wanted to create a ranking of the countries that spend the most and build the most in public transport. For this purpose, I made use of the ggbump and ggflags libraries that allow for a seamless visualization. Check the code in my [GitHub repo](https://github.com/ancazugo/TidyTuesday/tree/main/2021/Week_02_Transit_Cost_Project).

<!-- 
``` r
library(tidytuesdayR)
library(tidyverse)
library(countrycode)
library(ggbump)
library(ggflags)
```

``` r
df <- tt_load('2021-01-05')$transit_cost[1:537,]

df$start_year <- as.numeric(df$start_year)
df$end_year <- as.numeric(df$end_year)
df$real_cost <- as.numeric(df$real_cost)
df$country <- countrycode(df$country, origin = 'iso2c', destination = 'genc2c')
```

``` r
df_country <- df %>%
    group_by(country) %>%
    summarise(total_cost = sum(real_cost), total_length = sum(length)) %>%
    mutate(cost_length = total_cost / total_length) %>%
    slice_max(total_length, n = 20)
```

``` r
df_rank <- df_country %>%
    mutate(total_length_rank = 1:20) %>%
    arrange(desc(total_cost)) %>%
    mutate(total_cost_rank = 1:20) %>%
    arrange(desc(cost_length)) %>%
    mutate(cost_length_rank = 1:20) %>%
    select(country, ends_with('rank')) %>%
    pivot_longer(cols = ends_with('rank'), names_to = 'metric', values_to = 'rank') %>%
    mutate(metric = factor(metric, levels = c('total_cost_rank', 'cost_length_rank', 'total_length_rank'))) %>%
    mutate(continent = countrycode(country, origin = 'genc2c', destination = 'continent'))
```

``` r
ggplot(df_rank, aes(x = metric, y = rank, country = tolower(country), color = continent)) + 
    geom_bump(smooth = 10, size = 1.5, lineend = "round") +
    geom_flag(size = 10) + 
    scale_x_discrete(expand = expansion(mult = c(.05, .05)),
                     labels = c('total_cost_rank' = 'Total cost of lines \n(USD millions)', 'cost_length_rank' = 'Total cost per length of Line \n(USD millions / Km)', 'total_length_rank' = 'Total length of lines \n(Km)')) +
    scale_y_reverse(breaks = seq(1, 20, 1),
                    sec.axis = sec_axis(trans = ~.*1, name = "Second Axis", breaks = seq(1, 20, 1))) + 
    scale_color_brewer(type = 'qual', palette = 'Dark2') +
    labs(title = 'Cost and Length of Transit per Country',
         subtitle = 'Ranking of selected countries in terms of length, cost and cost/length of constructed lines for public transport in the period 1990-2020. \nThe countries shown are the top 20 with the most constructed lines in Km for the 30-year period. \nAsian countries have been investing tons of dollars in transport infrastucture in the past few decades.',
         caption = 'by Andrés Camilo Zúñiga González (@ancazugo) \n Data: Transit Costs Project') +
    theme(
        panel.background = element_rect(fill = '#000000'),
        plot.background = element_rect(fill = '#000000'),
        plot.margin = unit(c(1, 1, 0.5, 1), "cm"),
        panel.grid = element_blank(),
        axis.ticks = element_blank(),
        axis.text.y = element_text(color = 'white', size = 20, hjust = 0.5),
        axis.text.y.right = element_text(color = 'white', size = 20, hjust = 0.5),
        axis.text.x = element_text(color = 'white', size = 15),
        plot.title = element_text(face = 'bold', colour = 'white', size = 20),
        plot.subtitle = element_text(colour = 'white', size = 15),
        plot.caption = element_text(colour = 'white', size = 10),
        plot.caption.position = "plot",
        legend.background = element_rect(fill = '#000000'),
        legend.text = element_text(face = 'bold', color = 'white', size = 15),
        legend.position = 'bottom',
        legend.key = element_rect(fill = '#000000'),
        legend.spacing.x = unit(.5, "cm"),
        legend.key.size = unit(2, "cm")
    )
```

``` r
ggsave('transit_cost_project.png', device = 'png', width = 50, height = 30, units = 'cm', dpi = 300)
``` -->
