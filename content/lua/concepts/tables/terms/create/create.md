---
title: 'create()'
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
table.create(value, amount)
```

The `create` function is used to generate a new table with a specified value repeated a certain number of times. This function is helpful when you need to initialize a table with a repetitive pattern of values.

## Example

Consider the following table:

```lua
local newTable = table.create("Hello", 3)
```

After executing this code, the newTable will contain the following elements:

```shell
newTable = {"Hello", "Hello", "Hello"}
```