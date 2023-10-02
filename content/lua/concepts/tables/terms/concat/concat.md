---
Title: 'concat()'
Description: 'Joins table elements into a string.'
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

The **`concat()`** function is used to join the values of a table into a single string, separated by a specified separator. This function is particularly valuable when a table needs to be converted into a formatted string representation. The method allows for the use of a custom separator between values and the option to specify a range of indices to concatenate.

## Syntax

```pseudo
concat(table, separator, [i], [j])
```

`concat()` has the following paramteres:

`table`: The table containing values to concatenate.
`separator`: The character or string used to separate the concatenated values.
`[i]` (optional): The starting index in the table for concatenation.
`[j]` (optional): The ending index in the table for concatenation.

## Example

Consider the following table:

```lua
local fruits = {"apple 🍎", "banana 🍌", "cherry 🍒", "watermelon 🍉"}
local result = table.concat(fruits, ", ", 2, 3)
print(result)
```

The code will return the following output:

```shell
banana 🍌, cherry 🍒
```

In this example, the table `fruits` contains four elements. `table.concat()` is used to join the elements from index 2 to 3 (inclusive) with a comma and space as the separator. The resulting string is then printed.
