---
Title: 'move()'
Description: 'Copies elements from one table to another.'
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

The **`.move()`** function copies the specified indices' values from the source table into the provided starting index of the destination table.

## Syntax

```lua
table.move(a1, f, e, t, a2)
```

`.move()` function expects five arguments where `a1` is the source table and `a2` is the destination table.

`f` means _from_ (First index within `a1`).

`e` means _end_ (Last index within `a1`).

`t` means _to_ (First index within `a2`).

## Example

Consider the following tables:

```lua
local Table1 = {"🍎", "🍌", "🍇", "🍓", "🍉" }

local Table2 = {}

table.move(Table1, 1, #Table1, #Table2 + 1, Table2)

print(table.concat(Table2))
```

In this example, the elements in `Table1` have been copied to `Table2` using the `.move()` function. Starting from index 1 in `Table1` until the end and then copying them in sequence to `Table2` starting from index 1.

The above code will result in:

```lua
🍎🍌🍇🍓🍉
```

> **Note:** In Lua, indices start from 1; thus, the fourth argument is `#Table2 + 1` where `#Table2` is the length of the table. Therefore, `0 + 1` is the starting index of `Table2`.
