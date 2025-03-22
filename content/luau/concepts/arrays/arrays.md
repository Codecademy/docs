---
Title: 'Arrays'
Description: 'Arrays are used to store ordered collections of data.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Tables'
  - 'Arrays'
  - 'Iterators'
CatalogContent:
  - 'learn-lua'
  - 'paths/computer-science'
---

**Arrays** are a type of container for storing data in ordered collections. Luau, a lightweight and efficient scripting language, implements arrays using a single structure known as a table.

Arrays are versatile data structures capable of storing various data types, and values can be retrieved or modified using the conventional indexing syntax `[]`. To clear an array, the elements are set to `nil`.

## Syntax

Luau allows for the creation of arrays using curly braces `{}`. Unlike some programming languages that start array indexing from `0`, in Luau, by default, the first element in an array is designated as index `1`. However, Luau provides the flexibility to create arrays with custom indices as needed.

```lua
a = {5};  -- An array with single element

print(a[1]) -- This will return 5
print(a[2]) -- This will return nil because the index is out of range
```

The array created above contains one element only with the value `5`, it can be accessed by passing the index value `1`. However, if a value is passed out of the range of the array, the code will return `nil`. This is because `nil` refers to missing data.

## Accessing Elements

To access an array element, the desired value is called by its _index_. For example, to reference a value from the following array:

```lua
a = {
    [1] = "a",
    [2] = "b",
    [3] = "c"
}
```

In this array, elements are indexed from 1 to 3. To print `b`, reference it by its assigned index, which is 2.

This indexing method works for all elements in an array. This also works with dictionaries, but instead the assigned _key_ must be used to retrieve a value. A _key_ is essentially an _index_ with the only difference being that a _key_ may be assigned as any type, while an _index_ must be a number.

For example:

```lua
dictionary = {
    ["A"] = "Apple",
    ["B"] = "Banana",
    ["C"] = "Cat"
}

print(dictionary["C"]) -- "Cat"
```

It's important to note that in Lua (and Luau), when accessing a dictionary or array using an index or key, Luau returns the associated value, not the index or key itself.

## Replacing Elements

Values can be reassigned in Luau arrays by specifying the index and providing a new value, as shown below:

```lua
a[2] = "c" -- Now the object at index is 2 is c instead of b
```

To remove an element, simply reassign the index to `nil`.

```lua
a[2] = 'nil'
```

## Getting the Length of an Array

Frequently, it's necessary to determine the length or size of an array. In Luau, use the `#` symbol before an array to retrieve its length.

> **Note:** This syntax returns the last index of the array, which may not always be equivalent to the actual size of the array.

```lua
names = {"Alice", "Bob", "Charlie", "David"} -- Let's consider an array of names

local size = #names -- We can use the '#' symbol to determine the size of the 'names' array

for i = 1, size do
  print(names[i]) -- Access and print each element of the array
end
```

## Adding and Removing Elements

Elements can be added to the end of an array using the `table.insert()` function:

```lua
table.insert(a, 6) -- Adds the value 6 to the end of array 'a'
```

To remove an element from an array, use the `table.remove()` function:

```lua
table.remove(a, 3) -- Removes the element at index 3 from array 'a'
```

## Multi-Dimensional Arrays

Luau supports multi-dimensional arrays, which are arrays of arrays. They can be created like this:

```lua
matrix = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}}
```

Accessing elements in a multi-dimensional array requires using multiple sets of square brackets:

```lua
value = matrix[2][3] -- Accesses the element at row 2, column 3 of the matrix
```
