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

```pseudo
delattr(object, name)
```

- `object`: The object to have an attribute removed.
- `name`: The attribute to be removed from the object.

## Example

Use `delattr()` to remove the `position` attribute from the `Person` class:

```py
class Person:
  name = "John Doe"
  position = "Professor"

person1 = Person()
print(person1.position)
# Output: Professor

delattr(Person, "position")
print(person1.position)
# Output: AttributeError: 'Person' object has no attribute 'position'
```

## Codebyte Example

In the example below, the `delattr()` function is used to remove an attribute from the `Travel` class. Uncommenting the last print statement will cause an `AttributeError` because the `third_stop` attribute is removed:

```codebyte/python
class Travel:
  first_stop = "Barcelona"
  second_stop = "Nice"
  third_stop = "Rome"

my_holiday = Travel()

print("My first destinantion for my holiday is ", my_holiday.first_stop)
print("My second destinantion for my holiday is ", my_holiday.second_stop)
print("My third destinantion for my holiday is ", my_holiday.third_stop)

delattr(Travel, "third_stop")
print("My first destinantion for my holiday is ", my_holiday.first_stop)
print("My second destinantion for my holiday is ", my_holiday.second_stop)

# print("My third destinantion for my holiday is ", my_holiday.third_stop)
```
