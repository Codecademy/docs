---
Title: '.removesuffix()'
Description: 'Returns a copy of a string with the specified suffix removed, if present.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Methods'
  - 'Strings'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`str.removesuffix()`** method returns a new string with the specified suffix removed, if present. If the string does not end with the given suffix, the original string is returned unchanged. This method is case-sensitive and does not modify the original string.

## Syntax

```pseudo
string_name.removesuffix(suffix)
```

**Parameters:**

- `suffix`: The string to remove from the end of the original string.

**Return value:**

A new string with the suffix removed if it exists, otherwise, the original string.

## Example 1: Removing a file extension

This method can be used to remove a file extension when the suffix matches exactly:

```py
file_type = "Cat Store.docx"
result = file_type.removesuffix('.docx')
print(result)
```

The output would look like this:

```shell
Cat Store
```

## Example 2: Case sensitivity

`.removesuffix()` is case-sensitive, so, if the case does not match exactly, the suffix is not removed:

```py
statement = "And when I silently snuck up on my mom, I jumped up and exclaimed 'BOO!'"
result = statement.removesuffix('Boo!')
print(result)
```

Here's the output:

```shell
And when I silently snuck up on my mom, I jumped up and exclaimed 'BOO!'
```

## Example 3: Removing text from a sentence

The suffix must match the exact ending of the string, including punctuation:

```py
quote = 'Do or do not, there is no try (Yoda).'
result = quote.removesuffix(' (Yoda).')
print(result)
```

The output for this code would look like this:

```shell
Do or do not, there is no try
```
