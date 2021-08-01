---
Title: "re.search()"
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

A method for iterating over a string to find a subset of characters that match a specified pattern. The `.search()`  method will only return the the first match (as a match object) within the string; alternatively, the `.findall()` method matches every occurrence (and returns a list of matches). 

## Syntax
```codebyte/py
re.search(<pattern>, 'string', <optional args>)
```
A `<pattern>` can include any of the following:

- A string: `Jane` 
- A character class code: `/w`, `/s` , `/d`
- A regex symbol: `$`,  `|`,  `^`

There are optional arguments that include the following:

- A starting index value (pos): `3` 
- An index value to end the search (endpos): `40`
- Flags: `IGNORECASE`,  `VERBOSE`,  `DOTALL`
		
## Example 1

Match all content that appears within parentheses:

```codebyte/py
import re

re.search(r'\(.*\)', 'the coordinates (lat:48,lon:-120)')
# backslashes designate a symbol as part of the pattern 

# Output: <regex.Match object; span=(16, 33), match='(lat:48,lon:-120)'>
```
## Example 2

A regex to match a web address:
```codebyte/py
import re

re.search(r'www\S+', 'the tutorials at www.codeacademy.com')
# \S matches any character except a space, tab or newline

# Output: <regex.Match object; span=(17, 36), match='www.codeacademy.com'>
```