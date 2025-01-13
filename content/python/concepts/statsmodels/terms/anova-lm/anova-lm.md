---
Title: 'anova_lm'
Description: 'Performs an analysis of variance (ANOVA) on one or more fitted linear models to assess their goodness-of-fit and compare their explanatory power.'
Subjects:
  - 'Data Science'
  - 'Machine Learning'
Tags:
  - 'Python'
  - 'Statsmodels'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

**`anova_lm()`** is the function in Python's [`statsmodels`](https://www.codecademy.com/resources/docs/python/statsmodels) library that produces an ANOVA table for one or more fitted linear models. ANOVA (Analysis of Variance) is a statistical method used to determine whether there are significant differences between the means of three or more groups. Researchers and analysts can use `anova_lm()` to evaluate the effects of categorical variables on a continuous outcome and compare nested linear models to assess their relative explanatory power.

## Syntax

```pseudo
statsmodels.stats.anova.anova_lm(*args, **kwargs)
```

- `*args`: One or more fitted model results (e.g., instances of `OLS` model results) to perform ANOVA on.
- `**kwargs`: Optional keyword arguments to customize the ANOVA test, such as:
  - `scale`: Specifies the scale parameter.
  - `test`: Type of test (e.g., 'F' for F-test).
  - `typ`: Specifies the type of sum of squares to calculate (e.g., Type I, II, or III).
  - `robust`: If `True`, performs a robust ANOVA.

## Example

This example demonstrates how to use the `anova_lm()` function in the `statsmodels` library to perform analysis of variance on a fitted linear model:

```py
import statsmodels.api as sm
from statsmodels.formula.api import ols
from statsmodels.stats.anova import anova_lm
import pandas as pd

# Load example data
data = sm.datasets.get_rdataset('iris').data

# Rename columns to make them Python-friendly
data.rename(columns=lambda x: x.replace('.', '_'), inplace=True)

# Fit a linear regression model using Ordinary Least Squares (OLS)
model = ols('Sepal_Length ~ Petal_Length + Petal_Width', data=data).fit()

# Perform ANOVA on the fitted model
anova_results = anova_lm(model, typ=2)

# Print the ANOVA table
print(anova_results)
```

The ANOVA table produced shows the sum of squares, degrees of freedom, F-statistics, and p-values, helping to evaluate the significance of each predictor in the model:

```shell
                 sum_sq     df          F        PR(>F)
Petal_Length   9.934196    1.0  61.150938  9.414477e-13
Petal_Width    0.644340    1.0   3.966300  4.827246e-02
Residual      23.880694  147.0        NaN           NaN
```
