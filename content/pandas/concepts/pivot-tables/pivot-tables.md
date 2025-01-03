---
Title: 'Pivot Tables'
Description: 'Pivot tables are a data summarization tool in Pandas that allow reshaping and aggregating tabular data for analysis.'
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

**Pivot tables** in [Pandas](https://www.codecademy.com/resources/docs/pandas) are a data summarization tool that perform operations such as aggregation, grouping, and reshaping of tabular data based on specific criteria, making it easier to derive meaningful insights.

## Syntax

The general syntax for creating a pivot table in Pandas is:

```pseudo
pandas.pivot_table(data, values=None, index=None, columns=None, aggfunc='mean', fill_value=None, margins=False, dropna=True, margins_name='All')
```

- `data`: The input DataFrame.
- `values`: The column(s) to aggregate.
- `index`: Column(s) to group data by (rows).
- `columns`: Column(s) to group data by (columns).
- `aggfunc`: The aggregation function(s) (default is `mean`).
- `fill_value`: Value to replace `NaN`s.
- `margins`: Add subtotals (row/column totals).
- `margins_name`: Name for row/column totals.
- `dropna`: Whether to drop columns with `NaN` values.

## Example

Consider the following DataFrame:

```py
import pandas as pd

data = {
    'Region': ['North', 'South', 'East', 'West', 'North', 'South'],
    'Category': ['A', 'A', 'B', 'B', 'A', 'B'],
    'Sales': [100, 150, 200, 130, 120, 180]
}

df = pd.DataFrame(data)
print(df)
```

The output for the above code will be as follows:

| Region | Category | Sales |
| ------ | -------- | ----- |
| North  | A        | 100   |
| South  | A        | 150   |
| East   | B        | 200   |
| West   | B        | 130   |
| North  | A        | 120   |
| South  | B        | 180   |

### Pivoting Data

To summarize total sales by **Region** and **Category**:

```py
pivot = pd.pivot_table(df, values='Sales', index='Region', columns='Category', aggfunc='sum', fill_value=0)
print(pivot)
```

The output of the above code will be as follows:

| Category | A   | B   |
| -------- | --- | --- |
| East     | 0   | 200 |
| North    | 220 | 0   |
| South    | 150 | 180 |
| West     | 0   | 130 |

### Adding Margins for Totals

To include row and column totals in the pivot table, set `margins=True`:

```py
pivot = pd.pivot_table(df, values='Sales', index='Region', columns='Category', aggfunc='sum', fill_value=0, margins=True)
print(pivot)
```

The output of the above code will be as follows:

| Category | A   | B   | All |
| -------- | --- | --- | --- |
| East     | 0   | 200 | 200 |
| North    | 220 | 0   | 220 |
| South    | 150 | 180 | 330 |
| West     | 0   | 130 | 130 |
| All      | 370 | 510 | 880 |

### Aggregating with Multiple Functions

Multiple aggregation functions can be applied using a list:

```py
pivot = pd.pivot_table(df, values='Sales', index='Region', columns='Category', aggfunc=['sum', 'mean'], fill_value=0)
print(pivot)
```

The output of the above code will be as follows:

|        | sum |     | mean  |       |
| ------ | --- | --- | ----- | ----- |
| Region | A   | B   | A     | B     |
| East   | 0   | 200 | 0.0   | 200.0 |
| North  | 220 | 0   | 110.0 | 0.0   |
| South  | 150 | 180 | 150.0 | 180.0 |
| West   | 0   | 130 | 0.0   | 130.0 |

## Codebyte Example

Run the following example to see how pivot tables can be used to aggregate `Quantity` by `Category` and `Region`:

```codebyte/python
import pandas as pd

# Sample data
data = {
    'Category': ['Electronics', 'Electronics', 'Clothing', 'Clothing', 'Electronics', 'Clothing'],
    'Sub-Category': ['Phones', 'Laptops', 'Shirts', 'Shirts', 'Phones', 'Pants'],
    'Region': ['North', 'South', 'North', 'East', 'East', 'South'],
    'Quantity': [2, 3, 4, 1, 3, 2],
    'Discount': [0.1, 0.2, 0.15, 0.1, 0.25, 0.05]
}

# Create a DataFrame
df = pd.DataFrame(data)

print("Original DataFrame:")
print(df)

# Create a pivot table to aggregate 'Quantity' by 'Category' and 'Region'
pivot_table = pd.pivot_table(
    df,
    values='Quantity',         # Column to aggregate
    index='Category',          # Rows
    columns='Region',          # Columns
    aggfunc=['sum', 'mean'],   # Aggregation functions
    fill_value=0               # Replace NaN with 0
)

print("\nPivot Table Aggregating 'Quantity' with Sum and Mean:")
print(pivot_table)
```
