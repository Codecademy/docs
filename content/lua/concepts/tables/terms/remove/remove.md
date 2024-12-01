---
Title: '.remove()'
Description: 'Removes and returns the element at a specified position from a table (array).'
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

The **`.remove()`** function in Lua removes the value of the specified index and clears the index from the table (reducing the length of the table by 1).

## Syntax

```pseudo
table.remove(tableName, pos)
```

The `.remove()` method removes and returns the element at the specified position `pos` from the given table `tableName`. If `pos` is not provided, it defaults to the length of the table, meaning the last element will be removed by default.

## Example

In the following example `.remove()` is used to remove the element at the `pos` position from the table. This causes other elements to shift down:

```lua
local fruit = {
    "🍎",
    "🍌",
    "🍇",
    "🍓",
    "🍉"
}

local removedFruit = table.remove(fruit, 2);

print(removedFruit)

print(table.concat(fruit,", "))
```

This example results in the following output:

```shell
🍌

 🍎, 🍇, 🍓, 🍉
```

> **Note:** In Lua, indices start from 1. Therefore the banana was removed from the table as it was at index 2.
