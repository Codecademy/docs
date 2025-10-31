---
Title: '.last()'
Description: 'Returns the last value in each group of a Pandas Series or DataFrame.'
Subjects:
  - 'Data Science'
  - 'Computer Science'
Tags:
  - 'Pandas'
  - 'DataFrame'
  - 'GroupBy'
  - 'Aggregation'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

The **`.last()`** method is an aggregation function used on a `GroupBy` object in Pandas. It returns the **last non-null value** in each section of the grouped data.

This method is particularly useful for time-series data or sequentially ordered data where the final observation within a specific period or category is the most relevant.

## Syntax

The method is called directly on a `GroupBy` object.

```pseudo
grouped_data.last(numeric_only=False, min_count=-1)
```

## Parameters

* `numeric_only` (bool): If `True`, only attempts to aggregate numeric columns.
* `min_count` (int): The number of non-`NaN` values required to consider the calculation valid.

## Return Value

Returns a Series or DataFrame containing the last non-null value for each group.

## Example

The following example demonstrates how to use `.last()` to find the final status of a task for each unique project ID.

```python
import pandas as pd

# Create a DataFrame representing chronological task status updates
data = {
    'project_id': ['A', 'B', 'A', 'C', 'B', 'C', 'A'],
    'status_date': pd.to_datetime(['2025-01-01', '2025-01-05', '2025-01-10', '2025-01-15', '2025-01-20', '2025-01-25', '2025-01-30']),
    'task_status': ['Start', 'Pending', 'In Progress', 'Start', 'Completed', 'In Progress', 'Completed']
}
df = pd.DataFrame(data).set_index('status_date').sort_index()

print("Original Data:\n", df)

# Group by project_id and find the last status (chronologically) for each project
last_status = df.groupby('project_id').last()

print("\nLast Status by Project:\n", last_status)
```

**Output:**

```shell
Original Data:
                   project_id  task_status
status_date                              
2025-01-01                   A        Start
2025-01-05                   B      Pending
2025-01-10                   A  In Progress
2025-01-15                   C        Start
2025-01-20                   B    Completed
2025-01-25                   C  In Progress
2025-01-30                   A    Completed

Last Status by Project:
              task_status
project_id               
A              Completed
B              Completed
C          In Progress
```

## Codebyte

Use the Codebyte below to experiment with the `last()` method.

```python
import pandas as pd

# Data from a tracking system
data = {
    'category': ['Alpha', 'Beta', 'Alpha', 'Beta', 'Alpha'],
    'score': [10, 5, 12, 8, 15]
}
df = pd.DataFrame(data)

# Group by category and find the last recorded score
last_scores = df.groupby('category').last()

print("Scores by Category:\n", last_scores)
```

---