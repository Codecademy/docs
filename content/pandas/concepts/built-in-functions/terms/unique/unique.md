---
Title: '.unique()'
Description: 'Returns an array containing all the unique elements in the data series, with no specific order.'
Subjects: # Please only use Subjects in the subjects.md file (https://github.com/Codecademy/docs/blob/main/documentation/subjects.md). If that list feels insufficient, feel free to create a new Subject and add it to subjects.md in your PR!
  - 'Computer Science'
  - 'Data Science'
  - 'Data Visualization'
Tags: # Please only use Tags in the tags.md file (https://github.com/Codecademy/docs/blob/main/documentation/tags.md). If that list feels insufficient, feel free to create a new Tag and add it to tags.md in your PR!
  - 'Arrays'
  - 'Data'
  - 'Encoding'
  - 'Functions'
  - 'Pandas'
CatalogContent: # Please use course/path landing page slugs, rather than linking to individual content items. If listing multiple items, please put the most relevant one first
 - 'learn-python-3'
 - 'paths/computer-science'
 - 'paths/data-science'
 - 'paths/data-science-foundations'
---

The **`.unique()`**  function returns unique values from a data series using a hash table. It operates similarly to `numpy.unique()` but is notably faster, especially with large datasets, and it also includes NA values.

## Syntax
```pseudo
pd.unique(data_series)
```

The `data_series` parameter represents a 1-dimensional array-like data structure from which unique elements will be returned by the function. The dtype of the return matches that of the input, which can be of Index, Categorical, or Series type. The function lists the unique elements in the order they appear in the input data series, and it does *NOT* sort them.

## Example
The following example demonstrates the use of the `.unique()` function:
```
import pandas as pd

series = pd.Series([3, -1, 5, -1, 2, 1, 3, 2, 1, 5, -2, 1, 2])
unique_elements = series.unique()
print(f"The unique elements in series {list(series)} are\n {unique_elements}")
```

The above code outputs the following:
```
The unique elements in series [3, -1, 5, -1, 2, 1, 3, -2, 1, 5, 2, 1, 2] are
[3 -1 5 2 1 3 -2]
```

## Codebyte Example
The code below shows off the effects of `unique()` on different kinds of data types: Index, Categorical, and Series. After defining the array-like objects, the `unique()` method is applied to list out the unique elements of each object, and the resulting data is printed out to the console.

```codebyte/python
import pandas as pd

# Defining an Index object with Timestamps
index = pd.Index([
            pd.Timestamp("20160101", tz="US/Eastern"),
            pd.Timestamp("20160101", tz="US/Eastern"),
            pd.Timestamp("20160102", tz="US/Eastern"),
            pd.Timestamp("20160101", tz="US/Central"),
        ])

# Print unique elements of the Index object
print("Unique elements in Index:")
print(pd.unique(index))

# Define a Categorical object with grades
grades = pd.Categorical(['A', 'B', 'B+', 'C-', 'D', 'A', 'B', 'A', 'B-', 'F'], categories=['A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D+', 'D', 'F'], ordered=True)

# Print unique elements of the Categorical object
print("\nUnique elements in Categorical:")
print(pd.unique(grades))

# Define a Series object with strings
string_series = pd.Series(['John', 'Jack', 'Ellen', 'Kirsten', 'Jack', 'John Jr', 'Kristen', 'Ellen'])

# Print unique elements of the string Series
print("\nUnique elements in String Series:")
print(pd.unique(string_series))

# Define a Series object with integers
int_series = pd.Series([2n for n in range(10)] + [3n for n in range(5)])

# Print unique elements of the integer Series
print("\nUnique elements in Integer Series:")
print(pd.unique(int_series))
```