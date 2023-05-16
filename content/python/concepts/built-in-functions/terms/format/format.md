---
Title: 'format()'
Description: 'Used for String Formatting'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Strings'
  - 'built-in-functions'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

The **`format()`** function allows you to replace the placeholders in the given [string](https://www.codecademy.com/resources/docs/python/strings) with the specified values.

## Syntax

```pseudo
string.format(values)
```

## Example

The examples below demonstrate how the `format()` function is used :

```py
language = "Python"
print("{} is one of the most loved programming language !".format(language))
```

This will print the following output:

```shell
Python is one of the most loved programming language !
```
You can use index-based positioning to format the string:
```py
print("{1} can learn to {0} on codecademy".format('code','You'))
```

This will print the following output:

```shell
You can learn to code on codecademy
```
You could also pass keyword arguments in the format function:
```py
print("Playing {sport} is my hobby".format(sport='Basketball'))
```

This will print the following output:

```shell
Playing Basketball is my hobby
```

### Codebytes

The following example shows the use of `format()` function :

```codebyte/python

words=["Python","AI","Web"]
print("{1} is used for {0} and {2} development".format("AI","Python","Web"))

```