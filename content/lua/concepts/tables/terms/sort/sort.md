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

The **`table.sort()`** function sorts a table in place. It takes two arguments.

## Syntax

```lua
table.sort(table, [comp])
```

The first argument, `table`, is the table to be sorted. The second argument, `comp`, is an optional comparison function that specifies the sorting order. If `comp` is not provided, the default less-than operation is used.

## Example

Consider the following table:

```lua
local numbers = {5, 3, 1, 4, 2}
table.sort(numbers)
for i, v in ipairs(numbers) do
    print(v)
end

```

In this example, there are a table of numbers. The table.sort() function is used to sort the table in ascending order.
The sorted table is then printed, resulting in the following output:

```shell
1
2
3
4
5
```

The `table.sort()` function takes the table to be sorted as its first argument. In this case, the `numbers` table is passed as the first argument. Since no second argument is passed (the optional comparison function), the default less-than operation is used to determine the sorting order.
