# Plotly Pie Charts

## .pie()

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
fig.show()
```

## Here is the output:
![alt text](newplot.png)