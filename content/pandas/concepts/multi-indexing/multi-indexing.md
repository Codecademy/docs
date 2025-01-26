---
Title: 'Multi-Indexing'
Description: 'Multi-indexing in Pandas allows hierarchical organization and advanced manipulation of tabular data.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
  - 'Web Development'
Tags:
  - 'Functions'
  - 'Pandas'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

**Multi-indexing** in Pandas refers to the ability to use multiple levels of indexing (rows and/or columns) to organize data hierarchically. It enables advanced operations like grouping, slicing, and reshaping data with ease, especially in multi-dimensional datasets.

## Creating a Multi-Index

A multi-index can be created directly when constructing a DataFrame or applied to an existing DataFrame.

### From a List of Tuples

The syntax is as follows:

```pseudo
pd.MultiIndex.from_tuples(tuples, names=None)
```

- `tuples`: List of tuples, where each tuple represents a multi-index entry.
- `names`: List of strings representing the names of the index levels (default is `None`).

Here's an example where a [`DataFrame`](https://www.codecademy.com/resources/docs/pandas/dataframe) is created using a multi-index from a list of tuples, where each tuple represents a hierarchical key.

```py
import pandas as pd

data = {
    'Sales': [200, 300, 400, 500],
    'Profit': [50, 80, 120, 150]
}

index = pd.MultiIndex.from_tuples(
    [('Store A', 'Q1'), ('Store A', 'Q2'), ('Store B', 'Q1'), ('Store B', 'Q2')],
    names=['Store', 'Quarter']
)

df = pd.DataFrame(data, index=index)
print(df)
```

The output will be as follows:

```shell
                Sales  Profit
Store   Quarter
Store A Q1        200      50
         Q2        300      80
Store B Q1        400     120
         Q2        500     150
```

### From a Groupby Operation

The syntax will be as follows:

```pseudo
DataFrame.groupby([columns]).aggregate()
```

- `columns`: List of columns to group by.

Here's an example where a `DataFrame` is grouped by two columns (`Category` and `Subcategory`), creating a multi-index for the grouped result -

```py
import pandas as pd

df = pd.DataFrame({
    'Category': ['A', 'A', 'B', 'B'],
    'Subcategory': ['X', 'Y', 'X', 'Y'],
    'Value': [10, 20, 30, 40]
})
grouped = df.groupby(['Category', 'Subcategory']).sum()
print(grouped)
```

The output will look like this:

```shell
                      Value
Category Subcategory
A        X               10
         Y               20
B        X               30
         Y               40
```

## Accessing Multi-Index Data

### Access Using `.loc`

The syntax will be as follows:

```pseudo
DataFrame.loc[(level_1, level_2)]
```

- `level_1`, `level_2`: Keys corresponding to specific levels in the index hierarchy.

### Slicing with `.xs`

The syntax will be as follows:

```pseudo
DataFrame.xs(key, level=level_name)
```

- `key`: Value to slice on.
- `level_name`: The level of the index to slice on.

## Resetting and Setting Multi-Index

### Resetting Multi-Index

The syntax will be as follows:

```pseudo
DataFrame.reset_index(level=None, inplace=False)
```

- `level`: The index level(s) to reset. If `None`, all levels are reset.
- `inplace`: If `True`, modifies the DataFrame in place (default is `False`).

### Setting Multi-Index

The syntax will be as follows:

```pseudo
DataFrame.set_index([column_1, column_2], inplace=False)
```

- `column_1`, `column_2`: Columns to set as multi-index levels.
- `inplace`: If `True`, modifies the DataFrame in place (default is `False`).

## Sorting Multi-Index

The syntax will be as follows:

```pseudo
DataFrame.sort_index(level=None, ascending=True, inplace=False)
```

- `level`: The index level(s) to sort by. If `None`, sorts by all levels.
- `ascending`: If `True`, sorts in ascending order; otherwise, in descending order.
- `inplace`: If `True`, modifies the DataFrame in place (default is `False`).

## Codebyte Example

The below example demonstrates creating, accessing, slicing, resetting, setting, sorting, and grouping a multi-indexed DataFrame in Pandas:

```codebyte/python
import pandas as pd

# Step 1: Create a DataFrame with a Multi-Index
data = {
    'Sales': [200, 300, 400, 500],
    'Profit': [50, 80, 120, 150]
}

# Create a Multi-Index from tuples
index = pd.MultiIndex.from_tuples(
    [('Store A', 'Q1'), ('Store A', 'Q2'), ('Store B', 'Q1'), ('Store B', 'Q2')],
    names=['Store', 'Quarter']
)
df = pd.DataFrame(data, index=index)
print("Step 1: DataFrame with Multi-Index")
print(df)

# Step 2: Access data using .loc
print("\nStep 2: Access data for Store A, Quarter Q1 using .loc")
print(df.loc[('Store A', 'Q1')])

# Step 3: Slice data using .xs
print("\nStep 3: Slice data for all Q1 quarters using .xs")
print(df.xs('Q1', level='Quarter'))

# Step 4: Reset the Multi-Index
df_reset = df.reset_index()
print("\nStep 4: Reset the Multi-Index")
print(df_reset)

# Step 5: Set a new Multi-Index
df = df_reset.set_index(['Store', 'Quarter'])
print("\nStep 5: Set a new Multi-Index")
print(df)

# Step 6: Sort the Multi-Index
df = df.sort_index(level='Store', ascending=False)
print("\nStep 6: Sort the Multi-Index by Store in descending order")
print(df)

# Step 7: Group by to create a Multi-Index
df_grouped = df_reset.groupby(['Store', 'Quarter']).sum()
print("\nStep 7: Group by Store and Quarter to create a Multi-Index")
print(df_grouped)
```
