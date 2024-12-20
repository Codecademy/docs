---
Title: 'scipy.optimize'
Description: 'The scipy.optimize module in Python provides algorithms and functions for optimization and root-finding problems, enabling efficient solutions to tasks such as curve fitting, parameter estimation, and resource allocation.'
Subjects:
  - 'Data Science'
  - 'Machine Learning'
Tags:
  - 'Python'
  - 'Optimization'
  - 'Mathematics'
CatalogContent:
  - 'learn-python'
  - 'paths/data-science'
---

The **`scipy.optimize`** module is part of the [SciPy](https://www.codecademy.com/resources/docs/scipy) library for scientific computing in [Python](https://www.codecademy.com/resources/docs/docs/python). It provides a variety of optimization and root-finding routines designed to help solve mathematical problems such as finding minima or maxima of functions, solving systems of equations, and performing linear or nonlinear optimizations. Whether you are tuning model parameters, allocating resources, or fitting complex curves, `scipy.optimize` offers a rich toolbox for improving decision-making and model performance.

## Minimization

One of the primary uses of `scipy.optimize` is to find the minima (or maxima) of functions. The `minimize()` function can handle a variety of algorithms, including gradient-based methods like `BFGS` and global methods like `basinhopping` or `differential_evolution`.

```python
import numpy as np
from scipy import optimize

# Define the function
def f(x):
    return (x - 3)**2

# Call minimize starting from an initial guess
result = optimize.minimize(f, x0=0)
print("Optimal value of x:", result.x)
print("Function value at the optimum:", result.fun)
```

The above code will give the following output:

```shell
Optimal value of x: [2.99999998]
Function value at the optimum: 2.5388963550532293e-16
```

This code attempts to find the value of \( x \) that minimizes the function `(x - 3)**2`. The optimal solution should be near `x = 3`.

## Root-Finding

`scipy.optimize` also provides methods for finding roots of equations. A root of a function is a point where the function equals zero.

```python
from scipy import optimize

def g(x):
    return np.cos(x) - x

# Use 'root' to solve g(x)=0 starting from a guess x0=0.5
sol = optimize.root(g, x0=0.5)
print("Root:", sol.x)
print("Success:", sol.success)
```

The above code will give the following output:

```shell
Root: [0.73908513]
Success: True
```

This attempts to solve the equation \( \cos(x) - x = 0 \) and returns the root and the success status.

## Linear and Nonlinear Programming

For linear optimization (linear programming), `scipy.optimize` provides `linprog()`.

For example:

```python
from scipy import optimize

# Example: Minimize c^T x = x1 + 2*x2 subject to constraints
# x1 + x2 <= 4
# -x1 + 2*x2 <= 4
c = [1, 2]
A_ub = [[1, 1],
        [-1, 2]]
b_ub = [4, 4]

res = optimize.linprog(c, A_ub=A_ub, b_ub=b_ub, method='highs')

print("Optimal solution:", res.x)
print("Optimal value:", res.fun)
```

The above code will give the following output:

```shell
Optimal solution: [0. 0.]
Optimal value: 0.0
```

Nonlinear optimization can be handled by functions like `fsolve()` for systems of equations, or `leastsq()` and `curve_fit()` for fitting functions to data.

## Curve Fitting

`curve_fit()` uses nonlinear least squares to fit a function to data:

```python
import numpy as np
from scipy import optimize

# Generate synthetic data
x_data = np.linspace(0, 4, 50)
y_data = 2.5 * np.sin(1.5 * x_data) + np.random.normal(size=50)

# Define the model function
def model(x, a, b):
    return a * np.sin(b * x)

# Fit the model to the data
params, covariance = optimize.curve_fit(model, x_data, y_data, p0=[2, 2])
a_est, b_est = params
print("Estimated a:", a_est)
print("Estimated b:", b_est)
```

The above code will give the following output:

```shell
Estimated a: 2.3406097933791625
Estimated b: 1.4353987161951995
```

`curve_fit()` finds parameters `a` and `b` that best fit the model to the noisy data.
