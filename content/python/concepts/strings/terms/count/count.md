---
Title: .count()
Description: 'Finds the number of times the specified substring occurs within a given string.'
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

The **`.count()`** method finds the number of times the specified substring occurs within a given string. This method is case-sensitive.

## Syntax

The `.count()` method is called on a string using the following syntax:

```pseudo
string.count(substring, start=..., end=...)
```

- `substring` is the substring to search for.
- `start` and `end` are optional and specify the search's starting and end positions.

> **Note:** When not specified, `start` defaults to `0` and `end` defaults to `len(string)`, which means the search will be performed on the whole string.

## Example

The following example uses `.count()` to find the number of times `li` appears in the string:

```py
songTitle = "Supercalifragilisticexpialidocious"
print(songTitle.count("li"))
```

The output is:

```shell
3
```

## Codebyte Example

The codebyte example below is runnable and counts the number of times "at" is in the string starting at position `2` and ending at position `7`:

```codebyte/python
game = "catattack"
print(game.count("at", 2, 7))
```
