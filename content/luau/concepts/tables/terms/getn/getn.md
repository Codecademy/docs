---
Title: 'getn()'
Description: 'Returns the number of elements in the table passed.'
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

The **`.getn()`** function in Luau returns the number of elements in a table by iterating over the table and counting the elements, while ignoring any nil elements. This function is a handy tool for various table-related tasks, including checking the table's length, allocating memory for a table, and determining if a table is empty.

> **Note:** This function has been deprecated. Applying the `.getn()` function will result in an error. Use `#t` instead.

## Syntax

```lua
table.getn(t)
```

The `table.getn()` function takes only one argument, `t`, the table to retrieve the length of. It returns the number of elements in the table, as an integer.

## Example 1

```lua
local  table = {1, 2, 3, 4, 5}
local count = table.getn(table)
print(count)
```

This code will print the following output:

```shell
5
```

## Example 2

```lua
local  table = {1, 2, 3, nil, 5}
local count = table.getn(table)
print(count)
```

```shell
4
```

## Example 3

```lua
local  table = {1, 2, 3, 4, 5}
local count = table.getn(table)
for i = 1, count do
print(table[i])
end
```

This code will print the following output:

```shell
1
2
3
4
5
```

## Example 4

Here is an example of how to use the `table.getn()` function to check if a table is empty:

```lua
local table = {}
if table.getn(table) == 0 then
print("The table is empty.")
end
```

This code will print the following output:

```shell
The table is empty.
```
