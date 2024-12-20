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

The **`scipy.stats`** module is part of the broader [SciPy](https://www.codecademy.com/resources/docs/scipy) library for scientific computing in Python. It provides functionality to work with various probability distributions, perform hypothesis tests, and compute descriptive statistics. By leveraging `scipy.stats`, data scientists and analysts can quickly explore their data, model it using theoretical distributions, and draw meaningful conclusions through statistical inference.

## Probability Distributions

`scipy.stats` includes a wide array of probability distributions, both continuous (e.g., normal, exponential, gamma) and discrete (e.g., binomial, Poisson). Each distribution provides methods for:

- Evaluating the probability density or mass function (`pdf` or `pmf`)
- Computing the cumulative distribution function (`cdf`)
- Generating random variables following that distribution (`rvs`)

For example, working with a **Normal Distribution**:

```python
from scipy import stats

# Create a normal distribution object with mean=0 and standard deviation=1
normal_dist = stats.norm(loc=0, scale=1)

# Calculate the probability density at x=0
prob_density = normal_dist.pdf(0)
# Get cumulative probability up to x=1.96
cumulative_prob = normal_dist.cdf(1.96)

# Generate 5 random samples
samples = normal_dist.rvs(size=5)

print("PDF at x=0:", prob_density)
print("CDF at x=1.96:", cumulative_prob)
print("Random samples:", samples)
```

The above code will give the following output:

```shell
PDF at x=0: 0.3989422804014327
CDF at x=1.96: 0.9750021048517795
Random samples: [-0.70844299  0.6425796  -1.46706191 -1.04245303  0.43231305]
```

## Descriptive Statistics

`scipy.stats` also provides convenient functions for computing descriptive statistics on arrays of data, such as:

- `mean()`, `median()`, `mode()`
- `variation()`, `skew()`, `kurtosis()`
- `describe()` for an all-in-one summary

```python
import numpy as np
from scipy import stats

data = np.array([1.2, 2.5, 2.5, 3.3, 5.0])

mean_value = np.mean(data)
median_value = np.median(data)
mode_value = stats.mode(data)
description = stats.describe(data)

print("Mean:", mean_value)
print("Median:", median_value)
print("Mode:", mode_value)
print("Description:", description)
```

The above code will give the following output:

```shell
Mean: 2.9
Median: 2.5
Mode: ModeResult(mode=2.5, count=2)
Description: DescribeResult(nobs=5, minmax=(1.2, 5.0), mean=2.9, variance=1.945, skewness=0.44143327693335577, kurtosis=-0.6971966878357927)
```

> **Note:** `stats.mode()` returns the mode and its count. In SciPy versions >= 1.11.0, `stats.mode` returns a `ModeResult` object; in older versions, it returns arrays.

## Hypothesis Testing

The `scipy.stats` module includes a comprehensive suite of statistical tests, such as:

- **t-tests** (one-sample, two-sample, paired)
- **ANOVA**
- **Chi-square tests**
- **Non-parametric tests** (e.g., Mann-Whitney U, Wilcoxon signed-rank)

For example, a **two-sample t-test** can determine if two independent samples come from populations with the same mean:

```python
from scipy import stats

# Sample data
group1 = [1.9, 2.5, 2.3, 1.8, 2.2]
group2 = [2.4, 2.7, 2.1, 2.8, 2.6]

# Perform two-sample t-test
t_stat, p_value = stats.ttest_ind(group1, group2)

print("T-statistic:", t_stat)
print("P-value:", p_value)
```

The above code will give the following output:

```shell
T-statistic: -2.1242645786248024
P-value: 0.06638306365767668
```

If the `p-value` is lower than the chosen significance level (often 0.05), this suggests a statistically significant difference between the means of the two groups.

## Correlation and Regression

`scipy.stats` also provides functions to measure relationships between variables. Common correlation tests include:

- **Pearson’s r correlation** (linear correlation)
- **Spearman’s rank correlation** (non-linear, rank-based)
- **Kendall’s tau** (rank-based measure)

```python
from scipy import stats

x = [10, 12, 13, 15, 20]
y = [12, 18, 18, 20, 25]

pearson_corr, pearson_p = stats.pearsonr(x, y)
spearman_corr, spearman_p = stats.spearmanr(x, y)

print("Pearson correlation:", pearson_corr, "p-value:", pearson_p)
print("Spearman correlation:", spearman_corr, "p-value:", spearman_p)
```

The above code will give the following output:

```shell
Pearson correlation: 0.9561734344896797 p-value: 0.01094118094963497
Spearman correlation: 0.9746794344808964 p-value: 0.004818230468198537
```

A high correlation coefficient (near 1 or -1) and a low p-value indicate a strong and statistically significant association.

The `scipy.stats` module is a powerful tool for performing statistical analysis in Python, from exploring distributional properties of data to conducting hypothesis tests and measuring relationships between variables. It serves as a cornerstone of the data scientist’s toolkit, enabling rigorous and reproducible statistical workflows.
