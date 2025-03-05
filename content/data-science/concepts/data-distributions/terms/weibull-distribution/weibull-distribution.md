---
Title: 'Weibull Distribution'
Description: 'The Weibull distribution is a continuous probability distribution frequently used in reliability and survival analysis to model time-to-failure data.'
Subjects:
  - 'Data Science'
  - 'AI'
Tags:
  - 'Statistics'
  - 'Weibull'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

The **Weibull distribution** is a flexible continuous probability distribution commonly used to model the time until an event occurs, such as equipment failure or life expectancy. The shape of the distribution is controlled by its parameters, allowing it to represent different types of failure rates. It is widely applied in reliability engineering, survival analysis, and risk assessment.

## Example

The example below generates random samples from a Weibull distribution using NumPy and visualizes the results with a histogram. This demonstration illustrates how the data conforms to the Weibull distribution's characteristics.

```py
import numpy as np
import matplotlib.pyplot as plt

# Set the shape parameter for the Weibull distribution
shape = 2.0

# Generate 1,000 random samples from the Weibull distribution
data = np.random.weibull(shape, 1000)

# Plot the histogram of the generated data
plt.hist(data, bins=30, density=True, alpha=0.6, color='purple', edgecolor='black')
plt.title(f"Weibull Distribution (shape={shape})")
plt.xlabel("Value")
plt.ylabel("Density")
plt.show()
```

The above code will generate a histogram representing the Weibull distribution:

![The output for the above example](https://raw.githubusercontent.com/Codecademy/docs/main/media/weibull-distribution.png)
