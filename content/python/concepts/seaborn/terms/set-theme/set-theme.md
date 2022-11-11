---
Title: '.set_theme()'
Description: 'Set aspects of the visual theme for all matplotlib and seaborn plots.'
Subjects: 
  - 'Data Visualization'
  - 'Data Science'
Tags: 
  - 'Seaborn'
  - 'APIs'
  - 'Matplotlib'
CatalogContent: 
  - 'learn-python-3'
  - 'paths/computer-science'
---

`.set_theme()` changes the global defaults for all plots using the matplotlib rcParams system. The themeing is decomposed into several distinct sets of parameter values.

## Syntax

```pseudo
seaborn.set_theme(context='notebook', style='darkgrid', palette='deep', font='sans-serif', font_scale=1, color_codes=True, rc=None)
```

This method will return `True` from when the [`.run()`](https://www.codecademy.com/resources/docs/python/threading/run) method starts until just after it finishes.

## Example

Calling this function with no arguments will activate seaborn’s “default” theme:

```py
# Import seaborn
import seaborn as sns

# Apply the default theme
sns.set_theme()
```