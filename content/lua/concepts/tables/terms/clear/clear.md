---
Title: 'clear()' # Required; the file name should be the same as the title, but lowercase, with dashes instead of spaces, and all punctuation removed
Description: 'Remove all elements from a table.' # Required; ideally under 150 characters and starts with a present-tense verb (used in search engine results and content previews)
Subjects: # Please only use Subjects in the subjects.md file (https://github.com/Codecademy/docs/blob/main/documentation/subjects.md). If that list feels insufficient, feel free to create a new Subject and add it to subjects.md in your PR!
  - 'Computer Science'
  - 'Game Development'

Tags: # Please only use Tags in the tags.md file (https://github.com/Codecademy/docs/blob/main/documentation/tags.md). If that list feels insufficient, feel free to create a new Tag and add it to tags.md in your PR!
  - 'Tables'
  - 'Functions'

CatalogContent: # Please use course/path landing page slugs, rather than linking to individual content items. If listing multiple items, please put the most relevant one first
  - 'learn-lua'
  - 'paths/computer-science'
---

Lua **`table.clear()`** is a function that removes all the elements from a table, leaving it empty. It is equivalent to iterating over the table and setting each key to nil.

## Syntax

```lua
table.clear(t)
```

The `.clear()` function makes the specified table `t` empty, meaning the table does not contain any elements anymore.

## Example

Consider the following table:

```lua
local list{"🍎","🍓","🍉"}

table.clear(list)

print("Elements:" #list)
```

The code will return the following output:

```shell
Elements: 0
```

First we intiate a table 'list'. Then we use the `.clear()` function to remove all elements of the table.Now if we try to print the number of elements it will simply print `0` as there are no elements in the table.
