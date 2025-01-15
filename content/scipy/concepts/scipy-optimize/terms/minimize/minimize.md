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

The **`minimize()`** function in the SciPy library is used to find the minimum of a scalar function. It provides various optimization algorithms, including both gradient-based and derivative-free methods.

## Syntax

```python
scipy.optimize.minimize(fun, x0, args=(), method=None, jac=None, hess=None, constraints=(), bounds=None, tol=None, options=None)
```

## Parameters

- `fun`: The objective function to be minimized.
- `x0`: Initial guess for the variables.
- `args`: Extra arguments passed to the objective function.
- `method`: The optimization method to use (e.g., `'BFGS'`, `'Nelder-Mead'`, `'Powell'`, etc.).
- `jac` (Optional): The gradient (Jacobian) of the objective function. If not provided, numerical differentiation is used.
- `hess` (Optional): The Hessian matrix of the objective function. Typically used with second-order methods like 'Newton-CG' or 'trust-ncg'.
- `constraints` (Optional): Constraints definition. Can include equality or inequality constraints.
- `bounds` (Optional): Bounds on variables.
- `tol` (Optional): Tolerance for termination. Specifies the convergence threshold.
- `options` (Optional): A dictionary of additional options specific to the selected optimization method (e.g., maximum number of iterations, tolerance, etc.).

It returns an `OptimizeResult` object with the optimal solution, function value at the solution, success status, and other optimization details.

## Example

In this example, we are using the `minimize()` function to find the minimum value of a quadratic objective function:

```py
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

It produces the following output:

```shell
Optimal value: 3.5662963072207506e-16
Optimal point: [-1.88846401e-08]
```

## Codebyte Example

Run the following codebyte example to understand how the `minimize()` function works:

```codebyte/python
from scipy.optimize import minimize

# Define the objective function
def objective_function(x):
    return (x - 3)**2 + 4

# Initial guess
x0 = 0

# Perform the minimization
result = minimize(objective_function, x0)

# Print the result
print("Optimal value:", result.fun)
print("Optimal point:", result.x)
```
