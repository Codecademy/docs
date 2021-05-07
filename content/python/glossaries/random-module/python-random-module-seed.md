# Python Random Module: `seed()`

---
Title: "Python Random Module: `seed()` # Note: the file name should be the same as the title, but lowercase, with dashes instead of spaces, and all punctuation removed
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
The `seed()` method is from the `random` module and is used to save the state of the pseudo-random number generator. Pseudo-random number generators appear to produce random numbers by performing some operation on a value. This value is the seed, which acts as the first "previous" value in the sequence of numbers. By using a particular seed value, a user is able to reproduce the same random numbers multiple times. If no value is input into the method, the random number generator will use the current system time to create the seed.

## Syntax
***
```py
random.seed()
```

## Example 1
***
Use `seed()` to initialize the pseudo-random number generator in Python with the current-time value:
```codebyte/python
import random

random.seed()
print(random.random())
```

## Example 2
***
Use `seed()` to initialize the pseudo-random number generator in Python with a particular value:
```codebyte/python
import random

random.seed(5)
print(random.random())
```

## Example 3
***
Use `seed()` to initialize the pseudo-random number generator in Python with a particular value:
```codebyte/python
import random

random.seed(5)
print(random.random())
```
