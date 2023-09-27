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

# `concat()` Function

## Introduction
The `concat()` function is used to join the values of a table into a single string, separated by a specified separator. This function is particularly useful when you need to convert a table into a formatted string representation. It allows you to customize the separator between values and optionally specify a range of indices to concatenate. 

## Syntax
```lua
concat(table, separator, [i], [j])
```

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

In this example, we have a table `fruits` containing four elements. We use `table.concat()` to join the elements from index 2 to 3 (inclusive) with a comma and space as the separator. The resulting string is then printed, which contains "banana 🍌" and "cherry 🍒" separated by a comma and space.
