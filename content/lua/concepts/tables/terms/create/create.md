---
Title: '.create()'
description: 'Returns a new table with the provided value repeated the provided amount of times.'
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

```lua
table.create(amount, value)
```

- `value` : This parameter represents the value to populate the table with.
- `amount` : This parameter specifies how many times to repeat the `value` in the table.

## Example

Consider the following table:

```lua
local newTable = table.create("Hello", 3)
print(newTable)
```

After executing this code, it will produce the following output:

```shell
{"Hello", "Hello", "Hello"}
```
