---
Title: 'Lists'
Description: '.deg2rad() is a module in numpy that facilitates the conversion of numbers in degree to radian.

Subjects:
  - 'Computer Science'
  - 'Data Science'
  - 'Web Development'
Tags:
  - 'conversion'
  - 'degrees'
  - 'radians'
CatalogContent:
  - 'function purpose'
  - 'parameters'
---

The **.deg2rad()** is a mathematical function in numpy that converts degrees to radians.
> **Note:** The default unit by which the result of the angle's calculation is displayed in numpy is radian, therefore **.deg2rad()** turns degree inputs to radian if deployed.

## Syntax

`numpy.deg2rad(x)`

The x in the syntax above is a variable that can be replaced with any digit in degree.

## Example

Using a protractor to ascertain the angle of a board stationed on a table, whose unit is degree. To convert the value of a degree to radian:
```
import numpy as np

# Angle of the board on a table measured in degrees
angle_degrees = 45

# Convert the angle to radians
angle_radians = np.deg2rad(angle_degrees)

# Output the result
print(f"Angle in degrees: {angle_degrees}")
print(f"Angle in radians: {angle_radians}")
```




	
