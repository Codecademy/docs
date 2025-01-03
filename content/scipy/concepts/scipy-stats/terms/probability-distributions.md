---
Title: 'probability-distributions.md'
Description: 'This entry provides an introduction to probability distributions, their syntax, and an example using SciPy.'
Subjects:
  - 'Bash/Shell'
  - 'Data Visualization'
  - 'Information Technology'
Tags: 
  - 'Data Structures'
  - 'Functions'
  - 'Probability'
CatalogContent: 
  - 'docs/content/scipy/concepts/scipy-stats/terms/probability-distributions/probability-distributions.md'
  - 'Python:SciPy'
---

The element of surprise. **Probability distributions** describe how the structure of random variables are allocated.  In the context of SciPy, the scipy.stats module provides various functions for working with different probability distributions that deliver consistent information such as Cumulative Distribution Functions (CDF), Probability Density Functions (PDF), and other statistical metrics.They convey the probabilities of various outcomes, and are fundamental to statistics and data analysis;.

## Syntax
from scipy.stats import distribution_name
rv = distribution_name(parameters)
cdf_value = rv.cdf(x)
pdf_value = rv.pdf(x)
pmf_value = rv.pmf(x)
mean_value = rv.mean()
variance_value = rv.var()

## Example: Normal distribution using SciPy
from scipy.stats import norm

rv = norm(loc=0, scale=1)

cdf_value = rv.cdf(1)

pdf_value = rv.pdf(1)

mean_value = rv.mean()

variance_value = rv.var()

print("CDF at x=1:", cdf_value)
print("PDF at x=1:", pdf_value)
print("Mean of the distribution:", mean_value)
print("Variance of the distribution:", variance_value)