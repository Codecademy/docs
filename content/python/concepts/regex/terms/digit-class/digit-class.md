---
Title: "\\d"
Description: 'Matches any digit (0-9) in a given pattern.'
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

The `\d` character class matches any digit (0-9) in a given pattern. The inverse of this class is designated with a capital, `\D`, and will match any character that is not a digit.

## Syntax

```pseudo
a_given_time = r'\d:\d\d'
```

Used by itself, the `\d` class will match a single valid character inside the pattern.

## Example

The example below matches the race times within the text with the help of the `\d` character class:

```py
import re

race_info = 'The top three race finishers were: Jane Smith (2:14), Sarah Long (2:18) and Suzy Reynolds (2:20).'

race_times = re.findall(r'\d+:\d+', race_info)
# The + symbol indicates one or more of the preceding value

print(race_times)
```

The output would look like the following:

```shell
['2:14', '2:18', '2:20']
```

## Codebyte Example

The following example will match everything except for the movie titles and the colons `:` in the times:

```codebyte/python
import re

string = 'Jaws 7:00, Volcano 9:30, Independence Day 11:45'

match = re.findall(r'\d+', string)

print(match)
```
