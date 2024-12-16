---
Title: 'Multioutput Regression'
Description: 'Multioutput regression is a type of regression task where the model predicts multiple dependent variables (outputs) simultaneously for each input.'
Subjects:
  - 'Data Science'
  - 'Machine Learning'
Tags:
  - 'Classification'
  - 'Multitask Learning'
  - 'MultiTaskLasso'
  - 'Scikit-learn'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

In [sklearn](https://www.codecademy.com/resources/docs/sklearn), **Multioutput Regression** is a type of regression task where the model predicts multiple dependent variables (outputs) simultaneously for each input, allowing for the modeling of relationships between multiple target variables and the features, which can improve prediction accuracy when outputs are correlated.

This can be achieved using the `MultiOutputRegressor` class, which wraps a single-output regressor (like [`LinearRegression`](https://www.codecademy.com/resources/docs/sklearn/linear-regression-analysis) or [`DecisionTreeRegressor`](https://www.codecademy.com/resources/docs/sklearn/decision-trees)) and fits a separate model for each target variable. The model then predicts all outputs at once for each input, treating each target independently.

## Syntax

```pseudo
from sklearn.multioutput import MultiOutputRegressor

multi_output_regressor = MultiOutputRegressor(estimator, n_jobs=None)
```

- `estimator`: The base regressor that is used to fit each target independently. This can be any regression model that supports single-output regression (e.g., `LinearRegression`, `DecisionTreeRegressor`, etc.).
- `n_jobs`: The number of jobs to run in parallel for fitting the models.
  - If `None`, it defaults to 1 (single-threaded).
  - If `-1`, it uses all available processors.
  - If `int > 1`, it uses that many processors for parallel computation.

## Example

In the following example, a multi-output regression model is trained using `MultiOutputRegressor` with `LinearRegression` as the base `estimator` to predict two target variables from a dataset with 100 samples and 10 features:

```py
from sklearn.datasets import make_regression
from sklearn.linear_model import LinearRegression
from sklearn.multioutput import MultiOutputRegressor

# Generate a dataset with multiple targets
X, y = make_regression(n_samples=100, n_features=10, n_targets=2, random_state=42)

# Create the base regressor
base_regressor = LinearRegression()

# Initialize MultiOutputRegressor with the base regressor
multi_output_regressor = MultiOutputRegressor(base_regressor)

# Fit the model
multi_output_regressor.fit(X, y)

# Make predictions
predictions = multi_output_regressor.predict(X)
print(predictions)
```

The code above generates output as follows:

```shell
[[ 120.68784134  275.71483026]
 [ 253.98296996  563.67307766]
 [  37.84961654   83.88732044]
 [-116.11399733 -517.34439275]
 [ 292.0729889   342.1211352 ]
 [ 126.5187794   394.60780464]
 [  74.14550766  117.86120484]
 [  34.74603745  293.23646551]
 [  -1.57480398 -146.33293402]
 [ 287.3570598   248.60804028]
 [  24.46227084   20.53247664]
 [  57.5037778   -52.07222977]
 [  33.46389769   59.9293089 ]
 [-184.35231748 -145.97759938]
 [ -18.0696738  -233.21065317]
 [  97.75493413  216.27609409]
 [-224.33987424 -283.50617896]
 [ -44.21983413  116.33800462]
 [  37.40886282  177.30394333]
 [ 245.13484874  296.85999202]
 [ -87.59651931  -39.75259675]
 [-202.99155718 -222.10609199]
 [  41.24869185  181.88917186]
 [ -17.87045638  -20.97891509]
 [  48.61661067 -165.6237776 ]
 [-295.61268808 -528.01153829]
 [  58.07439548  173.69529786]
 [ -71.14511833 -132.69257743]
 [ -56.87043841 -190.48556695]
 [  49.51678317  137.10430708]
 [  26.66526388   83.57299169]
 [   1.14129753   36.65874573]
 [  -7.74468723    6.85375096]
 [   3.73294889  261.10555969]
 [  56.44376756   40.51403006]
 [  -1.99224336  151.40524829]
 [-131.39863716 -331.62729808]
 [ 109.99484706  384.60778547]
 [  -7.74961445  107.97786082]
 [ 193.82103464  316.71111332]
 [  -7.79813083    7.15370226]
 [ -52.15779501  -96.20796676]
 [ 152.86738501  104.18711697]
 [ 191.36728076  288.45882916]
 [  20.20018313   27.74645933]
 [ 146.58558363 -117.63456814]
 [-354.50728717 -533.4900471 ]
 [  14.97567883  -95.0910446 ]
 [ -35.43101502 -118.48757456]
 [   5.35705289   42.88613639]
 [-161.09291025 -117.90429652]
 [ 172.2775084   396.90747784]
 [ 162.61929411  209.92836958]
 [-182.68456133 -163.2811691 ]
 [  89.07535864  -21.14848815]
 [ -46.75916029 -110.53894603]
 [ 231.09730211  319.15982778]
 [ -40.108541    -84.98166962]
 [-166.45390997 -265.05555636]
 [   0.97586946 -214.40604796]
 [  97.63593301  501.80797772]
 [   3.7398609   -72.64375758]
 [ 130.65561152   66.64815668]
 [ -85.31407057 -168.81530534]
 [  -7.2468998    73.28377393]
 [  22.33697872  145.21764028]
 [-120.51168929 -342.963189  ]
 [ 121.12613888   65.01661617]
 [ 124.10868505  354.92584718]
 [-147.66348249 -294.81859794]
 [  61.14523063   60.52117341]
 [-126.37893383 -334.70135616]
 [-111.77099591  -81.93814188]
 [-109.83747752 -237.97526597]
 [   8.00415806   91.38676316]
 [ -26.37947013   36.09839868]
 [ 106.36699275  130.83993429]
 [  69.06778835  125.59665375]
 [ 134.03028548  319.28586998]
 [ 130.75716498   15.34231243]
 [ -86.46672131 -139.61281879]
 [  -7.33734137 -226.69848199]
 [ 199.71269604  357.97063185]
 [ 100.94948846  -32.96835461]
 [-257.05342439 -386.6851282 ]
 [ -99.42556327 -108.57915827]
 [ 224.41784227  425.50742575]
 [-269.92957188 -202.28685621]
 [-109.21584421 -225.03205094]
 [-118.45089966 -420.99745962]
 [ -29.83876402   19.58063146]
 [  95.06986687   70.5609531 ]
 [  41.32888453    4.51642366]
 [ -10.61243193  289.0884239 ]
 [  73.11234969  158.84947994]
 [  10.45019796  260.51876186]
 [-226.04884764 -372.71451196]
 [ -17.30979575 -146.3735002 ]
 [ -13.07113033  -42.21748842]
 [ -59.54942557 -102.03957313]]
```

> **Note:** The output will vary each time the code is run unless a fixed `random_state` is set in `make_regression()`, ensuring reproducibility as shown in the example.
