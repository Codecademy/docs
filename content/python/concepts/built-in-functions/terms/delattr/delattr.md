---
Title: 'delattr()'
Description: 'Allows the user to delete attributes from an object.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Functions'
  - 'Methods'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
  - 'paths/data-science'
---

Allows the user to delete attributes from an object.

## Syntax

```py
delattr(object, name)
```

## Parameters

- `object`: The object to have an attribute removed.
- `name`: The attribute to be removed from the object.

## Example 1

Use `delattr()` to remove the `position` attribute from the `Person1` class:

```py
class Person1:
  name = "Harry"
  age = "35"
  position = "Professor"

employee1 = Person1()

print("Employee Name: ", employee1.name)
print("Employee Age: ", employee1.age)
print("Employee Position: ", employee1.position)

delattr(Person1, "position")

print("----  UPDATE  ----")
print("Employee Name: ", employee1.name)
print("Employee Age: ", employee1.age)

# Will cause an AttributeError because attribute is removed
print("Employee Position: ", employee1.position)
```
## Codebyte Example

In the example below, the `delattr()` function is used to remove an attribute from the class travel:

```codebyte/python
class travel:
  first_stop = "Barcelone"
  second_stop = "Nice"
  third_stop = "Rome"

my_holidays = travel()

print("My first destinantion for my holiday is ", my_holiday.first_stop)
print("My second destinantion for my holiday is ", my_holiday.second_stop)
print("My third destinantion for my holiday is ", my_holiday.third_stop)

delattr(travel, "third_stop")
print("My first destinantion for my holiday is ", my_holiday.first_stop)
print("My second destinantion for my holiday is ", my_holiday.second_stop)

# Will cause an AttributeError because attribute is removed
print("My third destinantion for my holiday is ", my_holiday.third_stop)
```