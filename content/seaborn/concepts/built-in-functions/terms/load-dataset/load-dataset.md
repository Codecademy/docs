---
Title: 'load_dataset()'
Description: 'Loads a sample dataset (in CSV format) from this online [repository](https://github.com/mwaskom/seaborn-data).'
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
  - 'paths/computer-science'
---

The `load_dataset()` function takes the name of a sample dataset (in CSV format) from this online [repository](https://github.com/mwaskom/seaborn-data) and returns a Pandas [`DataFrame`](https://www.codecademy.com/resources/docs/pandas/dataframe) object.

## Syntax

```pseudo
seaborn.load_dataset(name)
```

The `name` parameter is the name of the dataset. It can be any of the datasets that exist on this online [repository](https://github.com/mwaskom/seaborn-data). It is the first parameter of the function and can be used by itself. There are, however, many other parameters that are optional or have default settings. These are usually passed as [keyword arguments](https://www.codecademy.com/resources/docs/python/functions/arguments-parameters) since using the parameter order is generally inconvenient.

Some of the more significant parameters are listed here:

|    Parameter Name    |         Data Type          | Usage                                                                                                                                        |
| :------------------: | :------------------------: | -------------------------------------------------------------------------------------------------------------------------------------------- |
|       `name`         |            str             | Name of the dataset (in CSV format) on this [repository](https://github.com/mwaskom/seaborn-data).                                                                                                              |
|        `cache`       |            boolean         | The default value is `True`or `1` and it allows the function to initially load the dataset from a local cache directory, after which it saves to this cache directory if a download is needed. |                                                 |
|     `data_home`      |            str             | Specifies the local directory where the cache data is stored. To view this directory, use the function `print(seaborn.get_data_home())`.        |                                                                                                                             |
|       `kws`          |   dict(keys & values)      | Optional and extra keyword arguments that are passed to the pandas function `.read_csv`. This panda function reads a csv file and returns a dataframe. |                                                                                     |

## Example

```py
import seaborn as sns

#Access and Load the dataset
data = sns.load_dataset("flights")
print(data)
```

Output will show the contents of the flights.csv file loaded into the DataFrame as shown below:

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