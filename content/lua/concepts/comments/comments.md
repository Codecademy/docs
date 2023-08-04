---
Title: 'Comments' # Required; the file name should be the same as the title, but lowercase, with dashes instead of spaces, and all punctuation removed
Description: 'A comment is text within a program that is not being executed. It can provide additional information to support understanding the code.' # Required; ideally under 150 characters and starts with a noun (used in search engine results and content previews)
Subjects: # Please only use Subjects in the subjects.md file (https://github.com/Codecademy/docs/blob/main/documentation/subjects.md). If that list feels insufficient, feel free to create a new Subject and add it to subjects.md in your PR!
  - 'Computer Science'
Tags: # Please only use Tags in the tags.md file (https://github.com/Codecademy/docs/blob/main/documentation/tags.md). If that list feels insufficient, feel free to create a new Tag and add it to tags.md in your PR!
  - 'Comments'
  - 'Documentation'
CatalogContent: # Please use course/path landing page slugs, rather than linking to individual content items. If listing multiple items, please put the most relevant one first
  - 'learn-lua'
  - 'paths/computer-science'
---

A **comment** is text within a program that is not being executed. It can provide additional information to support understanding the code.

## Single-line Comments

In Lua, two consecutive dashes are used to create single line comments. The compiler does not read any text after `--` on the same line.

```lua
function sum(number1, number2)
-- this is a comment
sum = number1 + number2
return sum
end
```

The comment does not affect the function.

## Multi-line Comments

In Lua, multi-line comments are created using the `--[[` syntax to start the comment, and `]]--` to end the comment. The compiler does not read any text in between.

```lua
--[[ this is a multi-line comment.
 The compiler
 will not run code
 written in between. ]]--
```
