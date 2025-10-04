---
Title: 'Poisson Distribution'
Description: 'The Poisson distribution is a probability distribution representing the count of events occurring in a particular interval of time or space.'
Subjects:
  - 'AI'
  - 'Data Science'
Tags:
  - 'AI'
  - 'Functions'
  - 'Math'
  - 'Probability'
CatalogContent:
  - 'learn-data-science'
  - 'paths/data-science'
---

The **Poisson distribution** is a probability distribution representing the count of events occurring in a particular interval of time, space, or any other continuous domain, given that the events occur independently and at a constant average rate. It is widely used in data science for modeling events such as website traffic spikes, customer arrivals at a store, or the number of defects in a manufacturing process.

A Poisson experiment must satisfy the following conditions:

- **Events Occur Independently**: One event does not affect the occurrence of another.
- **Constant Average Rate**: The average number of events in the interval remains the same.
- **Events Cannot Occur Simultaneously**: Only one event can occur at any given point in time or space.

The formula for calculating the Poisson distribution is given by:

$$P(X = k) = \frac{e^{-\lambda} \lambda^k}{k!}$$

Where:

- $`X`$: A discrete random variable representing the number of occurrences (events).
- $`λ`$: The average number of occurrences in a given interval.
- $`k`$: The number of occurrences.
- $`e`$: The mathematical constant (approximately 2.718).

## Example

The following example generates 1000 samples representing the number of events occurring in fixed intervals, with an average rate of 4 events per interval. Then, it visualizes the frequency of events in a histogram plot:

```py
import numpy as np
import matplotlib.pyplot as plt

# Parameters for the Poisson distribution
lambda_rate = 4  # Average rate of events per interval
size = 1000  # Number of samples

# Generate Poisson distribution data
poisson_data = np.random.poisson(lambda_rate, size)

# Plot the Poisson distribution in a histogram
plt.hist(poisson_data, bins=np.arange(0, 16)-0.5, density=True, color='lightgreen', edgecolor='black', alpha=0.7)
plt.title(f'Random Poisson-Distributed Data (λ={lambda_rate})')
plt.xlabel('Number of Events')
plt.ylabel('Frequency')
plt.grid(True, linestyle='--', alpha=0.6)
plt.show()
```

The above example produces the following output:

![The output for the above example](https://raw.githubusercontent.com/Codecademy/docs/main/media/poisson-histogram.png)
