---
Title: 'freeze()'
Description: 'Makes a given table read-only.'
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

The **`.remove()`** function in Lua removes the value of the specified index and clears the index from the Array (reducing the length of the table by 1).

## Syntax

```lua
table.remove(tableName,pos)
```

The `.remove()` function attempts to remove the element at the `pos` position from the table. This causes other elements to shift down to close the space, if necessary.
This function returns the value that we remove from the table. The `pos` parameter has a default value of `n`, which is the length of the table. This causes the last element of the table to be removed if the `pos` parameter is not provided.

## Example

Consider the following table:

```lua
local frozen_table = table.freeze({
    "🍎",
    "🍌",
    "🍇",
    "🍓",
    "🍉"
})
```

The variable `frozen_table` is instantiated with the `.freeze()` method to make the contents read-only.

Now, if an element is added:

```lua
frozen_table[1] = "🍔"
```

The code will return the following output:

```shell
Error: Frozen table cannot be modified
```

The error is thrown because the method has made the table read-only, so the contents cannot be modified.
