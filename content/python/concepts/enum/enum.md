---
Title: 'enum'
Description: 'A class that defines a set of named values, providing a structured way to represent constant values in a readable manner.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Data Types'
  - 'Enum'
  - 'Python'
  - 'Variables'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

**`Enum`** (short for _enumeration_) is a class in Python used to define a set of named, immutable constants. Enumerations improve code readability and maintainability by replacing magic numbers or strings with meaningful names. Enums are part of Python's built-in `enum` module, introduced in Python 3.4.

> **Note:** Magic numbers are unclear, hardcoded values in code. For example, `80` in a speed-checking program might be confusing. Replacing it with an enum constant, like `SpeedLimit.HIGHWAY`, makes the code easier to read and maintain.

## Syntax

```pseudo
from enum import Enum

class EnumName(Enum):
  MEMBER1 = value1
  MEMBER2 = value2
```

- `EnumName`: The name of the enum class.
- `MEMBER1`, `MEMBER2`: Names of the constants.
- `value1`, `value2`: Values assigned to the constants (e.g. numbers or strings).

## `enum` Module

The `enum` module provides the `Enum` class for creating enumerations. It also includes:

- `IntEnum`: Ensures that the values of the enuemration are integers.
- `Flag`: Allows combining constants with bitwise operations.
- `Auto`: Automatically assigns values to the enumeration members.

Enums also provide methods like:

- `.name`: Returns the name of the enum member (as a string).
- `.value`: Returns the value assigned to the enum member.

## Example

This example demonstrates how to create an enum for days of the week with integer values:

```py
from enum import Enum

class Weekday(Enum):
  MONDAY = 1
  TUESDAY = 2
  WEDNESDAY = 3

# Accessing members
print(Weekday.MONDAY)
print(Weekday.MONDAY.name)
print(Weekday.MONDAY.value)

# Iterating through members
for day in Weekday:
  print(day)
```

This example results in the following output:

```shell
Weekday.MONDAY
MONDAY
1
Weekday.MONDAY
Weekday.TUESDAY
Weekday.WEDNESDAY
```

## Codebyte

This example demonstrates how enums can represent traffic light states and associate actions with each state:

```codebyte/python
from enum import Enum

class TrafficLight(Enum):
  RED = 'Stop'
  YELLOW = 'Caution'
  GREEN = 'Go'

def traffic_action(light):
  if light == TrafficLight.RED:
    return "Stop your car."
  elif light == TrafficLight.YELLOW:
    return "Prepare to stop."
  elif light == TrafficLight.GREEN:
    return "You can go."

# Example usage
current_light = TrafficLight.RED
print(traffic_action(current_light))
```
