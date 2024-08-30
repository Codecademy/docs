---
Title: 'sort()'
Description: 'Sorts a given table.'
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

The **`table.sort()`** function sorts a given table in place.

## Syntax

```pseudo
table.sort(table, [comp])
```

The first argument, `table`, is the table to be sorted. The second argument, `comp`, is an optional comparison function that specifies the sorting order. If `comp` is not provided, the default less-than operation is used.

## Example

In this example, there is a table named `numbers`. The `table.sort()` function is used to sort the table in ascending order.

```lua
local numbers = {5, 3, 1, 4, 2}
table.sort(numbers)
for i, v in pairs(numbers) do
    print(v)
end
```

The code results in the following output:

```shell
1
2
3
4
5
```
