---
Title: '.unique()'
Description: 'Returns an unordered array of all the unique elements in the data series'
Subjects: # Please only use Subjects in the subjects.md file (https://github.com/Codecademy/docs/blob/main/documentation/subjects.md). If that list feels insufficient, feel free to create a new Subject and add it to subjects.md in your PR!
  - 'Data Science'
  - 'Data visualization'
Tags: # Please only use Tags in the tags.md file (https://github.com/Codecademy/docs/blob/main/documentation/tags.md). If that list feels insufficient, feel free to create a new Tag and add it to tags.md in your PR!
  - 'Data'
  - 'Encoding'
  - 'Pandas'
CatalogContent: # Please use course/path landing page slugs, rather than linking to individual content items. If listing multiple items, please put the most relevant one first
 - 'data-processing-pandas'
 - 'path/data-science-foundations'
 - 'eda-exploratory-data-analysis'
---

The **`.unique()`** function returns the unique values based on a hash table. It works similarly to numpy.unique(), but it is significantly faster for large data sequences. Includes NA values.

## Syntax

```pseudo
pd.unique(data_series)
```

The `data_series` parameter representss the 1-dimensional array-like data structure whose unique elements will be returned by the function. The dtype of the return matches the input, which can be of Index, Categorical, or Series type. The function lists the unique elements in the order they appear, and does NOT sort them.

## Codebyte Example

The code below shows off the effects of unique on different kind of data types: Index, Categorical, Series. After definiting the array-like objects, the `unique()` method is applied to list out the unique elements of the object, and the resulting data is printed out to the console.

```codebyte/python
import pandas as pd

index = pd.Index([
            pd.Timestamp("20160101", tz="US/Eastern"),
            pd.Timestamp("20160101", tz="US/Eastern"),
            pd.Timestamp("20160102", tz="US/Eastern"),
            pd.Timestamp("20160101", tz="US/Central"),
        ])
print(pd.unique(index))

grades = pd.Categorical(['A', 'B', 'B+', 'C-', 'D', 'A', 'B', 'A', 'B-', 'F'], categories=['A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D+', 'D', 'F'], ordered=True)
print(pd.unique(grades))

string_series = pd.Series(['John', 'Jack', 'Ellen', 'Kirsten', 'Jack', 'John Jr', 'Kristen', 'Ellen'])
print(pd.unique(string_series))

int_series = pd.Series([2n for n in range(10)] + [3n for n in range(5)])
print(pd.unique(int_series))


```