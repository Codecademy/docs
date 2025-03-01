---
Title: 'Regression'
Descripton: 'Regression models relationships between variables to predict a dependent variable based on one or more independent variables.'
Subjects:
  - 'AI'
  - 'Data Science'
  - 'Machine Learning'
Tags:
  - 'Machine Learning'
  - 'Python'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---
**Regression is a mathematical process applied to data.   The aim is to identify the function that represents data occurrence in the best possible manner.  
In the context of machine learning the function identified with a regression technique can be used for predictive purposes.**  
  
There are many different regression techniques.  The choice of the appropriate technique depends on the circumstances at hand, such as data distribution.  
A simple form of regression is linear regression.  Here the data is represented by the function:  
y = a*x + b  
This function can be drawn as a line on a 2 dimensional graph:  
y is the outcome variable on the y axis (vertical);    
x is the predictor variable on the x axis (horizontal);  
the intercept is the value of y (outcome) if x is set to zero (hence intercept = b);  
the slope is the variation of the outcome y if the predictor x is increased by one unit.  
  
### A simple example in Python:  
The following code predicts a person's weight based on a person's height.  
```python
import pandas as pd
import statsmodels.api as sm
import matplotlib.pyplot as plt

# Provided data
heights = [150, 152, 160, 172, 176, 176, 180, 189]
weights = [50, 65, 65, 70, 80, 90, 90, 89]

# Create a DataFrame
measurements = pd.DataFrame({'height': heights, 'weight': weights})

# Fit the linear regression model
model = sm.OLS.from_formula("weight ~ height", data=measurements)
results = model.fit()

# Print the summary of the model
print(results.summary())

# Plot the data and the regression line
plt.scatter(measurements['height'], measurements['weight'], label='Data')
plt.plot(measurements['height'], results.predict(measurements), color='red', label='Regression Line')
plt.xlabel('Height (cm)')
plt.ylabel('Weight (kg)')
plt.title('Height vs Weight with Regression Line')
plt.legend()
plt.show()
``` 
