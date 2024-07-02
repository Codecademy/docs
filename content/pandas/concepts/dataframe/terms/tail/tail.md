---
Title: '.tail()'
Description: 'Returns the last n rows of a DataFrame.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
  - 'Web Development'
Tags:
  - 'Data Structures'
  - 'Pandas'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

In Pandas, **`.tail()`** is a method that returns the last `n` rows of a [DataFrame](https://www.codecademy.com/resources/docs/pandas/dataframe). By default, it returns the last 5 rows, but the number of rows can be adjusted by passing an integer argument to the method.

## Syntax

```pseudo
DataFrame.tail(n=5)
```
+ **DataFrame**: The Pandas data structure on which the method is called.
+ **n**: Number of rows to return from the end of the DataFrame. The default value is 5.

## Example

```py
import pandas as pd

# Create a sample DataFrame
data = {
    'Name': ['Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Frank', 'Grace'],
    'Age': [24, 30, 22, 40, 35, 23, 29]
}

df = pd.DataFrame(data)

# Get the last 2 rows of the DataFrame
df.tail(2)
```