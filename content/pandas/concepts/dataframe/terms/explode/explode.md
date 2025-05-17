---
Title: '.explode()'
Description: 'Transforms each element of a list-like column into a separate row.'
Subjects:
  - 'Computer science'
  - 'Data Science'
Tags:
  - 'DataFrames'
  - 'Lists'
  - 'Functions'
  - 'Pandas'
  - 'Data Cleaning'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

In the pandas module, the **`.explode()`** method is used to transform each element of a list-like column (such as lists, tuples, or Series) into a separate row, replicating the index values for each item. This is especially useful when dealing with columns that contain nested or iterable data.

## Syntax

```pseudo
DataFrame.explode(column, ignore_index=False)
```

**Parameters:**

- `column`: str or tuple. The name of the column to explode. The column must contain list-like elements.
- `ignore_index` (Optional): If `True`, the resulting index will be labeled from `0` to `n - 1`. The default is `False`, meaning the original index is preserved.

**Return value:**

The `.explode()` method returns a new DataFrame where each element of the specified list-like column becomes a separate row. Other columns are duplicated to match the new rows.

## Example

The example below shows how to expand a column containing lists into multiple rows:

```py
import pandas as pd

df = pd.DataFrame({
    'Name': ['Alice', 'Bob'],
    'Hobbies': [['Reading', 'Cycling'], ['Painting']]
})

exploded_df = df.explode('Hobbies')

print(exploded_df)
```

A possible output of this code is:

```shell
    Name   Hobbies
0  Alice   Reading
0  Alice   Cycling
1    Bob  Painting
```

The code above takes the `Hobbies` column, which contains lists, and creates one row for each item in the list, while preserving the associated values in the `Name` column.

## Codebyte Example

In this codebyte example, we explode a column with tuple values:

```codebyte/python
import pandas as pd

df = pd.DataFrame({
    'ID': [1, 2],
    'Scores': [(90, 80), (75, 85)]
})

exploded_df = df.explode('Scores', ignore_index=True)

print(exploded_df)
```

> **Note:** The `.explode()` method is only available in pandas version 0.25.0 and above.
> **Note:** If a cell in the specified column contains a scalar (non-list) value, it will not be exploded and will remain as is.
