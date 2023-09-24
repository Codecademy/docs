---
Title: 'foreach() Function'
Description: 'The foreach() function is a programming construct that iterates through the elements of a provided table or collection, using a specified callback function to perform operations on each element'
Subjects:
  - 'Web Development'
Tags:
  - 'Javascript'
CatalogContent:
  - 'introduction-to-javascript'
- 'paths/front-end-engineer-career-path'
---

## foreach() Function

The `foreach()` function is a programming construct that iterates through the elements of a provided table or collection, using a specified callback function to perform operations on each element. During each iteration, the callback function is invoked and passed two parameters: the index (or key) and the value associated with the current element in the table.

### Syntax  
```
foreach(table, callback)
```
### Example

Let's consider a practical example of using the `foreach()` function in Lua, a popular programming language. In this example, we have a table containing the names of fruits, and we want to print each fruit name along with its index in the table.

```lua
-- Define a table of fruits
fruits = {"apple", "banana", "cherry", "date", "elderberry"}

-- Define a callback function to print each element with its index
function printFruit(index, value)
    print("Fruit at index " .. index .. ": " .. value)
end

-- Use the `foreach()` function to iterate through the table
foreach(fruits, printFruit)

```
**Output:**

Fruit at index 1: apple
Fruit at index 2: banana
Fruit at index 3: cherry
Fruit at index 4: date
Fruit at index 5: elderberry

