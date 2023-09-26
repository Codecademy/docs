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
  - 'paths/data-science'
---

The `.format_map()` string method takes a single parameter which is the input dictionary and returns key's values.

## Syntax

```py
string.format_map(d)
```

`d` is a variable in which the input dictionary is stored.

## Example

The example below uses `.format_map()` takes in a variable `a` which stores a dictionary and returns the value of the key `x` and `y`:

```py
# input stored in variable a.
a = {'x':'Mike', 'y':'Perry'}

# Use of format_map() function
print("That DJ is {x} {y}".format_map(a))
```

The output will look like this:

```shell
That DJ is Mike Perry
```

## Codebyte Example

```codebyte/python
profession = { 'name':['Susan', 'Kane'],'profession':['Teacher', 'Nurse']}

print('{name[0]} is a {profession[1]}.'.format_map(profession))
```
