---
Title: 'scipy.stats'
Description: 'scipy.stats is a module in Python that provides a wide range of statistical functions, distributions, and tests for analyzing datasets and drawing informed conclusions from data.'
Subjects:
  - 'Data Science'
  - 'Machine Learning'
Tags:
  - 'Python'
  - 'Statistics'
  - 'Distributions'
  - 'Hypothesis Testing'
CatalogContent:
  - 'learn-python'
  - 'paths/data-science'
---

The **`scipy.stats`** module is part of the broader [SciPy](https://www.codecademy.com/resources/docs/scipy) library for scientific computing in Python. It provides functionality for working with various probability distributions, conducting hypothesis tests, and computing descriptive statistics. By leveraging `scipy.stats`, data scientists and analysts can quickly explore their data, model it using theoretical distributions, and draw meaningful conclusions through statistical inference.

## Probability Distributions

`scipy.stats` provides a wide range of distributions (e.g., Normal, Exponential, Binomial) with methods for:

```pseudo
stats.norm.pdf(x)
stats.norm.cdf(x)
stats.norm.rvs(size=n)
```

- `pdf`: Returns the probability density function value at a given point.
- `cdf`: Gives the probability that a random variable is less than or equal to a certain value.
- `rvs`: Draws random samples from the specified distribution.

## Descriptive Statistics

Compute common statistical measures:

```pseudo
np.mean(data)
np.median(data)
stats.mode(data)
stats.describe(data)
```

- `mean()`: Average value of the data.
- `median()`: Middle value separating the higher and lower half.
- `mode()`: Most frequently occurring value.
- `describe()`: Provides a quick summary of multiple statistics including count, min, max, mean, variance, skewness, and kurtosis.


## Hypothesis Testing

Perform a variety of statistical tests to assess differences or relationships:

```pseudo
stats.ttest_ind(group1, group2)       # t-test
stats.chisquare(observed, expected)   # Chi-square test
stats.mannwhitneyu(group1, group2)    # Non-parametric test
```

- `ttest_ind()`: Checks if the means of two independent samples differ significantly.
- `chisquare()`: Compares observed frequencies to expected frequencies to determine goodness of fit.
- `mannwhitneyu()`: Tests for a difference in distribution between two independent samples without assuming normality.
  
## Correlation and Regression

Evaluate relationships between variables:

```pseudo
stats.pearsonr(x, y)
stats.spearmanr(x, y)
stats.kendalltau(x, y)
```

- `pearsonr()`: Measures linear correlation between two datasets.
- `spearmanr()`: Measures rank-based correlation, less sensitive to non-linear relationships.
- `kendalltau()`: Measures the association between two measured quantities using rank correlation.
