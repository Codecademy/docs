---
Title: 'scipy.stats'
Description: 'scipy.stats is a Python module offering statistical functions, distributions, and hypothesis tests for data analysis.'
Subjects:
  - 'Data Science'
  - 'Machine Learning'
Tags:
  - 'Distributions'
  - 'Hypothesis Testing'
  - 'Python'
  - 'Statistics'
CatalogContent:
  - 'learn-python'
  - 'paths/data-science'
---

The **`scipy.stats`** module is part of the broader [SciPy](https://www.codecademy.com/resources/docs/scipy) library for scientific computing in Python. It provides functionality for working with various probability distributions, conducting hypothesis tests, and computing descriptive statistics. By leveraging `scipy.stats`, data scientists and analysts can quickly explore their data, model it using theoretical distributions, and draw meaningful conclusions through statistical inference.

## Probability Distributions

`scipy.stats` provides a wide range of distributions (e.g., Normal, Exponential, Binomial) with methods to work with them. For example, for the Normal distribution:

```pseudo
stats.norm.pdf(x)       # Probability Density Function
stats.norm.cdf(x)       # Cumulative Distribution Function
stats.norm.rvs(size=n)  # Generate random samples
```

- `pdf`: Returns the probability density function (PDF) value at a given point for continuous distributions..
- `cdf`: Gives the probability that a random variable is less than or equal to a certain value.
- `rvs`: Draws random samples from the specified distribution.

These methods can be used with other distributions available in `scipy.stats` by replacing norm with the desired distribution (e.g., `expon`, `binom`).

## Descriptive Statistics

Compute common statistical measures with both `numpy` and `scipy.stats`:

```pseudo
np.mean(data)
np.median(data)
stats.mode(data)
stats.describe(data)
```

- `mean()`: Computes the average value of the data.
- `median()`: Finds the middle value separating the higher and lower halves of the data.
- `mode()`: Returns the most frequently occurring value (for multi-modal data, it returns the smallest mode).
- `describe()`: Provides a quick summary of the data, including count, min, max, mean, variance, skewness, and kurtosis.

> **Note**: While `mean` and `median` are part of `numpy`, `mode` and `describe` belong to `scipy.stats`.

## Hypothesis Testing

Perform a variety of statistical tests to assess differences or relationships:

```pseudo
stats.ttest_ind(group1, group2)       # Independent t-test
stats.chisquare(observed, expected)   # Chi-square test
stats.mannwhitneyu(group1, group2)    # Mann-Whitney U test
```

- `ttest_ind()`: Checks if the means of two independent samples differ significantly.
- `chisquare()`: Compares observed frequencies to expected frequencies for a goodness-of-fit test.
- `mannwhitneyu()`: Tests for differences in the distribution of two independent samples (non-parametric).

## Correlation and Regression

Evaluate relationships between variables:

```pseudo
stats.pearsonr(x, y)   # Pearson correlation
stats.spearmanr(x, y)  # Spearman rank correlation
stats.kendalltau(x, y) # Kendall’s Tau correlation
```

- `pearsonr()`: Measures linear correlation between two datasets.
- `spearmanr()`: Measures rank-based correlation, less sensitive to non-linear relationships.
- `kendalltau()`: Measures the association between two measured quantities using rank correlation.
