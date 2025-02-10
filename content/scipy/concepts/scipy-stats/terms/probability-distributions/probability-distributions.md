---
Title: 'Probability Distributions'
Description: 'In SciPy, a probability distribution defines the likelihood of outcomes for a random variable, with functions for density, cumulative probability, and sampling.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Data'
  - 'Functions'
  - 'Math'
  - 'Python'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

In statistics and probability theory, a probability distribution describes how the values of a random variable are spread or distributed. It gives the probabilities of the possible outcomes of an experiment or event. In the context of SciPy, the `scipy.stats` module provides a wide range of probability distributions that can be used for modelling, simulating, and analyzing random processes.

SciPy's `scipy.stats` module includes continuous and discrete distributions. **Continuous distributions**, such as normal or exponential distributions, are used to model variables that can take any real value within a range. **Discrete distributions**, such as the binomial or Poisson distributions, model scenarios where outcomes are limited to specific, countable values.

The `scipy.stats` module offers various functions for each distribution type, including:

- **Probability Density Function (PDF)**: Describes the likelihood of a given value under a continuous distribution.
- **Cumulative Distribution Function (CDF)**: Gives the probability that a random variable will take a value less than or equal to a specified value.
- **Random Variates**: Functions to generate random samples from a specified distribution.
- **Statistical Moments**: Functions for calculating the mean, variance, skewness, and kurtosis of the distribution.

These distributions are essential tools for tasks such as hypothesis testing, statistical modelling, simulations, and generating synthetic data that follows known statistical properties.

## Syntax

Each distribution is represented by a corresponding class in `scipy.stats`, which provides methods for computing properties like probability density, cumulative distribution, and random sampling.

```pseudo
from scipy import stats

# For continuous distributions
dist = stats.norm(loc=0, scale=1)  # Normal distribution with mean 0 and std 1

# For discrete distributions
dist_binom = stats.binom(n=10, p=0.5)  # Binomial distribution with 10 trials and 0.5 probability of success
```

### Methods available for probability distributions

- `pdf(x)`: Probability Density Function (for continuous distributions)
- `cdf(x)`: Cumulative Distribution Function
- `rvs(size)`: Random variates (sampling from the distribution)
- `mean()`: Mean of the distribution
- `std()`: Standard deviation of the distribution

## Examples

### Normal Distribution

In this example, the probability density function (PDF) will be calculated, and random samples from a normal distribution will be generated.

```py
import numpy as np
import matplotlib.pyplot as plt
from scipy import stats

# Define a normal distribution with mean 0 and standard deviation 1
dist = stats.norm(loc=0, scale=1)

# Generate 1000 random samples from the distribution
samples = dist.rvs(size=1000)

# Plot the histogram of the samples
plt.hist(samples, bins=30, density=True, alpha=0.6, color='g')

# Plot the PDF of the normal distribution
x = np.linspace(-4, 4, 100)
pdf = dist.pdf(x)
plt.plot(x, pdf, 'k', linewidth=2)
plt.title('Normal Distribution: Mean = 0, Std = 1')
plt.show()
```

This code generates random samples from a standard normal distribution and visualizes both the histogram of the samples and the probability density function (PDF).

The output will be:

![Normal Distribution](https://raw.githubusercontent.com/Codecademy/docs/main/media/normal-distribution.png)

## Binomial Distribution

In this example, the binomial distribution will be calculated to compute the probability of a specific number of successes in a series of trials.

```py
from scipy import stats

# Define a binomial distribution with 10 trials and probability of success 0.5
dist_binom = stats.binom(n=10, p=0.5)

# Probability of getting exactly 5 successes
prob_5_successes = dist_binom.pmf(5)
print(f"Probability of 5 successes: {prob_5_successes}")

# Generate 1000 random samples
samples_binom = dist_binom.rvs(size=1000)

# Plot the histogram of the binomial samples
import matplotlib.pyplot as plt
plt.hist(samples_binom, bins=10, density=True, alpha=0.6, color='blue')
plt.title('Binomial Distribution: n = 10, p = 0.5')
plt.show()
```

In this case, a binomial distribution with 10 trials and a 50% chance of success is defined. The example computes the probability of obtaining exactly 5 successes and visualizes the distribution of random samples.

The output will be:

```shell
Probability of 5 successes: 0.2460937500000002
```

![Binomial Distribution](https://raw.githubusercontent.com/Codecademy/docs/main/media/binomial-distribution.png)
