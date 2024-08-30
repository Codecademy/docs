---
Title: '.escape()'
Description: 'Returns a modified string with all special characters escaped and included in the pattern match.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Libraries'
  - 'Modules'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The `.escape()` method returns a modified string with all special characters escaped and included in the pattern match.

## Syntax

```pseudo
glob.escape(sequence)
```

Any special characters in the `sequence` will be placed in brackets. This includes the opening square bracket `[`.

## Codebyte Example

The following example showcases the `.escape()` method and highlights each special character:

```codebyte/python
import glob

bracket_sequence = 'http://www.something.come/path/with/opening_bracket['

asterisk_sequence = 'http://www.something.come/path/with/asterisk*'

question_sequence = 'http://www.something.come/path/with/question_mark?'

print(glob.escape(bracket_sequence))
print(glob.escape(asterisk_sequence))
print(glob.escape(question_sequence))
```
