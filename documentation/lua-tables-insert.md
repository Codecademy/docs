## Syntax

`table.insert(table, index, value)`

The `.insert()` method inserts value at index of table. If no index is provided, value is inserted at the end of the table. It returns the table itself. Stacks, queues, and double queues can be implemented in this way.

## Example

```
my_table = {"This", "is", "a", "method"}
my_value = {"Lua"}
table.insert(my_table, 3, my_value)
-- Output: {"This", "is", "Lua", "a", "method"}
```


## Codebyte Example

Adding `iPhone` at the end of `apple_products` list:
```
apple_products = {"Macbook", "Watch", "iPad"}
table.insert(apple_products, "iPhone")
print(apple_products[4])
``` 