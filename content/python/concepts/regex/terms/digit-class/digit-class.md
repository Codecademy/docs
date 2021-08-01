---
Title: "\\d"
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

Represents a character class that includes all digits (0-9).  The inverse of this class is designated with a capital,  `\D`, and will match any character that is not a digit.

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
