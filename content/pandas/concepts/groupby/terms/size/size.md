---
Title: 'size()'
Description: 'Returns a Series containing the size (row count) of each group.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Data Structures'
  - 'Pandas'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

The **`size()`** method in pandas returns the number of rows or elements in each group created by the `groupby()` [function](https://www.codecademy.com/resources/docs/pandas/built-in-functions). It provides a quick way to determine group sizes without applying an aggregation function.

## Syntax

```pseudo
DataFrameGroupBy.size()
```

**Parameters:**

The `size()` method doesn't take any parameters.

**Return value:**

The `size()` method returns a Series containing the size (row count) of each group created by `groupby()`.

## Example 1: Counting Rows by Group

In this example, a [DataFrame](https://www.codecademy.com/resources/docs/pandas/dataframe) of employees is grouped by their department, and `size()` counts how many employees belong to each department:

```py
import pandas as pd

data = {
    'Department': ['HR', 'IT', 'HR', 'Finance', 'IT', 'Finance'],
    'Employee': ['John', 'Sara', 'Mike', 'Anna', 'Tom', 'Chris']
}
df = pd.DataFrame(data)

group_sizes = df.groupby('Department').size()
print(group_sizes)
```

The output of this code is:

```shell
Department
Finance    2
HR         2
IT         2
dtype: int64
```

## Example 2: Using Multiple Grouping Columns

In this example, `size()` counts the number of members in each combination of team and shift within a dataset:

```py
import pandas as pd

data = {
    'Team': ['A', 'A', 'B', 'B', 'B', 'C'],
    'Shift': ['Day', 'Night', 'Day', 'Night', 'Day', 'Day'],
    'Name': ['John', 'Sara', 'Mike', 'Anna', 'Tom', 'Chris']
}
df = pd.DataFrame(data)

group_sizes = df.groupby(['Team', 'Shift']).size()
print(group_sizes)
```

The output of this code is:

```shell
Team  Shift
A     Day      1
      Night    1
B     Day      2
      Night    1
C     Day      1
dtype: int64
```

## Codebyte Example: Counting Transactions Per Product

In this example, `size()` is used to count how many sales transactions occurred for each product in a store dataset:

```codebyte/python
import pandas as pd

sales = pd.DataFrame({
  'Product': ['Apple', 'Banana', 'Apple', 'Orange', 'Banana', 'Banana', 'Apple'],
  'Customer': ['A', 'B', 'C', 'A', 'D', 'E', 'F']
})

counts = sales.groupby('Product').size()
print(counts)
```

## Frequently Asked Questions

### 1. What is the pandas `groupby().size()` method?

`groupby().size()` returns the number of rows in each group created by `groupby()`.

### 2. What is the purpose of `groupby()` in pandas?

`groupby()` splits data into groups based on selected column values to enable aggregation and summarization.

### 3. What does `NaN` stand for in pandas?

`NaN` stands for Not a Number and indicates missing or undefined data.
