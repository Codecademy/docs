---
Title: 'Find()'
Description: 'Searches for the first occurrence of a specified value within a table.'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Tables'
  - 'Functions'
CatalogContent:
  - 'learn-luau'
  - 'paths/computer-science'
---

The **find()** function is used to search for a specific value in a table and returns its index if found. The function returns `nil` if the value is not present in the table.

## Syntax

```pseudo
table.find(myTable,value)
```

- `myTable`: A table containing values where the specified value being searched is present.
- `value`: This represents paramter of the value being sought after in the table.

## Example

In this example, a table containing strings of letters is declared, and the `table.find()` function is utilized to discover the index of a sought after value within the table. If not found, it will return nil instead.

```lua
-- Create a sample table
local myTable = {"a", "b", "c", "d", "e"}
print(table.find(myTable, "d"))
print(table.find(myTable, "j"))
```

This example results in the following output:

```shell
4
nil
```
