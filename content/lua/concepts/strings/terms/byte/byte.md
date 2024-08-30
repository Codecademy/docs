---
Title: '.byte()' # Required; the file name should be the same as the title, but lowercase, with dashes instead of spaces, and all punctuation removed
Description: 'Returns the ASCII equivalent of a given character.' # Required; ideally under 150 characters and starts with a present-tense verb (used in search engine results and content previews)
Subjects: # Please only use Subjects in the subjects.md file (https://github.com/Codecademy/docs/blob/main/documentation/subjects.md). If that list feels insufficient, feel free to create a new Subject and add it to subjects.md in your PR!
  - 'Computer-Science'
  - 'Game Development'
Tags: # Please only use Tags in the tags.md file (https://github.com/Codecademy/docs/blob/main/documentation/tags.md). If that list feels insufficient, feel free to create a new Tag and add it to tags.md in your PR!
  - 'Strings'
  - 'Characters'
CatalogContent: # Please use course/path landing page slugs, rather than linking to individual content items. If listing multiple items, please put the most relevant one first
  - 'learn-lua'
  - 'paths/computer-science'
---

The **`string.byte()`** function takes a character or a string as an argument and returns an ASCII (decimal) equivalent internal numeric representation.

## Syntax

```pseudo
string.byte(s, n)
```

The function can take two arguments, where the `s` parameter is a character or string and `n` is the index of the string passed as an argument. Passing only one argument will set `n` to `1`.

## Example 1

The example below demonstrates the use of the `.byte()` method.

```lua
print(string.byte('a'))
print(string.byte('9'))
print(string.byte(9))
print(string.byte(' '))
print(string.byte(';'))
```

This will return the following output:

```shell
97
57
57
32
59
```

## Example 2

This example demonstrates the use of `.byte` with a second argument:

```lua
print(string.byte('abca', 4))
print(string.byte(998877, 1))
print(string.byte(998877, 3))
print(string.byte(998877, 5))
```

This will return the following results.

```shell
97
57
56
55
```
