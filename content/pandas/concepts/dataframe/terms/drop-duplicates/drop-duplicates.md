---
Title: '.drop_duplicates()'
Description: 'Returns a DataFrame object with duplicate rows removed.'
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

The **`.drop_duplicates()`** function will return a copy of a `DataFrame` with duplicated rows removed or `None` if it is modified directly.

## Syntax

```pseudo
df.drop_duplicates(subset=None, keep='first', inplace=False, ignore_index=False)
```

|      Parameter      | Option(s)                                        | Description                                                                                                                                                                                              |
| :-----------------: | ------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `subset` (optional) | sequence: `["column_label_1", "column_label_n"]` | Only considers duplicates in these columns. Otherwise, all columns are screened by default.                                                                                                              |
|       `keep`        | `"first"`, `"last"`, or `False`                  | Determines which duplicates to keep. The default, `"first"`, drops all duplicates except the first occurrence. `last` will drop all duplicates except the last occurrence. `False` drops all duplicates. |
|      `inplace`      | bool: `False` (default)                          | Decides whether to create a new `DataFrame` or modify the existing `DataFrame`.                                                                                                                          |
|   `ignore_index`    | bool: `False` (default)                          | If `True`, the resulting axis will be labeled 0, 1, …, n-1.                                                                                                                                              |

## Example

Below are two separate examples of `.drop_duplicates()` using the same `DataFrame`:

```py
import pandas as pd

people = {
   "Name": ["Peter", "Julia", "Manon", "Manon", "Nouhoum", "Nouhoum"],
   "Age": [7, 8, 10, 7, 9, 9],
   "Favorite Color": ["Pink", "Purple","Orange","Green", "Blue", "Blue"]
}

# Initial DataFrame
df = pd.DataFrame(people)
print("Original DataFrame:")
print(df)

# Example 1
df1 = df.drop_duplicates(inplace=False)
print("\nExample 1 DataFrame:")
print(df1)

# Example 2
df.drop_duplicates(subset=['Name'], keep='last', inplace=True, ignore_index=True)
print("\nExample 2 DataFrame:")
print(df)
```

This will produce the following output:

```shell
Original DataFrame:
      Name  Age Favorite Color
0    Peter    7           Pink
1    Julia    8         Purple
2    Manon   10         Orange
3    Manon    7          Green
4  Nouhoum    9           Blue
5  Nouhoum    9           Blue

Example 1 DataFrame:
     Name  Age Favorite Color
0    Peter    7           Pink
1    Julia    8         Purple
2    Manon   10         Orange
3    Manon    7          Green
4  Nouhoum    9           Blue

Example 2 DataFrame:
      Name  Age Favorite Color
0    Peter    7           Pink
1    Julia    8         Purple
2    Manon    7          Green
3  Nouhoum    9           Blue
```
