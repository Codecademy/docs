---
Title: '.translate()'
Description: 'Replaces characters in a string based on a mapping table.'
Subjects:
  - 'Data Science'
  - 'Computer Science'
Tags:
  - 'Strings'
  - 'Methods'
  - 'Functions'
CatalogContent:
  - 'learn-python-3'
  - 'paths/analyze-data-with-python'
  - 'paths/computer-science'
---

The `translate()` method takes a translation table as an argument, which can be created using the static method `maketrans()`. The translation table maps the ordinal of a character to its corresponding replacement or deletion.

## Syntax

The syntax of the `translate()` method is:

```pseudo
string.translate(table)
```

### Parameters

- `table`: a translation table that lists the pairings of two characters; often previously created by the `maketrans()` method.

### Return value

- Returns a copy of the string in which each character has been mapped through the given translation table replacing or removing specified characters.

## Examples

- Custom character mapping using a translation table and `translate()`

  ```codebyte/python
  original_string = "abcdef"
  print("Original string:", original_string)

  translation_table = str.maketrans('abc', '123')

  # translates original_string by mapping 'a' to '1', 'b' to '2', and 'c' to '3'
  translated_string = original_string.translate(translation_table)

  print("Translated string:", translated_string)
  # Return value: '123def'
  ```

- Delete characters using a manual translation table

  ```codebyte/python
  # translation table - a dictionary
  # If a character is mapped to None, the character is deleted from the return string
  translation = {97: None, 98: None, 99: 105}

  string = "abcdef"
  print("Original string:", string)

  # translates string
  print("Translated string:", string.translate(translation))
  # Returns: idef
  ```
