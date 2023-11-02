---
Title: '.rjust()'
Description: 'Adds padding to the left of the given string.'
Subjects:
  - 'Data Science'
  - 'Computer Science'
Tags:
  - 'Methods'
  - 'Functions'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The method **`.rjust()`** adds padding of a specified length to the left of a given string. The user can specify a character to use as the padding. The number of padding characters added is equal to the length specified in the method call minus the length of the string provided.

## Syntax

```pseudo
parameter_string.rjust(length, padding_character)
```

### Required Parameters

- `parameter_string`: The string to be modified with padding.
- `length`: An integer used to determine how many characters of padding will be added. The number of padding characters will be equal to `length` minus the length of `string_parameter`.

### Optional Parameters

- `padding_character`: The character used as the padding. Must be a single character. Default value is a space (`" "`).

## Example

The following are example calls to `.rjust()` using different parameters:

```python
print("perdurantism".rjust(17))
print("endurantism".rjust(22, "-"))
print("exdurantism".rjust(5, "x"))
```

The code above gives the following output:

```shell
     perdurantism
-----------endurantism
exdurantism
```

## Codebyte Example

The code below is runnable, change the value of `your_string`, `your_length`, and `your_character` to test the `.rjust()` method.

```codebyte/python
your_string = "Try changing this string!"
your_length = 0
your_character = " "
print(your_string.rjust(your_length, your_character))
```
