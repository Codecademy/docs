---
Title: 'ANOVA and Hypothesis Testing'
Description: 'Tests if group means differ significantly using ANOVA in hypothesis testing with Python and statsmodels.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
  - 'Machine Learning'
Tags:
  - 'Comparison'
  - 'Data'
  - 'Datasets'
  - 'Linear Regression'
  - 'Pandas'
  - 'Python'
  - 'Statsmodels'
  - 'Tables'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

**ANOVA (Analysis of Variance)** is a statistical method used to compare the means of multiple groups in a dataset to determine if there are significant differences between them.

ANOVA tests the null hypothesis, which assumes that all group means are equal. If the test finds a significant difference, it suggests that at least one group mean is different from the others.

This method is commonly used in hypothesis testing to evaluate relationships between variables and identify patterns in the data.

In Python, the `statsmodels` library provides tools to perform ANOVA and other hypothesis tests. These tools are widely used in data analysis to uncover meaningful insights about relationships within a dataset.

## Syntax

The basic syntax for performing ANOVA using `statsmodels` is as follows:

```pseudo
import statsmodels.api as sm
from statsmodels.formula.api import ols

# Define the model
model = ols('dependent_variable ~ C(independent_variable)', data=dataset).fit()

# Perform ANOVA
anova_table = sm.stats.anova_lm(model, typ=1)
print(anova_table)
```

- `import statsmodels.api as sm`: Imports the `statsmodels` library.
- `from statsmodels.formula.api import ols`: This imports the `ols` (**[Ordinary Least Squares](https://www.codecademy.com/resources/docs/python/statsmodels/ols)**) for linear regression.
- `dependent_variable ~ C(independent_variable)`: This formula defines the relationship between the `dependent` and `independent` variables in the formula. The `C()` function treats the independent variable as categorical.
- `data=dataset`: This specifies the dataset for analysis. It must be a structured data format, such as a **[Pandas DataFrame](https://www.codecademy.com/resources/docs/pandas/dataframe)**, where the variables in the formula are columns in the dataset.
- `sm.stats.anova_lm(model, typ=1)`: This function performs an [ANOVA analysis](https://www.codecademy.com/resources/docs/python/statsmodels/anova-lm) on the fitted model:
  - `model`: This is the fitted model created by the `ols` function.
  - `typ=1`: This specifies the type of sum of squares to use in the ANOVA calculation. Type 1 is a sequential sum of squares, which evaluates each variable in the order it appears in the formula.

## Example

The following example shows how to evaluate differences in average test scores across three teaching methods:

```py
import pandas as pd
import statsmodels.api as sm
from statsmodels.formula.api import ols

# Sample data
data = pd.DataFrame({
    'Score': [85, 89, 76, 71, 80, 78, 93, 95, 88],
    'Method': ['A', 'A', 'A', 'B', 'B', 'B', 'C', 'C', 'C']
})

# Define the model
model = ols('Score ~ C(Method)', data=data).fit()

# Perform ANOVA
anova_table = sm.stats.anova_lm(model, typ=1)
print(anova_table)
```

The following table presents the output of the `ANOVA` analysis for this example, showing that the teaching method has a statistically significant effect on the scores, with a `p-value` of `0.027`:

![ANOVA Table Result](https://raw.githubusercontent.com/Codecademy/docs/main/media/anova-result.png)
