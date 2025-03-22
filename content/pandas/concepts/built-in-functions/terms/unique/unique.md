---
Title: '.unique()'
Description: 'Returns an array containing all the unique elements in the data series, with no specific order.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
  - 'Data Visualization'
Tags:
  - 'Arrays'
  - 'Data'
  - 'Encoding'
  - 'Functions'
  - 'Pandas'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
  - 'paths/data-science'
  - 'paths/data-science-foundations'
---

The **`.unique()`** function returns unique values from a data series using a hash table. It operates similarly to `numpy.unique()` but is notably faster, especially with large datasets, and it also includes NA values.

## Syntax

```pseudo
pd.unique(data_series)
```

The `data_series` parameter represents a 1-dimensional array-like data structure from which unique elements will be returned by the function. The `dtype` of the return matches that of the input, which can be of Index, Categorical, or Series type. The function lists the unique elements in the order they appear in the input data series, and it does _NOT_ sort them.

## Example

The following example demonstrates the use of the `.unique()` function:

```py
import pandas as pd

series = pd.Series([3, -1, 5, -1, 2, 1, 3, 2, 1, 5, -2, 1, 2])
unique_elements = series.unique()
print(f"The unique elements in series {list(series)} are\n {unique_elements}")
```

The above code outputs the following:

```shell
The unique elements in series [3, -1, 5, -1, 2, 1, 3, -2, 1, 5, 2, 1, 2] are
[3 -1 5 2 1 3 -2]
```

## Codebyte Example

The code below shows off the effects of `unique()` on different kinds of data types: Index, Categorical, and Series. After defining the array-like objects, the `unique()` method is applied to list out the unique elements of each object, and the resulting data is printed out to the console.

```codebyte/python
import pandas as pd

index = pd.Index([
            pd.Timestamp("20160101", tz="US/Eastern"),
            pd.Timestamp("20160101", tz="US/Eastern"),
            pd.Timestamp("20160102", tz="US/Eastern"),
            pd.Timestamp("20160101", tz="US/Central"),
        ])

print("Unique elements in Index:")
print(pd.unique(index))

grades = pd.Categorical(['A', 'B', 'B+', 'C-', 'D', 'A', 'B', 'A', 'B-', 'F'], categories=['A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D+', 'D', 'F'], ordered=True)

print("\nUnique elements in Categorical:")
print(pd.unique(grades))

string_series = pd.Series(['John', 'Jack', 'Ellen', 'Kirsten', 'Jack', 'John Jr', 'Kristen', 'Ellen'])

print("\nUnique elements in String Series:")
print(pd.unique(string_series))

int_series = pd.Series([2 * n for n in range(10)] + [3 * n for n in range(5)])

print("\nUnique elements in Integer Series:")
print(pd.unique(int_series))
```
