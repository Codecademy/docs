---
Title: '.read_csv()'
Description: 'Reads a CSV file into a Pandas DataFrame object.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
  - 'Web Development'
Tags:
  - 'Data Structures'
  - 'Functions'
  - 'CSV'
  - 'Pandas'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

The `.read_csv()` function takes a path to a CSV file and reads the data into a Pandas [`DataFrame`](https://www.codecademy.com/resources/docs/pandas/dataframe) object.

## Syntax

```pseudo
pandas.read_csv(filepath_or_buffer)
```

The `filepath_or_buffer` parameter is the path to the CSV file. It can be a path on the local machine or a valid URL. It is the first parameter of the function and can be used by itself. There are, however, many other parameters that are optional or have default settings. These are usually passed as [keyword arguments](https://www.codecademy.com/resources/docs/python/functions/arguments-parameters) since using the parameter order is generally inconvenient.

Some of the more significant parameters are listed here:

|    Parameter Name    |         Data Type          | Usage                                                                                                                                        |
| :------------------: | :------------------------: | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `filepath_or_buffer` |            str             | Path to the CSV file to import.                                                                                                              |
|        `sep`         |            str             | Delimiter to use. Values longer than 1 character will be interpreted as Regular Expressions.                                                 |
|     `delimiter`      |            str             | alias for `sep`.                                                                                                                             |
|       `header`       |   int, list of int, None   | Row number(s) to use as column names, and start of data.                                                                                     |
|       `names`        |         array-like         | List of column names to use. If file contains a header row, explicitly set `header=0` to override the column names.                          |
|      `usecols`       |   list-like or callable    | List of column numbers or names to import. If callable, uses columns where the name passed to the callable results in `True`.                |
|      `skiprows`      | list-like, int or callable | Initial lines to skip (int). Row numbers to skip (list). Or callable that returns `True` when the row number passed to it should be skipped. |
|  `skip_blank_lines`  |            bool            | `True` to skip blank lines rather than reading `NaN` values. Default is `True`.                                                              |

## Example

```py
import pandas

df = pandas.read_csv("data.csv")
print(df)
```

Output will show the contents of the CSV file loaded into the DataFrame:

```shell
  column 1 column 2 column 3
0        A        B        C
1        D        E        F
```
