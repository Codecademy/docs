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
popt, pcov = curve_fit(func, xdata, ydata)
```

### Parameters
- `func` - This is the function you want to fit to your data.
- `xdata` - An array-like input representing the independent variable values (e.g., time, x-coordinates, etc.).
- `ydata` - An array-like input representing the dependent variable values (e.g., measured data corresponding to xdata).

### Outputs

- `popt` - A 1D array containing the optimal values of the parameters (a, b, c, etc.) that minimize the difference between func(xdata, ...) and ydata.
- `pcov` - A 2D array (the covariance matrix) that estimates the uncertainties of the optimized parameters.


## Example

[Text, code, images, etc. about example 1]

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

```codebyte/js
# Example runnable code block.
console.log('Hello, World!');
```
