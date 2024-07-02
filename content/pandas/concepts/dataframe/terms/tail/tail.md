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

The parameter `n` specifies the number of rows to return. The default value is `n=5`.

## Example

```py
import pandas as pd

# Create a DataFrame
df = pd.DataFrame({'A': [1, 2, 3, 4, 5, 6], 'B': [7, 8, 9, 10, 11, 12]})

# View the last 3 rows of the DataFrame
last_three_rows = df.tail(3)

# Print the last 3 rows
print(last_three_rows)
```

The output of the code above will be:

```shell
   A   B
3  4  10
4  5  11
5  6  12
```

By using the `.tail()` method, the end of a DataFrame can be previewed, which can be useful for inspecting the most recent data in a dataset.