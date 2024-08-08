---
Title: '.at[]'
Description: 'Access a specific value in row/column pairs in a dataset.' 
Subjects: 
  - 'Computer Science'
  - 'Data Science'
Tags: 
  - 'Data Structures'
  - 'Pandas'
CatalogContent: 
  - 'learn-python-3'
  - 'paths/data-science'
---

In Pandas, the **`.at[]`** function is used as an accessor to fetch a specific value located in a DataFrame with the aid of row/column pairs. 

## Syntax

```pseudo
dataframe.at[position, label]
```
-`position`:The label of the row to be accessed.
-`label`:Name of the column to be accessed.

The result returned is a single element located at the specified position within the dataframe.

## Example

The following example shows the use of the `.at[]` accessor function:

```py
import pandas as pd

df = pd.DataFrame({'A': [1, 2], 'B': [3, 4]})
element = df.at[0, 'B']

print(element)  # Output: 3
```

This bit of code gives out the following output:

```shell
3
``` 

## Codebyte Example

The below codebyte example uses the .at[] accessor to access a specific element in a dataframe at a given position and column label:


```at/python
import pandas as pd

# Creating a sample dataframe
data = {
    'Name': ['Alice', 'Bob', 'Charlie'],
    'Age': [25, 30, 35],
    'City': ['New York', 'Los Angeles', 'Chicago']
}

df = pd.DataFrame(data)

# Accessing a single element using .at[]
element = df.at[1, 'City']

print(element)  # Output: Los Angeles
```
