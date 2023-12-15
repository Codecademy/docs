---
Title: 'remove()'
Description: 'Removes a value from a table.'
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

The **`remove()`** function in Lua removes the value of the specified index and clears the index from the table (reducing the length of the table by 1).

## Syntax

```pseudo
table.remove(tableName,pos)

```

`remove()` returns the value that was removed from the `tableName`. The `pos` parameter has a default value of `n`, which is the length of the table. This causes the last element of the table to be removed if the `pos` parameter is not provided.

## Example

In the following example `remove()` is used to remove the element at the `pos` position from the table. This causes other elements to shift down.

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
