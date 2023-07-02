---
Title: 're.findall()'
Description: 'Returns a list of every pattern match that occurs in a given string.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Strings'
  - 'Regular Expressions'
  - 'Characters'
CatalogContent:
  - 'introduction-to-regular-expressions'
  - 'paths/computer-science'
---

The **`.findall()`** method iterates over a string to find a subset of characters that match a specified pattern. It will return a list of every pattern match that occurs in a given string.

## Syntax

```pseudo
re.findall(<pattern>, string)
```

Where `<pattern>` can include any of the following:

- A string: `Jane`
- A character class code: `/w`, `/s` , `/d`
- A regex symbol: `$`, `|`, `^`

There are optional arguments that include the following:

- A starting index value (pos): `3`
- An index value to end the search (endpos): `40`
- Flags: `IGNORECASE`, `VERBOSE`, `DOTALL`

## Example

Match all of the times in the string:

```py
import re

movie_str = "the evening shows start at 7:00pm and 10:15pm"

matches = re.findall(r"([\d:,.]+)(am|pm)?", movie_str)
# Square brackets designate a custom character class
# Parentheses identify a group within the pattern

print(matches)
```

This will output the following:

```shell
[("7:00", "pm"), ("10:15", "pm")]
```

## Codebyte Example

A regex to match all of the email addresses within a string:

```codebyte/python
import re

email_str = '''the emails are support@codecademy.com
 or help@codecademy.com'''

emails = re.findall(r"\S+@\S+", email_str)
# \S matches any character except a space, tab or newline

print(emails)
```
