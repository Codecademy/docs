---
Title: '.read_excel()'
Description: 'Reads an Excel file into a Pandas DataFrame object.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
  - 'Web Development'
Tags:
  - 'Data Structures'
  - 'Functions'
  - 'Pandas'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

The `.read_excel()` function takes a path to an Excel file and reads the data into a Pandas [`DataFrame`](https://www.codecademy.com/resources/docs/pandas/dataframe) object.

## Syntax

```pseudo
pandas.read_excel(io, sheet_name)
```

The `io` parameter is the path to the Excel file. It can be a path on the local machine or a valid URL. It is the first parameter of the function and can be used by itself.

The second parameter `sheet_name` specifies the worksheet(s) to import. It can be a string, or list of strings to specify worksheet names, or it can be an integer or list of integers to specify zero-indexed sheet positions. (Chart sheets are ignored for this purpose.) Specifying `None` will retrieve all worksheets. The default is `0`.

There are many other parameters that are optional or have default settings. These are usually passed as [keyword arguments](https://www.codecademy.com/resources/docs/python/functions/arguments-parameters) since using the parameter order is generally inconvenient.

Some of the more significant parameters are listed here:

| Parameter Name |             Data Type              | Usage                                                                                                                                                            |
| :------------: | :--------------------------------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|      `io`      |                str                 | Path to the Excel file to import.                                                                                                                                |
|  `sheet_name`  | int, str, list of int, list of str | Worksheet names or indices.                                                                                                                                      |
|    `header`    |       int, list of int, None       | Row number(s) to use as column names.                                                                                                                            |
|    `names`     |             array-like             | List of column names to use.                                                                                                                                     |
|   `usecols`    |       list-like or callable        | Excel column letters or ranges, or column numbers, or column names to import. If callable, uses columns where the name passed to the callable results in `True`. |
|   `skiprows`   |    list-like, int, or callable     | Initial lines to skip (int) or line numbers to skip (list). Or callable that returns `True` when the row number passed to it should be skipped.                  |

## Example

```py
import pandas

df = pandas.read_excel("data.xlsx")
print(df)
```

The output will show the contents of the Excel file loaded into the DataFrame:

```shell
  column 1 column 2 column 3
0        A        B        C
1        D        E        F
```
