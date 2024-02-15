---
Title: 'float()'
Description: 'Returns a float value based on a string, numeric data type, or no value at all.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Functions'
  - 'Methods'
  - 'Strings'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
  - 'paths/data-science'
---

The built-in `float()` function returns a float value based on a [string](https://www.codecademy.com/resources/docs/python/strings), numeric [data type](https://www.codecademy.com/resources/docs/python/data-types), or no value at all.

## Syntax

```pseudo
float(num_string)
```

The `num_string` parameter is optional and should either be a string or numeric type.

## Example

In the example, the `float()` function is used to return float-type versions of an integer value `314` and a string "314":

```py
print(float(314))
print(float("314"))
```

The following output will look like this:

```shell
314.0
314.0
```

## Codebyte Example

Use `float()` to create a new float value:

```codebyte/python
f = float("1.23")
print(f)
```
