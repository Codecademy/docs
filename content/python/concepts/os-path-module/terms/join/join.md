---
Title: '.join()'
Description: 'Returns a string of pathnames delimited with a forward-slash.'
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

The **`.join()`** method returns a string of pathnames delimited with a forward-slash.

## Syntax

```pseudo
os.path.join(path_1, path_2,..., path_n)
```

Before being added to the returned value, each subsequent `path_` string is prepended with a forward-slash `/`.

## Codebyte Example

The following example showcases the `.join()` method:

```codebyte/python
import os.path

cc_courses_slug = "https://www.codecademy.com/catalog"

python_3_lessons_slug = "learn-python-3/lessons/"

second_lesson_slug = "string-methods/exercises/introduction-ii"

print(os.path.join(cc_courses_slug, python_3_lessons_slug, second_lesson_slug))
```
