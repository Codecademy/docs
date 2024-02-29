---
Title: 'insert()'
Description: 'Inserts an element to an existing table at a specified index.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Tables'
  - 'Functions'
CatalogContent:
  - 'learn-lua'
  - 'paths/computer-science'
---

The **`.insert()`** method inserts a value in a table at a specified index.

## Syntax

```pseudo
table.insert(someTable, index, value)
```

The `value` is inserted at `index`. If `index` is not provided, `value` is inserted at the end of `someTable`. The function returns the modified, original table.

Stacks, queues, and double queues can be implemented in this way.

## Example

Adding `iPhone` at the end of `apple_products` table:

```lua
apple_products = {"Macbook", "Watch", "iPad"}
table.insert(apple_products, "iPhone")
for key, value in  pairs(apple_products) do
  print(key, value)
end
```

The code above results in the following output:

```shell
Macbook
Watch
iPad
iPhone
```
