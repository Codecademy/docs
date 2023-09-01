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

The **`.freeze()`** function in Lua freezes the provided table, and makes it read-only.

## Syntax

```lua
table.freeze(f)
```

The `.freeze()` function attempts to freeze a specified non-frozen table named `f`. The function will fail if `f` is not a table or is already frozen.
 This function helps to easily identify immutable functions.

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

The variable `frozen_table`  is instantiated with the `freeze()` method to make the contents read-only.

Now, if an element is added:
```lua
frozen_table[1] = "🍔" -- This will throw an error
```
The error is caused because because the `freeze()` method has made the table `read-only` and we cannot modify its contents.


