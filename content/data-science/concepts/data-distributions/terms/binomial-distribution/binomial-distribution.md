---
Title: 'Binomial Distribution'
Description: 'The binomial distribution is a probability distribution representing the number of successful outcomes in a sequence of independent trials.'
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

The **binomial distribution** is a probability distribution representing the number of successful outcomes in a sequence of independent trials, where each trial can have only two possible results: success or failure. It is widely used in data science for modeling binary outcomes, such as predicting customer purchases, email click-through rates, or defect detection in quality control.

A binomial experiment must satisfy the following conditions:

- **Fixed Number of Trials**: The process is repeated a specific number of times.
- **Two Possible Outcomes Per Trial**: Each trial results in either success or failure.
- **Constant Probability of Success**: The probability of success remains the same in all trials.
- **Independent Trials**: The result of one trial does not affect the result of another.

The formula for computing the binomial distribution is given by:

$$P(X = k) = \binom{n}{k} p^k (1 - p)^{n - k}$$

Where:

- $`X`$: A discrete random variable representing the number of successes.
- $`n`$: The total number of trials.
- $`k`$: The number of successes.
- $`p`$: The probability of obtaining a successful outcome in each trial.
- $`\binom{n}{k}`$: The binomial coefficient indicating the number of ways to choose $`k`$ successes from $`n`$ trials.

## Example

The following example simulates 1000 experiments of flipping a coin 10 times, with each flip having a 50% probability of landing heads. Then, it visualizes the distribution of the number of heads observed in those experiments in a histogram plot:

```py
import numpy as np
import matplotlib.pyplot as plt

# Set random seed for reproducibility
np.random.seed(42)

# Parameters for the binomial distribution
n = 10  # Number of trials (e.g., 10 coin flips)
p = 0.5  # Probability of success (e.g., probability of heads)
size = 1000  # Number of experiments

# Generate binomial distribution data
binomial_data = np.random.binomial(n, p, size)

# Plot the binomial distribution in a histogram
plt.hist(binomial_data, bins=range(n+2), color='skyblue', edgecolor='black', alpha=0.7)
plt.title(f'Binomial Distribution (n={n}, p={p}, size={size})')
plt.xlabel('Number of Successes')
plt.ylabel('Frequency')
plt.grid(True)
plt.show()
```

The above example produces the following output:

![The output for the above example](https://raw.githubusercontent.com/Codecademy/docs/main/media/binomial-histogram.png)
