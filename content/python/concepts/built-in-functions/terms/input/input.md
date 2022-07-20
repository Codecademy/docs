---
Title: 'input()'
Description: 'Prompts the user for data and returns as a string.'
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

The **`input()`** built-in function prompts the user for data that is converted to and returned as a string. This function is unique in that the environment creates a field to allow users to enter the value.

## Syntax

```pseudo
input(prompt_string)
```

If a `prompt_string` is given, it is printed without a trailing newline. After the user types something and presses the <kbd>enter</kbd> key, the input is converted to and returned as a string.

## Example 1

The following example snippet showcases how the `input()` function can be used with or without arguments:

```py
without_prompt = input()
print(f"Without prompt: {without_prompt}")

with_prompt = input("What is your name? ")
print(f"With prompt: {with_prompt}")
```

## Example 2

Sometimes, the returned string from the `input()` function needs to be converted to another data type, like in the following example with float values:

```py
def completeOne():
  fraction = input("Pick a decimal number between 0 and 1: ")
  difference =  1 - float(fraction)
  return difference

print(completeOne())
```
