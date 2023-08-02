---
Title: 'Arrays' # Required; the file name should be the same as the title, but lowercase, with dashes instead of spaces, and all punctuation removed
Description: 'Arrays are used to store ordered collections of data.' # Required; ideally under 150 characters and starts with a noun (used in search engine results and content previews)
Subjects: # Please only use Subjects in the subjects.md file (https://github.com/Codecademy/docs/blob/main/documentation/subjects.md). If that list feels insufficient, feel free to create a new Subject and add it to subjects.md in your PR!
  - 'Computer Science'
  - 'Lua'
Tags: # Please only use Tags in the tags.md file (https://github.com/Codecademy/docs/blob/main/documentation/tags.md). If that list feels insufficient, feel free to create a new Tag and add it to tags.md in your PR!
  - 'Tables'
  - 'Arrays'
  - 'Iterators'
CatalogContent: # Please use course/path landing page slugs, rather than linking to individual content items. If listing multiple items, please put the most relevant one first
  - 'lua/arrays'
---

# Arrays

**Arrays** are tables of ordered, stored **data**. They can hold any type of data, and can be cleared with `nil` values.


## Syntax

In Lua, Arrays can be created with curly braces `{}`. When storing values, arrays will automatically order values starting from `0` unless specified otherwise. For instance, the following code will store 100 values using an `iteration`.

```lua

a = {};

for i = 1, 100 do
    a[i] = 0
end

```

If we print our array, we see that it now holds 100 values starting from 1. However, if we try printing any value out of this range, we will receive **nil** instead. This is because **nil** refers to data that is not there, which in our case would be true because we have only stored 100 values.


## Accessing Elements within the Array

When working with **Array’s**, we may want to reference an element within it. To do this, we reference the desired value by its **index**.
For example, let's say we want to reference a value from the following array:

```lua
a = {
    [1] = “🎁”, -- "Gift"
    [2] = “🍌”, -- "Banana"
    [3] = “🍎” -- "Apple"
}
```

Here, we are provided with an array of elements that range from the indexes 1 - 3. Let's say we want to print “🍌”. To achieve this, we must reference our value through its assigned index, which in our case is 2.

```lua
a = {
    [1] = “🎁”, -- "Gift"
    [2] = “🍌”, -- "Banana"
    [3] = “🍎” -- "Apple"
}

print(a[2]) -- “🍌” [Banana]
```

We can do this for every value within our array. This also works with **dictionaries**, but instead we must use the assigned **key** to retrieve a value. A key is essentially an index with the only difference being that a key may be assigned as any **datatype**, while an index can only come in the form of a number.

For example:

```lua
dictionary = {
    [“🍎”] = “Apple”,
    [“🍌”] = “Banana”,
    [“🍊”] = “Orange”
}

print(dictionary[“🍊”]) -- “Orange”
```
  
It is important to note that Lua will not print the key of the dictionary we are using, but will instead print the value related to the requested key. This behavior also applies to **Arrays**.