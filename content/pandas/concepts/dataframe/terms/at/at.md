---
Title: '.at[]'
Description: 'Returns a specific value in a DataFrame using the row and column labels.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Data Structures'
  - 'Pandas'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

In Pandas, the **`.at[]`** function is used as an accessor to fetch a specific value from a [`DataFrame`](https://www.codecademy.com/resources/docs/pandas/dataframe) using row and column pairs.

## Syntax

```pseudo
dataframe.at[index, label]
```

- `index`: The index (or row label) where the specific value is located or where you want to set the value.
- `label`: The label (or column name) where the specific value is located or where you want to set the value.

The result returned is a single element located at the specified position within the `DataFrame`.

## Example

The following example shows the use of the `.at[]` accessor function:

```py
import pandas as pd

# Create a DataFrame with two columns 'A' and 'B'
df = pd.DataFrame({'A': [1, 2], 'B': [3, 4]})

# Use .at[] to access the element at row 0, column 'B'
element = df.at[0, 'B']

# Print the accessed element
print(element)
```

The output of the code is as follows:

```shell
3
```

## Codebyte Example

Run the following codebyte to understand how the `.at[]` accessor is used to access a specific element in a `DataFrame` at a given row and column label:

```codebyte/python
import pandas as pd

data = {
    'Name': ['Alice', 'Bob', 'Charlie'],
    'Age': [25, 30, 35],
    'City': ['New York', 'Los Angeles', 'Chicago']
}

df = pd.DataFrame(data)

element = df.at[1, 'City']

print(element)
```
