---
Title: 'clone()'
Description: 'Makes a copy of a given table.'
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

**`table.shallow_copy`** creates a new table and clones all key/value pairs.

## Syntax

```lua
table.shallow_copy(t)
```

We use `.shallow_copy()` to create a new table and clone all key/value pairs from table `t`. The resulting table is a shallow copy of the original table, meaning that if any of the values in the original table are themselves tables, then those tables will not be copied.

## Example

Consider the following table:

```lua
-- Define a table
local original = {a = 1, b = 2, c = 3}

-- Clone the table
local clone = table.shallow_copy(original)

-- Print the original and cloned tables
print("Original Table: ", original)
print("Cloned Table: ", clone)

```

Output:
```lua
Original Table: 	table: 0x7f8d1b40c5c0
Cloned Table: 	    table: 0x7f8d1b40c6a0

```
In this example, we define a table called `original` with three key/value pairs. We then use `table.shallow_copy` to create a new table called `clone` that is a shallow copy of `original`. Finally, we print both tables to confirm that they are different tables in memory.


