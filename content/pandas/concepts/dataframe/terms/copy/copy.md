---
Title: '.copy()'
Description: 'Returns a copy of a DataFrame or Series.'
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

In Pandas, **`.copy()`** is a method that creates a copy of a DataFrame or a Series. This method returns a fully independent copy of DataFrame or a shallow copy (see Shallow vs. Deep Copy section).

## Syntax

```pseudo
df_copy = df.copy()
```

The boolean parameter `deep` specifies whether `.copy()` should create a deep or a shallow copy. The default value is `deep=True`, which enforces a deep copy.

## Shallow vs. Deep Copy

Note that the designation of the `deep` parameter can have impacts on the resulting copy as well as the original DataFrame.

- In a shallow copy, the new object points to the same data as the original object, and any changes made to the copy will affect the original object. Changes made to the original dataframe will also be reflected in the shallow copy. By default, the `.copy()` method creates a deep copy.
- In a deep copy, a new object is created with a completely new set of data that is identical to the original data. Changes made to the copied object will not affect the original object and vice versa.

## Example

```py
import pandas as pd

# Create a DataFrame
df = pd.DataFrame({'A': [1, 2, 3], 'B': [4, 5, 6]})

# Create a deep copy of the DataFrame
deep_copy = df.copy(deep=True)

# Create a shallow copy of the DataFrame
shallow_copy = df.copy(deep=False)

# Modify the deep copy
deep_copy['A'][1] = 20

# Modify the shallow copy
shallow_copy['A'][0] = 10

#Print the deep copy
print(deep_copy)

# Print the shallow copy
print(shallow_copy)

# Print the original DataFrame
print(df)
```

The output of the code above will be:

```shell
     A  B
 0   1  4
 1  20  5
 2   3  6

     A  B
 0  10  4
 1   2  5
 2   3  6

    A  B
0  10  4
1   2  5
2   3  6
```
