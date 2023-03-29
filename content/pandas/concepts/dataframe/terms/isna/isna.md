---
Title: '.isna()'
Description: 'It checks whether the objects of a dataframe or a series contain missing or null values and returns a corresponding boolean `True` or `False` value.'
Subjects:
    - 'Computer Science'
    - 'Pandas'
Tags:
    - 'Methods'
    - 'Data Science'
CatalogContent:
    - 'learn-python-3'
    - 'paths/data-science'
---


The `.isna()` method checks whether the objects of a dataframe or a series contain missing or null values `(NA, NaN)` and returns a new object with the same shape as the original object but with boolean values `True` or `False` as the elements. True indicates the presence of null or missing values and False indicates otherwise. The original `DataFrame` object, used to call the method, remains unchanged.'

## Syntax

```py
# Check for NA values.
df.isna()

# Look for only boolean type 'True' on the index/row axis.
df.isna(axis = 0, bool_only = True)
```


`DataFrame.isna()` has the following parameters:


|      Parameter      | Input type                                      | Description                                                                                                                                                                                              |
| :-----------------: | ------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `axis` (optional) | `0` or `1` | Indicates the axis along which the missing values will be searched. `0` represents the `index/row` axis and 1 represents the `column` axis.                                                                               |
|       `bool_only`   (optional)      | `True` or `False`                  | This optional boolean parameter specifies whether to only look for missing values of boolean type. If it is set to `True`, the method will only search for missing values of boolean type `True`. The default value is `False`.
 |


## Example

Here are some examples for using the `.isna()` method on both DataFrame and Series objects, with and without the optional parameters:


### Example 1: DataFrame without optional parameters

```py
import pandas as pd

# Create a DataFrame with missing values
df = pd.DataFrame({
    'A': [1, 2, None, 4],
    'B': [5, None, 7, 8],
    'C': ['a', 'b', None, 'd']
})

# Check for missing values in the DataFrame
missing_values = df.isna()

print(missing_values)
```

The Output from using `.isna()` on DataFrame without optional parameters:

```shell
       A      B      C
0  False  False  False
1  False   True  False
2   True  False   True
3  False  False  False
```


### Example 2: DataFrame with optional parameters

```py
import pandas as pd

# Create a DataFrame with missing values
df = pd.DataFrame({
    'A': [1, 2, None, 4],
    'B': [5, None, 7, 8],
    'C': ['a', 'b', None, 'd']
})

# Check for missing values of boolean type only
missing_bool_values = df.isna(bool_only=True)

print(missing_bool_values)
```

The Output from using `.isna()` on DataFrame with optional parameters:

```shell
       A      B      C
0  False  False  False
1  False   True  False
2  False  False  False
3  False  False  False
```


### Example 3: Series with optional parameters

```py
import pandas as pd

# Create a Series with missing values
s = pd.Series([1, None, 3, None, 5])

# Check for missing values in the Series
missing_values = s.isna()

print(missing_values)
```

The Output from using `.isna()` on Series with optional parameters:

```shell
0    False
1     True
2    False
3     True
4    False
```


### Example 4: Series with optional parameters

```py
import pandas as pd

# Create a Series with missing values
s = pd.Series([True, None, False, None, True])

# Check for missing values of boolean type only
missing_bool_values = s.isna(bool_only=True)

print(missing_bool_values)
```

The Output from using `.isna()` on Series with optional parameters:

```shell
0    False
1     True
2    False
3     True
4    False
```