# Python Random Module: `randrange()`

---
Title: "Python Random Module: `randrange()` # Note: the file name should be the same as the title, but lowercase, with dashes instead of spaces, and all punctuation removed
Subjects: # Please only use Subjects in the subjects.md file (github.com/Codecademy/codepedia-content/blob/main/documentation/subjects.md). If that list feels insufficient, feel free to create a new Subject and add it to subjects.md in your PR!
  - "language fluency"
  - "code foundations"
Tags: # Please only use Tags in the tags.md file (github.com/Codecademy/codepedia-content/blob/main/documentation/tags.md). If that list feels insufficient, feel free to create a new Tag and add it to tags.md in your PR!
  - "function"
  - "methods"
  - "strings"
Catalog Content: # Please use course/path landing pages, rather than linking to individual content items. If listing multiple URLs, please put the most relevant one first
  - "https://www.codecademy.com/learn/learn-python-3"
  - "https://www.codecademy.com/learn/paths/analyze-data-with-python"
---
## Definition
***
The `randrange()` method generates random numbers from a stated range.

## Syntax
***
random.randrange(start, stop, steps)

## Example 1
***
Use `randrange()` to return a random number between 0 and 99:
```codebyte/python
import random

print(random.randrange(0, 100))
```

## Example 2
***
Use `randrange()` to return a random number between 0 and 99 and is divisible by 5:
```codebyte/python
import random

print(random.randrange(0, 100, 5))
```
