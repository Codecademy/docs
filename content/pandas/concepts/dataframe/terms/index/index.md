---
Title: '.index'
Description: 'Represents the index labels of the DataFrame.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Pandas'
  - 'Attributes'
  - 'Data Structures'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`.index`** attribute represents the row labels (index) of the DataFrame. It is an Index object and can be used to view or assign new values to the row labels.

## Syntax

```pseudo
Dataframe.index
```

## Example

In the following example, the `.index` attribute is used to modify the row labels of the `monthlyCost` DataFrame:

```py

import pandas as pd

# Creating the DataFrame representing monthly cost of 4 items

data = {'April': [88, 92, 79, 85],
'May': [94, 77, 90, 78],
'June': [89, 80, 95, 81]}

monthlyCost = pd.DataFrame(data)

# Printing the DataFrame

print(monthlyCost)
```

The output for the above code is as follows:

```shell
    April    May    June
0    88       94       89
1    92       77       80
2    79       90       95
3    85       78       81
```

The owner decides to create more descriptive names for the products and wants to change the row labels to reflect the new names. The `.index` attribute can be used to update the row labels accordingly:

```py

import pandas as pd

# Creating the DataFrame representing monthly cost of 4 items

data = {'April': [88, 92, 79, 85],
'May': [94, 77, 90, 78],
'June': [89, 80, 95, 81]}

monthlyCost = pd.DataFrame(data)

# Updating the names of the items
monthlyCost.index = ['bread', 'milk', 'apples', 'onions']

print(monthlyCost)
```

The above code produces the following output:

```shell
        April    May      June
bread    88       94       89
milk     92       77       80
apples   79       90       95
onions   85       78       81
```

Codebyte Example
The following Codebyte demonstrates how to view and update a DataFrame using the `.index` attribute:

```codebyte/python
import pandas as pd

# Sample DataFrame
data = {'c1': [1, 2], 'c2': [3, 4]}
df = pd.DataFrame(data)

print(df)

df.index = ['r1', 'r2']
print("Updated DataFrame:")
print(df)
```
