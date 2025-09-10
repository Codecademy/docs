---
Title: '.capitalize()'
Description: 'Converts the first character of a string to uppercase and all subsequent characters to lowercase.'
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

The Python **`.capitalize()`** method is a built-in string method that converts the first character of a string to uppercase and all subsequent characters to lowercase. It is particularly useful for presenting data, handling user input, or preparing text for display.

## Python `.capitalize()` Syntax

```pseudo
str.capitalize()
```

**Parameters:**

The Python `.capitalize()` method does not take any parameters.

**Return value:**

Returns a new string with the changes applied.

## Example 1: Handling Uppercase Sentences Using Python `.capitalize()`

This example uses Python `.capitalize()` on an uppercase sentence:

```py
print("WELCOME TO CODECADEMY DOCS!".capitalize())
```

This will result in:

```shell
Welcome to codecademy docs!
```

## Example 2: Handling Lowercase Sentences Using Python `.capitalize()`

This example uses Python `.capitalize()` on a lowercase sentence:

```py
text = "welcome to new york city"

print(text.capitalize())
```

This will result in:

```shell
Welcome to new york city
```

## Codebyte Example: Handling Mixed-Case Sentences Using Python `.capitalize()`

This codebyte example uses Python `.capitalize()` on a mixed-case sentence:

```codebyte/python
text = "Welcome to Codecademy Docs!"

capitalized_text = text.capitalize()

print(capitalized_text)
```

## Frequently Asked Questions

### 1. What is Python `.capitalize()`?

The Python `.capitalize()` method is a built-in string method that converts the first character of a string to uppercase and all subsequent characters to lowercase.

### 2. How to capitalize all text in Python?

If you want to convert all characters in a string to uppercase in Python, you should use the `.upper()` method instead of `.capitalize()`:

```py
text = "hello world"

upper_text = text.upper()

print(upper_text)
```

Here is the output:

```shell
HELLO WORLD
```

### 3. Does Python `.capitalize()` modify the original string?

No, Python `.capitalize()` does not modify the original string. Strings in Python are immutable, which means methods like `.capitalize()` return a new string and leave the original unchanged.
