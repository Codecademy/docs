---
Title: 't-tests'
Description: 'Tests whether the means of one or two groups are significantly different under specified assumptions.'
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

The **t-test** in Statsmodels is a statistical method to determine whether the means of one or two groups differ significantly. It is commonly used to compare the mean of a sample to a specified value, the means of two independent groups, or the means of paired data.

## Syntax

```pseudo
statsmodels.stats.weightstats.ttest_ind(x1, x2, alternative='two-sided', usevar='pooled', weights=(None, None))
```

- `x1`, `x2`: Arrays containing sample data for the groups being compared.
- `alternative`: The hypothesis to test. Options include:
  - `'two-sided'`: Default, tests for any difference.
  - `'larger'`: Tests if the mean of `x1` is greater than `x2`.
  - `'smaller'`: Tests if the mean of `x1` is less than `x2`.
- `usevar`: Assumptions about variance. Options include:
  - `'pooled'`: Default, assumes equal variance.
  - `'unequal'`: Does not assume equal variance.
- `weights`: A tuple specifying weights for `x1` and `x2`, used in weighted t-tests.

## Example

In this example, a one-sample t-test is performed to determine whether the mean of a sample dataset is significantly different from _10_:

```py
import numpy as np
from scipy.stats import ttest_1samp

# Sample data
data = np.array([9.5, 10.1, 9.8, 10.2, 9.9, 10.0, 9.7])

# Hypothesized population mean
population_mean = 10

# Perform one-sample t-test
t_stat, p_value = ttest_1samp(data, population_mean)

# Output results
print(f"t-statistic: {t_stat}")
print(f"P-value: {p_value}")

# Interpretation
alpha = 0.05
if p_value < alpha:
  print("Reject the null hypothesis: The sample mean is significantly different from 10.")
else:
  print("Fail to reject the null hypothesis: No significant difference from 10.")
```

The code above generates the following ouput:

```shell
t-statistic: -1.2545000963743562
P-value: 0.25631545891582497
Fail to reject the null hypothesis: No significant difference from 10.
```
