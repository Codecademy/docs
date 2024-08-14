---
Title: 'math.erf()' # Required; the file name should be the same as the title, but lowercase, with dashes instead of spaces, and all punctuation removed
Description: 'returns the error function of a number.' # Required; ideally under 150 characters and starts with a present-tense verb (used in search engine results and content previews)
Subjects: # Please only use Subjects in the subjects.md file (https://github.com/Codecademy/docs/blob/main/documentation/subjects.md). If that list feels insufficient, feel free to create a new Subject and add it to subjects.md in your PR!
  - 'Computer Science'
  - 'Data Science'
  - 'Discrete Math'
  - 'Machine Learning'

Tags: # Please only use Tags in the tags.md file (https://github.com/Codecademy/docs/blob/main/documentation/tags.md). If that list feels insufficient, feel free to create a new Tag and add it to tags.md in your PR!
  - 'Arithmetic'
  - 'Functions'
  - 'Math'
  - 'Statistics'
CatalogContent: # Please use course/path landing page slugs, rather than linking to individual content items. If listing multiple items, please put the most relevant one first
  - 'learn-example-course'
  - 'paths/example-path'
---

The **`math.erf()`** function returns the error function of a number.

## Syntax

```pseudo
math.erf(n)
```

The `math.erf()` function accepts any real number from negative infinity to positive infinity as input and returns a value between -1 and 1, representing the error function of that number.

## Example

Use `math.erf()` to return the error function of 1:

```py
import math

print(math.erf(1))
```

The above code gives the following output: 

```shell
0.8427007929497149
```

## Codebyte Example 

Run the following example that uses the `math.erf()` function to understand its working:

```codebyte/python
import math

print("The error function of 0 is:", math.erf(0))
```