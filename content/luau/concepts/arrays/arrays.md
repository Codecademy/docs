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

**Arrays** are ordered collections for storing data. Luau, a lightweight and efficient scripting language, implements arrays using a single structure known as a table.

Arrays can hold any type of data, can be accessed and modified using the common indexing syntax (`[]`), and can be cleared through the assignment of `nil`.

## Syntax

In Luau, arrays can be created with curly braces `{}`. The convention for indexing across Luau libraries is to begin with `1` in lieu of `0`. By default, arrays designate the first item in an array as index `1`. However, arrays can be created to use any custom set of indices prescribed.

```lua
a = {};  -- A new empty array

for i = 1, 5 do
    a[i] = 0
end

print(a[5]) -- This will return 0
print(a[6]) -- This will return nil because the index is out of range
```

The array created by the `for` loop above contains 5 items, all of which are `0`. Any of these values can be accessed by passing an index. However, if a value is passed out of the range of the array (1-5), the code will return `nil`. This is because `nil` refers to missing data.

## Accessing Elements

To access an array element, the desired value is called by its _index_. For example, to reference a value from the following array:

```lua
a = {
    [1] = “🎁”, -- "Gift"
    [2] = “🍌”, -- "Banana"
    [3] = “🍎” -- "Apple"
}
```

In this array, elements are indexed from 1 to 3. To print "🍌", you need to reference it by its assigned index, which is 2.

```lua
a = {
    [1] = “🎁”, -- "Gift"
    [2] = “🍌”, -- "Banana"
    [3] = “🍎” -- "Apple"
}

print(a[2]) -- “🍌” [Banana]
```

This indexing method works for all elements in an array. This also works with dictionaries, but instead the assigned _key_ must be used to retrieve a value. A _key_ is essentially an _index_ with the only difference being that a _key_ may be assigned as any type, while an _index_ must be a number.

For example:

```lua
dictionary = {
    [“🍎”] = “Apple”,
    [“🍌”] = “Banana”,
    [“🍊”] = “Orange”
}

print(dictionary[“🍊”]) -- “Orange”
```

It's important to note that in Lua (and Luau), when you access a dictionary or array using an index or key, Luau returns the associated value, not the index or key itself.

## Replacing Elements

You can reassign values in Luau arrays by specifying the index and providing a new value, as shown below:

```lua
a[2] = “🍊” -- Now the object at index is 2 is orange instead of banana
```

To remove an element, you can simply reassign the index to `nil`.

```lua
a[2] = 'nil'
```

## Getting the Length of an Array

Frequently, you'll want to determine the length or size of an array. In Luau, you can use the `#` symbol before an array to retrieve its length.

> **Note:** This syntax returns the last index of the array, which may not always be equivalent to the actual size of the array.

```lua
b = {2, 4, 6, 8}

for i = 1, #b do -- This will cycle through and print each element of the array
  print(i)
end
```

## Adding and Removing Elements

You can add elements to the end of an array using the `table.insert()` function:

```lua
table.insert(a, 6) -- Adds the value 6 to the end of array 'a'
```

To remove an element from an array, you can use the `table.remove()` function:

```lua
table.remove(a, 3) -- Removes the element at index 3 from array 'a'
```

## Multi-Dimensional Arrays

Luau supports multi-dimensional arrays, which are arrays of arrays. You can create them like this:

```lua
matrix = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}}
```

Accessing elements in a multi-dimensional array requires using nested square brackets:

```lua
value = matrix[2][3] -- Accesses the element at row 2, column 3 of the matrix
```
