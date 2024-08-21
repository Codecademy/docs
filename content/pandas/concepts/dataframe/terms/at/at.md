---
Title: '.at[]'
Description: 'Returns a specific value in row/column pairs in a dataset.' 
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

In Pandas, the **`.at[]`** function is used as an accessor to fetch a specific value from a [`DataFrame`](https://www.codecademy.com/resources/docs/pandas/dataframe) using row/column pairs.

## Syntax

```pseudo
dataframe.at[position, label]
```

- `position`: The label (index) of the row where the specific value is located.
- `label`: The label (column name) of the column where the specific value is located.

The result returned is a single element located at the specified position within the DataFrame.

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
