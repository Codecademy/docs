---
Title: '.merge()'
Description: 'Merges two DataFrames based on a common key or index.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Join'
  - 'Pandas'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

In Pandas, the **`.merge()`** method combines two DataFrames using a common key column or index, similar to a SQL `JOIN` operation. It's essential for integrating datasets that share related fields.

## Syntax

The `.merge()` method provides a flexible way to combine DataFrames using different types of joins. The syntax shows all available parameters:

```pseudo
DataFrame.merge(right, how='inner', on=None, left_on=None, right_on=None, left_index=False, right_index=False, suffixes=('_x', '_y'))
```

**Parameters:**

- `right`: The DataFrame or named Series to merge with.
- `how`: Type of merge to perform:
  - `'inner'`: Include only matching rows from both DataFrames.
  - `'outer'`: Include all rows from both DataFrames, with `NaN`s where no match is found.
  - `'left'`: Include all rows from the left DataFrame and matching ones from the right.
  - `'right'`: Include all rows from the right DataFrame and matching ones from the left.
- `on`: Index level or column names to join on. Must exist in both DataFrames.
- `left_on`: Column(s) or index level(s) in the left DataFrame to use as join keys.
- `right_on`: Column(s) or index level(s) in the right DataFrame to use as join keys.
- `left_index`: Use the index from the left DataFrame as the join key.
- `right_index`: Use the index from the right DataFrame as the join key.
- `suffixes`: The suffixes to apply to overlapping column names from the left and right DataFrames.

## Example

This example demonstrates a basic merge operation between two DataFrames using a common `'id'` column:

```py
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

# Print the merged DataFrame
print(merged_df)
```

The code produces this output:

```shell
   id    name  age
0   1   Alice   25
1   2     Bob   30
2   3  Charlie   35
```

> **Notes:**
>
> - Only rows with matching `id` values (1, 2, and 3) are included in the result.
> - The row with `id=4` from `df1` is excluded because it has no match in `df2`.
> - The row with `id=5` from `df2` is excluded because it has no match in `df1`.

## Codebyte Example

This codebyte example demonstrates different types of merges and their effects on the resulting DataFrame:

```codebyte/python
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

# Display original DataFrames
print("Original DataFrames:")
print("\nDataFrame 1:")
print(df1)
print("\nDataFrame 2:")
print(df2)

# Demonstrate different merge types
print("\n1. Inner Merge (default):")
print(df1.merge(df2, on='id'))

print("\n2. Left Merge:")
print(df1.merge(df2, on='id', how='left'))

print("\n3. Right Merge:")
print(df1.merge(df2, on='id', how='right'))

print("\n4. Outer Merge:")
print(df1.merge(df2, on='id', how='outer'))
```
