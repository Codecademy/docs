---
Title: '.concat()'
Description: 'Concatenates multiple Dataframes or Series along a particular axis'
Subjects: # Please only use Subjects in the subjects.md file (https://github.com/Codecademy/docs/blob/main/documentation/subjects.md). If that list feels insufficient, feel free to create a new Subject and add it to subjects.md in your PR!
  - 'A subject name'
  - 'A second subject name'
  - 'An nth subject name'
Tags: # Please only use Tags in the tags.md file (https://github.com/Codecademy/docs/blob/main/documentation/tags.md). If that list feels insufficient, feel free to create a new Tag and add it to tags.md in your PR!
  - 'Data Structures'
  - 'Functions'
  - 'Pandas'
  - 'CSV'
  - 'Data'
CatalogContent: # Please use course/path landing page slugs, rather than linking to individual content items. If listing multiple items, please put the most relevant one first
  - 'learn-Data-Analysis-with-Pandas'
  - 'paths/data-science'
---

The `.concat()` function is used to concatenate and combine multiple [`DataFrames`](https://www.codecademy.com/resources/docs/pandas/dataframe) or `Series` along a particular axis.

## Syntax

```pseudo
pandas.concat(objs)
```

The `objs` parameter is essential and must be specified. It represents the objects to be concatenated and can be a sequence or mapping of pandas Series or DataFrame objects. The objects should be passed as a sequence (like a list or tuple) or a mapping (like a dictionary).

The rest of the parameters are listed below:

|   Parameter Name   |                      Data Type                       | Usage                                                                                  |
| :----------------: | :--------------------------------------------------: | -------------------------------------------------------------------------------------- |
|       `axis`       |     int (0 for rows, 1 for columns ), default 0      | Specifies the axis along which to concatenate the objects                              |
|       `join`       | str (“outer” (default), “inner,” “left,” or “right”) | Determines how to handle indexes on other axes                                         |
|   `ignore_index`   |                bool, default `False`                 | If `True`, it resets the index in the resulting DataFrame                              |
|       `keys`       |        sequence (list or tuple), default None        | Lets you construct a hierarchical index using the provided keys as the outermost level |
|      `levels`      |           list of sequences, default None            | Specific levels to use for constructing a MultiIndex if keys are provided              |
|      `names`       |              list of str, default None               | Names for the levels generated in the hierarchical index                               |
| `verify_integrity` |                bool, default `False`                 | If `True`, checks whether the new concatenated axis contains duplicates                |
|       `sort`       |                bool, default `False`                 | If `True`, it sorts the resulting Series or Dataframe by the keys                      |
|       `copy`       |                 bool, default `True`                 | If `False`, it avoids copying data unnecessarily                                       |

## Example

```py
import pandas

df1 = pd.DataFrame({'A': [1, 2], 'B': [3, 4]})
df2 = pd.DataFrame({'A': [5, 6], 'B': [7, 8]})

result = pd.concat([df1, df2])
print(result)

```

The example will result in a new DataFrame is returned by concatenating df1 and df2 along the rows:

```shell
   A   B
0  1   2
1  3   4
0  5   6
1  7   8
```
