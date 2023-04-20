---
Title: '.get_dummies()' # Required; the file name should be the same as the title, but lowercase, with dashes instead of spaces, and all punctuation removed
Description: 'Converts categorical variables to dummy (indicator) variables' # Required; ideally under 150 characters and starts with a present-tense verb (used in search engine results and content previews)
Subjects: # Please only use Subjects in the subjects.md file (https://github.com/Codecademy/docs/blob/main/documentation/subjects.md). If that list feels insufficient, feel free to create a new Subject and add it to subjects.md in your PR!
  - 'Data Science'
  - 'Machine Learning'
Tags: # Please only use Tags in the tags.md file (https://github.com/Codecademy/docs/blob/main/documentation/tags.md). If that list feels insufficient, feel free to create a new Tag and add it to tags.md in your PR!
  - 'Data'
  - 'Encoding'
  - 'Pandas'
  - 'Scikit-learn'
  - 'Statistics'
CatalogContent: # Please use course/path landing page slugs, rather than linking to individual content items. If listing multiple items, please put the most relevant one first
  - 'learn-python-3'
  - 'path/data-scientist'
---

The **`.get_dummies()`** function creates dummy (indicator) variables from categorical variables. Each level of the categorical variable gets its own column - a dummy variable. The dummy variables take on the value "1" if the original categorical variable was that level or "0" if not.

## Syntax

```pseudo
pd.get_dummies(data)
```

The `data` parameter is the data to be converted to dummy variables. It is the only mandatory parameter. It can be any array-like data structure including a pandas Series or DataFrame.

The other parameters are optional or have default arguments. They are listed below.

| Parameter Name | Data Type                                                  | Usage                                                                                                                                                                                                                                                |
| :------------- | :--------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `prefix`       | `str`, `list` of `str`, or `dict` of `str`, default `None` | String to append to the beginning of DataFrame column names. If a list is passed, its length should be equal to the number of columns. A dictionary can also be passed, it should map column names to prefixes.                                      |
| `prefix_sep`   | `str`, default '\_'                                        | If the prefix parameter is not `None`, this is a string appended after the prefix separating it from the level of the categorical variable.                                                                                                          |
| `dummy_na`     | `bool`, default `False`                                    | Adds a column to indicate `NaN`s. If `False`, `NaN`s are ignored.                                                                                                                                                                                    |
| `columns`      | list-like, default `None`                                  | If a DataFrame is passed to the `data` parameter, a list of columns can be passed to the `columns` parameter to be encoded as dummy variables. If `columns` is `None` then all the columns with object, string, or category dtype will be converted. |
| `sparse`       | `bool`, default `False`                                    | If `True`, the dummy-encoded columns are backed by a `SparseArray`. If `False`, the dummy-encoded columns are backed by a NumPy `array`.                                                                                                             |
| `drop_first`   | `bool`, default `False`                                    | If `True`, this drops the first level of each variable to undergo dummy encoding.                                                                                                                                                                    |
| `dtype`        | dtype, default `bool`                                      | Specifies the dtype for dummy variable columns that are created. Note: Only a single dtype is permitted.                                                                                                                                             |

## Codebyte Example

The code below creates a list based on the letters of the alphabet `abcs`, converts `abcs` to a Series, and prints the Series. Then the `.get_dummys()` function is applied to the Series to create a DataFrame whose columns are indicator variables for each level of the single categorical variable in the Series. Finally, the DataFrame is printed.

```codebyte/python
import pandas as pd
import string

abcs = [i for i in string.ascii_lowercase]

abcs = pd.Series(abcs)

print(abcs)

abcs = pd.get_dummies(abcs)

print(abcs)
```
