---
Title: 'isinstance()'
Description: 'Returns True if the given object is the specified type. Otherwise the function will return False.'
Subjects:
  - 'Data Science'
  - 'Computer Science'
Tags:
  - 'Booleans'
  - 'Data Types'
  - 'Development'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`isinstance()`** function determines whether a given object is of a designated value type. If it is, the function will return `True`, otherwise the function will return `False`.

## Syntax

```pseudo
isinstance(object, class)
```

- `object` is the object, or a reference to the object, to be tested.
- `class` is the type the function will use in this assertion (e.g. list, set, etc.).

## Example

```py
var1 = "Hello World!"
var2 = 123

def check_if_string(value):
    if isinstance(value, str):
        print(f'{value} is a string type.')
    else:
        print(f'{value} is not a string.')

check_if_string(var1)
check_if_string(var2)
```

This example results in the following output:

```shell
Hello World! is a string type.
123 is not a string.
```

## Codebyte Example

This example is runnable and uses the built-in function `isinstance()`:

```codebyte/python
bools = ["fAlsE", False , "True" , "False"]
counter = 0
for boolean in bools:
    if isinstance(boolean, bool):
        print("Valid boolean found at index " + str(counter))
    else:
        print("Invalid boolean found at index " + str(counter))
    counter += 1
```
