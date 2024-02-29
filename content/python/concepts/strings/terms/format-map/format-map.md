---
Title: '.format_map()'
Description: 'Returns the values from a given dictionary.'
Subjects:
  - 'Data Science'
  - 'Computer Science'
Tags:
  - 'Strings'
  - 'Methods'
  - 'Functions'
CatalogContent:
  - 'learn-python-3'
  - 'paths/analyze-data-with-python'
---

The **`.format_map()`** string method takes a single parameter which is the input dictionary and returns the key's values.

## Syntax

```pseudo
string.format_map(d)
```

`d` is the dictionary to be addressed.

## Example

The example below uses `.format_map()` to return the values stored in `x` and `y`:

```py
# Input stored in variable a.
a = {'x':'Mike', 'y':'Perry'}

# Use of format_map() function
print("That DJ is {x} {y}".format_map(a))
```

The output will look like this:

```shell
That DJ is Mike Perry
```

## Codebyte Example

The following code is runnable and demonstrates the use of `.format_map()`:

```codebyte/python
profession = { 'name':['Susan', 'Kane'],'profession':['Teacher', 'Nurse']}

print('{name[0]} is a {profession[1]}.'.format_map(profession))
```
