---
title: 'How to use the curve_fit term under Python:SciPy' # Required; the file name should be the same as the title, but lowercase, with dashes instead of spaces, and all punctuation removed
description: 'curve_fit is a powerful function in the SciPy library that's used for fitting a curve to a set of data points.' # Required; ideally under 150 characters and starts with a noun (used in search engine results and content previews)
subjects: # Please only use Subjects in the subjects.md file (https://github.com/Codecademy/docs/blob/main/documentation/subjects.md). If that list feels insufficient, feel free to create a new Subject and add it to subjects.md in your PR!
  - 'Data Science'
  - 'Data Visualization'
  - 'An nth subject name'
tags: # Please only use Tags in the tags.md file (https://github.com/Codecademy/docs/blob/main/documentation/tags.md). If that list feels insufficient, feel free to create a new Tag and add it to tags.md in your PR!
  - 'Optimization'
  - 'Module'
  - 'Function'
  - 'Python'
  - 'Data'
catalog_content: # Please use course/path landing page slugs, rather than linking to individual content items. If listing multiple items, please put the most relevant one first
  - 'learn-example-course'
  - 'paths/example-path'
---
# How to use the curve_fit term under Python:SciPy

## Introduction   
**curve_fit()** is a powerful function in the SciPy library that's used for fitting a curve to a set of data points. This is particularly useful in data analysis and scientific computing when you want to model relationships between variables. 

## Concept

At its core, **curve_fit()** finds the optimal parameters for a defined model function by minimizing the difference between the observed data points and the values predicted by the model. It uses non-linear least squares to perform the fit.

## Syntax

Here's a basic syntax for  `curve_fit()`:

```python
from scipy.optimize import curve_fit

def model_function(x, *params):
    # Define your model function here
    return ...

# xdata: independent variable data
# ydata: dependent variable data
# p0: initial guess for the parameters (optional)
# bounds: bounds on parameters (optional)
# sigma: standard deviation of ydata for weighting (optional)
params, covariance = curve_fit(model_function, xdata, ydata, p0=None, bounds=(-np.inf, np.inf))
```

## Parameters

- `model_function`: The model you are fitting to the data. It should take the independent variable as the first argument followed by the parameters to optimize.
- `xdata`: Independent variable data (input).
- `ydata`: Dependent variable data (output).
- `p0`: Initial guess for the parameters, which can aid the optimization process.
- `bounds`: Lower and upper bounds on parameters to restrict the fitting process.
- `sigma`: Standard deviations of `ydata`, used for weighting the fitting.

## Codebyte Example (if applicable)

Let's consider a practical example where we fit a Gaussian function to some noisy data.
```python
# Import libraries
import numpy as np
import matplotlib.pyplot as plt
from scipy.optimize import curve_fit
# Define the Model Function
## We'll create a Gaussian function.
def gaussian(x, amp, mean, stddev):
    return amp * np.exp(-((x - mean) ** 2) / (2 * stddev ** 2))

# Generate Sample Data
## Here, we create some synthetic data that roughly follows a Gaussian distribution, with added noise.
## Generate some data
np.random.seed(0)
x_data = np.linspace(-5, 5, 100)
y_data = gaussian(x_data, 1.0, 0.0, 1.0) + 0.1 * np.random.normal(size=x_data.size)

# Fit the Model to the Data
## Using curve_fit() to find the optimal parameters.
## Fit the model to the data
initial_guess = [1, 0, 1]  # initial guess for amp, mean, stddev
params, covariance = curve_fit(gaussian, x_data, y_data, p0=initial_guess)

# Extract parameters
amp_fit, mean_fit, stddev_fit = params

# Visualize the Results
## We can plot the original data and the fitted curve.
# Plotting
plt.scatter(x_data, y_data, label='Data', s=10)
plt.plot(x_data, gaussian(x_data, *params), color='red', label='Fitted Curve', linewidth=2)
plt.title('Data Fitting with curve_fit')
plt.xlabel('X-axis')
plt.ylabel('Y-axis')
plt.legend()
plt.show()
```
We can currently support:

- Python
- JavaScript
- Ruby
- C++
- C#
- Go
- PHP

See [content-standards.md](https://github.com/Codecademy/docs/blob/main/documentation/content-standards.md) for more details!

```codebyte/js
# Example runnable code block.
console.log('Hello, World!');
```
