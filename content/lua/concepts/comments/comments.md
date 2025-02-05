---
Title: 'Comments'
Description: 'A comment is a text within a program that is not being executed. It can provide additional information to support understanding the code.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Comments'
  - 'Documentation'
CatalogContent:
  - 'learn-lua'
  - 'paths/computer-science'
---

A **comment** is text within a program that is not being executed. It can provide additional information to help understand the code.

## Single-line Comments

In Lua, two consecutive dashes are used to create single-line comments. The compiler reads no text after `--` on the same line.

```lua
function sum(number1, number2)
-- this is a comment
sum = number1 + number2
return sum
end
```

The comment does not affect the function.

## Multi-line Comments

In Lua, multi-line comments are created using the `--[[` syntax to start the comment and `]]` to end the comment. The compiler does not read any text in between.

```lua
--[[ this is a multi-line comment.
 The compiler
 will not run code
 written in between.
]]
```
