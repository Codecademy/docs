---
Title: "Student's t Distribution"
Description: "Explains the Student's t distribution used in statistical inference when sample sizes are small or population standard deviation is unknown."
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Data Distributions'
  - 'Probability'
  - 'Python'
  - 'Statistics'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

The **Student's t distribution** is a probability distribution that is crucial in statistical inference when working with small sample sizes or when the population standard deviation is unknown. It resembles the normal distribution but features heavier tails, making it more appropriate for estimating population parameters with limited data. This distribution is fundamental in hypothesis testing, confidence interval construction, and statistical modeling.

The formula for a t-statistic is given by:

$$t = \frac{\bar{x} - \mu}{s / \sqrt{n}}$$

Where:
- `t`: t-statistic value
- $\bar{x}$: sample mean
- `μ`: population mean
- `s`: sample standard deviation
- `n`: sample size

The probability density function (PDF) of the t-distribution with v degrees of freedom is:

$$f(t) = \frac{\Gamma(\frac{v+1}{2})}{\sqrt{v\pi}\Gamma(\frac{v}{2})} (1 + \frac{t^2}{v})^{-\frac{v+1}{2}}$$

Where:
- `Γ` is the gamma function
- `v` represents the degrees of freedom (df = n-1)

## Key Properties

The t-distribution has several distinctive characteristics:

1. **Degrees of Freedom**: Calculated as `n-1` (sample size minus one), this parameter determines the shape of the distribution.
2. **Symmetry**: Like the normal distribution, the t-distribution is symmetric around zero.
3. **Heavier Tails**: Compared to the normal distribution, the t-distribution has heavier tails, meaning extreme values are more probable.
4. **Convergence to Normal Distribution**: As degrees of freedom increase, the t-distribution approaches the standard normal distribution. When df > 30, the t-distribution is practically indistinguishable from the normal distribution.
5. **Mean, Median, and Mode**: All equal to 0 when degrees of freedom > 1.
6. **Variance**: Equal to `v/(v-2)` for v > 2, undefined for 1 < v ≤ 2, and infinite for v = 1.

> **Note:** The heavier tails of the t-distribution account for the additional uncertainty introduced when estimating the population standard deviation from a sample.

## Applications

The Student's t distribution is widely used in various statistical scenarios:

1. **Small Sample Inference**: When working with sample sizes less than 30, especially when the population standard deviation is unknown.
2. **Hypothesis Testing**: In t-tests to determine if there's a significant difference between sample means and population means, or between two sample means.
3. **Confidence Intervals**: To establish intervals for population parameters when the population standard deviation is unknown.
4. **Regression Analysis**: In determining the significance of regression coefficients.
5. **Quality Control**: In manufacturing and process control settings to analyze small batches.

## Example 1: One-sample t-test in Python

​To assess whether a new teaching method significantly impacts student performance, consider a sample of 25 students' test scores with a mean of 78 and a standard deviation of 8. The objective is to determine if this sample mean differs from the known population mean of 75 at a 95% confidence level:

```py
import scipy.stats as stats
import numpy as np

# Sample data
sample_mean = 78
sample_std = 8
sample_size = 25
population_mean = 75

# Calculate t-statistic
t_stat = (sample_mean - population_mean) / (sample_std / np.sqrt(sample_size))
print(f"t-statistic: {t_stat:.4f}")

# Calculate p-value (two-tailed test)
p_value = 2 * (1 - stats.t.cdf(abs(t_stat), df=sample_size-1))
print(f"p-value: {p_value:.4f}")

# Determine if null hypothesis is rejected (α = 0.05)
if p_value < 0.05:
    print("Reject null hypothesis: The new teaching method has a significant effect.")
else:
    print("Fail to reject null hypothesis: No significant effect detected.")
```

This example results in the following output:

```shell
t-statistic: 1.8750
p-value: 0.0730
Fail to reject null hypothesis: No significant effect detected.
```

## Example 2: Confidence Interval Calculation

Let's calculate a 95% confidence interval for a population mean based on a sample with the following characteristics: sample mean = 42, sample standard deviation = 5.2, sample size = 18.

```py
import scipy.stats as stats
import numpy as np

# Sample data
sample_mean = 42
sample_std = 5.2
sample_size = 18
confidence_level = 0.95

# Degrees of freedom
df = sample_size - 1

# Critical t-value
t_critical = stats.t.ppf((1 + confidence_level) / 2, df)

# Margin of error
margin_of_error = t_critical * (sample_std / np.sqrt(sample_size))

# Confidence interval
confidence_interval = (sample_mean - margin_of_error, sample_mean + margin_of_error)

print(f"95% Confidence Interval: ({confidence_interval[0]:.2f}, {confidence_interval[1]:.2f})")
```

This example results in the following output:

```shell
95% Confidence Interval: (39.38, 44.62)
```

​For a comprehensive understanding of statistical distributions and their applications, consider exploring Codecademy's [Master Statistics with Python](https://www.codecademy.com/learn/paths/master-statistics-with-python) skill path.
