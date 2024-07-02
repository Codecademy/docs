---
Title: '.tail()'
Description: 'Returns the last n rows of a dataframe.'
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

- `DataFrame`: The Pandas data structure on which the method is called.
- `n`: Number of rows to return from the end of the DataFrame. The default value is 5.

## Example

The example below demonstrates the use of the `.tail()` method:

```py
import pandas as pd

# Create a DataFrame
df = pd.DataFrame({'A': [1, 2, 3, 4, 5, 6], 'B': [7, 8, 9, 10, 11, 12]})

# Get the last 3 rows of the DataFrame
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

## Codebyte Example

Run the code below to understand how the `.tail()` method works:

```codebyte/python
import pandas as pd

# Create a sample DataFrame
data = {
    'Name': ['Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Frank', 'Grace'],
    'Age': [24, 30, 22, 40, 35, 23, 29]
}

df = pd.DataFrame(data)

# Get the last 2 rows of the DataFrame
print(df.tail(2))
```
