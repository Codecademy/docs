# Plotly Pie Charts

## .pie()

<<<<<<< HEAD
---
Title: '.pie()'
Description: 'Creates a pie chart, a circular statistical graphic divided into slices to illustrate numerical proportions.'

Subjects:
  - 'Data Science'
  - 'Data Visualization'

Tags:
  - 'Graphs'
  - 'Libraries'
  - 'Plotly'
  - 'Data'

CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

In Python, the **`pie()`** method from the Plotly library is used to create a pie chart, which visually represents data proportions. This method helps transform data into an appealing visual format, making it easier for readers to understand the relationships between variables.

## Syntax
- values - The values that will define the pie slices
- names - The labels for each pie slice
- title - Title of the chart
- hole - Creates a donut chart if value is between 0 and 1
- color_discrete_sequence - Color sequence for the pie slices
- hover_data - Column name for additional data to show on hover
- labels - Custom labels

## Example
```
# Import necessary libraries
import plotly.express as px
import pandas as pd

# Define example data
data = {
    'Category': ['A', 'B', 'C', 'D'],
    'Value': [45, 55, 30, 15]
}

# Create a DataFrame
df = pd.DataFrame(data)

# Create and display a pie chart
fig = px.pie(
    df,
    values='Value',
    names='Category',
    title='Example Pie Chart',
    hole=0.3,
    color_discrete_sequence=px.colors.sequential.RdBu,
    labels={'Category': 'Category Name'}
)

# Display the plot
=======
In python, we can use *.pie()* from the *plotly library* to display data in the form of a pie chart.
This is such a simple tool to use and can transform data into visually apealing ways for readers
to get a better idea about the relationships between variables.

## Example
```
import plotly.express as px
import numpy

# Example data
data = [45, 55, 30, 15]
names = ['A', 'B', 'C', 'D']

# Create a plot
fig = px.pie(values=data, names=names)

# Display the plot
fig.show() 
```

1. First, you need to make sure that you have the relevant modules imported:
```
import plotly.express as px
```
Here we import the *plotly* library and to give it the alias px.

2. We of course then, need to define our data that we want to include in the pie chart as well as the names to match:
```
data = [45, 55, 30, 15]
names = ['A', 'B', 'C', 'D']
```

3. Next, we need to use .pie() on px and pass our data as the arguement for the values and names as the value for names. We create a variable called fig to hold this for later:
```
fig = px.pie(values=data, names=names)
```

4. Finally, we need to show our data visualization, we can do this by using .show() on the fig variable we created earlier:
```
>>>>>>> 1da22a5c3bd396db906ae092e2fb21f81340aa92
fig.show()
```

## Here is the output:
<<<<<<< HEAD

The example below shows the usage of the `.pie()` method as follows:


![alt text](newplot2.png)
=======
![alt text](newplot.png)
>>>>>>> 1da22a5c3bd396db906ae092e2fb21f81340aa92
