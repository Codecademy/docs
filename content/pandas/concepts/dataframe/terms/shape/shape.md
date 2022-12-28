---
Title: '.shape' # Required; the file name should be the same as the title, but lowercase, with dashes instead of spaces, and all punctuation removed
Description: 'Returns the number of rows and columns of given DataFrame in tuple form.' # Required; ideally under 150 characters and starts with a present-tense verb (used in search engine results and content previews)
Subjects: # Please only use Subjects in the subjects.md file (https://github.com/Codecademy/docs/blob/main/documentation/subjects.md). If that list feels insufficient, feel free to create a new Subject and add it to subjects.md in your PR!
  - Computer Science
  - Data Science
Tags: # Please only use Tags in the tags.md file (https://github.com/Codecademy/docs/blob/main/documentation/tags.md). If that list feels insufficient, feel free to create a new Tag and add it to tags.md in your PR!
  - Pandas
  - Syntax
  - Data Structures
CatalogContent: # Please use course/path landing page slugs, rather than linking to individual content items. If listing multiple items, please put the most relevant one first
  - 'learn-python-3'
  - 'paths/data-science'
---

The **`.shape`** property of the [`DataFrame`](https://www.codecademy.com/resources/docs/pandas/dataframe) returns the tuple of array information that provides the number of rows and columns respectively. 

## Syntax

```pseudo
dataframevalue.shape
```

Returns the number of rows and columns of DataFrame.

## Example

The following example initiates a DataFrame and uses `.shape` to return the number of rows and columns:

```py
import pandas as pd

d = {'col1' : [1,2,3], 'col2' : [4,5,6]}

df = pd.DataFrame(data = d)
df.shape
```

This will print the following:

```shell
(3, 2)
```

The result can be interpreted that DataFrame has 3 rows and 2 columns.

The following example results the `ValueError` of `.shape` if a DataFrame has a different of length in one or more column(s):

```py
import pandas as pd

d = {'col1' : [1,2,3], 'col2' : [4,6]}

df = pd.DataFrame(data = d)
df.shape
```

This will print the following:

```shell
ValueError: All arrays must be of the same length
```
