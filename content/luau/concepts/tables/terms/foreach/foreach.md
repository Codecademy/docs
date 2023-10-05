---
Title: 'foreach()'
Description: 'Iterates through the elements of a provided table or collection, using a specified callback function to perform operations on each element.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Tables'
  - 'Arrays'
CatalogContent:
  - 'learn-lua'
  - 'paths/computer-science'
---

The **`foreach()`** function is a programming construct that iterates through the elements of a provided table or collection, using a specified callback function to perform operations on each element. During each iteration, the callback function is invoked and passed two parameters: the index (or key) and the value associated with the current element in the table.

## Syntax

```pseudo
foreach(table, callback)
```

- `table` refers to a data structure, such as an array or list, that contains elements to iterate over.
- `callback` is a function provided as an argument to the loop, which gets executed for each element in `table`, typically to perform a specific action or operation on each item.

## Example

In this example a table containing the names of fruits is declared, and the `foreach()` function is used to print each fruit name along with its index in the table.

```lua
-- Define a table of fruits
fruits = {"apple", "banana", "cherry", "date", "elderberry"}

-- Define a callback function to print each element with its index
function printFruit(index, value)
    print("Fruit at index " .. index .. ": " .. value)
end

-- Use the `foreach()` function to iterate through the table
table.foreach(fruits, printFruit)
```

This example results in the following output:

```shell
Fruit at index 1: apple
Fruit at index 2: banana
Fruit at index 3: cherry
Fruit at index 4: date
Fruit at index 5: elderberry
```
