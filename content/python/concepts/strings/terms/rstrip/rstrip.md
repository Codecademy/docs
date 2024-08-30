---
Title: '.rstrip()'
Description: 'Removes trailing characters from a string.'
Subjects:
  - 'Data Science'
  - 'Computer Science'
Tags:
  - 'Strings'
  - 'Methods'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`.rstrip()`** method removes trailing characters from a string. If no characters are given, it removes trailing whitespace by default.

## Syntax

```pseudo
string.rstrip(characters)
```

- `string` (required): The string to remove trailing characters from.
- `characters` (optional): The characters to remove from the end of the string. All combinations of these characters will be removed from the end of the string until there is a mismatch. If characters are not provided, trailing whitespace will be removed from the string by default.

## Example

In the following example, the `.rstrip()` method is called twice. The first call does not specify characters to remove, so whitespace is removed. And the second call specifies the characters `"se"` to be removed from the end of the string.

```py
example_a = "happiness    "
example_b = "Tennessee"

whitespace_example = example_a.rstrip()
chars_example = example_b.rstrip("se")

print("Example A:", whitespace_example)
print("Example B:", chars_example)
```

This will result in the following output:

```shell
Example A: happiness
Example B: Tenn
```

## Codebyte Example

The following example is runnable and uses the `.rstrip()` method twice. The first call does not specify characters to remove, so whitespace is removed. The second call specifies the characters `"sca"` to be removed from the end of the string.

```codebyte/python
first_string = "  unreal   unearth   "
first_result = first_string.rstrip()
print(first_result)

second_string = "Francesca"
second_result = second_string.rstrip("sca")
print(second_result)
```
