---
Title: 'Chi-Squared tests'
Description: 'Assess the relationship between the actual and expected variables against a hypothesis.'
Subjects:
  - 'Machine Learning'
  - 'Data Science'
Tags:
  - 'Statistics'
  - 'Properties'
  - 'Models'
  - 'Data'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **Chi-Square test** in statsmodels is used to test whether observed proportions differ from expected proportions. It is commonly used to compare proportions across multiple groups or categories. The test can be applied in two contexts: goodness-of-fit (to see if the proportions match an expected distribution) and test of independence (to assess if two categorical variables are independent).

## Syntax

```psuedo
scipy.stats.chisquare(f_obs, f_exp=None, ddof=0, axis=0)
```

- `f_obs`: The observed frequencies or values. This should be a 1D or 2D array where each value represents the observed count in a category or group.
- `f_exp`: The expected frequencies or values. This is also a 1D or 2D array, where each value represents the expected count in the corresponding category or group.
- `ddof`: The "Delta Degrees of Freedom" adjustment for the test. This is used to adjust for the number of parameters estimated from the data. For a goodness-of-fit test, `ddof=0` is standard, but you can adjust it for specific models or tests.
- `axis`: The axis along which the test is computed. For multi-dimensional data, you can specify the axis (0 for rows and 1 for columns). If `axis` is set to `None`, the test is applied to all dimensions of the array.

## Example

In this example, a chi-square test is performed to compare observed proportions across four categories with the expected proportions to determine if they differ:

```py
from scipy.stats import chisquare

# Observed counts
counts = [150, 80, 100, 70]

# For equal expected proportions (null hypothesis)
# Expected counts would be total/number of categories
n_categories = len(counts)
total = sum(counts)
expected = [total/n_categories] * n_categories

# Perform chi-square test
chi2_stat, p_value = chisquare(
  f_obs=counts,        # Observed frequencies
  f_exp=expected,      # Expected frequencies
  ddof=0               # Degrees of freedom adjustment
)

# Print results
print(f"Chi-square statistic: {chi2_stat}")
print(f"P-value: {p_value}")

# Interpret results
alpha = 0.05
if p_value < alpha:
  print("Reject the null hypothesis: The proportions are significantly different.")
else:
  print("Fail to reject the null hypothesis: The proportions are not significantly different.")
```

The code above generates the ouput as follows:

```shell
Chi-square statistic: 38.0
P-value: 2.8264748814532456e-08
Reject the null hypothesis: The proportions are significantly different.
```
