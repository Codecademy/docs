---
Title: 'Data Distributions'
Description: 'Describe how the data values are spread out or clustered in a dataset.'
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

In data science, **data distributions** show how values are spread in a dataset. It helps highlight patterns, measure variability, and reveal the overall shape of the data. Distributions are often grouped into two categories: **discrete** and **continuous**.

## Discrete Distribution

**Discrete data** consists of integer or count-based values that cannot be split into fractions. For example, the number of students in a class or the number of cars passing through an intersection is discrete data.

Here, discrete distributions describe variables that take on distinct, separate values. These values often represent counts or whole-number outcomes. Examples include the number of heads in coin flips or the count of arrivals at a store in a given hour.

### Discrete Distribution Types

| **Distribution**                | **Description**                                                                                                                                              |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Binomial Distribution**       | Records how often success appears in a set number of independent, two-outcome trials. Each trial has a fixed chance of success.                              |
| **Poisson Distribution**        | Estimates how many events occur within a set interval, assuming each event takes place at a known average rate and happens on its own.                       |
| **Hypergeometric Distribution** | Represents the probability of drawing a certain number of successes in draws from a finite population without replacement, given a known total of successes. |
| **Geometric Distribution**      | Shows how many trials are needed to reach the first success in a sequence of independent, two-outcome trials with a constant chance of success.              |

## Continuous Distribution

**Continuous data** can take any value in a range. These values often come from measurements like weight, temperature, or distance. Because they allow for fractional increments, continuous data points can be infinitely precise depending on the measuring instrument.

Here, a continuous distribution represents the behaviour of a continuous data variable over a range of real values. It allows for infinitely acceptable increments, such as when measuring temperature, distance, or time. The normal (Gaussian) distribution is a typical example.

### Continuous Distribution Types

| **Distribution**             | **Description**                                                                                                                    |
| ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| **Normal Distribution**      | This is also known as Gaussian. Displays a bell shape, with values clustering around the mean in a symmetric pattern.              |
| **Lognormal Distribution**   | Occurs when the logarithm of a variable follows a normal pattern. Often used for data that cannot go below zero.                   |
| **F Distribution**           | Evaluates the ratio of two sample variances. Common in analysis of variance (ANOVA).                                               |
| **Chi-Square Distribution**  | Summation of the squares of independent standard normal variables. Used in independence and goodness-of-fit tests.                 |
| **Exponential Distribution** | Models the time elapsed between events in a Poisson point process, where events happen steadily and independently.                 |
| **Student's t-Distribution** | Resembles the normal curve but has heavier tails. Often used for small samples or unknown variance.                                |
| **Weibull Distribution**     | Common in reliability and survival studies. Models how external factors affect failure or survival.                                |
| **Non-normal Distribution**  | Covers any continuous distributions that do not match a normal pattern. These may have skewness, heavy tails, or other variations. |

## Example

The example below generates data from a normal distribution and plots it in a histogram:

```python
import numpy as np
import matplotlib.pyplot as plt

# Generate random data from normal distribution
data = np.random.normal(loc=0, scale=1, size=1000)

# Plot a histogram
plt.hist(data, bins=30, edgecolor='black')
plt.title("Histogram of Normally Distributed Data")
plt.xlabel("Value")
plt.ylabel("Frequency")
plt.show()
```

1. **Data Generation**: The `np.random.normal()` function generates 1000 data points from a normal distribution with mean set to `0` and standard deviation set to `1`.
2. **Histogram Plot**: The histogram groups the data into 30 bins and uses black edges for clarity.
3. **Observing the Distribution**: The plot often appears bell-shaped around the mean, a hallmark of a normal distribution.

The above code produces the following output:

![Output for the above example](https://raw.githubusercontent.com/Codecademy/docs/main/media/histogram-plot.png)
