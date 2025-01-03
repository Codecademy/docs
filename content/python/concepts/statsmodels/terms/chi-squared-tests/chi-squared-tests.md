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
- `axis`: The axis along which to compute the test. For multi-dimensional data, you can specify the axis (0 for rows and 1 for columns). If `axis` is set to `None`, the test is applied to all dimensions of the array.

## Example

In this example, a chi-square test is performed to compare observed proportions across four categories with the expected proportions to determine if they significantly differ:

```py
from statsmodels.stats.proportion import proportions_chisquare

# Observed counts
counts = [150, 80, 100, 70]

# Total number of observations
nobs = sum(counts)

# Perform the chi-square test
chi2, p_value, expected_table = proportions_chisquare(counts, nobs)

# Print the results
print(f"Chi-square statistic: {chi2}")
print(f"P-value: {p_value}")
print("\nExpected Counts:")
print(expected_table)

# Interpret the p-value
alpha = 0.05
if p_value < alpha:
    print("\nReject the null hypothesis: The proportions are significantly different.")
else:
    print("\nFail to reject the null hypothesis: The proportions are not significantly different.")
```

The code above generates the ouput as follows:

```shell
Chi-square statistic: 50.66666666666667
P-value: 5.761101160109705e-11

Expected Counts:
(array([[150., 250.],
       [ 80., 320.],
       [100., 300.],
       [ 70., 330.]]), array([[100., 300.],
       [100., 300.],
       [100., 300.],
       [100., 300.]]))

Reject the null hypothesis: The proportions are significantly different.
```
