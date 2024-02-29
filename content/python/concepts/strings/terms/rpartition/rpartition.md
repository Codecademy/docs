---
Title: '.rpartition()'
Description: 'Used to split a string into three parts based on a specified separator.'
Subjects:
  - 'Data Science'
  - 'Computer Science'
Tags:
  - 'Strings'
  - 'Methods'
  - 'Formatting'
  - 'Tuples'
  - 'Functions'
CatalogContent:
  - 'learn-python-3'
  - 'paths/analyze-data-with-python'
---

The **`rpartition()`** method is a string method that is used to split a string into three parts based on a specified separator. It searches for the last occurrence of the specified separator in the string and divides the string into three parts: the part before the separator, the separator itself, and the part after the separator. The method returns a tuple containing these three parts.

## Syntax

```pseudo
str.rpartition(separator)
```

- `str`: This is the string on which to apply the `.rpartition()` method.
- `separator`: The character(s) used to split the string.

## Example 1

In this example, the `.rpartition()` method splits the string text based on the last occurrence of a comma (`','`).

```py
text = "apple,orange,banana"
result = text.rpartition(',')
print(result)
```

This results in the following output:

```shell
('apple,orange', ',', 'banana')
```

## Example 2

When specified `seperator` is not found, `.rpartition()` returns tuple containing: (1) an empty string, (2) an empty string, and (3) the given string.

```py
text = "example"
result = text.rpartition('word')
print(result)
```

This results in the following output:

```shell
('', '', 'example')
```

## Codebyte Example

The code below is runnable and uses `.rpartition()` to split `url` :

```codebyte/python
url = "https://www.example.com/path/to/resource"
base_url, separator, resource = url.rpartition('/')
print("Base URL:", base_url)
print("Separator:", separator)
print("Resource:", resource)
```
