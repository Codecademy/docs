---
Title: 'Variables' # Required; the file name should be the same as the title, but lowercase, with dashes instead of spaces, and all punctuation removed
Description: 'Variables are used to store data that can be referenced throughout the code.' # Required; ideally under 150 characters and starts with a noun (used in search engine results and content previews)
Subjects: # Please only use Subjects in the subjects.md file (https://github.com/Codecademy/docs/blob/main/documentation/subjects.md). If that list feels insufficient, feel free to create a new Subject and add it to subjects.md in your PR!
  - 'Computer Science'
Tags: # Please only use Tags in the tags.md file (https://github.com/Codecademy/docs/blob/main/documentation/tags.md). If that list feels insufficient, feel free to create a new Tag and add it to tags.md in your PR!
  - 'Variables'
  - 'Values'
CatalogContent: # Please use course/path landing page slugs, rather than linking to individual content items. If listing multiple items, please put the most relevant one first
  - 'learn-lua'
  - 'paths/computer-science'
---

**Variables** are used to store data that can be referenced throughout the code.

Lua has two main types of variables: global variables, which can be used anywhere in a program, and local variables, which can only be referenced in the block where they're defined.

## Creating and Accessing Variables

A variable name can include letters, numbers, and underscores, but must begin with a letter or an underscore. A variable name cannot include a space or any other character. Variables do not need to be declared with a value, if a variable is called and it hasn't been assigned a value it will return `nil`.

```lua
a = 10
```

After defining a variable, it can be referred to at any point in the code.

```lua
a = 10

print(a)
```

Lua also supports multiple assignment, such as in the example below.

```lua
b, c = "spam", "eggs"

print(c) -- This will print eggs
```

## Scope

In Lua, a variable is assumed to be global unless it is explicitly declared as a local variable using the `local` keyword.

```lua
count = 2

function addValue (val)
  local count = 1
  return count + val
end

print(addValue(5)) -- Returns 6
print(count) -- Returns 2
```

> **Note:** In the code above, if the `local count = 1` statement is omitted the `addValue()` function will use the global value instead and return 7.

## Reassigning Variables

To modify the value of a variable, assign a new value.

```lua
a = 10

print(a) -- This will print 10

a = 5

print(a) -- This will print 5
```
