##**Python Statsmodels: Statistical Distributions**

##**INTRODUCTION**
Statsmodels is a Python library for performing statistical analysis.
A key feature of Statsmodels is its support for working with statistical distributions, which are essential for modeling and analyzing data.
These distributions help describe how data points are spread or clustered and allow us to perform tasks like generating random samples, calculating probabilities, and understanding relationships in data.

Common uses for statistical distributions include:

- Comparing your data to a known distribution (e.g., normal distribution).

- Simulating random data for testing models.

- Understanding probabilities and likelihoods of events.

##**SYNTAX**

Statsmodels works with distributions using either the Empirical Cumulative Distribution Function (ECDF) or distributions provided by the scipy.stats library. Here’s a basic overview of the syntax:

###**1. Empirical Cumulative Distribution Function (ECDF)**

The ECDF allows you to understand how your data is distributed empirically (based on observed data):

```
from statsmodels.distributions.empirical_distribution import ECDF

# Create the ECDF for your data
ecdf = ECDF(data)

# Evaluate the ECDF at specific values
y = ecdf(x)
```

###**2. Theoretical Distributions (e.g., Normal Distribution)**

Theoretical distributions like the normal distribution are available in scipy.stats. You can calculate the probability density function (PDF), cumulative distribution function (CDF), or generate random samples:

```
from scipy.stats import norm  # Replace 'norm' with the desired distribution

# Calculate PDF and CDF
pdf_value = norm.pdf(x, loc=mean, scale=std_dev)
cdf_value = norm.cdf(x, loc=mean, scale=std_dev)

# Generate random samples
random_sample = norm.rvs(size=n, loc=mean, scale=std_dev)
```

##**EXAMPLE**

Running this code will produce a plot comparing the empirical distribution of the sample data to the theoretical normal distribution. The ECDF shows how the data is distributed, while the PDF and CDF represent the probabilities of the theoretical distribution.

This example provides a clear way to analyze and compare data distributions in Python using Statsmodels and Scipy.

```
import numpy as np
import matplotlib.pyplot as plt
from statsmodels.distributions.empirical_distribution import ECDF
from scipy.stats import norm

# Generate sample data
np.random.seed(42)
data = np.random.normal(loc=0, scale=1, size=1000)

# Create the ECDF
ecdf = ECDF(data)

# Values to evaluate
eval_points = np.linspace(-3, 3, 100)
y_ecdf = ecdf(eval_points)

# Theoretical Normal Distribution
pdf = norm.pdf(eval_points, loc=0, scale=1)
cdf = norm.cdf(eval_points, loc=0, scale=1)

# Plot the results
plt.figure(figsize=(10, 6))

# Plot ECDF
plt.step(eval_points, y_ecdf, label='Empirical CDF', color='blue', where='post')

# Plot theoretical PDF and CDF
plt.plot(eval_points, pdf, label='Theoretical PDF', color='green', linestyle='--')
plt.plot(eval_points, cdf, label='Theoretical CDF', color='red', linestyle=':')

# Add plot formatting
plt.title("Comparison of Empirical and Theoretical Distributions")
plt.xlabel("Value")
plt.ylabel("Probability")
plt.legend()
plt.grid()
plt.show() 
```

