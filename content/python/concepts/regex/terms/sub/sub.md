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

- `<pattern>`: A [regular expression](https://www.codecademy.com/resources/docs/general/regular-expressions) pattern used to match substrings.
  - A string: `Jane Smith`
  - Character class codes: `/w`, `/s`, `/d`
  - Regex symbols: `$`, `|`, `^`
- `<replacement>`: The replacement argument. This can either be a string or a function.
- `<count>`: An integer specifying the number of occurrences to replace. The default is to replace all matches.
- `<flags>`: Specifies additional options such as `IGNORECASE`, `VERBOSE`, `DOTALL`, etc.

## Example

The following example replaces all occurrences of "BI" with "business intelligence":

```py
import re

def replace_business_intelligence(match):
  return 'business intelligence'

blurb = '''The analytics firm uses a range of BI tools to visualize data. Their internal data science team suggests
bi tools may be their most valuable resource.'''

# Use the function `replace_bussines_intelligence` as the replacement argument in re.sub()
match = re.sub(r'bi', replace_business_intelligence, blurb, flags=re.IGNORECASE)

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

def redact_numbers(match):
  return 'REDACTED'

confidential_str = '''The suspect's bank account (#333344444) and pin (#9999) were found in his cell.'''

redacted = re.sub(r'\d+', redact_numbers, confidential_str)

print(redacted)
```
