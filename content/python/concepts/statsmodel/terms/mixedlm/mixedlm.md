---
Title: 'MixedLM'
Description: 'MixedLM in Statsmodels is a class for fitting linear mixed-effects models, which account for both fixed and random effects in data.'
Subjects:
  - 'Data Science'
  - 'Machine Learning'
Tags:
  - 'Linear Regression'
  - 'Machine Learning'
  - 'Python'
  - 'Statistics'
  - 'Supervised Learning'
CatalogContent:
  - 'learn-python-3'
  - paths/data-science
---

**MixedLM** in Python's [Statsmodels](https://www.codecademy.com/resources/docs/python/statsmodels) library is a tool for fitting mixed-effects models, combining fixed and random effects to analyze data. It captures fixed effects (predictable factors) and random effects (unpredictable factors), defining mixed-effect modeling. Fixed effects explain the trend, while random effects account for variability across groups.

## Application of mixedlm model

- **Random Intercept Model**: Captures group-level variability in the intercept while keeping the slope fixed.
- **Random Slope Model**: Allows the slope to vary across groups to account for differences in trends.
- **Variance Components Model**: Decomposes variance into different components to understand variability sources.

## Syntax

### Using Formula API (`from_formula`)

The formula API is the recommended approach for specifying mixed-effects models. It simplifies model definition using a string formula.

```pseudo
from statsmodels.api import MixedLM

model = MixedLM.from_formula(formula, data, groups, re_formula=None)
result = model.fit()
```

**Parameters**:

- `formula`: A string specifying the fixed-effects model (e.g., "Y ~ X1 + X2").
- `data`: A Pandas DataFrame containing the dataset.
- `groups`: A column in the DataFrame that defines the grouping for random effects.
- `re_formula` (Optional): A string specifying the random-effects model. Defaults to a random intercept model.

> **Note**: The Formula API (`from_formula`) is typically easier to use and more intuitive for specifying models, especially for developers familiar with R-style formulas.

### Using Direct API

```pseudo
from statsmodels.api import MixedLM

model = MixedLM(endog, exog, groups, exog_re=None)
result = model.fit()
```

**Parameters**:

- `endog`: Dependent variable (response variable as a NumPy array or Pandas Series).
- `exog`: Design matrix for fixed effects (NumPy array or Pandas DataFrame).
- `groups`: A grouping variable for random effects (e.g., a column name or array-like object).
- `exog_re` (Optional): Design matrix for random effects. Defaults to a random intercept model.

> **Note**: The Direct API provides greater flexibility and control but requires manually constructing the design matrices, which can be cumbersome for complex models.

## Examples

In this example, a mixed-effects model is fitted to NBA team performance data, with `'Minutes'` as a fixed effect and `'Team'` as a random effect to analyze points scored:

### Using Formula API

```
import pandas as pd
from statsmodels.api import MixedLM

# Sample data
data = pd.DataFrame({
    'Points': [10, 25, 35, 30, 22, 14, 24, 28, 32, 27],
    'Minutes': [35, 40, 30, 38, 33, 32, 34, 39, 41, 36],
    'Team': ['TeamG', 'TeamG', 'TeamR', 'TeamR', 'TeamG', 'TeamG', 'TeamR', 'TeamR', 'TeamG', 'TeamR']
})

# Fit the model using formula API
model = MixedLM.from_formula("Points ~ Minutes", data, groups="Team")
result = model.fit()

# Display the results
print(result.summary())
```

The code generates the output as follows:

```shell
        Mixed Linear Model Regression Results
======================================================
Model:            MixedLM Dependent Variable: Points
No. Observations: 10      Method:             REML
No. Groups:       2       Scale:              45.7191
Min. group size:  5       Log-Likelihood:     -30.8931
Max. group size:  5       Converged:          Yes
Mean group size:  5.0
------------------------------------------------------
            Coef.  Std.Err.   z   P>|z|  [0.025 0.975]
------------------------------------------------------
Intercept    1.759   22.753 0.077 0.938 -42.835 46.353
Minutes      0.641    0.624 1.027 0.304  -0.582  1.863
Team Var    28.935    8.542
======================================================
```

### Using Direct API

```py
import pandas as pd
import numpy as np
from statsmodels.api import MixedLM

# Sample data
data = pd.DataFrame({
    'Points': [10, 25, 35, 30, 22, 14, 24, 28, 32, 27],
    'Minutes': [35, 40, 30, 38, 33, 32, 34, 39, 41, 36],
    'Team': ['TeamG', 'TeamG', 'TeamR', 'TeamR', 'TeamG', 'TeamG', 'TeamR', 'TeamR', 'TeamG', 'TeamR']
})

# Define variables
endog = data['Points']
exog = sm.add_constant(data['Minutes'])  # Adding constant for intercept
groups = data['Team']

# Fit the model using direct API
model = MixedLM(endog, exog, groups)
result = model.fit()

# Display the results
print(result.summary())
```

The code generates the output as follows:

```shell
        Mixed Linear Model Regression Results
======================================================
Model:            MixedLM Dependent Variable: Points
No. Observations: 10      Method:             REML
No. Groups:       2       Scale:              45.7191
Min. group size:  5       Log-Likelihood:     -30.8931
Max. group size:  5       Converged:          Yes
Mean group size:  5.0
------------------------------------------------------
            Coef.  Std.Err.   z   P>|z|  [0.025 0.975]
------------------------------------------------------
Intercept    1.759   22.753 0.077 0.938 -42.835 46.353
Minutes      0.641    0.624 1.027 0.304  -0.582  1.863
Team Var    28.935    8.542
======================================================
```
