---
Title: 'Geometric Distribution'
Description: 'Represents the number of trials needed to get the first success in repeated independent Bernoulli trials.'
Subjects:
  - 'Data Science'
  - 'AI'
Tags:
  - 'Data Analysis'
  - 'Distributions'
CatalogContent:
  - 'learn-data-science'
  - 'paths/data-science'
---

The **geometric distribution** is a probability distribution used to model the number of Bernoulli trials required to achieve the first success. It is commonly used in scenarios where events occur independently with a constant probability of success.

## Probability Mass Function (PMF)

The probability of observing the first success on the k-th trial is given by:

```
P(X = k) = (1 - p)^{k - 1} p
```

- `X`: The number of trials until the first success.
- `p`: The probability of getting success in a single trial.
- `(1 - p)`: The probability of getting failure in a single trial.

## Properties

- **Mean**: `1/p`
- **Variance**: `(1 - p) / p^2`
- **Memoryless Property**: The probability of success remains the same regardless of previous failures.

## Example

The following example simulates a geometric distribution in Python:

```py
import numpy as np
import matplotlib.pyplot as plt
import scipy.stats as stats

# Define probability of success
p = 0.3

# Generate geometric-distributed data
samples = np.random.geometric(p, size=1000)

# Plot histogram
plt.hist(samples, bins=range(1, max(samples)+1), density=True, alpha=0.75, color='blue', edgecolor='black')

# Overlay theoretical PMF
x = np.arange(1, max(samples) + 1)
plt.plot(x, stats.geom.pmf(x, p), 'ro-', label='Theoretical PMF')

plt.xlabel('Number of Trials')
plt.ylabel('Probability')
plt.title('Geometric Distribution (p=0.3)')
plt.legend()
plt.grid()
plt.show()
```

The output will be a histogram showing the distribution of trials needed to achieve the first success, with an overlaid theoretical probability mass function:

![The output image is a histogram displaying the distribution of trials required to achieve the first success, with a red line overlay representing the theoretical probability mass function.](https://raw.githubusercontent.com/Codecademy/docs/main/media/geometric-distribution.png)
