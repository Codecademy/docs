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
table.create(amount, value)
```

- `amount`: A number representing the amount of elements in the table.
- `amount` : This parameter specifies how many times to repeat the `value` in the table.

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
