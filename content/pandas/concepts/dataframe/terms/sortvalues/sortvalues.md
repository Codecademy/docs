---
Title: '.sort_values()'
Description: 'Sorts values in a DataFrame by one or more columns.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Data Structures'
  - 'Elements'
  - 'Pandas'
  - 'Values'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

In Pandas, the **`.sort_values()`** function is used to sort values in a `DataFrame` by one or more columns. This function is useful in data analysis, data visualization, data cleaning, and more.

## Syntax

```pseudo
DataFrame.sort_values(by, axis=0, ascending=True, inplace=False, kind='quicksort', na_position='last', ignore_index=False, key=None)
```

**Parameters:**

- `by`: A label or a list of labels to sort by (levels can also be specified if applicable).
- `axis`: Specifies which axis will be sorted (`0` or index, `1` or columns); defaults to `0`.
- `ascending`: Specifies whether the sort will be ascending or descending (`True` or `False`); defaults to `True`.
- `inplace`: By setting it to `True`, the operation will be performed on the original `DataFrame` and the function will return `None`; defaults to `False`.
- `kind`: Specifies which algorithm to use: `'quicksort'`, `'mergesort'`, `'heapsort'`, or `'stable'`; defaults to `'quicksort'`.
- `na_position`: Specifies where to put the `NaN` values; defaults to `last`.
- `ignore_index`: Ignores the original index and put a new ascending set of values in its place. The default is `False`.
- `key`: Applies a function before sorting.

**Return value:**

The `.sort_values()` function returns a sorted `DataFrame` (or `None` if `inplace=True`).

## Example 1: Sort by a Single Column

In this example, the `DataFrame` is sorted in ascending order based on the `Score` column:

```py
import pandas as pd

data = {
  'Name': ['Alice', 'Bob', 'Charlie', 'David'],
  'Score': [88, 92, 85, 90]
}

df = pd.DataFrame(data)

sorted_df = df.sort_values(by='Score')

print(sorted_df)
```

Here is the output:

```shell
      Name  Score
2  Charlie     85
0    Alice     88
3    David     90
1      Bob     92
```

## Example 2: Sort by Multiple Columns

In this example, the data is first sorted by `Department`, and then by `Score` within each department:

```py
import pandas as pd

data = {
  'Name': ['Alice', 'Bob', 'Charlie', 'David', 'Eve'],
  'Department': ['HR', 'Finance', 'HR', 'Finance', 'HR'],
  'Score': [88, 92, 85, 90, 85]
}

df = pd.DataFrame(data)

sorted_df = df.sort_values(by=['Department', 'Score'])

print(sorted_df)
```

Here is the output:

```shell
      Name Department  Score
3    David    Finance     90
1      Bob    Finance     92
2  Charlie         HR     85
4      Eve         HR     85
0    Alice         HR     88
```

## Codebyte Example: Sort in Descending Order with NaNs First

In this codebyte example, missing values (NaNs) appear at the top, and the `Price` column is sorted in descending order:

```codebyte/python
import pandas as pd

data = {
    'Product': ['A', 'B', 'C', 'D', 'E'],
    'Price': [300, None, 150, 450, None]
}

df = pd.DataFrame(data)

sorted_df = df.sort_values(by='Price', ascending=False, na_position='first')

print(sorted_df)
```

## Frequently Asked Questions

### 1. What’s the difference between `.sort_values()` and `.sort_index()`?

`.sort_values()` sorts by column values, while `.sort_index()` sorts by row or column index. Use `.sort_index()` when sorting based on `DataFrame` labels rather than content.

### 2. Does `.sort_values()` modify the original `DataFrame`?

By default, `.sort_values()` returns a new `DataFrame`. To modify the original, set `inplace=True`.

### 3. Can I sort a Series using `.sort_values()`?

Yes. Pandas Series also supports `.sort_values()`, and the syntax is simpler since there's no need to specify a column.
