---
Title: 'Chi-Squared-tests'
Description: 'Assess the relationship between the actual and expected variables against a hypothesis'
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

In statsmodel **`chisquare`** is used to test for proportions. It can be used to check if the observed proportions differ from
the expected proportions. In simpler words, it tests whether proportions (sucess/failures) are equal across groups. It can
compare proportions across multiple groups or categories. It cannot be used to check for independence and goodness-of-fit.

## Syntax

```psuedo
statsmodels.stats.proportion.proportions_chisquare(
  count,
  nobs,
  value=None
)
```

- `count` {int,array_like}: a 1D array of success in nob trials
- `nobs` {int}: the total number of observations
- `value` {none}

## Example

```py
from statsmodels.stats.proportion import proportions_chisquare

# Observed counts
counts = [150, 80, 100, 70]

# Total number of observations
nobs = sum(counts)

# Perform the chi-square test
chi2, p_value, (observed_table, expected_table) = proportions_chisquare(counts, nobs)

# Print the results
print(f"Chi-square statistic: {chi2}")
print(f"P-value: {p_value}")
print("\nObserved and Expected Table:")
print(observed_table)
print("\nExpected Counts:")
print(expected_table)

# Interpret the p-value
alpha = 0.05
if p_value < alpha:
    print("\nReject the null hypothesis: The proportions are significantly different.")
else:
    print("\nFail to reject the null hypothesis: The proportions are not significantly different.")
```

```shell
Chi-square statistic: 50.66666666666667
P-value: 5.761101160109705e-11

Observed and Expected Table:
[[150. 250.]
 [ 80. 320.]
 [100. 300.]
 [ 70. 330.]]

Expected Counts:
[[100. 300.]
 [100. 300.]
 [100. 300.]
 [100. 300.]]

Reject the null hypothesis: The proportions are significantly different.
```
