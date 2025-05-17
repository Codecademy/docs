---
title: 'DataFrame: .merge()'
description: 'Merges two DataFrames based on a common key or index, similar to a SQL JOIN operation.'
subjects: ['Data Science', 'Python', 'Pandas']
tags: ['dataframe', 'merge', 'join', 'pandas']
catalogContent: ['Learn Pandas', 'Data Science Foundations']
---

The `.merge()` method combines two DataFrames based on a common key or index, similar to a SQL JOIN operation. This method is essential for combining datasets that share common columns or indices.

## Syntax

```python
DataFrame.merge(right, how='inner', on=None, left_on=None, right_on=None, left_index=False, right_index=False, suffixes=('_x', '_y'))
```

### Parameters

- `right`: DataFrame or Series to merge with
- `how`: Type of merge to perform
  - 'inner': Only keep rows that exist in both DataFrames (default)
  - 'outer': Keep all rows from both DataFrames
  - 'left': Keep all rows from the left DataFrame
  - 'right': Keep all rows from the right DataFrame
- `on`: Column or index level names to join on
- `left_on`: Columns or index levels from the left DataFrame to join on
- `right_on`: Columns or index levels from the right DataFrame to join on
- `left_index`: Use the index from the left DataFrame as the join key
- `right_index`: Use the index from the right DataFrame as the join key
- `suffixes`: Tuple of strings to append to overlapping column names

## Example

```python
import pandas as pd

# Create two sample DataFrames
df1 = pd.DataFrame({
    'id': [1, 2, 3, 4],
    'name': ['Alice', 'Bob', 'Charlie', 'David']
})

df2 = pd.DataFrame({
    'id': [1, 2, 3, 5],
    'age': [25, 30, 35, 40]
})

# Merge the DataFrames on the 'id' column
merged_df = df1.merge(df2, on='id')
```

The code above produces the following output:

```
   id    name  age
0   1   Alice   25
1   2     Bob   30
2   3  Charlie   35
```

Note that:

- Only rows with matching `id` values (1, 2, and 3) are included in the result
- The row with `id=4` from `df1` is excluded because it has no match in `df2`
- The row with `id=5` from `df2` is excluded because it has no match in `df1`
