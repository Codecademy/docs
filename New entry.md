# NEW ENTRY TO FUNCTION to.datetype() (pandas)

**For what is it used to?**
It allows us to convert any number or list into specific datetime structure.

**Syntax**
`pandas.to_datetime(arg, format=None, errors='raise', dayfirst=False, yearfirst=False, utc=None, box=True, infer_datetime_format=False, origin='unix', cache=True)`

*Note*
You have to import pandas module first!

| Parameter name | Data type | Usage |
| arg | int, float, str, datetime, list, tuple, 1-d array, Series, DateTime/dict-like | Converts given data into a datetime |
| errors | 'ignore', 'raise', 'coerce' | returns specific exception depends in given parameter |
| dayfirst | bool (default False) | if Trie is selected, the day will be given first |
| yearfirst | bool (default True) | if True is selected, the year will be given first. If dayfirst and yearfirst is True, yearfirst is more important |
| utc | bool (default None) | whenever True is selected, output is converted into UTC timezone|
| format | str (default None) | helpfull in analyzing time, more info. in 'str' docs |
| exact | bool (default True) | defines how format is used |
| unit | str (default 'ns') | defines a unit, float or integer number |
| infer_datetime_format | bool (default False) | whenever True is selected, datetime string format is based on NaN element
| origin | scalar (default unix) | reference date is based on that |
| cache | bool (default True) | is beeing used in datetime conversion, works only with at least 50 values |

*Important*
- Returns datetime (scalar, array-like, series, dataframe) depends on what arguments we put inside
- Raises 'ParserError' or 'ValueError'

# Example
```
import pandas as pd

my_list = ['2039/11/09']

xyz = pd.to_datetime(my_list)
print(xyz)
```

The output will be showed
`DatetimeIndex(['2039-11-09'], dtype='datetime64[ns]', freq=None)`