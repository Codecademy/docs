---
Title: 'oct()' # Required; the file name should be the same as the title, but lowercase, with dashes instead of spaces, and all punctuation removed
Description: 'Used to get an octal value of an integer number' # Required; ideally under 150 characters and starts with a present-tense verb (used in search engine results and content previews)
Subjects: # Please only use Subjects in the subjects.md file (https://github.com/Codecademy/docs/blob/main/documentation/subjects.md). If that list feels insufficient, feel free to create a new Subject and add it to subjects.md in your PR!
  - 'Computer Science'
  - 'Data Science'
  - 'Code Foundations'
Tags: # Please only use Tags in the tags.md file (https://github.com/Codecademy/docs/blob/main/documentation/tags.md). If that list feels insufficient, feel free to create a new Tag and add it to tags.md in your PR!
  - 'Functions'
  - 'Numbers'
  - 'Data Types'
CatalogContent: # Please use course/path landing page slugs, rather than linking to individual content items. If listing multiple items, please put the most relevant one first
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`oct()`** function takes an integer and returns the corresponding octal string.

## Syntax

```pseudo

oct(integer)
```

Where `integer` is the value to be converted into an octal string.

The function returns an octal string.

## Example

This example returns the octal string for the value `10`.

```py
# Calling function
val = oct(10)
# Displaying result
print("Octal value of 10:",val)
```

This example results in the following output:

```shell
Octal value of 10: 0o12
```

## Codebyte Example

In Python, binary and hexadecimal values are integer values. So, the `oct()` function can convert binary and hexadecimal values as well.

```codebyte/python
# Calling function
val  = oct(0b0101) # Binary to octal
val2 = oct(0XAF) # Hexadecimal to octal
# Displaying result
# Binary number

print("Octal value of 0b0101:",val)
# Hexadecimal number

print("Octal value of 0XAF:",val2)
```
