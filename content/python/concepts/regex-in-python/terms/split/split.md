---
Title: "re.split"
Subjects:
  - "Computer Science"
  - "Data Science"
Tags:
  - "Strings"
  - "Regular Expressions"
Catalog Content:
  - "https://www.codecademy.com/learn/introduction-to-regular-expressions"
  - "https://www.codecademy.com/learn/practical-data-cleaning"
  - "https://www.codecademy.com/learn/language-parsing"
  - "https://www.codecademy.com/learn/text-preprocessing"
---

## Definition

The `.split()` method will divide a string into substrings at each occurrence of the specified character(s).  This method is a good alternative to the default python `.split()` for instances that require matching multiple characters.

## Syntax
```codebyte/py
re.split(<pattern>, 'string', <maxsplit>, <flags>)
```
A `<pattern>` can include any of the following:

- A string: `Jane Smith` 
- A character class code: `/w`, `/s` , `/d`
- A regex symbol: `$`,  `|`,  `^` 

The other arguments include:

- An integer for the maximum number of splits (max split): `4` 
- Flags: `IGNORECASE`,  `VERBOSE`,  `DOTALL`

## Example 1

Split the text at each parenthesis:

```codebyte/py
import re

race_info = '''The top three race finishers were: Jane Smith (2:14), Sarah Long (2:18) and Suzy Reynolds (2:20).'''

re.split(r'\(|\)', race_info)
# a backslash indicates that the parentheses are part of the pattern 
```
