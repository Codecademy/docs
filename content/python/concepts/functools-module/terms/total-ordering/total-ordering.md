---
Title: 'total_ordering()'
Description: 'Generates missing comparison methods in a class based on a minimal set of defined ones.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Classes'
  - 'Modules'
  - 'Python'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

In Python, the **`total_ordering()`** decorator from the `functools` module simplifies the creation of fully ordered classes. By defining the `__eq__()` method and one additional comparison method (`__lt__()`, `__le__()`, `__gt__()`, or `__ge__()`), all other rich comparison methods are automatically generated.

This decorator reduces redundant code in custom classes that require complete ordering behavior for comparisons, sorting, and equality checks.

## Syntax

```pseudo
from functools import total_ordering

@total_ordering
class ClassName:
  def __eq__(self, other): ...
  def __lt__(self, other): ...
```

**Parameters:**

The `total_ordering()` decorator takes no parameters.

**Return value:**

Returns a class with the missing comparison methods (`__le__`, `__gt__`, and `__ge__`) automatically added.

## Example 1: Numeric Wrapper Class

The following example defines a class that compares wrapped numeric values. Only `__eq__()` and `__lt__()` are implemented; the rest are generated automatically:

```py
from functools import total_ordering

@total_ordering
class Number:
  def __init__(self, value):
    self.value = value

  def __eq__(self, other):
    return self.value == other.value

  def __lt__(self, other):
    return self.value < other.value

print(Number(3) < Number(4))
print(Number(5) >= Number(5))
print(Number(7) > Number(1))
```

The output of this code is:

```shell
True
True
True
```

## Example 2: Ordering Strings by Length

This example demonstrates ordering based on string length instead of direct string comparison:

```py
from functools import total_ordering

@total_ordering
class Word:
  def __init__(self, text):
    self.text = text

  def __eq__(self, other):
    return len(self.text) == len(other.text)

  def __lt__(self, other):
    return len(self.text) < len(other.text)

print(Word("apple") < Word("banana"))
print(Word("kiwi") == Word("pear"))
print(Word("grape") > Word("fig"))
```

The output of this code is:

```shell
True
True
True
```

## Codebyte Example: Prioritizing Tasks

The following codebyte defines a class where objects are ordered by priority value:

```codebyte/python
from functools import total_ordering

@total_ordering
class Task:
  def __init__(self, name, priority):
    self.name = name
    self.priority = priority

  def __eq__(self, other):
    return self.priority == other.priority

  def __lt__(self, other):
    return self.priority > other.priority

tasks = [
  Task("Write report", 2),
  Task("Fix bugs", 5),
  Task("Plan sprint", 3)
]

tasks.sort()
for t in tasks:
  print(t.name, t.priority)
```

Higher priority numbers are treated as greater for sorting purposes.
