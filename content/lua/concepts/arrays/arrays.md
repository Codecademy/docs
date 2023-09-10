---
Title: 'Arrays' # Required; the file name should be the same as the title, but lowercase, with dashes instead of spaces, and all punctuation removed
Description: 'Arrays are used to store ordered collections of data.' # Required; ideally under 150 characters and starts with a noun (used in search engine results and content previews)
Subjects: # Please only use Subjects in the subjects.md file (https://github.com/Codecademy/docs/blob/main/documentation/subjects.md). If that list feels insufficient, feel free to create a new Subject and add it to subjects.md in your PR!
  - 'Computer Science'
Tags: # Please only use Tags in the tags.md file (https://github.com/Codecademy/docs/blob/main/documentation/tags.md). If that list feels insufficient, feel free to create a new Tag and add it to tags.md in your PR!
  - 'Tables'
  - 'Arrays'
  - 'Iterators'
CatalogContent: # Please use course/path landing page slugs, rather than linking to individual content items. If listing multiple items, please put the most relevant one first
  - 'learn-lua'
  - 'paths/computer-science'
---

**Arrays** are ordered collections for storing data. In Lua, all of the widely used programming containers (arrays, queues, sets, etc) are implemented by a single structure known as a table.

Arrays can hold any type of data, can be accessed and modified using the common indexing syntax (`[]`), and can be cleared through the assignment of `nil`.

## Syntax

In Lua, arrays can be created with curly braces `{}`. The convention for indexing across Lua libraries is to begin with `1` in lieu of `0`. By default, arrays designate the first item in an array as index `1`. However, arrays can be created to use any custom set of indices prescribed.

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

Here, there is an array of elements that range from the indexes 1 - 3. To print “🍌”, the value must be referenced through its assigned index, which in this case is 2.

```lua
a = {
    [1] = “🎁”, -- "Gift"
    [2] = “🍌”, -- "Banana"
    [3] = “🍎” -- "Apple"
}

print(a[2]) -- “🍌” [Banana]
```

This can be done for every value within an array. This also works with dictionaries, but instead the assigned _key_ must be used to retrieve a value. A _key_ is essentially an _index_ with the only difference being that a _key_ may be assigned as any type, while an _index_ must be a number.

For example:

```lua
dictionary = {
    [“🍎”] = “Apple”,
    [“🍌”] = “Banana”,
    [“🍊”] = “Orange”
}

print(dictionary[“🍊”]) -- “Orange”
```

It is important to note that Lua will not print the key of the dictionary being used, but will instead print the value related to the requested key. This behavior also applies to arrays.

## Replacing Elements

Values can also be reassigned by calling the relevant index and assigning the new value as demonstrated below.

```lua
a[2] = “🍊” -- Now the object at index is 2 is orange instead of banana
```

To remove an element, the index can be reassigned to `nil`.

```lua
a[2] = 'nil'
```

## Getting the Length of an Array

Often it is valuable to access the length or size of an array. In Lua, the `#` symbol is prepended to the array to return the length.

> **Note:** This syntax will return the last index, in some cases this may not be equivalent to the size of the array.

```lua
b = {2, 4, 6, 8}

for i = 1, #b do -- This will cycle through and print each element of the array
  print(i)
end
```
