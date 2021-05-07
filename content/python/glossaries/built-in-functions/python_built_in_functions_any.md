# Python Built-In Functions: `any()`

---
Title: "Python Built-In Functions: `any()`" # Note: the file name should be the same as the title, but lowercase, with dashes instead of spaces, and all punctuation removed
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
The built-in `any()` function takes in an iterable object such as a list or tuple and returns `True` if any of the elements in the iterable are true. If none of the elements present in the iterable are true, `any()` will return `False`.

## Example 1
<codebyte>
```py
print(any([True, 1, False, 0]))
```
</codebyte>

## Example 2
<codebyte>
```py
print(any([False, 0]))
```
</codebyte>

## Example 3
<codebyte>
```py
my_dict = {1 : "On"}
print(any(my_dict))
```
</codebyte>

## Example 4
<codebyte>
```py
my_dict = {0 : "Off"}
print(any(my_dict))
```
</codebyte>
