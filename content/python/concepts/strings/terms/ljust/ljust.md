---
Title: '.ljust()'
Description: 'Left-aligns a string with a specified fill character'
Subjects:
  - 'Computer Science'
  - 'Code Foundations'
Tags:
  - 'Strings'
  - 'Methods'
  - 'Functions'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The method **`.ljust()`** adds padding of a specified length to the right of a given string. The user can specify a character to use as the padding. The number of padding characters added is equal to the length specified in the method call minus the length of the string provided.

## Syntax

```pseudo
string.ljust(length, fillchar)
```

### Required Parameters

- `string`: The string to be modified with padding.
- `length`: An integer used to determine how many characters of padding will be added. The number of padding characters will be equal to `length` minus the length of `string`.

### Optional Parameters

- `fillchar`: A character to fill the missing space (to the right of the string). Default is " " (space).

## Examples

The default `fillchar` is a blank space. The original string is retrieved if the length is less than or equal to the given string's length.

```python
text = 'Hello Contributors'
left_aligned_text = text.ljust(20, '!')
print(left_aligned_text)
```

This code will result in the following output:

```shell
Hello Contributors!!
```

> **Note:** `.ljust()` returns a new string and does not modify the original string. Only one specific character can be mentioned to fill the remaining part of the string with fillchar.

## Codebyte Example

The code below is runnable, change the value of `exampleString`, `example_length`, and `example_character` to test the `.ljust()` method.

```codebyte/python
exampleString = 'User, Welcome to docs'
example_length = 0
example_character = " "
exampleString = exampleString.ljust(example_length, example_character)
print(exampleString)
```
