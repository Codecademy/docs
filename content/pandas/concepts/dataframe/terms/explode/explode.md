---
Title: '.explode()'
Description: 'Transforms each element of a list-like column into a separate row.'
Subjects:
  - 'Computer science'
  - 'Data Science'
Tags:
  - 'DataFrames'
  - 'Functions'
  - 'Lists'
  - 'Pandas'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

In Pandas, the **`.explode()`** method transforms each element of a list-like column (such as lists, tuples, or arrays) into separate rows, while replicating the corresponding index values. This is especially helpful when working with columns that contain nested or iterable data that needs to be flattened for further analysis.

## Syntax

```pseudo
DataFrame.explode(column, ignore_index=False)
```

**Parameters:**

- `column` (string or tuple): Specifies the name of the column to explode. The column must contain list-like elements such as lists, tuples, or arrays.
- `ignore_index` (Optional): If set to `True`, the resulting DataFrame will have a new integer index ranging from `0` to `n - 1`. If `False`, the original index labels are retained and repeated as necessary.

**Return value:**

The `.explode()` method returns a new DataFrame in which each element of the specified list-like column is expanded into a separate row. Values in other columns are duplicated accordingly to align with the exploded rows.

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

The code takes the `Hobbies` column, which contains lists, and creates one row for each item in the list, while preserving the associated values in the `Name` column.

## Codebyte Example

In this codebyte example, a column is exploded with tuple values:

```codebyte/python
import pandas as pd

df = pd.DataFrame({
  'ID': [1, 2],
  'Scores': [(90, 80), (75, 85)]
})

exploded_df = df.explode('Scores')

print(exploded_df)
```

Tuples are also treated as list-like by `.explode()`.

> **Notes:**
>
> - `.explode()` is available in Pandas version 0.25.0 and later.
> - Cells with non-list-like values (e.g., strings, numbers) are not exploded and appear as-is in the resulting DataFrame.
