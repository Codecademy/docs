---
Title: 'math.erfc()' # Required; the file name should be the same as the title, but lowercase, with dashes instead of spaces, and all punctuation removed
Description: 'The **`math.erfc()`** method aims to find the complementary error function of the specified parameter.' # Required; ideally under 150 characters and starts with a present-tense verb (used in search engine results and content previews)
Subjects: 'Computer Science' 'Statistics' # Please only use Subjects in the subjects.md file (https://github.com/Codecademy/docs/blob/main/documentation/subjects.md). If that list feels insufficient, feel free to create a new Subject and add it to subjects.md in your PR!
  - 'A subject name'
  - 'A second subject name'
  - 'An nth subject name'
Tags: # Please only use Tags in the tags.md file (https://github.com/Codecademy/docs/blob/main/documentation/tags.md). If that list feels insufficient, feel free to create a new Tag and add it to tags.md in your PR!
  - 'A tag'
  - 'A second tag'
  - 'An nth tag'
CatalogContent: # Please use course/path landing page slugs, rather than linking to individual content items. If listing multiple items, please put the most relevant one first
  - 'learn-example-course'
  - 'paths/example-path'
---

[A brief definition - make sure first mention of term is in **bold**.]

## Syntax

```pseudo
math.erfc(x)
```
Parameter Value

- `x`: Required. Parameter x is a real number.

The function returns a floating point value which is the value of the error function at x. 


## Example

```py
# Import math Library
import math

# Print complementary error function for different numbers
print (math.erfc(0.67))
print (math.erfc(1.34))
print (math.erfc(-6))
```

Output:

```shell
0.3433722976996949
0.058086284741634665
2.0
```
> Note: If x is not a real number, a `TypeError` is raised.


## Codebyte Example (if applicable)

The following codebyte example demonstrates how the `math.acosh()` function works:

```codebyte/python

import math

print(math.erfc(0))
print(math.erfc(1))
print(math.erfc(2),"\n")

print(math.erfc(-0.1))
print(math.erfc(-1))
print(math.erfc(-2))
```
