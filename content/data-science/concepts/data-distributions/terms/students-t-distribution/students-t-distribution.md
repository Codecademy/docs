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

The **Student's t distribution** is a probability distribution used in statistical inference when working with small sample sizes or when the population standard deviation is unknown. It resembles the normal distribution but features heavier tails, making it more appropriate for estimating population parameters with limited data. This distribution is fundamental in hypothesis testing, confidence interval construction, and statistical modeling.

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

1. **Hypothesis Testing**: In t-tests to determine if there's a significant difference between sample means and population means, or between two sample means when sample sizes are small (n<30) or population standard deviation is unknown.
2. **Confidence Intervals**: To establish intervals for population parameters when the population standard deviation is unknown or sample sizes are small (n<30).
3. **Regression Analysis**: In determining the significance of regression coefficients.

## Example: Plotting a t-Distribution in Python

This example demonstrates how to generate and visualize a Student's t-distribution for different degrees of freedom (df):

```py
import numpy as np
import matplotlib.pyplot as plt
from scipy.stats import t

# Define x values
x = np.linspace(-4, 4, 1000)

# Plot t-distributions for different degrees of freedom
dfs = [1, 5, 10, 30]  # Different sample sizes
for df in dfs:
  plt.plot(x, t.pdf(x, df), label=f'df = {df}')

# Plot standard normal distribution for comparison
from scipy.stats import norm
plt.plot(x, norm.pdf(x), 'k--', label='Normal (df → ∞)')

# Labels and legend
plt.title("Student's t-Distribution for Different Degrees of Freedom")
plt.xlabel("t value")
plt.ylabel("Probability Density")
plt.legend()
plt.grid()

# Show plot
plt.show()
```

This example results in the following output:

![Graph comparing Student's t-distributions for different degrees of freedom with a standard normal distribution](https://raw.githubusercontent.com/Codecademy/docs/main/media/stdistribution-output.png)

​For a comprehensive understanding of statistical distributions and their applications, consider exploring Codecademy's [Master Statistics with Python](https://www.codecademy.com/learn/paths/master-statistics-with-python) skill path.
