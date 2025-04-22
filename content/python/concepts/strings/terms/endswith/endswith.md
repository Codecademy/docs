---
Title: '.endswith()'
Description: 'Checks whether or not a string ends with a given value.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Functions'
  - 'Methods'
  - 'Strings'
  - 'Values'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`.endswith()`** method checks a value against a given string and returns `True` if the string ends with that value. Otherwise, it returns `False`. This method is particularly useful when filtering or validating strings, such as verifying file extensions or checking URL endings.

## Syntax

```pseudo
string.endswith(value, start, end)
```

**Parameters:**

- `value`: The string or [tuple](https://www.codecademy.com/resources/docs/python/tuples) of strings to check for.
- `start` (Optional): The position in the original string where the search should start.
- `end` (Optional): The position in the original string where the search should end.

**Return value:**

The method returns `True` if the original string ends with the given value and `False` otherwise.

## Example 1: `.endswith()` Without `start` and `end` Parameters

This example uses the `.endswith()` method without `start` and `end` parameters to verify if a string ends with the given value:

```py
example_str = "This is a string"

check = example_str.endswith("g")

print(check)
```

Since the string ends with the given value, the example produces this output:

```shell
True
```

## Example 2: `.endswith()` with `start` and `end` Parameters

This example uses the `.endswith()` method with `start` and `end` parameters to check if the substring from index 8-13 in a string ends with the given value:

```py
text = "holiday_photo.jpg"

res = text.endswith("photo", 8, 13)

print(res)
```

Since the substring from index 8-13 in the string ends with the given value, the example produces this output:

```shell
True
```

## Codebyte Example: `.endswith()` with a Tuple of Strings

This codebyte example uses the `.endswith()` method to check if a string ends with any of the values provided in the given tuple:

```codebyte/python
filename = "document.txt"

res = filename.endswith((".txt", ".docx", ".pdf"))

print(res)
```

Since the string ends with `".txt"`, the output for the code will be `True`.

## Frequently Asked Questions

### 1. How does `.endswith()` and `.startswith()` differ?

The `.endswith()` method checks if a string ends with a specific suffix, while [`.startswith()`](https://www.codecademy.com/resources/docs/python/strings/startswith) checks if it begins with a specific prefix.

### 2. Is Python `.endswith()` case-sensitive?

Yes, `.endswith()` is case-sensitive.

### 3. Can `.endswith()` be used with empty strings?

Yes. Any string ends with an empty string, so calling `.endswith("")` on any string will return `True`.
