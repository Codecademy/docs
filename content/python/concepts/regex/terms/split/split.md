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

The **`.split()`** method of the `re` module divides a string into substrings at each occurrence of the specified character(s). This method is a good alternative to the default [`.split()` string method](https://www.codecademy.com/resources/docs/python/strings/split) for instances that require matching multiple characters.

## Syntax

```pseudo
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

The following example illustrates a basic implementation of the `.split()` method:

```py
import re

text = '**Note:** This method only takes positive arguments'

print(re.split(r"\*\*|:", text))
# The backslashes indicate that the asterisks are part of the pattern
```

The code will yield:

```shell
['', 'Note', '', ' This method only takes positive arguments']
```

## Codebyte Example

The following example is runnable and uses the `.split()` method to reformat a list of colors:

```codebyte/python
import re

org_colors = ['rgb(245, 84, 66)','rgb(66, 245, 84)','rgb(65, 135, 245)']
new_colors = []

for color in org_colors:
    val = re.split(r"\(|\)", color)[1]
    new_colors.append(f'rgba({val}, 0.5)') # RGBA colors with an alpha of .5

print(new_colors)
```
