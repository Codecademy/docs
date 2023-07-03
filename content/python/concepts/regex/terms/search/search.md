---
Title: 're.search()'
Description: 'Returns the first match of a character pattern anywhere in a given string.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Regular Expressions'
  - 'Strings'
  - 'Characters'
CatalogContent:
  - 'introduction-to-regular-expressions'
  - 'practical-data-cleaning'
  - 'language-parsing'
  - 'text-preprocessing'
---

The **`.search()`** method returns the first match of a character pattern anywhere in a given string.

## Syntax

```pseudo
re.search(<pattern>, string, <optional args>)
```

A `<pattern>` is a [regular expression](https://www.codecademy.com/resources/docs/general/regular-expressions) that can include any of the following:

- A string: `Jane`
- A character class code: `/w`, `/s` , `/d`
- A regex symbol: `$`, `|`, `^`

There are optional arguments that include the following:

- A starting index value (pos): `3`
- An index value to end the search (endpos): `40`
- Flags: `IGNORECASE`, `VERBOSE`, `DOTALL`

> **Note:** `.search()` will only return the the first match (as a match object) within the string; alternatively, the `.findall()` method matches every occurrence (and returns a list of matches).

## Example

All content that appears within parentheses are matched with the `.search()` method in the example below:

```py
import re

result = re.search(r"\(.*\)", "the coordinates (lat:48,lon:-120)")
# Backslashes designate a symbol as part of the pattern

print(result)
```

The output will look like this:

```shell
<re.Match object; span=(16, 33), match="(lat:48,lon:-120)">
```

## Codebyte Example

The following example features a regex that uses the `.search()` method to match a web address:

```codebyte/python
import re

result = re.search(r"www\S+", "the tutorials at www.codecademy.com")
# \S matches any character except a space, tab or newline

print(result)
```
