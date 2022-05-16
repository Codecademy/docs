---
Title: "\\D"
Description: 'Matches any non-digit (0-9) in a given pattern.'
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

The `\D` character class matches any non-digit (0-9) in a given pattern. The inverse of this class is designated with a lowercase, `\d`, and will match any character that is a digit.

## Syntax

```pseudo
a_given_time = r'\d:\d\d'
```

Used by itself, the `\d` class will match a single valid character inside the pattern.

## Example

The following example will match everything except for the digits in the movie times:

```py
import re

string = 'Jaws 7:00, Volcano 9:30, Independence Day 11:45'

match = re.findall(r'\D+', string)
# The + symbol indicates one or more of the preceding value

print(match)
```

The output would look like the following:

```shell
['Jaws ', ':', ', Volcano ', ':', ', Independence Day ', ':']
```

## Codebyte Example

The example below matches the names of the racers with the help of the `\d` character class:

```codebyte/python
import re

race_info = 'The top three race finishers were: Jane Smith (2:14), Sarah Long (2:18) and Suzy Reynolds (2:20).'

racers = re.findall(r' [A-Z]\D+ [A-Z]\D+ ', race_info)
# [A-Z] indicates a single capital letter

print(racers)
```
