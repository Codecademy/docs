---
Title: '.median()'
Description: 'Returns a Series or DataFrame containing the median of each group in a GroupBy object.'
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

The **`.median()`** method returns a `Series` or [`DataFrame`](https://www.codecademy.com/resources/docs/pandas/dataframe) containing the median of each group in a [`GroupBy`](https://www.codecademy.com/resources/docs/pandas/groupby) object, ignoring `NaN` values by default.

## Syntax

```pseudo
groupbyobject.median(numeric_only)
```

**Parameters:**

- `numeric_only`: Boolean value. If `True`, includes only numeric columns. Default is `False`.

**Return value:**

Returns a new `Series` or `DataFrame` containing the median values for each group.

## Example

The following example produces a `GroupBy` object from a [`DataFrame`](https://www.codecademy.com/resources/docs/pandas/dataframe) and executes the `.median()` method on it:

```py
import pandas as pd

df = pd.DataFrame({'Team' : ['A', 'A', 'A', 'B', 'B', 'C'],
                   'Score' : [10, 20, 30, 40, 50, 60]})
print(df, end='\n\n')

group = df.groupby(['Team'], as_index=False)

print(group.median())
```

This example produces the following output:

```shell
  Team  Score
0    A     10
1    A     20
2    A     30
3    B     40
4    B     50
5    C     60

  Team  Score
0    A   20.0
1    B   45.0
2    C   60.0
```

## Codebyte Example

In this example, median scores of students in different classes are computed to analyze performance:

```codebyte/python
import pandas as pd

# DataFrame containing student scores for different classes
df = pd.DataFrame({
    'Class': ['Math', 'Math', 'Science', 'Science', 'History', 'History'],
    'Student': ['Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Frank'],
    'Score': [85, 90, 78, 82, 92, 88]
})

# Group by class and calculate median score
class_median = df.groupby('Class')['Score'].median()

print(class_median)
```
