---
Title: '.legend()'
Description: 'Places a legend on the axes, allowing access to manipulate parameters of the legend.'
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

The `.legend()` method accepts zero or more parameters and can be called on a valid `plot_instance` of the `pyplot` module. When called with no parameters, `.legend()` will attempt to add the elements automatically. The following parameters can be used:

|  Parameter Name  | Data Type(s)         | Usage                                                                                     |
| :--------------: | -------------------- | ----------------------------------------------------------------------------------------- |
|    `handles`     | sequence of `Artist` | Utilized if more control is desired with each entry on the plot and how they are labeled. |
|     `labels`     | list of strings      | Displays the labels in the order they are entered.                                        |
|      `loc`       | int, string          | Determines the position of the legend on the axes. Defaults to `best`.                    |
|      `ncol`      | int                  | Determines how many columns the legend will have. Defaults to 1.                          |
|    `fontsize`    | int, string          | Changes the font size the labels. Defaults to 11.                                         |
|   `labelcolor`   | list, string, `None` | Changes the color of the label(s). Defaults to `None`                                     |
|     `title`      | string, `None`       | Inserts a title for the legend. Defaults to `None`.                                       |
| `title_fontsize` | int, string, `None`  | Changes the font size of the legend `title`. Defaults to `None`.                          |

## Example

In the following example, `.legend()` will be shown using the iris data set which is available using `seaborn` ([`pandas`](https://www.codecademy.com/resources/docs/pandas) [.read_csv()](https://www.codecademy.com/resources/docs/pandas/built-in-functions/read-csv) can be used alternatively). The `handles` parameter will be demonstrated, using `seaborn` to import the dataset.

```py
import matplotlib.pyplot as plt
import seaborn as sns

iris = sns.load_dataset('iris')

fig, ax = plt.subplots(figsize=(12,6))

sepal_lw = ax.scatter(iris['sepal_length'], iris['sepal_width'], label='Sepal')
petal_lw = ax.scatter(iris['petal_length'], iris['petal_width'], label='Petal')

plt.legend(handles=[sepal_lw, petal_lw]);
```

The output is shown below:

![Output of matplotlib.pyplot.legend() function from seaborn example](https://raw.githubusercontent.com/Codecademy/docs/main/media/matplotlib-legend-1.png)
