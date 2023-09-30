---
Title: 'Remove()'
Description: 'Removes a value from an array.'
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

```lua
table.remove(tableName,pos)
```

The `.remove()` function attempts to remove the element at the `pos` position from the table. This causes other elements to shift down to close the space, if necessary.
This function returns the value that was removed from the table. The `pos` parameter has a default value of `n`, which is the length of the table. This causes the last element of the table to be removed if the `pos` parameter is not provided.

## Example

Consider the following table:

```lua
local fruit = {
    "🍎",
    "🍌",
    "🍇",
    "🍓",
    "🍉"
}

local removedFruit = table.remove(fruit, 2);
```

The `fruit` array will now have one less item ( removed at the 2 position ) and the variable `removedFruit` will now contain "🍌".

Now, `removedFruit` contains the removed item:

```lua
print(removedFruit) -- prints "🍌"
```
