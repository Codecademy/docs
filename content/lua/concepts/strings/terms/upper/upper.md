---
Title: '.upper()' # Required; the file name should be the same as the title, but lowercase, with dashes instead of spaces, and all punctuation removed
Description: 'Converts all letters in a string to uppercase.' # Required; ideally under 150 characters and starts with a present-tense verb (used in search engine results and content previews)
Subjects: # Please only use Subjects in the subjects.md file (https://github.com/Codecademy/docs/blob/main/documentation/subjects.md). If that list feels insufficient, feel free to create a new Subject and add it to subjects.md in your PR!
  - 'Code Foundations'
Tags: # Please only use Tags in the tags.md file (https://github.com/Codecademy/docs/blob/main/documentation/tags.md). If that list feels insufficient, feel free to create a new Tag and add it to tags.md in your PR!
  - 'Characters'
  - 'Functions'
  - 'Strings'
CatalogContent: # Please use course/path landing page slugs, rather than linking to individual content items. If listing multiple items, please put the most relevant one first
  - 'learn-lua'
  - 'paths/computer-science'
---

The **`.upper()`** function converts a string to uppercase.

## Syntax

```shell
string.upper(string)
```

The `.upper()` function will convert all letters of a specified string to uppercase. Numbers and punctuation will remain unaffected.

## Example

The example below shows how `.upper()` takes a string with both upper and lower case letters and returns it in uppercase.

> **Note:** The `.upper()` function creates a copy of the specified string to modify, leaving the original unchanged.

```lua
myString = "Bang!"

print(myString)
print(string.upper(myString))
print(myString)
```

This code will display the following output:

```shell
Bang!
BANG!
Bang!
```
