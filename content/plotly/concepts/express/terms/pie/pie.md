# Matplotlib Pie Charts

## .pie()

In python, we can use *.pie()* from the Pyplot module to display data in the form of a pie chart.
This is such a simple tool to use and can transform data into visually apealing ways for readers
to get a better idea about the relationships between variables.

## Example
```
import matplotlib.pyplot as plt

# Example data
data = [45, 55, 30, 15]

# Create a plot
plt.pie(data)

# Display the plot
plt.show() 
```

1. First, you need to make sure that you have the relevant modules imported:
```
import matplotlib.pyplot as plt
```
Here we import the *pyplot* module from the *matplotlib* library and to give it the alias plt.
**Matplotlib** *is a comprehensive library for creating static, animated, and interactive visualizations in Python.*

2. We of course then, need to define our data that we want to include in the pie chart:
```
data = [45, 55, 30, 15]
```

3. Next, we need to tell our program how we would like to visualise our data, this is where .pie() comes along and we pass the variable name of our data as an arguement:
```
plt.pie(data)
```

4. Finally, we need to show our data visualization, we can do this by using .show() on plt:
```
plt.show()
```

## Adding titles & Labeling Axes
We can also, add titles to our charts and label the axes to better visualise the data for our readers.

```
import matplotlib.pyplot as plt

# Example data
y = [2, 3, 5, 7, 11]

# Add title and labels
plt.title('Example Plot')
plt.xlabel('X-axis Label')
plt.ylabel('Y-axis Label')


# Create a plot
plt.pie(y)

# Display the plot
plt.show()
```