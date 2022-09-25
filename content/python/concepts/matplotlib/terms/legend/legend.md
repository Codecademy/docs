---
Title: '.legend()'
Description: 'Places a legend on the axes and access to manipulate parameters of the legend.'
Subjects:
  - 'Data Science'
  - 'Data Visualization'
Tags:
  - 'Graphs'
  - 'Libraries'
  - 'Matplotlib'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`pyplot.legend()`** function returns a legend on the axes of a plot or subplot.

## Syntax

```pseudo
plot_instance.legend(handles, labels)
```

`.legend()` accepts zero or more parameters and can be called on a valid `plot_instance` of the `pyplot` module. When called with no parameters, the `.legend()` method will attempt to add the elements automatically. The following parameters can be used in the `.legend()` method:

|  Parameter Name  | Data Type(s)         | Usage                                                                                                  |
| :--------------: | -------------------- | ------------------------------------------------------------------------------------------------------ |
|    `handles`     | sequence of `Artist` | `handles` is utilized if more control is desired with each entry on the plot and how they are labeled. |
|     `labels`     | list of strings       | `labels` is a list of strings that will display the labels in the order they are entered.              |
|      `loc`       | int, string          | `loc` is used to determine the position of the legend on the axes. Defaults to `best`.                 |
|      `ncol`      | int                  | `ncol` is used to determine how many columns the legend will have. Defaults to 1.                      |
|    `fontsize`    | int, string          | `fontsize` is used change the font size the labels. Defaults to 11.                                    |
|   `labelcolor`   | list, string, `None` | `labelcolor` is used to change the color of the label(s). Defaults to `None`                           |
|     `title`      | string, `None`       | `title` is used to insert a title for the legend. Defaults to `None`.                                  |
| `title_fontsize` | int, string, `None`  | `title_fontsize` is used to change the font size of the legend `title`. Defaults to `None`.            |

## Example

In the following example, the `.legend()` method will be shown using the iris data set which is available using `seaborn` or [`pandas`](https://www.codecademy.com/resources/docs/pandas). In the first example, the `handles` parameter will be demonstrated, using `seaborn` to import the dataset. In the second example, `legend()` will be demonstrated without using the `handles` parameter along, using pandas to import the dataset:

### Example 1

---

```py
import matplotlib.pyplot as plt
import seaborn as sns

iris = sns.load_dataset('iris')

fig, ax = plt.subplots(figsize=(12,6))

sepal_lw = ax.scatter(iris['sepal_length'], iris['sepal_width'], label='Sepal')
petal_lw = ax.scatter(iris['petal_length'], iris['petal_width'], label='Petal')

plt.legend(handles=[sepal_lw, petal_lw]);
```

The output from this instance of the `.legend()` method is shown below:

![Example1](/media/matplotlib-legend-1.png)

### Example 2

---

```py
import matplotlib.pyplot as plt
import pandas as pd

iris = pd.read_csv('https://raw.githubusercontent.com/mwaskom/seaborn-data/master/iris.csv')

fig, ax = plt.subplots(figsize=(12,6))

sepal_lw = ax.scatter(iris['sepal_length'], iris['sepal_width'])
petal_lw = ax.scatter(iris['petal_length'], iris['petal_width'])

plt.legend(['sepal', 'petal'], loc=0, ncol=2, fontsize=15, labelcolor=['red','green'],
          title='the Legend', title_fontsize=15);
```

The output from this instance of the `.legend()` method is shown below:

![Example2](/media/matplotlib-legend-2.png)

```shell

```
