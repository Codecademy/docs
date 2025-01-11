---
Title: 'ANOVA and Hypothesis Testing'
Description: 'ANOVA (Analysis of Variance) tests if group means differ significantly.'
Subjects:
  - 'Data Science'
  - 'Data Visualization'
  - 'Computer Science'
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

**ANOVA (Analysis of Variance)** is a statistical method used to compare the means of multiple groups in a dataset. It helps determine if there are significant differences between the group means.

ANOVA tests the null hypothesis, which assumes that all group means are equal. If the test finds a significant difference, it suggests that at least one group mean is different from the others.

This method is commonly used in hypothesis testing to evaluate relationships between variables and identify patterns in the data.

In Python, the `statsmodels` library provides tools to perform ANOVA and other hypothesis tests. These tools are widely used in data analysis to uncover meaningful insights about relationships in a dataset.

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

- `import statsmodels.api as sm`: This imports the `statsmodels` library, which is a Python module for performing statistical analysis.
- `from statsmodels.formula.api import ols`: This imports the `ols` (**[Ordinary Least Squares](https://www.codecademy.com/resources/docs/python/statsmodels/ols)**) function from the module. The `ols` function is used to define a linear regression model.
- `dependent_variable ~ C(independent_variable)`: This formula specifies the relationship between variables for the model:
  - `dependent_variable`: This is the variable you are trying to explain or predict (the outcome variable).
  - `independent_variable`: This is the categorical variable (factor) that you believe affects the `dependent_variable`.
  - `C()`: This tells the function to treat the `independent_variable` as a categorical variable.
- `data=dataset`: This specifies the dataset being analyzed. It must be a structured data format, such as a **[Pandas DataFrame](https://www.codecademy.com/resources/docs/pandas/dataframe)**, where the variables in the formula are columns in the dataset.
- `model = ols(...)`: This creates a linear regression model using the specified formula and dataset.
- `.fit()`: This method fits the model to the data, meaning it estimates the parameters of the regression model.
- `sm.stats.anova_lm(model, typ=1)`: This function performs an [ANOVA analysis](https://www.codecademy.com/resources/docs/python/statsmodels/anova-lm) on the fitted model:
  - `model`: This is the fitted model created by the `ols` function.
  - `typ=1`: This specifies the type of sum of squares to use in the ANOVA calculation. Type 1 is a sequential sum of squares, which evaluates each variable in the order it appears in the formula.

## Example

The following example demonstrates how to analyze whether average test scores differ among three teaching methods:

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

The output for this example is the following table:

![ANOVA Table Result](https://raw.githubusercontent.com/Codecademy/docs/main/media/anova-result.png)