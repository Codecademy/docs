---
Title: '.to_datetime()'
Description: 'Convert argument to datetime.'
Subjects:
  - 'Computer science'
  - 'Data science'
  - 'Web development'
Tags:
  - 'Functions'
  - 'Pandas'
  - 'Data structures'
CatalogContent:
  - 'learn-python-3'
  - 'path/data-science'
---

The `.to_datetime` function converts a scalar, array-like, [`Series`](https://pandas.pydata.org/docs/reference/api/pandas.Series.html#pandas.Series) or [`DataFrame`](https://www.codecademy.com/resources/docs/pandas/dataframe)/dict-like to a pandas datetime object.

## Syntax

---

```
 pandas.to_datetime(arg, errors='raise', dayfirst=False, yearfirst=False, utc=None, format=None, exact=True, unit=None, infer_datetime_format=False, origin='unix', cache=True)
```

Some of the more significant parameters are listed here:

| **Parameter Name**      | **Data Type**                                                                  | **Usage**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ----------------------- | ------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `arg`                   | int, float, str, datetime, list, tuple, 1-d array, Series, DataFrame/dict-like | The object to convert to a datetime. If a [`DataFrame`](https://www.codecademy.com/resources/docs/pandas/dataframe) is provided, the method expects minimally the following columns: "year", "month", "day"                                                                                                                                                                                                                                                                                                          |
| `errors`                | {‘ignore’, ‘raise’, ‘coerce’}, default ‘raise’                                 | If `'raise'`, invalid parsing will raise an exception. If `'coerce'`, invalid parsing will be set as `NaT`. If `'ignore'`, invalid parsing will return the input                                                                                                                                                                                                                                                                                                                                                     |
| `dayfirst`              | bool, default False                                                            | Specify a date parse order if arg is str or is list-like. If `True`, parses dates with the day first, e.g. `"10/11/12"` is parsed as `2012-11-10`                                                                                                                                                                                                                                                                                                                                                                    |
| `yearfirst`             | bool, default False                                                            | Specify a date parse order if arg is str or is list-like. If `True` parses dates with the year first, e.g. `"10/11/12"` is parsed as `2010-11-12`. If both dayfirst and yearfirst are `True`, yearfirst is preceded (same as `dateutil`)                                                                                                                                                                                                                                                                             |
| `uts`                   | bool, default None                                                             | Control timezone-related parsing, localization and conversion. If `True`, the function always returns a timezone-aware UTC-localized `Timestamp`, `Series` or `DatetimeIndex`. To do this, timezone-naive inputs are localized as UTC, while timezone-aware inputs are converted to UTC. If `False` (default), inputs will not be coerced to UTC. Timezone-naive inputs will remain naive, while timezone-aware ones will keep their time offsets. Limitations exist for mixed offsets (typically, daylight savings) |
| `format`                | str, default None                                                              | The strftime to parse time, e.g. `"%d/%m/%Y"`. Note that `"%f"` will parse up to nanoseconds.                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `exact`                 | bool, default True                                                             | If `True`, require an exact format match. If `False`, allow the format to match anywhere in the target string.                                                                                                                                                                                                                                                                                                                                                                                                       |
| `unit`                  | str, default 'ns'                                                              | The unit of the arg (D,s,ms,us,ns) denote the unit, which is an integer or float number. This will be based off the origin. Example, with `unit='ms'` and `origin='unix'`, this would calculate the number of milliseconds to the unix epoch start.                                                                                                                                                                                                                                                                  |
| `infer_datetime_format` | bool, default False                                                            | If `True` and no format is given, attempt to infer the format of the datetime strings based on the first non-NaN element, and if it can be inferred, switch to a faster method of parsing them. In some cases this can increase the parsing speed by ~5-10x.                                                                                                                                                                                                                                                         |
| `origin`                | scalar, default ‘unix’                                                         | Define the reference date. The numeric values would be parsed as number of units (defined by unit) since this reference date. If `'unix'` (or POSIX) time; origin is set to 1970-01-01. If `'julian'`, unit must be `'D'`, and origin is set to beginning of Julian Calendar. Julian day number `0` is assigned to the day starting at noon on January 1, 4713 BC. If Timestamp convertible, origin is set to Timestamp identified by origin.                                                                        |
| `cache`                 | bool, default True                                                             | If `True`, use a cache of unique, converted dates to apply the datetime conversion. May produce significant speed-up when parsing duplicate date strings, especially ones with timezone offsets. The cache is only used when there are at least 50 values. The presence of out-of-bounds values will render the cache unusable and may slow down parsing.                                                                                                                                                            |

If parsing succeeded. Return type depends on input (types in parenthesis correspond to fallback in case of unsuccessful timezone or out-of-range timestamp parsing): - scalar: `Timestamp` (or `datetime.datetime`) - array-like: `DatetimeIndex` (or `Series` with `object` dtype containing `datetime.datetime`) - Series: `Series` of `datetime64` dtype (or `Series` of `object` dtype containing `datetime.datetime`) - DataFrame: `Series` of `datetime64` dtype (or `Series` of `object` dtype containing `datetime.datetime`)

## Example

---

```
import numpy as np
import pandas as pd

df = pd.DataFrame({'year': [2018, 2019],
                   'month': [3, 4],
                   'day': [5, 6]})
print(pd.to_datetime(df))
```

Output will show

```
0   2018-03-05
1   2019-04-06
dtype: datetime64[ns]
```
