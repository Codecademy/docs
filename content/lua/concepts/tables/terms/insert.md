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

The **`.insert()`** method inserts a value in a table.

## Syntax

The `value` can be inserted at a specific `index`.  

```lua
table.insert(table, index, value)
```

If `index` is not provided, `value` is inserted at the end of `table`. It returns `table`. Stacks, queues, and double queues can be implemented in this way.    

## Codebyte Example

Adding `iPhone` at the end of `apple_products` table:

```lua
apple_products = {"Macbook", "Watch", "iPad"}
table.insert(apple_products, "iPhone")
for key, value in  pairs(apple_products) do
	print(key, value)
end
```

The output would be:

```
Macbook
Watch
iPad
iPhone
```
