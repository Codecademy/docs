---
Title: 'pack()'
Description: 'Returns a table as a result from multiple values passed into a function.'
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

The **`pack()`** function takes multiple argument values that passed into this function, then returns a new table.

**`Notice:`** The `"n"` field is added when we pass multiple arguments to the `pack()` function with a structure like {n = "number of elements in table"}. This field can also be called as `table_name.n`. For example, the `cars.n` will output the number of elements in the `cars` table.

## Syntax

```pseudo
table.pack(value1, value2, ..., valuen)
```

- `value1`, `value2`, `...`, `valuen`: Each argument value will become each element in the new table.

## Example

The following example uses the `pack()` function to take multiple argument values like `Watermelon`, `Bananas`, `Apple`, and `Oranges` to create the table `fruit`.

```lua
fruit = table.pack('Watermelon','Bananas','Apple','Oranges')
print("Table: ",fruit)
print("Fruit number 2:",fruit[1])
print("Total number of fruit: ",fruit.n)
```

The example will result in the following output:

```shell
Table:  table: 0x55b6ebb24400
Fruit number 2: Watermelon
Total number of fruit:  4
```
