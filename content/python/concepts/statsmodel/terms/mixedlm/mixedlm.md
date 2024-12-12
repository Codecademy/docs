---
Title: 'mixedlm model'
Description: 'The mixedlm model is found in the Python statsmodels library. Its purpose is to model mixed effects, which combine both fixed and random effects to analyze trends.'
Subjects:
  - 'Biostatistic and medicine'
  - 'social science and psychology'
Tags:
  - 'mixed effect'
  - 'fixed effect'
  - 'hirarchical model'
  - 'random effect'
  - 'statsmodel'
  - 'regression'
  - generalized linear mixed models'
  - 
CatalogContent:
  - 'model formula'
  - 'covariance structure'
---

The **mixedlm model** captures predictable factors (fixed effect) and unpredictable factors (random effect). The ability of **mixedlm model** to estimate random and fixed effects is what defines the **mixed-effect** modeling.
> Note: fixed effect explains the trend, while random effects extrapolate the groups' variability.

## Application of mixedlm model:
<ul>
<li>Random intercept model:</li>
  <li>Random slope model:</li>
  <li>And the variance components model</li>
</ul>

##  syntax
```
import statsmodels.api as sm
from statsmodels.formula.api import mixedlm

model = mixedlm("response ~ predictor", data, groups="group_var")
result = model.fit()
```
## Example
The fixed effect is the time at which points are scored across two nba teams. Then a random effect is each specific pattern in which points are scored in relationship to time.


## Codeblock
```
import pandas as pd
from statsmodels.formula.api import mixedlm

# An example of the performance between two NBA teams' (team names: TeamG, TeamR)
data = pd.DataFrame({
    'Points': [10, 25, 35, 30, 22, 14, 24, 28, 32, 27],
    'Minutes': [35, 40, 30, 38, 33, 32, 34, 39, 41, 36],
    'Team': ['TeamG', 'TeamG', 'TeamR', 'TeamR', 'TeamG', 'TeamG', 'TeamR', 'TeamR', 'TeamG', 'TeamR']
})

# Fit mixed-effects model: Fixed effect for minutes played, random effect for teams
model = mixedlm("points ~ minutes", data, groups="team")
result = model.fit()

# Display the results
print(result.summary())
```
