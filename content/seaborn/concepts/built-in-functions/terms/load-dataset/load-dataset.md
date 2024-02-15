---
Title: 'load_dataset()'
Description: 'Loads a sample dataset (in CSV format) as a DataFrame object.'
Subjects:
  - 'Data Science'
  - 'Data Visualization'
Tags:
  - 'Graphs'
  - 'Libraries'
  - 'Matplotlib'
  - 'Data Structures'
  - 'Functions'
  - 'CSV'
  - 'Pandas'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science-foundations'
---

The **`load_dataset()`** function returns a new [pandas `DataFrame` object](https://www.codecademy.com/resources/docs/pandas/dataframe) that represents a sample dataset (in [CSV](https://www.codecademy.com/resources/docs/general/csv) format) from [this GitHub repository](https://github.com/mwaskom/seaborn-data).

> **Note:** A network connection is needed to run this function since it gets information from a live URL.

## Syntax

```pseudo
seaborn.load_dataset(name, cache=True, data_home=None, **kws)
```

The `name` parameter is required while the others are optional and have default values. They are usually passed as [keyword arguments](https://www.codecademy.com/resources/docs/python/functions/arguments-parameters).

Some of the more significant parameters are listed here:

|     Parameter Name     |       Data Type        | Usage                                                                                                                                                         |
| :--------------------: | :--------------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|         `name`         |         `str`          | Name of the dataset (in CSV format) from examples repository.                                                                                                 |
|   `cache` (optional)   |       `boolean`        | Initially loads the dataset from a local cache directory, after which it saves to this cache directory if a download is needed.                               |
| `data_home` (optional) |         `str`          | Specifies the local directory where the cache data is stored; can be viewed with `seaborn.get_data_home()`.                                                   |
|    `kws` (optional)    | `dict` (keys & values) | Extra keyword arguments that are passed to the [pandas `.read_csv()` function](https://www.codecademy.com/resources/docs/pandas/built-in-functions/read-csv). |

## Example

The following example accesses, loads, and prints the contents of the `flights.csv` file via the `.load_dataset()` function:

```py
import seaborn as sns

data = sns.load_dataset("flights")
print(data)
```

This will output the following:

```shell
     year month  passengers
0    1949   Jan         112
1    1949   Feb         118
2    1949   Mar         132
3    1949   Apr         129
4    1949   May         121
..    ...   ...         ...
139  1960   Aug         606
140  1960   Sep         508
141  1960   Oct         461
142  1960   Nov         390
143  1960   Dec         432
```
