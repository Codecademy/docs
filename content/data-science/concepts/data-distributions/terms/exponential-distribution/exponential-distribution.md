---
Title: 'Exponential Distribution'
Description: 'The exponential distribution is a probability distribution often used to model the time between events in a Poisson process.'
Subjects:
  - 'Data Science'
  - 'Statistics'
Tags:
  - 'Data Distributions'
  - 'Exponential'
CatalogContent:
  - 'learn-data-science'
  - 'paths/data-science'
---

The **exponential distribution** models the time between independent events that occur at a fixed average rate. It is frequently used in reliability analysis, queuing theory, and survival analysis. The distribution is defined by a single parameter, the rate λ which determines how quickly events occur.

The exponential distribution formula is given by:

$$f(x|λ) = λ e^{-λ x}$$

- `λ`: The rate parameter that represents the number of events per unit time.
- `x`: A random variable that represents the time between events.

## Example

The example below demonstrates how to generate random samples from an exponential distribution using NumPy and visualize the results with a histogram using Matplotlib:

```python
import numpy as np
import matplotlib.pyplot as plt

# Set the rate parameter (lambda)
rate = 1.5  # Events per unit time

# Generate 1,000 random samples from the exponential distribution
data = np.random.exponential(scale=1/rate, size=1000)

# Plot the histogram of the generated data
plt.hist(data, bins=30, density=True, alpha=0.6, color='teal', edgecolor='black')
plt.title(f"Exponential Distribution (rate = {rate})")
plt.xlabel("Time Between Events")
plt.ylabel("Density")
plt.show()
```

The above code produces the following output:

![The output for the above example](https://raw.githubusercontent.com/Codecademy/docs/main/media/exponential-distribution.png)
