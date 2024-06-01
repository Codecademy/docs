---
Title: 'Comments'
Description: 'Comments are used to add explanatory or descriptive notes within a script or program.'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Comments'
  - 'Documentation'
CatalogContent:
  - 'learn-lua'
  - 'paths/computer-science'
---

A **comment** is text that the Luau parser ignores at runtime. They are useful for documenting code, leaving reminders for future modifications, or temporarily disabling code without removing it.

## Single-line Comments

In Luau, single-line comments are created with a double hyphen `--`. Single-line comments extend to the end of the line.

```lua
type Point = { x: number, y: number }
-- This is a single-line comment.
-- It will not affect the execution of the program.
local p: Point = { x = 3, y = 4 }
print(p.x, p.y)
```

## Multi-line Comments

In Luau, multi-line or block comments are created using double hyphens and double brackets `--[[ ]]`. The compiler does not read any text in between. Multi-line comments are commonly used at the top of files to describe the purpose of a library or module, before functions to describe their intent, and in many other cases.

```lua
--[[ This is a multi-line comment.
 It will be ignored by the compiler
 and will not affect the execution of the program. ]]
 local function foo()
    local name = 'Jane'
    print(name)
end
```

Multiple brackets can be nested inside of multi-line comment by using equal sign inside of the beginning and ending brackets, `--[=[   ]=]`.

```lua
local String = 'Secret!'
if String == 'Secret!' then
    print('What is your secret?')
--[=[ This is how  [[[ multiple brackets ]]]
are nested inside of a block comment. ]=]
end
```
