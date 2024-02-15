---
Title: '.apply()'
Description: 'Used to apply a function along one axis of the DataFrame.'
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

The **`apply()`** method is used to apply a function along one axis of DataFrame data.

## Syntax

```pseudo
x = dataframevalue.apply(func, axis=0, raw=False, result_type=None, args=(), **kwargs)
```

- `dataframevalue` is the DataFrame with the source data.
- This function `func` does NOT make changes to the original DataFrame object. The result is saved to a variable. In this case, the variable is `x`.

`dataframevalue` will be divided into Series objects and each Series is passed to the function `x`. When `axis` = 0 (default value), `dataframevalue` was cut into Series objects vertically. Each Series object has the same index as the DataFrame’s index. When `axis` = 1, `dataframevalue` was cut horizontally. Each Series object has the same column name as the DataFrame’s column name.

When `result_type` = 0 (default value), the final return type depends on the return type of function `func`. Otherwise, it's decided by the `result_type` argument.

More details about `DataFrame.apply()`'s parameters:

|   Parameter   | Define                                                | Usage                                                                                                                                                                                                                                                                                                                                                                                                                       |
| :-----------: | ----------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|    `func`     | name of the function                                  | Function applies to each column or row of the DataFrame data. It can be a customized function. Just call the function by name without brackets "()"                                                                                                                                                                                                                                                                         |
|    `axis`     | 0/1 or index/columns, Default 0                       | Axis , the function is applied along: `0('index'）`: apply function to every column; `1('columns')`: apply function to every row.                                                                                                                                                                                                                                                                                           |
|     `raw`     | bool. Default `False`                                 | Determines the type of the object passed into function `'func'`: Series or ndarray. `False`, it passes each row or column as a Series object; `True`, it passes ndarray objects instead. This will achieve much better performance when applying a Numpy reduction function.                                                                                                                                                |
| `result_type` | {'broadcast', 'expand', 'reduce', None}. Default None | These options only work when `axis` = 1:`'expand'`, list-like results will be converted into columns; `'reduce'`, the opposite of `'expand'`, returns a Series object if possible rather than list-like results; `'broadcast'`, results will have the original shape of the DataFrame data, also with the same index and columns; `None`, The default behavior. The return type depends on the return type of the function. |
|    `args`     | tuple                                                 | Additional positional arguments to `func`.                                                                                                                                                                                                                                                                                                                                                                                  |
|  `**kwargs`   |                                                       | Additional keyword arguments to `func`.                                                                                                                                                                                                                                                                                                                                                                                     |

## Example

In the following examples, the `.apply()` method is used with different parameters:

`x` and `y` apply the `calc_sum` function to `df` to calculate the sum of each column. `z` applies the `calc_sum` function to `df` to calculate the sum of each row. `l` applies the `np.sqrt` function to `df` to calculate the square root of each value. `m` applies a lambda function to create a new DataFrame with three column values.

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

print("Original dataframe:")
print(df)

print("\nx:")
print(x)
print(type(x))

print("\ny:")
print(y)
print(type(y))

print("\nz:")
print(z)
print(type(z))

print("\nl:")
print(l)
print(type(l))

print("\nm:")
print(m)
print(type(m))
```

The results are the following:

```shell
Original dataframe:
   col 1  col 2  col 3  col 4
0      1      5      9     13
1      2      6     10     14
2      3      7     11     15
3      4      8     12     16

x:
col 1    10
col 2    26
col 3    42
col 4    58
dtype: int64
<class 'pandas.core.series.Series'>

y:
col 1    10
col 2    26
col 3    42
col 4    58
dtype: int64
<class 'pandas.core.series.Series'>

z:
0    28
1    32
2    36
3    40
dtype: int64
<class 'pandas.core.series.Series'>

l:
      col 1     col 2     col 3     col 4
0  1.000000  2.236068  3.000000  3.605551
1  1.414214  2.449490  3.162278  3.741657
2  1.732051  2.645751  3.316625  3.872983
3  2.000000  2.828427  3.464102  4.000000
<class 'pandas.core.frame.DataFrame'>

m:
   0  1  2
0  0  1  2
1  0  1  2
2  0  1  2
3  0  1  2
<class 'pandas.core.frame.DataFrame'>
```
