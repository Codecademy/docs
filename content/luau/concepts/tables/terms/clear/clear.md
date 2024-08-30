---
Title: 'clear()'
Description: 'Removes all elements from a table.'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Tables'
  - 'Functions'
CatalogContent:
  - 'learn-lua'
  - 'paths/computer-science'
---

In Luau, **`table.clear()`** is a function that removes all the elements from a table, leaving it empty. It is equivalent to iterating over the table and setting each key to nil.

## Syntax

```pseudo
table.clear(t)
```

The `clear()` function makes the specified table `t` empty, meaning the table does not contain any elements anymore.

## Example

Consider the following table:

```lua
local fruitTable{"🍎","🍓","🍉"}

table.clear(fruitTable)

print("Elements:" #fruitTable)
```

The code will return the following output:

```shell
Elements: 0
```

First a table `fruitTable` is initiated. Then the `clear()` function is used to remove all elements of the table. At this point, printing the number of elements will simply return `0` as there are no elements in the table.
