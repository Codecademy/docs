---
Title: "\\d"
Description: 'Represents a character class that includes all digits (0-9). The inverse of this class is designated with a capital, &bsop;D, and will match any character that is not a digit.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Strings'
  - 'Regular Expressions'
CatalogContent:
  - 'introduction-to-regular-expressions'
  - 'practical-data-cleaning'
  - 'language-parsing'
  - 'text-preprocessing'
---

Represents a [regular expression](https://www.codecademy.com/resources/docs/regular-expressions) character class that includes all digits (0-9). The inverse of this class is designated with a capital, `\D`, and will match any character that is not a digit.

## Syntax

```py
re.search(r'\d', 'string 1', <flags>)
```

## Example 1

Match the race times within the text:

```py
import re

race_info = '''The top three race finishers were: Jane Smith (2:14), Sarah Long (2:18) and Suzy Reynolds (2:20).'''

re.findall(r'\d+:\d+', race_info)
# The + symbol indicates one or more of the preceding value

# Output: ['2:14', '2:18', '2:20']
```

## Example 2

Match everything except the movie titles:

```codebyte/py
import re

string = '''Jaws 7:00, Volcano 9:30, Independence Day 11:45''

re.group(r'\D+', string)

# Output: ['Jaws ', ':', ', Volcano ', ':', ', Independence Day ', ':']
```
