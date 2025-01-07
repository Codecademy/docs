---
Title: '.odeint()'
Description: 'Solves ordinary differential equations in SciPy using the LSODA method, automatically handling stiff and non-stiff problems.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Python'
  - 'Differential Equations'
  - 'SciPy'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`odeint()`** function from SciPy's [`integrate`](https://www.codecademy.com/resources/docs/scipy/scipy-integrate) module is a powerful tool for solving initial value problems for ordinary differential equations (ODEs). It integrates a system of ordinary differential equations using the LSODA method from the FORTRAN library `odepack`. This method automatically switches between stiff and non-stiff methods based on the problem characteristics.

## Syntax

The general syntax for using **`odeint()`** is as follows:

```python
from scipy.integrate import odeint

solution = odeint(func, y0, t, args=(), Dfun=None, col_deriv=0, full_output=0, ml=None, mu=None, rtol=None, atol=None, tcrit=None, h0=0.0, hmax=0.0, hmin=0.0, ixpr=0, mxstep=500, mxhnil=10, mxordn=12, mxords=5)
```

### Parameters

- **`func`**: A callable that defines the derivative of the system, \( \frac{dy}{dt} = f(y, t, ...) \).
- **`y0`**: Initial condition(s) (array-like).
- **`t`**: Array of time points where the solution is to be computed.
- **`args`**: Extra arguments to pass to `func` (optional).
- **Other parameters**: Control solver behavior, precision, and output verbosity (optional).

### Returns

- **`solution`**: An array of the integrated values for each time point in `t`.

## Example

Solve the following ODE:
\[
\frac{dy}{dt} = -2y + 3, \quad y(0) = 5.
\]

### Python Code

```python
import numpy as np
from scipy.integrate import odeint
import matplotlib.pyplot as plt

def model(y, t):
    dydt = -2 * y + 3
    return dydt

# Initial condition
y0 = 5

# Time points
t = np.linspace(0, 5, 100)

# Solve ODE
solution = odeint(model, y0, t)

# Plot results
plt.plot(t, solution)
plt.title('Solution of dy/dt = -2y + 3')
plt.xlabel('Time (t)')
plt.ylabel('y(t)')
plt.grid()
plt.show()
```

### Output

The plot shows the solution \( y(t) \) over time, illustrating the system's dynamics as it approaches a steady state.

## Notes

- **`odeint()`** is ideal for many scientific and engineering applications due to its robustness and flexibility.
- For more advanced control or alternative solvers, consider using **`scipy.integrate.solve_ivp()`**, which offers a more modern API.

## References

- [SciPy Documentation on `odeint`](https://docs.scipy.org/doc/scipy/reference/generated/scipy.integrate.odeint.html)
