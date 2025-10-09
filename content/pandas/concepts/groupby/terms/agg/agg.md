---
Title: '.agg()'
Description: 'Applies one or more aggregation functions to grouped data in a Pandas DataFrame.'
Subjects:
  - 'Data Science'
  - 'Computer Science'
Tags:
  - 'Pandas'
  - 'Data Structures'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

The **`.agg()`** method in Pandas is used with **`groupby()`** to apply one or more aggregation functions (like `sum`, `mean`, `count`, etc.) to grouped data. It allows flexible and powerful summarization of DataFrame data after grouping.

## Syntax
```pseudo
groupbyobject.agg()
```

#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `func` | function, list, dict, or string | The aggregation function(s) to apply. Can be a single function (e.g., `'mean'`), a list of functions, or a dictionary mapping columns to aggregation functions. |

#### Return Value

Returns a DataFrame (or Series, depending on the aggregation) with aggregated results after applying the given function(s) to each group.

## Example
```py
import pandas as pd

# Sample DataFrame
data = {
    'Department': ['Sales', 'Sales', 'HR', 'HR', 'IT', 'IT'],
    'Salary': [50000, 60000, 40000, 45000, 70000, 75000],
    'Bonus': [5000, 6000, 2000, 2500, 8000, 8500]
}

df = pd.DataFrame(data)

# Group by Department and calculate multiple aggregations
result = df.groupby('Department').agg({
    'Salary': ['mean', 'max'],
    'Bonus': 'sum'
})

print(result)
```

This example produces the following output:
```shell
                  Salary     |   Bonus
              mean     max        sum
Department
HR           42500.0  45000       4500
IT           72500.0  75000       16500
Sales        55000.0  60000       11000
```

## Codebyte Example
```py
import pandas as pd

# Create a sample DataFrame
data = {
    'Team': ['A', 'A', 'B', 'B', 'C', 'C'],
    'Points': [25, 30, 15, 10, 50, 45],
    'Assists': [5, 7, 3, 4, 8, 9]
}

df = pd.DataFrame(data)

# Use groupby and agg to calculate mean Points and total Assists per Team
grouped = df.groupby('Team').agg({
    'Points': 'mean',
    'Assists': 'sum'
})

print(grouped)
```

Output:
```shell
      Points  Assists
Team
A       27.5       12
B       12.5        7
C       47.5       17
```