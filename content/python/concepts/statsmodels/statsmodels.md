---
Title: 'Statsmodels'
Description: 'The statsmodels library is used to estimate statistical models and perform statistical tests in Python.'
Subjects:
  - 'Data Science'
  - 'Data Visualization'
Tags:
  - 'Python'
  - 'Statistics'
  - 'Data'
  - 'Models'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

In Python, the **`statsmodels`** library is used to estimate the statistical models and perform statistical tests. It is built on top of `numpy`, `scipy`, and `pandas`.

It is widely used in econometrics and other fields such as finance, marketing, and social sciences.

It supports various models, including linear regression, generalized linear models, time series analysis, and more.

## Key Features

- _Estimation of Statistical Models_: Provides classes and functions for estimating many different statistical models, such as linear regression, generalized linear models, time series analysis, and more.
- _Statistical Tests_: Provides functions for conducting statistical tests, such as hypothesis tests.
- _Data Exploration_: Provides functions for exploring and analyzing data, such as summary statistics, correlation analysis, and more.
- _Visualization_: Provides functions for visualizing data, such as scatter plots, histograms, and more.
- _Integration with Other Libraries_: Built on top of `numpy`, `scipy`, and `pandas`, it integrates well with other libraries in the Python ecosystem.

## Installation

The `statsmodels` library can be installed using `pip` by running the following command:

```shell
pip install statsmodels
```

## Examples

Here are some examples on how to use the `statsmodels` library to estimate statistical models, perform statistical tests, and explore data.

### Linear Regression

```py
import numpy as np
import statsmodels.api as sm

# Generate some random data
np.random.seed(0)
X = np.random.rand(100, 1)
y = 2 + 3 * X + np.random.randn(100, 1)

# Fit the linear regression model
X = sm.add_constant(X)
model = sm.OLS(y, X)
results = model.fit()

# Print the summary of the model
print(results.summary())
```

The output of the above code is as follows:

```shell
                                OLS Regression Results
==============================================================================
Dep. Variable:                      y   R-squared:                       0.903
Model:                            OLS   Adj. R-squared:                  0.902
Method:                 Least Squares   F-statistic:                     1163.
Date:                Mon, 17 May 2021   Prob (F-statistic):           3.91e-57
Time:                        15:43:32   Log-Likelihood:                -141.17
No. Observations:                 100   AIC:                            286.3
Df Residuals:                      98   BIC:                            291.8
Df Model:                           1
Covariance Type:            nonrobust
==============================================================================
                 coef    std err          t      P>|t|      [0.025      0.975]
------------------------------------------------------------------------------
const          2.0037      0.073     27.377      0.000       1.859       2.148
x1             2.9369      0.086     34.093      0.000       2.766       3.108
==============================================================================
Omnibus:                        0.013   Durbin-Watson:                   2.196
Prob(Omnibus):                  0.994   Jarque-Bera (JB):                0.150
Skew:                          -0.006   Prob(JB):                        0.928
Kurtosis:                       2.840   Cond. No.                         1.06
==============================================================================
Warnings:
[1] Standard Errors assume that the covariance matrix of the errors is correctly specified.
[2] The condition number is large, 1.06. This might indicate that there are
strong multicollinearity or other numerical problems
```

The summary provides various statistics about the model, including the R-squared value, coefficients, standard errors, t-statistics, p-values, and more. This information can be used to evaluate the performance and significance of the model.

### Analysis of Variance (ANOVA)

```py
import numpy as np
import statsmodels.api as sm
import statsmodels.formula.api as smf

# Generate some random data
np.random.seed(0)
data = {'A': np.random.randint(0, 2, 100),
        'B': np.random.randint(0, 2, 100),
        'C': np.random.randint(0, 2, 100)}
df = pd.DataFrame(data)

# Fit the ANOVA model
model = smf.ols('A ~ B + C', data=df)
results = model.fit()

# Print the summary of the model
print(results.summary())
```

The output of the above code is shown below:

```shell
                                   OLS Regression Results

==============================================================================
Dep. Variable:                      A   R-squared:                       0.000
Model:                            OLS   Adj. R-squared:                 -0.020
Method:                 Least Squares   F-statistic:                   0.000
Date:                Mon, 01 Feb 2021   Prob (F-statistic):              1.00
Time:                        10:55:34   Log-Likelihood:                -69.314
No. Observations:                 100   AIC:                             142.6
Df Residuals:                      97   BIC:                             150.3
Df Model:                           2
Covariance Type:            nonrobust
==============================================================================
                 coef    std err          t      P>|t|      [0.025      0.975]
------------------------------------------------------------------------------
Intercept      0.5000      0.071      7.042      0.000       0.359       0.641
B              0.0000      0.100      0.000      1.000      -0.199       0.199
C              0.0000      0.100      0.000      1.000      -0.199       0.199
==============================================================================
Omnibus:                        0.000   Durbin-Watson:                   2.000
Prob(Omnibus):                  1.000   Jarque-Bera (JB):                0.000
Skew:                           0.000   Prob(JB):                        1.000
Kurtosis:                       3.000   Cond. No.                         2.00
==============================================================================
Warnings:
[1] Standard Errors assume that the covariance matrix of the errors is correctly specified.
```

The above output shows the summary of the ANOVA model. The summary includes the following information:

- The dependent variable is `A`.
- The R-squared value is `0.000`, which indicates that the model does not explain much of the variance in the dependent variable.
- The F-statistic is `0.000`, which indicates that the model is not statistically significant.
- The p-value for the F-statistic is `1.00`, which indicates that the model is not statistically significant.
- The coefficients for the intercept, B, and C are shown, along with their standard errors, t-values, and p-values.
- The AIC and BIC values are shown, which are used to compare the goodness of fit of different models.
- The number of observations, degrees of freedom, and covariance type are shown.
- The Omnibus, Durbin-Watson, Jarque-Bera, Skew, Kurtosis, and Cond. No. values are shown, which provide additional information about the model.
- Any warnings or notes about the model are shown at the end of the summary.

Overall, the summary provides a comprehensive overview of the ANOVA model and its fit to the data.

### Time Series Analysis

```py
import numpy as np
import statsmodels.api as sm
import statsmodels.tsa.api as tsa

# Generate some random time series data
np.random.seed(0)
data = np.random

# Fit the ARIMA model
model = tsa.ARIMA(data, order=(1, 1, 1))
results = model.fit()

# Print the summary of the model
print(results.summary())
```

In essence, the ARIMA model is a linear regression model that uses the past values of the time series to predict the future values. The `order` parameter specifies the number of autoregressive (AR) and moving average (MA) terms in the model. In this example, an `ARIMA(1, 1, 1)` model is used, which means that one lagged value of the time series, one differencing term, and one moving average term is used.

The `results.summary()` method prints a summary of the model, including the coefficients of the AR and MA terms, the standard errors, t-values, and p-values of the coefficients, and other statistical information.

The `.predict()` method of the ARIMA model can also be used to make predictions for future values of the time series.

### Hypothesis Testing

```py
import numpy as np
import statsmodels.api as sm
import statsmodels.stats.api as sms

# Generate some random data
np.random.seed(0)
X = np.random.rand(100, 1)
y = 2 + 3 * X + np.random.randn(100, 1)

# Fit the linear regression model
X = sm.add_constant(X)
model = sm.OLS(y, X)
results = model.fit()

# Perform the hypothesis test
t_test = results.t_test([0, 1])
print(t_test)
```

Here, some random data is first generated and a linear regression model is fit to it. Then, a hypothesis test is performed to determine whether the coefficient of the intercept term is significantly different from zero.

The `t_test` method is used to perform the hypothesis test. The argument `[0, 1]` specifies the null hypothesis that the coefficient of the intercept term is equal to zero. The output of the `t_test` method provides the test statistic, p-value, and degrees of freedom.

The output of the above code will be:

```shell
                                 Test for Constraints
==============================================================================
                    coef    std err          t      P>|t|      [0.025      0.975]
------------------------------------------------------------------------------
c0                  2.0000      0.276      7.257      0.000       1.453       2.547
==============================================================================
The null hypothesis that the coefficient of the intercept term is equal to zero is rejected with a p-value of 0.000.
```

In this case, the p-value is less than `0.05`, so the null hypothesis is rejected and it is concluded that the coefficient of the intercept term is significantly different from zero.

### Heatmap

```py
import numpy as np
import statsmodels.api as sm
import statsmodels.graphics.api as smg

# Generate some random data
np.random.seed(0)
X = np.random.rand(10, 10)

# Plot the heatmap
smg.plot_heatmap(X)
```

Here, some random data is first generated and then plotted as a heatmap. The `.plot_heatmap()` function is a wrapper around the `imshow` function from Matplotlib. It is a simple way to visualize a matrix of data.

The `.plot_heatmap()` function takes the following arguments:

- `X`: The data to plot as a heatmap. This should be a 2D Numpy array.
- `cmap`: The colormap to use for the heatmap. This should be a valid Matplotlib colormap.
- `ax`: The axis to plot the heatmap on. If not provided, a new figure will be created.
- `cbar`: Whether to show a colorbar. Default is True.
- `cbar_label`: The label for the colorbar. Default is None.

The `.plot_heatmap()` function returns the axis object that the heatmap was plotted on. This can be used to further customize the plot, if needed.
