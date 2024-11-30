---
title: Pivot Tables
description: Learn how to use pivot tables in Pandas to summarize and analyze data efficiently.
---

# Pivot Tables in Pandas

Pivot tables in Pandas are a powerful tool used to summarize, aggregate, and analyze data in tabular format. They allow you to restructure and reshape your data, making it easier to extract insights by grouping and aggregating values.

## Syntax

The basic syntax for creating a pivot table in Pandas is as follows:

```python
pandas.pivot_table(data, values=None, index=None, columns=None, aggfunc='mean', fill_value=None, margins=False, margins_name='All', dropna=True, observed=False)
```

### Parameters:
- **data**: The DataFrame to pivot.
- **values**: Column(s) to aggregate.
- **index**: Column(s) to group by along the rows.
- **columns**: Column(s) to group by along the columns.
- **aggfunc**: Function(s) to aggregate values. Defaults to `'mean'`.
- **fill_value**: Value to replace missing data.
- **margins**: Boolean to add subtotals for rows and columns. Defaults to `False`.
- **margins_name**: Label for the margins column/row. Defaults to `'All'`.
- **dropna**: Whether to exclude columns with `NaN`. Defaults to `True`.
- **observed**: For categorical data, whether to show only observed combinations. Defaults to `False`.

For detailed documentation, refer to the [Pandas documentation on pivot_table](https://pandas.pydata.org/docs/reference/api/pandas.pivot_table.html).

## Example

Here’s a simple example demonstrating how to create a pivot table in Pandas:

```python
import pandas as pd

# Sample dataset
data = {
    "Department": ["Sales", "Sales", "HR", "HR", "IT", "IT"],
    "Employee": ["Alice", "Bob", "Charlie", "David", "Eve", "Frank"],
    "Salary": [70000, 80000, 50000, 60000, 90000, 100000],
}

df = pd.DataFrame(data)

# Create a pivot table
pivot_table = pd.pivot_table(
    df,
    values="Salary",
    index="Department",
    aggfunc="mean"
)

print(pivot_table)
```

### Output:
```
             Salary
Department         
HR           55000
IT           95000
Sales        75000
```

This pivot table summarizes the average salary for each department.

## Codebyte Example

Below is a Codebyte example to try pivot tables interactively:

```python
import pandas as pd

# Sample dataset
data = {
    "Region": ["North", "South", "East", "West", "North", "South"],
    "Product": ["A", "B", "A", "B", "C", "C"],
    "Sales": [200, 150, 300, 400, 250, 100],
}

df = pd.DataFrame(data)

# Create a pivot table
pivot_table = pd.pivot_table(
    df,
    values="Sales",
    index="Region",
    columns="Product",
    aggfunc="sum",
    fill_value=0
)

print(pivot_table)
```

### Output:
```
Product       A      B      C
Region                       
East       300      0      0
North      200      0    250
South        0    150    100
West         0    400      0
```

This pivot table shows total sales for each product across regions.

## Additional Resources

- [Pandas Documentation: Pivot Table](https://pandas.pydata.org/docs/reference/api/pandas.pivot_table.html)
- [Codecademy Pandas Tutorial](https://www.codecademy.com/learn/data-processing-pandas)
- [Codecademy Markdown Style Guide](https://www.codecademy.com/resources/docs/style-guide)

By mastering pivot tables, you'll be better equipped to summarize and analyze data in Pandas, unlocking deeper insights and making your workflows more efficient.
