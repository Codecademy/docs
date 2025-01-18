---
Title: 'Curve Fit'
Description: 'Fits a custom function to data by adjusting its parameters to match the data as closely as possible.'
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

**`curve_fit()`** fits a custom function to data by adjusting its parameters to minimize the difference between the function's predictions and the actual data points, ensuring the best possible match.

## Syntax

```pseudo
popt, pcov = curve_fit(f, xdata, ydata, p0=None, sigma=None, absolute_sigma=False, check_finite=None, bounds=(-inf, inf), method=None, jac=None, *, full_output=False, nan_policy=None, **kwargs)
```

- `f`: This is the function to fit to the data.
- `xdata`: An array-like input representing the independent variable values (e.g., time, x-coordinates, etc.).
- `ydata`: An array-like input representing the dependent variable values (e.g., measured data corresponding to `xdata`).
- `p0`: Initial guess of the parameters.
- `sigma`: Defines the uncertainty in `ydata`.
- `absolute_sigma`: If `True`, `sigma` is interpreted absolutely, and the parameter covariance pcov reflects absolute values. If `False` which is the default, `sigma` is scaled to normalize residual variance. Here, pcov(absolute_sigma=False) = pcov(absolute_sigma=True) \* chisq(popt)/(M-N).
- `check_finite`: Ensures input arrays do not contain `NaN` or `inf`. If `True`, a `ValueError` is raised when such values are found. Defaults to `True` unless `nan_policy` is explicitly specified.
- `bounds`: Specifies parameter bounds. Defaults to no bounds. Options include:
  - An instance of the `Bounds` class.
  - A 2-tuple of array-like objects or scalars: Scalars apply bounds uniformly, and `np.inf` can disable bounds partially.
- `method` - Optimization method. Choices are:
  - `'lm'` (default for unconstrained problems): Levenberg-Marquardt.
  - `'trf'` (default if bounds are set): Trust Region Reflective.
  - `'dogbox'`: Dogleg.
    `'lm'` cannot handle cases where observations < variables. Use `'trf'` or `'dogbox'` instead.
- `jac`: Jacobian matrix computation for `jac(x, ...)`. Defaults to numerical estimation if None. Supports finite difference schemes for `'trf'` and `'dogbox'` methods.
- `full_output`: If `True`, returns additional information such as infodict, mesg, ier.
- `nan_policy`: Decides behavior when `NaN` values exist in input data:
  - None (default): No special handling; behavior depends on implementation.
  - `'raise'`: Throws an error.
  - `'omit'`: Ignores NaN values during computation.
- `**kwargs`: Additional keyword arguments passed to `leastsq` (if method = 'lm') or least_squares otherwise.

It returns:

- `popt`: A 1D array containing the optimal values of the parameters (`a`, `b`, `c`, etc.) that minimize the difference between the function and the data (`ydata`).
- `pcov`: A 2D array representing the covariance matrix of the estimated parameters, which provides an estimate of the uncertainties (or standard errors) associated with the optimized parameters.

## Example

This code uses `curve_fit` to fit a custom exponential decay function to noisy data and estimates the parameters `a`, `b`, and `c`:

```py
import numpy as np
from scipy.optimize import curve_fit

# Define your custom function
def func(x, a, b, c):
  return a * np.exp(-b * x) + c

# Define your data
xdata = np.linspace(0, 4, 50)
y = func(xdata, 2.5, 1.3, 0.5)
rng = np.random.default_rng()
y_noise = 0.2 * rng.normal(size=xdata.size)
ydata = y + y_noise

# Fit for the parameters a, b, c of the function func:
popt, pcov = curve_fit(func, xdata, ydata)
print(popt)
```

The above will give the following output:

```shell
[2.47681145 1.32375703 0.53063146]
```

> **Note:** Since we are using `np.random()` for `rng` variable the output is expected to change for each run.
