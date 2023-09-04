---
Title: 'byte()' # Required; the file name should be the same as the title, but lowercase, with dashes instead of spaces, and all punctuation removed
Description: 'string.byte is a function that returns the ASCII (decimal) equivalent of a character.' # Required; ideally under 150 characters and starts with a present-tense verb (used in search engine results and content previews)
Subjects: # Please only use Subjects in the subjects.md file (https://github.com/Codecademy/docs/blob/main/documentation/subjects.md). If that list feels insufficient, feel free to create a new Subject and add it to subjects.md in your PR!
  - 'computer-science'

Tags: # Please only use Tags in the tags.md file (https://github.com/Codecademy/docs/blob/main/documentation/tags.md). If that list feels insufficient, feel free to create a new Tag and add it to tags.md in your PR!
  - 'Strings'
  - 'Characters'
CatalogContent: # Please use course/path landing page slugs, rather than linking to individual content items. If listing multiple items, please put the most relevant one first
  - 'learn-example-course'
  - 'paths/example-path'
---

**String.byte()** function takes a character or a string as an argument and returns an ASCII (decimal) equivalent internal numeric representation.

## Syntax

The Function string.byte(s, n) can take two arguments, where s parameter is a character or string and n is the index of the string passed as an argument. Passing only one argument will set n to default 1.

## Arguments

The function first argument can take a string or digit  but a symbol will throw an error.

```lua
print(string.byte('a')) -- Prints: 97
print(string.byte('9')) -- Prints: 57
print(string.byte(9))   -- Prints: 57
print(string.byte(' ')) -- Prints: 32
print(string.byte(';')) -- Throws error
```

Adding a second argument separated by acomma.

```lua
print(string.byte('abca', 4)) -- Prints: 97 
print(string.byte(998877, 1)) -- Prints: 57
print(string.byte(998877, 3)) -- Prints: 56
print(string.byte(998877, 5)) -- Prints: 55
```


