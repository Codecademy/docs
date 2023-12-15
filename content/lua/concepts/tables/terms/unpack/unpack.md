---
Title: 'unpack()'
Description: 'Takes a table and returns the elements of that table as separate values.'
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

The **`unpack()`** function takes a table and returns the elements of that table as separate values.

## Syntax

```pseudo
result1, result2, ..., resultn = table.unpack(someTable)
```

- `someTable`: The table to be unpacked.
- `result1`, `result2`, `...`, `resultn`: Variables that will receive the individual elements from the table.

## Example 1

The following example uses the `unpack()` function to take the table `fruit` and unpack its elements into the variables `fruit_option1`, `fruit_option2`, `fruit_option3`. Each variable is assigned one of the elements from the table:

```lua
fruit = {'orange','apple','watermelon'}
fruit_option1,fruit_option2,fruit_option3 = table.unpack(fruit)
print("Type1:",fruit_option1)
print("Type2:",fruit_option2)
```

The example will result in the following output:

```shell
Type1:  orange
Type2:  apple
```

## Example 2

This example works with function `addShape` to unpack the table `values` in order to show the `X axis` and `Y axis`.

```lua
function addShape(x1, y1, x2, y2, x3, y3)
  return string.format("X axis: (%f,%f,%f). Y axis: (%f,%f,%f)",x1,x2,x3,y1,y2,y3)
end

values = {0.7, 1.5, 0.4, 2.8, 1.2, 3.6}

print(addShape(table.unpack(values)))
```

This will result in the following output:

```shell
X axis: (0.700000,0.400000,1.200000). Y axis: (1.500000,2.800000,3.600000)
```
