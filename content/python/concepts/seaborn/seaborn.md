---
Title: 'Seaborn'
Description: 'Seaborn is a Python data visualization library based on matplotlib. It provides a high-level interface for drawing attractive and informative statistical graphics.'
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

Seaborn is a `library` for making statistical graphics in `Python`. It builds on top of `matplotlib` and integrates closely with `pandas` data structures.

Seaborn helps you explore and understand your data. Its plotting functions operate on dataframes and arrays containing whole datasets and internally perform the necessary semantic mapping and statistical aggregation to produce informative plots. Its dataset-oriented, declarative API lets you focus on what the different elements of your plots mean, rather than on the details of how to draw them.

## Example

```codebyte/js
# Import seaborn
import seaborn as sns

# Apply the default theme
sns.set_theme()

# Load an example dataset
tips = sns.load_dataset("tips")

# Create a visualization
sns.relplot(
    data=tips,
    x="total_bill", y="tip", col="time",
    hue="smoker", style="smoker", size="size",
)
```
