---
Title: "re.findall()"
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

A method for iterating over a string to find a subset of characters that match a specified pattern. The `.findall()` method will return a list of every match that occurs in a given string.
 

## Syntax
```codebyte/py
re.findall(<pattern>, 'string')
```

where `<pattern>` can include any of the following:

- A string: `Jane` 
- A character class code: `/w`, `/s` , `/d`
- A regex symbol: `$`,  `|`,  `^` 

There are optional arguments that include the following:

- A starting index value (pos): `3` 
- An index value to end the search (endpos): `40`
- Flags: `IGNORECASE`,  `VERBOSE`,  `DOTALL`

## Example 1

Match all of the times in the string:

```codebyte/py
import re

movie_str = 'the evening shows start at 7:00pm and 10:15pm'

re.findall(r'([\d:,.]+)(am|pm)?', movie_str)
# square brackets designate a custom character class 
# parentheses identify a group within the pattern  

# Output: [('7:00', 'pm'), ('10:15', 'pm')]
```

## Example 2

A regex to match all of the email addresses within a string:
```codebyte/py
import re

email_str = '''the emails are support@codaeacademy.com 
 or help@codaeacademy.com'''

re.findall(r'\S+@\S+', email_str)
# \S matches any character except a space, tab or newline

# Output: ['support@codaeacademy.com', 'help@codaeacademy.com']
```