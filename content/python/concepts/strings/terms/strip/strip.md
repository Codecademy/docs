---
Title: '.strip()'
Description: 'Eliminates any trailing spaces at the beginning and end of a string. Specific characters can be passed in as an argument to be removed instead.'
Subjects:
  - 'Data Science'
  - 'Computer Science'
Tags:
  - 'Strings'
  - 'Methods'
  - 'Functions'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`.strip()`** method removes any whitespace at the beginning and end of a string. Optionally, a string of characters can be passed in as an argument to remove those characters instead. Otherwise, all whitespaces will be removed.

> **Note**: The .strip() method removes specified characters only when they appear as the outermost leading and trailing characters in the string.

## Syntax

The `.strip()` method is called on a string using the following syntax:

```pseudo
string.strip(characters)
```

- `characters` (optional): Specified character/characters to be removed from the beginning and end of the string.

## Example 1

The following example shows the usage of `.strip()` _without_ a parameter:

```py
string_with_white_spaces = "   221B, Baker Street   "

print(string_with_white_spaces)
print(string_with_white_spaces.strip())
```

Output:

```shell
   221B, Baker Street
221B, Baker Street
```

## Example 2

The following example shows the usage of `.strip()` _with_ a parameter:

```py
messy_sentence = "iiixxxyyyxyyyyyOctopuses have three hearts and blue blood.iiixxyyyxxyyy"
print(messy_sentence.strip("ixy"))
```

Output:

```shell
Octopuses have three hearts and blue blood.
```

## Codebyte Example

The following code is runnable and uses the `.strip()` method.

```codebyte/python
buy_soda = "15 Sodas for Bday!"
print(buy_soda.strip("15"))
```
