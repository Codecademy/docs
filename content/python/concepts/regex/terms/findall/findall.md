---
Title: 're.findall()'
Description: 'Iterates over a string to find a subset of characters that match a specified pattern. It will return a list of every match that occurs in a given string.'
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

Iterates over a string to find a subset of characters that match a specified pattern. It will return a list of every match that occurs in a given string.

## Syntax

```py
re.findall(<pattern>, string)
```

where `<pattern>` is a [regular expression](https://www.codecademy.com/resources/docs/regular-expressions) that can include any of the following:

- A string: `Jane`
- A character class code: `/w`, `/s` , `/d`
- A regex symbol: `$`, `|`, `^`

There are optional arguments that include the following:

- A starting index value (pos): `3`
- An index value to end the search (endpos): `40`
- Flags: `IGNORECASE`, `VERBOSE`, `DOTALL`

## Example 1

Match all of the times in the string:

```py
import re

movie_str = 'the evening shows start at 7:00pm and 10:15pm'

re.findall(r'([\d:,.]+)(am|pm)?', movie_str)

# Square brackets designate a custom character class
# Parentheses identify a group within the pattern

# Output: [('7:00', 'pm'), ('10:15', 'pm')]
```

## Example 2

A regex to match all of the email addresses within a string:

```py
import re

email_str = '''the emails are support@codecademy.com
 or help@codecademy.com'''

re.findall(r'\S+@\S+', email_str)
# \S matches any character except a space, tab or newline

# Output: ['support@codecademy.com', 'help@codecademy.com']
```
