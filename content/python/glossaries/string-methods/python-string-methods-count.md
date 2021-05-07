# Python String Methods: `count()`

---
Title: "Python String Methods: `count()`" # Note: the file name should be the same as the title, but lowercase, with dashes instead of spaces, and all punctuation removed
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
The `count()` method takes in a list of values of any data type, and returns the number of times(count) a particular value is present within the list.

## Example 1
<codebyte>
```py
pets = ['fish', 'dog', 'dog', 'turtle', 'cat', 'cat', 'cat']

print(pets.count('cat'))
```
</codebyte>

## Example 2
<codebyte>
```py
treats_per_pet = [1, 3, 3, 1.5, 2, 2, 2]

x = treats_per_pet.count(3)
print(x)
```
</codebyte>
