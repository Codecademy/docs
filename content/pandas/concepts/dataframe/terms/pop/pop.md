---
Title: '.pop()'
Description: 'Removes a specified column from a DataFrame.'
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

In Pandas, the **`.pop()`** method removes a single specified column from a [`DataFrame`](https://www.codecademy.com/resources/docs/pandas/dataframe) object. The original `DataFrame` object is modifed, and the removed column is returned as a Pandas Series object.

## Syntax

```pseudo
DataFrame.pop(column_label)
```

- `DataFrame`: The DataFrame object from which a column is removed.
- `column_label`: The label of the column to remove. This should be a string representing the column name.

## Example

This example shows the `.pop()` method in use:

```py
import pandas as pd

d = {'col 1' : [1,2,3,4], 'col 2' : ['Red','Blue','Green','Pink'], 'col 3' : ['Oval', 'Circle', 'Square', 'Star'], 'col 4' : ['Sweet','Sour','Bitter','Salty']}

df = pd.DataFrame(data = d)
print(f"Original df:\n {df}\n")

data_pop = df.pop('col 3')
print(f"Popped data:\n {data_pop}\n")
print(f"DataFrame after pop:\n {df}\n")
```

The output is shown below:

```shell
Original df:
    col 1   col 2      col 3       col 4
0      1       Red        Oval        Sweet
1      2       Blue       Circle      Sour
2      3       Green      Square      Bitter
3      4       Pink       Star        Salty

Popped data:
0      Oval
1      Circle
2      Square
3      Star
Name: col 3, dtype: object

DataFrame after pop:
    col 1   col 2      col 4
0      1       Red        Sweet
1      2       Blue       Sour
2      3       Green      Bitter
3      4       Pink       Salty
```
The code above creates a pandas DataFrame from a dictionary, prints the DataFrame, uses the `.pop()` method to remove the column 'col 3' and return it as a Pandas Series object, and then prints the popped data and the modified DataFrame. 
