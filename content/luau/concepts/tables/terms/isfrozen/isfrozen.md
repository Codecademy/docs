---
Title: 'isfrozen()'
Description: 'Returns a boolean based on whether the table is in read-only mode or not.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Booleans'
  - 'Tables'
CatalogContent:
  - 'paths/computer-science'
---

The **`isfrozen()`** function in the Luau programming language returns a boolean based on whether the table is in read-only mode or not. When a table is in read-only mode, it means that the contents can't be modified, as a measure of data protection.

## Syntax

```pseudo
isfrozen(table);
```

The `isfrozen()` function returns a boolean value, `true` if the table is in read-only mode and `false` if it's not.

## Example

In this example, a table called `myTable` is created. Then, the `isfrozen()` function is used to check if it's in read-only mode.

```lua
-- Create a table
local myTable = {1, 2, 3}

-- Check if the table is initially frozen (read-only)
local frozenStatus = table.isfrozen(myTable)

-- Output the result
if frozenStatus then
    print("The table is frozen (read-only).")
else
    print("The table is not frozen (read/write).")
end
```

The code above will result in the following output:

```shell
The table is not frozen (read/write).
```
