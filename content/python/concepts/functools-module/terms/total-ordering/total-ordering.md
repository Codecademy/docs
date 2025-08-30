---
Title: total_ordering()
Description: This term entry explains total_ordering(), which is a class decorator under the functools module.
Subjects: Python
Tags: Class Decorator
Catalog Content: content/python/concepts/functools-module/terms/total-ordering/total-ordering.md
---

The **`total_ordering()`** class decorator under the `functools` module modifies a class by defining any missing rich comparison methods.

There are six rich comparison methods that define and customize operator behavior within a class:

```codebyte/python
#This is the rich comparison method that defines and customizes the '==' operator (Equal To) within a class.
def __eq__(self, other)

#This is the rich comparison method that defines and customizes the '!=' operator (Not Equal To) within a class.
def __ne__(self, other)

#This is the rich comparison method that defines and customizes the '<' operator (Less Than) within a class.
def __lt__(self, other)

#This is the rich comparison method that defines and customizes the '<=' operator (Less Than or Equal To) within a class.
def __le__(self, other)

#This is the rich comparison method that defines and customizes the '>' operator (Greater Than) within a class.
def __gt__(self, other)

#This is the rich comparison method that defines and customizes the '>=' operator (Greater Than or Equal To) within a class.
def __ge__(self, other)
```

Instead of defining all six rich comparison methods, the **`total_ordering()`** class decorator only requires two rich comparison methods, `__eq__` and any other rich comparison method. The benefit is coding efficiency.

**Requirements:**
  - `def __eq__(self, other)` must be defined.
  - At least one other rich comparison method must be defined.

**Characteristics:**
- **Wrapping**: Syntax `@functools.total_ordering` or `@total_ordering` wraps the next class defined. No need to call manually.
- **Order**: Requirements themselves do not need to be ordered within the class definition, e.g. `def __eq__(self, other)` could come after `def __lt__(self, other)`.
- **Returns**: Returns `True` or `False` boolean when called and printed.
- **Performance**: Performance may be negatively impacted if decorators are called frequently.

## Syntax
There are two approaches to `total_ordering` syntax:

**Option 1 - Wrap**
```codebyte/python
from functools import total_ordering

@total_ordering
class Name:
    def __init__(self, first_comparison):
        self.first_comparison = first_comparison

    def __eq__(self, other):
        return self.first_comparison == other.first_comparison

    def __lt__(self, other):
        return self.first_comparison < other.first_comparison
```
**Option 2 - Call**
```codebyte/python
from functools import total_ordering

class Name:
    def __init__(self, first_comparison):
        self.first_comparison = first_comparison

    def __eq__(self, other):
        return self.first_comparison == other.first_comparison

    def __lt__(self, other):
        return self.first_comparison < other.first_comparison

name = total_ordering(Name)
```

## Example
This example demonstrates that `total_ordering` defines missing rich comparison methods within a class.
```codebyte/python
from functools import total_ordering

@total_ordering
class Age:
    def __init__(self, age_number):
        self.age_number = age_number

    def __eq__(self, other):
        return self.age_number == other.age_number

    def __lt__(self, other):
        return self.age_number < other.age_number

#The __gt__ method (greater than) was not defined explicitly in the code above. That's where total_ordering can help!
print(Age(20) > Age(60))
```
Here is the output:
```
False
```
This example demonstrates the customization capabilities when using rich comparison methods and total_ordering.
```codebyte/python
from functools import total_ordering

@total_ordering
class Sky_Color:
    def __init__(self, color):
        self.color = color

#The __eq__ method (equal to) is customized and defined as 'not equal to blue' within this class. Any class object that is not equal to blue will return a True boolean.
    def __eq__(self, other):
        return self.color != "blue"

    def __lt__(self, other):
        return self.color < other.color

blue_color = "blue"
print(f"Is the sky {blue_color}?")
print(f"{blue_color == Sky_Color(blue_color)}")

#The class Sky_Color does not explicitly define the '!=' operator (Not Equal To). This is automically defined by the use of total_ordering.
print(f"\nIs the sky never {blue_color}?")
print(f"{blue_color != Sky_Color(blue_color)}")
```
This will print:
```
Is the sky blue?
False

Is the sky never blue?
True
```
