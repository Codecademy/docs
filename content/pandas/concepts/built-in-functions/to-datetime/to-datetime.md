# to_datetime()
The to_datetime() function in the Pandas library of Python converts a string representation of a date or time to a datetime object.

## Syntax
This function can be used via pandas library. It returns us structure in datetime format. We can use various input arguments as showned and described below.
```py
pandas.to_datetime(arg, format=None, errors='raise', dayfirst=False, yearfirst=False, utc=None, box=True, infer_datetime_format=False, origin='unix', cache=True)
```

| Parameter name | Data type | Usage |
| -------------- | --------- | ----- |
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

## Example
First section of the following code shows us how to import needed library and how to create list of string. After that, it calls our function and prints results into console.
```py
import pandas as pd
my_list = ['2039/11/09']

xyz = pd.to_datetime(my_list)
print(xyz)
```
The following output will be showned:
```shell
DatetimeIndex(['2039-11-09'], dtype='datetime64[ns]', freq=None)
```