---
Title: 're.sub()'
Description: 'Replace matching substrings with a new string for all occurrences, or a specified number. '
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

The **`re.sub()`** function replaces matching substrings with a new string for all occurrences, or a specified number.

## Syntax

```pseudo
re.sub(<pattern>, <replacement>, string, <count>, <flags>)
```

A `<pattern>` is a [regular expression](https://www.codecademy.com/resources/docs/general/regular-expressions) that can include any of the following:

- A string: `Jane Smith`
- A character class code: `/w`, `/s`, `/d`
- A regex symbol: `$`, `|`, `^`

The other arguments include:

- The replacement string (`<replacement>`): `foo`
- An integer value for the number of replacements (`<count>`): `10`
- `<flags>`: `IGNORECASE`, `VERBOSE`, `DOTALL`

## Example

The following example replaces all occurrences of "BI" with "business intelligence":

```py
import re

blurb = '''The analytics firm uses a range of BI tools to  visualize data. Their internal data science team suggests
bi tools may be their most valuable resource.'''

match = re.sub(r'bi','business intelligence',blurb,flags=re.IGNORECASE)
# The IGNORECASE flag allows for matches regardless of the case

print(match)
```

This will print the following where "bi" is replaced with "business intelligence":

```shell
The analytics firm uses a range of business intelligence tools to  visualize data. Their internal data science team suggests
business intelligence tools may be their most valuable resource.
```

## Codebyte Example

Replace all numerical values with "REDACTED":

```codebyte/python
import re

confidential_str = '''The suspect's bank account (#333344444) and pin (#9999) were found in his cell'''

redacted = re.sub(r'\d+', 'REDACTED', confidential_str)
# \d matches any numerical character

print(redacted)
```
