---
Title: '.replace()'
Description: 'Returns a DataFrame object after values within the DataFrame have been changed.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Data Structures'
  - 'Dynamic Programming'
  - 'Functions'
  - 'Methods'
  - 'Pandas'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

The **`.replace()`** function returns a new `DataFrame` object with specified values replaced with another specified value. The original `DataFrame` object, used to call the method, remains unchanged unless explicitly declared.

## Syntax

```pseudo
df = dataframe.replace(value_to_replace, new_value, inplace)
```

`dataframe` is the `DataFrame` with the source data and `value_to_replace` is the value being targeted within the `DataFrame`. `new_value` is the value used to replace the original value. `inplace` is `False` by default. The original `DataFrame` values will not be replaced unless `inplace` is explicitly declared to `True` within the parameters.

`.replace()` has the following parameters:

|   Parameter Name   | Data Type(s)                              | Usage                                                                                                                                         |
| :----------------: | ----------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `value_to_replace` | scalar, dict, list, string, regex, `None` | Value to replace. Value can be singular numeric, string, regex, or multiple nested in list/dict.                                              |
|    `new_value`     | scalar, dict, list, string, regex, `None` | `new_value` replaces any value(s) declared in `to_replace`. Value(s) can be singular numeric, string, regex, or multiple nested in list/dict. |
|     `inplace`      | bool                                      | If `True`, alters the existing `DataFrame` rather than returning a new one. Defaults to `False`.                                              |
|      `limit`       | int                                       | Maximum consecutive items to back/forward fill. Defaults to `None`.                                                                           |

## Example

In the following example, the `.replace()` method is used to replace `???` values in a `DataFrame`, first with a scalar, then with a dict. For the second example with dict, it will be shown with differing amounts of `?`:

```py
import pandas as pd
import numpy as np

d = {"col 1" : [1,2,3,"???"], "col 2" : ["A","B","???","D"], "col 3" : [5,"???",7,8], "col 4" : ["???","F","G","H"]}
df = pd.DataFrame(data = d)

print(f"Example 1 Original df:\n{df}\n")

first_replace = df.replace("???", np.nan)
print(f"After first replace():\n{first_replace}\n")

d = {"col 1" : [1,2,3,"?"], "col 2" : ["A","B","??","D"], "col 3" : [5,"???",7,8], "col 4" : ["????","F","G","H"]}
df = pd.DataFrame(data = d)

print(f"Example 2 Original df:\n{df}\n")

second_replace = df.replace({"?" : 4, "??" : "C", "???" : 6, "????" : "E"})
print(f"After second replace():\n{second_replace}\n")
```

The output from these instances of the `.replace()` method is shown below:

```shell
Example 1 Original df:
  col 1 col 2 col 3 col 4
0     1     A     5   ???
1     2     B   ???     F
2     3   ???     7     G
3   ???     D     8     H

After first replace():
   col 1 col 2  col 3 col 4
0    1.0     A    5.0   NaN
1    2.0     B    NaN     F
2    3.0   NaN    7.0     G
3    NaN     D    8.0     H

Example 2 Original df:
  col 1 col 2 col 3 col 4
0     1     A     5  ????
1     2     B   ???     F
2     3    ??     7     G
3     ?     D     8     H

After second replace():
   col 1 col 2  col 3 col 4
0      1     A      5     E
1      2     B      6     F
2      3     C      7     G
3      4     D      8     H
```
