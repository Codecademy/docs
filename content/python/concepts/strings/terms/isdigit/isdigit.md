---
Title: '.isdigit()'
Description: 'Checks if all the elements in the string are digits and returns a boolean flag based on the result.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Characters'
  - 'Functions'
  - 'Methods'
  - 'Strings'
CatalogContent:
  - 'learn-python-3'
  - 'paths/analyze-data-with-python'
---

The **`.isdigit()`** method under the `string` [class](https://www.codecademy.com/resources/docs/python/classes) checks if all the elements in the string are digits; applicable elements also include special cases like superscript digits (¹, ², ³, etc.). The method returns `True` in the mentioned cases and `False` otherwise.

This method is commonly used in input validation, data cleaning, and parsing operations where it is necessary to ensure that certain fields - like IDs, phone numbers (without formatting), or user-entered data - consist solely of digits. This method helps avoid errors that might occur from converting non-numeric strings to integers.

## Syntax

```pseudo
string.isdigit()
```

In the syntax, `string` needs to be replaced with the name of the string on which the `.isdigit()` method is to be called.

**Return value:**

The method returns `True` if all the characters in a string are digits and `False` otherwise.

## Example 1: Basic Usage of `.isdigit()`

This example uses the `.isdigit()` method to check if the given strings only contains digits:

```py
my_string1 = "123"
my_string2 = "123AA"

print(my_string1.isdigit())
print(my_string2.isdigit())
```

The output for the example will be:

```shell
True
False
```

## Example 2: Using `.isdigit()` on a String with Letters

This example uses the `.isdigit()` method on a string containing alphabetical characters:

```py
text = "123abc"

print(text.isdigit())
```

The output for the example will be:

```shell
False
```

## Codebyte Example: Using `.isdigit()` on a String with Special Characters

This codebyte example uses the `.isdigit()` method on a string containing special characters like `!`, `-`, `\`, and `n`:

```codebyte/python
my_string = "!--1234--\n"

print(my_string.isdigit())
```

Since these special characters are not considered digits, the output for the example will be `False`.

### Frequently Asked Questions

### 1. What is the difference between `.isdigit()` and `.isnumeric()` in Python?

Both `.isdigit()` and [`.isnumeric()`](https://www.codecademy.com/resources/docs/python/strings/isnumeric) return `True` for digit characters. However, `.isnumeric()` recognizes a broader set of numeric characters, including fractions, subscripts, superscripts, and other Unicode characters representing numbers. For example, the Unicode character `\u00B2` (superscript 2) is considered numeric but not a digit.

### 2. What is the difference between `.isdigit()` and `.isdecimal()` in Python?

[`.isdecimal()`](https://www.codecademy.com/resources/docs/python/strings/isdecimal) is more restrictive than `.isdigit()`. It only returns `True` for characters that are strictly decimal numbers (0–9). In contrast, `.isdigit()` includes characters like superscripts.

### 3. Does `.isdigit()` work for floats?

No, `.isdigit()` returns `False` for strings representing float numbers because of the presence of a decimal point, which is not considered a digit.
