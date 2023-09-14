---
Title: '.create()'
Description: 'Returns a new table with a specified value repeated a given number of times.'
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

The **`.create()`** function generates a new table with a specified value repeated a given number of times.

## Syntax

```pseudo
table.create(size, value)
```

- `size`: A number representing the number of elements in the table.
- `value`: A string representing the value each element will be.

> **Note:** When `value` is omitted or `nil`, the table will be returned empty but will have preallocated space for the `size` specified. Preallocation is done on the array portion of the table, making `table.create` counter-productive on dictionaries.

## Example

Consider the following table:

```lua
local newTable = table.create(3, "Hello")
for i = 1, 3 do
    print(newTable[i])
end
```

After executing this code, it will produce the following output:

```shell
Hello
Hello
Hello
```
