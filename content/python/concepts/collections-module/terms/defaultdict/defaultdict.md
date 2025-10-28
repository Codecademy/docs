---
Title: 'defaultdict'
Description: 'Creates a dictionary-like object that provides default values for missing keys.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Data Types'
  - 'Dictionaries'
  - 'Modules'
  - 'Python'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

Python **`defaultdict`** is a [data type](https://www.codecademy.com/resources/docs/python/data-types) that belongs to the `collections` [module](https://www.codecademy.com/resources/docs/python/modules). It is a [dictionary](https://www.codecademy.com/resources/docs/python/dictionaries) subclass that is used to return a dictionary-like object.

## Python `defaultdict` Syntax

```pseudo
from collections import defaultdict

defaultdict(default_factory)
```

**Parameters:**

- `default_factory`: A [function](https://www.codecademy.com/resources/docs/python/functions) that provides the default value for nonexistent keys. Commonly used with int, list, set, or even custom functions. Examples include:
  - `int()`: Default value is `0`.
  - `list()`:Default value is `[]`.
  - `set()`: Default value is `set()`.

**Return value:**

Returns a `defaultdict` object. If a key does not exist, accessing it will automatically create it with the value returned by `default_factory`.

## Example 1: Counting Items Using Python `defaultdict`

This example uses Python `defaultdict` to count the frequency of elements in a list:

```py
from collections import defaultdict

fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple']

fruit_count = defaultdict(int)

for fruit in fruits:
  fruit_count[fruit] += 1

print(fruit_count)
```

Here is the output:

```shell
defaultdict(<class 'int'>, {'apple': 3, 'banana': 2, 'orange': 1})
```

## Example 2: Grouping Items Using Python `defaultdict`

Python `defaultdict` can group items easily without checking if the key exists:

```py
from collections import defaultdict

names = [('Alice', 'Math'), ('Bob', 'Science'), ('Alice', 'English')]

grouped = defaultdict(list)

for name, subject in names:
  grouped[name].append(subject)

print(grouped)
```

Here is the output:

```shell
defaultdict(<class 'list'>, {'Alice': ['Math', 'English'], 'Bob': ['Science']})
```

## Codebyte Example: Using Custom Default Values in Python `defaultdict`

This codebyte example provides a custom default value to Python `defaultdict`:

```codebyte/python
from collections import defaultdict

def default_age():
  return 18

ages = defaultdict(default_age)

ages['John'] = 25
ages['Doe']  # Key doesn’t exist, uses default 18

print(ages)
```

## Frequently Asked Questions

### 1. What does `defaultdict` do in Python?

Python `defaultdict` automatically assigns a default value to keys that do not exist, preventing KeyError and reducing the need for explicit key checks.

### 2. Is `defaultdict` faster than `dict` in Python?

In Python, `defaultdict` can be faster than `dict` in scenarios where missing keys are frequently accessed or initialized, as it avoids repeated conditional checks.

### 3. What is the difference between `get()` and `defaultdict` in Python?

- `dict.get(key, default)`: Returns the value for `key` if it exists; otherwise, returns the specified `default` without modifying the dictionary.
- `defaultdict`: Automatically inserts the key with a default value (from `default_factory`) into the dictionary when accessed.
