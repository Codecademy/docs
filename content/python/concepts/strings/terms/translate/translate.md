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
---

The **`.translate()`** method takes a translation table as an argument and maps the ordinal of a character to its corresponding replacement or deletion. A translation table can be created using the static method `maketrans()`.

## Syntax

The syntax of the `.translate()` method is:

```pseudo
a_string.translate(table)
```

- `table`: a translation table that lists the pairings of two characters; often previously created by the `maketrans()` method.
- Returns a copy of the string in which each character has been mapped through the given translation table replacing or removing specified characters.

## Example

The following example shows custom character mapping using a translation table and `.translate()`:

```py
original_string = "abcdef"
print("Original string:", original_string)

translation_table = str.maketrans('abc', '123')

# translates original_string by mapping 'a' to '1', 'b' to '2', and 'c' to '3'
translated_string = original_string.translate(translation_table)

print("Translated string:", translated_string)
```

This example outputs the following:

```shell
Original string: abcdef
Translated string: 123def
```

## Codebyte Example

The following example shows how to delete characters using a manual translation table:

```codebyte/python
# Translation table - a dictionary
# If a character is mapped to None, the character is deleted from the return string
translation = {97: None, 98: None, 99: 105}

string = "abcdef"
print("Original string:", string)

# Translates string
print("Translated string:", string.translate(translation))
```
