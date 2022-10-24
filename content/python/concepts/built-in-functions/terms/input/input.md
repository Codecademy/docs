---
Title: 'input()'
Description: 'Prompts the user for data and returns it as a string.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Functions'
  - 'Input'
  - 'Methods'
  - 'Output'
  - 'Print'
  - 'Strings'
  - 'Variables'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
  - 'paths/data-science'
---

The built-in **`input()`** function prompts the user for data that is converted to and returned as a [string](https://www.codecademy.com/resources/docs/python/strings). This function is unique in that the environment creates a field to allow users to enter the value.

## Syntax

```pseudo
input(prompt_string)
```

If a `prompt_string` is given, it is printed without a trailing newline. After the user types something and presses the <kbd>Enter</kbd> key, a string representation of the input is returned. This function encourages flexibility, usability, and personalization of set workflow. Cases in which this is used include webpages, desktop, and console applications.

> **Note:** The `input()` function is the primary user input function for Python 3.x while the `raw_input()` function was used in Python 2.x, with support and updates discontinued since January 2020.

## Examples

The following example snippet showcases how the `input()` function can be used with or without arguments:

```py
without_prompt = input()
print(f"Without prompt: {without_prompt}")

with_prompt = input("What is your name? ")
print(f"With prompt: {with_prompt}")
```

Sometimes, the returned string from the `input()` function needs to be converted to another data type, like in the following example with float values:

```py
def completeOne():
  fraction = input("Pick a decimal number between 0 and 1: ")
  difference =  1 - float(fraction)
  return difference

print(completeOne())
```
