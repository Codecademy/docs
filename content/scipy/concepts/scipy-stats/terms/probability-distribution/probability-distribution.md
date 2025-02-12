---
Title: 'Probability Distribution'
Description: 'Probability Distribution is a function that describes the likelihood of different outcomes for a random variable.'
Subjects:
  - 'Bash/Shell'
  - 'Data Visualization'
  - 'Information Technology'
Tags:
  - 'Data Structures'
  - 'Functions'
  - 'Probability'
CatalogContent:
  - 'learn-data-science'
  - 'paths/data-science-foundations'
---

**Probability distribution** describes how the values of random variables are distributed. In the context of [SciPy](https://www.codecademy.com/resources/docs/scipy), the `scipy.stats` module provides various functions for working with different probability distributions, offering consistent information such as **Cumulative Distribution Functions (CDF)**, **Probability Density Functions (PDF)**, and other statistical metrics. These distributions convey the probabilities of various outcomes and are fundamental to statistics and data analysis.

## Syntax

```pseudo
from scipy.stats import distribution_name

# Create a random variable object for the distribution
rv = distribution_name(parameters)

# Compute the CDF (Cumulative Distribution Function) at x
cdf_value = rv.cdf(x)

# Compute the PDF (Probability Density Function) at x (for continuous distributions)
pdf_value = rv.pdf(x)

# Compute the PMF (Probability Mass Function) at x (for discrete distributions)
pmf_value = rv.pmf(x)

# Compute the mean of the distribution
mean_value = rv.mean()

# Compute the variance of the distribution
variance_value = rv.var()
```

## Example

The following code creates a standard normal distribution (mean 0, standard deviation 1) and computes its cumulative distribution function (CDF), probability density function (PDF), mean, and variance using SciPy's `norm()` function:

```py
from scipy.stats import norm

# Create a normal distribution with mean 0 and standard deviation 1
rv = norm(loc=0, scale=1)

# Compute the CDF (Cumulative Distribution Function) at x = 1
cdf_value = rv.cdf(1)  # The probability that a value from the distribution is <= 1

# Compute the PDF (Probability Density Function) at x = 1
pdf_value = rv.pdf(1)  # The likelihood (height of the curve) at x = 1

# Compute the mean of the distribution
mean_value = rv.mean()  # The expected value (center) of the distribution

# Compute the variance of the distribution
variance_value = rv.var()  # The measure of spread of the distribution

# Output the results
print("CDF at x=1:", cdf_value)
print("PDF at x=1:", pdf_value)
print("Mean of the distribution:", mean_value)
print("Variance of the distribution:", variance_value)
```

The output of the code will be as follows:

```shell
CDF at x=1: 0.8413447460685429
PDF at x=1: 0.24197072451914337
Mean of the distribution: 0.0
Variance of the distribution: 1.0
```
