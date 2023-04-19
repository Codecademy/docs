---
Title: '.to_datetime()'
Description: 'Returns a pandas datetime object for a given object, such as a Series or DataFrame'
Subjects:
  - 'Data Science'
  - 'Computer Science'
Tags:
  - 'Date'
  - 'Display'
  - 'Pandas'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

The **`.to_datetime()`** function returns a pandas datetime object for a given object, often an array or dictionary-like type such as a Series or DataFrame.

## Syntax

This function returns a value in datetime format. Various input arguments can be used as described below.

```py
pandas.to_datetime(arg, format=None, errors='raise', dayfirst=False, yearfirst=False, utc=None, box=True, infer_datetime_format=False, origin='unix', cache=True)
```

| Parameter Name          | Data Type                                                                      | Usage                                                                                                                            |
| ----------------------- | ------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------- |
| `arg`                   | int, float, str, datetime, list, tuple, 1-d array, Series, DateFrame/dict-like | Converts given data into a datetime                                                                                              |
| `errors`                | 'ignore', 'raise', 'coerce'                                                    | The given keyword determines the handling of errors                                                                              |
| `dayfirst`              | bool (default `False`)                                                         | Specifies that the str or list-like object begins with a day                                                                     |
| `yearfirst`             | bool (default `True`)                                                          | Specifies that the str or list-like object begins with a year                                                                    |
| `utc`                   | bool (default `None`)                                                          | When `True`, output is converted to UTC time zone                                                                                |
| `format`                | str (default `None`)                                                           | Pass a strftime to specify the format of the datetime conversion                                                                 |
| `exact`                 | bool (default `True`)                                                          | Determines how the format parameter is applied                                                                                   |
| `unit`                  | str (default 'ns')                                                             | Specifies the units of the passed object                                                                                         |
| `infer_datetime_format` | bool (default `False`)                                                         | When `True`, and no format has been passed, the datetime string will be based on the first non-`NaN` element within the object   |
| `origin`                | scalar (default unix)                                                          | Sets the reference date                                                                                                          |
| `cache`                 | bool (default `True`)                                                          | Allows the use of a unique set of converted dates to apply the conversion (only applied when object contains at least 50 values) |

## Example

The code below demonstrates the conversion of a string to a datetime object with the `.to_datetime()` function.

```py
import pandas as pd
my_list = ['11/09/30']

xyz = pd.to_datetime(my_list, dayfirst=True)
print(xyz)
```

This example results in the following output::

```shell
DatetimeIndex(['2030-11-09'], dtype='datetime64[ns]', freq=None)
```
