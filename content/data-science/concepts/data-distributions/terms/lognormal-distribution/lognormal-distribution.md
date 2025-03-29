---
Title: 'Lognormal distribution'
Description: 'A probability distribution where the logarithm of the variable follows a normal distribution, typically used for modeling quantities that are always non-negative.'
Subjects:
  - 'Data Science'
  - 'Data Visualization'
Tags:
  - 'Data Distributions'
  - 'Data'
CatalogContent:
  - 'r-for-programmers'
  - 'paths/data-science'
---

The **lognormal distribution** is a probability distribution where the logarithm of a random variable follows a [normal distribution](https://www.codecademy.com/resources/docs/data-science/data-distributions/normal-distribution), characterized by a right-skewed shape with a positive tail.

This distribution is useful for modeling data that grows multiplicatively rather than additively, such as stock prices, income distributions, and biological growth. Unlike the normal distribution, which emerges from additive random effects (as described by the Central Limit Theorem), the lognormal distribution arises when random effects multiply rather than add.

## Example

The following code is a simple demonstration of generating and visualizing lognormal data:

```py
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

# Set random seed for reproducibility
np.random.seed(42)

# Generate lognormal data
mu = 0   # Mean of the underlying normal distribution
sigma = 0.5   # Standard deviation
sample_size = 1000

lognormal_data = np.random.lognormal(mean=mu, sigma=sigma, size=sample_size)

# Calculate some descriptive statistics
mean_value = np.mean(lognormal_data)
median_value = np.median(lognormal_data)
mode_approx = np.exp(mu - sigma**2)

# Create a histogram with KDE plot
plt.figure(figsize=(10, 6))
sns.histplot(lognormal_data, kde=True, bins=50)
plt.axvline(mean_value, color='r', linestyle='--', label=f'Mean: {mean_value:.2f}')
plt.axvline(median_value, color='g', linestyle='--', label=f'Median: {median_value:.2f}')
plt.axvline(mode_approx, color='b', linestyle='--', label=f'Mode (approx): {mode_approx:.2f}')

plt.title('Lognormal Distribution (μ=0, σ=0.5)')
plt.xlabel('Value')
plt.ylabel('Frequency')
plt.legend()
plt.grid(True, alpha=0.3)

# Limit x-axis to better visualize the distribution
plt.xlim(0, 5)
plt.show()

# Print key statistics
print(f"Mean: {mean_value:.4f}")
print(f"Median: {median_value:.4f}")
print(f"Mode (approximate): {mode_approx:.4f}")
print(f"Variance: {np.var(lognormal_data):.4f}")
print(f"Skewness: {((np.exp(sigma**2) + 2) * np.sqrt(np.exp(sigma**2) - 1)):.4f}")
```

This code generates a sample of 1000 lognormal random values and visualizes their distribution. The output shows a right-skewed distribution with a long tail where mean > median > mode, typical of lognormal data.

The output of the above code will be:

![Code output](https://raw.githubusercontent.com/Codecademy/docs/main/media/lognormal_1.png)
