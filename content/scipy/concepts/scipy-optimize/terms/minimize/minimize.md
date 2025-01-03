---
Title: 'minimize()'
Description: 'Returns the minimum of a scalar function of one or more variables using optimization methods from SciPy.'  
Subjects: 
  - 'Data Science'
  - 'Machine Learning'
Tags:
  - 'Math'
  - 'Optimization'
  - 'Python'
CatalogContent: 
  - 'learn-python'
  - 'paths/data-science'
---

**minimize()** is a function in the SciPy library used to find the minimum of a scalar function. It offers various optimization algorithms, including gradient-based and derivative-free methods.

## Syntax

```python
scipy.optimize.minimize(fun, x0, args=(), method=None, jac=None, hess=None, constraints=(), bounds=None, tol=None, options=None)
```

## Parameters

- **fun**: The objective function to be minimized.
- **x0**: Initial guess for the variables.
- **args**: Extra arguments passed to the objective function.
- **method**: The optimization method to use (e.g., 'BFGS', 'Nelder-Mead').
- **jac**: (Optional) The gradient (Jacobian) of the objective function.
- **hess**: (Optional) The Hessian matrix of the objective function.
- **constraints**: (Optional) Constraints definition.
- **bounds**: (Optional) Bounds on variables.
- **tol**: (Optional) Tolerance for termination.
- **options**: (Optional) A dictionary of solver options.

## Returns

- **result**: An `OptimizeResult` object containing the optimization result.

## Example Usage

```python
from scipy.optimize import minimize

# Define the objective function
def objective_function(x):
    return x**2

# Initial guess
x0 = 2

# Perform the minimization
result = minimize(objective_function, x0)

# Print the result
print("Optimal value:", result.fun)
print("Optimal point:", result.x)
```

## Codebyte Example (if applicable)

We can currently support:

- Python
- JavaScript
- Ruby
- C++
- C#
- Go
- PHP

See [content-standards.md](https://github.com/Codecademy/docs/blob/main/documentation/content-standards.md) for more details!

```codebyte/python
from scipy.optimize import minimize

# Define the objective function
def objective_function(x):
    return x**2

# Initial guess
x0 = 2

# Perform the minimization
result = minimize(objective_function, x0)

# Print the result
print("Optimal value:", result.fun)
print("Optimal point:", result.x)
```