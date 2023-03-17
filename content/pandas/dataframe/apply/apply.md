---
Title: '.apply()'
Description: 'The apply() method allows you to apply a function along one of the axis of the DataFrame.'
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

The apply() method allows you to apply a function along an axis of the DataFrame. Default 0, which is the index(row) axis. Objects passed to the function are Series objects whose index is either the DataFrame’s index (axis=0) or the DataFrame’s columns (axis=1). By default (result_type=None), the final return type is inferred from the return type of the applied function. Otherwise, it depends on the result_type argument.

## Syntax

```pseudo
x = dataframevalue.apply(func, axis=0, raw=False, result_type=None, args=(), **kwargs)
```
- `dataframevalue` is the DataFrame with the source data.
- x means `return value`, a DataFrame or a Series object, with the changes.
- This function does `NOT` make changes to the original DataFrame object. You can save its result to a varible, like `x` here.


`DataFrame.apply()` has the following parameters:

| Parameter Name | Data Type                | Usage                                                                                                                             |
| :------------: | ------------------------ | --------------------------------------------------------------------------------------------------------------------------------- |
|   `func`   |  function name     | Function to apply to each column or row.|
|   `axis`   | 0/1 or 'index'/'columns', default 0 | Axis along which the function is applied: `0 or 'index'`: apply function to each column; `1 or 'columns'`: apply function to each row.|
|   `raw`    | bool, default False | Determines if row or column is passed as a Series or ndarray object: `False`, passes each row or column as a Series to the function; `True`, it passes ndarray objects instead. This will achieve much better performance when applying a Numpy reduction function|
| `result_type` | {'expand', 'reduce', 'broadcast', None}, default None | These only act when axis=1 (columns): `'expand'`, list-like results will be turned into columns; `'reduce'`, returns a Series if possible rather than expanding list-like results. This is the opposite of 'expand'; `'broadcast'`, results will be broadcast to the original shape of the DataFrame, the original index and columns will be retained; `'None'`, The default behaviour depends on the return value of the applied function.|
|    `args`  | tuple   | Positional arguments to pass to func in addition.    |
|  `**kwargs`  |     | Additional keyword arguments to pass as keywords arguments to func. |

## Example

In the following examples, the `.apply()` method is used with different parameters:

```py
import pandas as pd
import numpy as np

d = {'col 1' : [1,2,3,4], 'col 2' : [5,6,7,8], 'col 3' : [9,10,11,12], 'col 4' : [13,14,15,16]}

df = pd.DataFrame(data = d)

def calc_sum(x):
  return x.sum()

x = df.apply(calc_sum)
y = df.apply(calc_sum,axis = 0)
z = df.apply(calc_sum,axis = 1)
l = df.apply(np.sqrt)
m = df.apply(lambda x: pd.Series([0, 1, 2]), axis=1, result_type="expand")

print(df)

print(x)
print(type(x))

print(y)
print(type(y))

print(z)
print(type(z))

print(l)
print(type(l))

print(m)
print(type(m))
```
Results are below:

```shell
'x':
col 1    10
col 2    26
col 3    42
col 4    58
dtype: int64

type of x: 
<class 'pandas.core.series.Series'>
So you can find it returns 'Series'.


'Y':
col 1    10
col 2    26
col 3    42
col 4    58
dtype: int64

type of y: 
<class 'pandas.core.series.Series'>
'y' is same with 'x'. So the default vault of axis is '0'.


'z':
0    28
1    32
2    36
3    40
dtype: int64

type of z:
<class 'pandas.core.series.Series'>
'z' is different with "y". so you can see how 'axis = 1' takes effects.


'l':
      col 1     col 2     col 3     col 4
0  1.000000  2.236068  3.000000  3.605551
1  1.414214  2.449490  3.162278  3.741657
2  1.732051  2.645751  3.316625  3.872983
3  2.000000  2.828427  3.464102  4.000000

type of 'l':
<class 'pandas.core.frame.DataFrame'>


'm':
   0  1  2
0  0  1  2
1  0  1  2
2  0  1  2
3  0  1  2

type of 'm':
<class 'pandas.core.frame.DataFrame'>
```
