---
Title: 're.split()'
Description: 'Divides a string into substrings at each occurrence of the specified character(s).'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Regular Expressions'
  - 'Strings'
  - 'Characters'
CatalogContent:
  - 'introduction-to-regular-expressions'
  - 'paths/computer-science'
---

The `.split()` method of the `re` module divides a string into substrings at each occurrence of the specified character(s). This method is a good alternative to the default [`.split()` string method](https://www.codecademy.com/resources/docs/python/strings/split) for instances that require matching multiple characters.

## Syntax

```py
re.split(<pattern>, string, <maxsplit>, <flags>)
```

A `<pattern>` is a [regular expression](https://www.codecademy.com/resources/docs/general/regular-expressions) that can include any of the following:

- A string: `Jane Smith`
- A character class code: `/w`, `/s` , `/d`
- A regex symbol: `$`, `|`, `^`

The other arguments include:

- An integer for the maximum number of splits (max split): `4`
- Flags: `IGNORECASE`, `VERBOSE`, `DOTALL`

## Example

The following example splits the text at each parenthesis:

```py
import re

race_info = '''The top three race finishers were: Jane Smith (2:14), Sarah Long (2:18) and Suzy Reynolds (2:20).'''

re.split(r'\(|\)', race_info)
# A backslash indicates that the parentheses are part of the pattern
```
