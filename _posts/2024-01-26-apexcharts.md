---
layout: post
title: a post with apexcharts
date: 2024-01-26 17:42:00
description: this is what included apexcharts code could look like
tags: formatting charts
categories: sample-posts
chart:
  apexcharts: true
---

This is an example post with some apexcharts code.

````markdown
```apexcharts
{
  "series": [14, 23, 21, 17, 15, 10, 12, 17, 21],
  "chart": {
    "type": "polarArea"
  },
  "stroke": {
    "colors": ["#fff"]
  },
  "fill": {
    "opacity": 0.8
  },
  "responsive": [{
    "breakpoint": 480,
    "options": {
      "chart": {
        "width": 200
      },
      "legend": {
        "position": "bottom"
      }
    }
  }]
}
```
````

Which generates:

```apexcharts
{
  "series": [14, 23, 21, 17, 15, 10, 12, 17, 21],
  "chart": {
    "type": "polarArea"
  },
  "stroke": {
    "colors": ["#fff"]
  },
  "fill": {
    "opacity": 0.8
  },
  "responsive": [{
    "breakpoint": 480,
    "options": {
      "chart": {
        "width": 200
      },
      "legend": {
        "position": "bottom"
      }
    }
  }]
}
```
