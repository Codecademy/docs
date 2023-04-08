---
Title: '.isna()'
Description: 'Checks whether the objects of a Dataframe or a series contain missing or null values and returns a corresponding boolean `True` or `False` value.'
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
The **`.isna()`** method checks whether the objects of a `Dataframe` or a series contain missing or null values `(NA, NaN)` and returns a new object with the same shape as the original object but with boolean values `True` or `False` as the elements. `True` indicates the presence of null or missing values and `False` indicates otherwise. The original `DataFrame` object, used to call the method, remains unchanged.

## Syntax

```py
# Check for NA values.
df.isna()
```
## Example

Here are some examples for using the `.isna()` method on both DataFrame and Series objects:
### Example 1: `.isna()` with DataFrame
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
### Example 2: `.isna()` with Series
```py
import pandas as pd

# Create a Series with missing values
s = pd.Series([1, None, 3, None, 5])

# Check for missing values in the Series
missing_values = s.isna()

print(missing_values)
```
The Output from using `.isna()` on Series:
```shell
0    False
1     True
2    False
3     True
4    False
```