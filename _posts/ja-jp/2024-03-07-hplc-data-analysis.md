---
layout: post
title: Processing HPLC data using JupyterLab
date: 2024-03-07 02:00:00+0900
description: My experiences using iPython notebooks to process chromatograph signal data
tags: ["coding"]
giscus_comments: false
related_posts: false
---

<p style="color:grey">[ 申し訳ありませんが、このページはまだ日本語に翻訳されていません。とりあえず、英語ページの内容を以下に貼り付けておきます｡ ]</p>

When analyzing HPLC data or GC data, one often ends up using the commercial software that came with the device to
find peaks and plot signals. In my case, I was working with an older instrument and wanted to try to find a solution in
Python. I came up with the following rough code, shown in an iPython notebook - this code is included in
<a href='https://github.com/jmtsuji/Ca-Chlorohelix-allophototropha-RCI/blob/master/analysis_code/physiology/hplc/Fig1bc.ipynb'>
the GitHub repo</a> for <a href='https://doi.org/10.1038/s41586-024-07180-y'>Tsuji <i>et al.</i>, Nature, 2024</a>. Basically, Scikit-learn is used to find peaks in
the data, and everything is visualized using plotnine. I haven't tried to calculate peak areas yet.

The code below is rough and would need to be cleaned up before it was ready for general use, but I wonder such code
might come in handy for future chromatograph work. See the two plots at the end of the notebook to get a sense of what
the code can do.

I apologize for the dearth of comments (!) and the plotnine warnings, but basically, the analysis below does the following:
1. Defines functions for working with hyper-spectral HPLC signal data - in my case, these data are absorbances at a range of wavelengths across
   a range of retention times
2. Uses a "master function" to extract out HPLC traces and identify peaks at a specific absorbance wavelength of interest, for
   three HPLC samples. The absorbance spectra (across the full wavelength range) are plotted for each identified peak
3. Merges the results from the three samples to generate two figures:
  - HPLC profiles (over time) for three samples at the same wavelength
  - Absorbance spectra of the highest peaks in the HPLC profile figure, for each sample

Note: some of the code lines might get cut off in the inserted notebook below, so if you'd like to freely explore the full
notebook file, see <a href='https://github.com/jmtsuji/Ca-Chlorohelix-allophototropha-RCI/blob/master/analysis_code/physiology/hplc/Fig1bc.ipynb'>
the notebook on GitHub</a>. You can also check out its brief associated <a href='https://github.com/jmtsuji/Ca-Chlorohelix-allophototropha-RCI/tree/master/analysis_code/physiology'>
README</a>.

{::nomarkdown}
{% assign jupyter_path = 'assets/jupyter/hplc.ipynb' | relative_url %}
{% capture notebook_exists %}{% file_exists assets/jupyter/hplc.ipynb %}{% endcapture %}
{% if notebook_exists == 'true' %}
  {% jupyter_notebook jupyter_path %}
{% else %}
  <p>Sorry, the notebook you are looking for does not exist.</p>
{% endif %}
{:/nomarkdown}

<br/>

Interesting that this is possible in pure Python! I might clean up this code more someday in future.
