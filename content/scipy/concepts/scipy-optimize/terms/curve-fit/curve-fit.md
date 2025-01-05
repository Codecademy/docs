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

**curve-fit()** fits a custom function to data by adjusting its parameters to minimize the difference between the function's predictions and the actual data points, ensuring the best possible match.

## Syntax

```pseudo
popt, pcov = curve_fit(f, xdata, ydata, p0=None, sigma=None, absolute_sigma=False, check_finite=None, bounds=(-inf, inf), method=None, jac=None, *, full_output=False, nan_policy=None, **kwargs)
```

### Parameters
- `func` - This is the function you want to fit to your data.
- `xdata` - An array-like input representing the independent variable values (e.g., time, x-coordinates, etc.).
- `ydata` - An array-like input representing the dependent variable values (e.g., measured data corresponding to xdata).
- `p0` - Inital guess of the parameters.
- `sigma` - Defines the uncertainty in ydata. 
- `absolute_sigma` - If True, sigma is interpreted absolutely, and the parameter covariance pcov reflects absolute values. If False (default), sigma is scaled to normalize residual variance. Here, pcov(absolute_sigma=False) = pcov(absolute_sigma=True) * chisq(popt)/(M-N).
- `check_finite` - Ensures input arrays do not contain NaN or inf. If True, a ValueError is raised when such values are found. Defaults to True unless nan_policy is explicitly specified.
- `bounds` - Specifies parameter bounds. Defaults to no bounds.Options include:
An instance of the Bounds class.
A 2-tuple of array-like objects or scalars: scalars apply bounds uniformly, and np.inf can disable bounds partially.
- `method` - Optimization method. Choices include:
    - 'lm' (default for unconstrained problems): Levenberg-Marquardt.
    - 'trf' (default if bounds are set): Trust Region Reflective.
    - 'dogbox': Dogleg.
    - 'lm' cannot handle cases where observations < variables. Use 'trf' or 'dogbox' instead.
- `jac` - Jacobian matrix computation for f(x, ...). Defaults to numerical estimation if None. Supports finite difference schemes for 'trf' and 'dogbox' methods.
- `full_output` - If True, returns additional information (infodict, mesg, ier). Available from version 1.9.
- `nan_policy` - Governs behavior when NaN values exist in input data:

    - 'raise': Throws an error.
    - 'omit': Ignores NaN values during computation.
    - None (default): No special handling; behavior depends on implementation.
- `**kwargs` - Additional keyword arguments passed to leastsq (if method = 'lm') or least_squares otherwise.


### Outputs

- `popt` - A 1D array containing the optimal values of the parameters (a, b, c, etc.) that minimize the difference between func(xdata, ...) and ydata.
- `pcov` - A 2D array (the covariance matrix) that estimates the uncertainties of the optimized parameters.


## Example

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
opt, pcov = curve_fit(func, xdata, ydata)
print(popt)
```

The aboe will give the following output:

```
array([2.56274217, 1.37268521, 0.47427475])

```
