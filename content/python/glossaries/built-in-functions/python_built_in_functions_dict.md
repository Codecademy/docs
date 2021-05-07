# Python Built-In Functions: `dict()`

---
Title: "Python Built-In Functions: `dict()`" # Note: the file name should be the same as the title, but lowercase, with dashes instead of spaces, and all punctuation removed
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
The built-in `dict()` function initializes a new dictionary from mapping n-number of object(key, value) pairs.

## Example 1
<codebyte>
```py
my_dict = dict([('a', 1), ('b', 2), ('c',3)])
print(my_dict)
```
</codebyte>

## Example 2
<codebyte>
```py
my_dict = dict(a=1, b=2, c=3)
print(my_dict)
```
</codebyte>

## Example 3
<codebyte>
```py
iterable = [('a',1), ('b',2), ('c',3)]

d = {}
for k, v in iterable:
    d[k] = v

print(d)
```
</codebyte>

## Example 4
<codebyte>
```py
d = dict()
print(d)
```
</codebyte>
