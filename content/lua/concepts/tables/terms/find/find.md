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
  - 'learn-lua'
  - 'paths/computer-science'
---

The **find()** function is used to search for a specific value in a table and returns its index if found.The function returns `nil` if the value is not present in the table.

## Syntax

```lua
table.find(myTable,value)
```

## Example

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
