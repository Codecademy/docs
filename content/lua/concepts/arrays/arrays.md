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

for i = -3, 3 do
    a[i] = 0
end

```

When the array is printed, it would display 100 values of 0 starting at an index of 1. However, if we try printing any value out of this range, our output will return **nil** instead. This is because **nil** refers to data that is not there, which in our case would be true because our example only stores 100 values.

## Accessing Elements within the Array

To access an array element, we reference the desired value by its **index**. For example, to reference a value from the following array:

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

This can be done for every value within an array. This also works with **dictionaries**, but instead the assigned **key** must be used to retrieve a value. A key is essentially an index with the only difference being that a key may be assigned as any **datatype**, while an index can only come in the form of a number.

For example:

```lua
dictionary = {
    [“🍎”] = “Apple”,
    [“🍌”] = “Banana”,
    [“🍊”] = “Orange”
}

print(dictionary[“🍊”]) -- “Orange”
```

It is important to note that Lua will not print the key of the dictionary being used, but will instead print the value related to the requested key. This behavior also applies to **Arrays**.
