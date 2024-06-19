---
Title: 'Tables'
Description: 'Tables are used to store collections of data.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Tables'
  - 'Arrays'
  - 'Libraries'
  - 'Methods'
CatalogContent:
  - 'learn-lua'
  - 'paths/computer-science'
---

In Lua, **tables** are associative [Arrays](https://www.codecademy.com/resources/docs/lua/arrays). Values that are stored in a table can be referenced with numbers and keys.

## Creating Tables

Table objects are created using a constructor expression, in this case, a pair of curly braces:

```lua
t = {}
```

To initialize a table with predefined elements, insert values inside the curly braces and separated with commas:

```lua
t = {"element1", "element2", "element3"}
```

To initialize values with assigned keys, define the keys using square brackets and an equal sign `=`:

```lua
t = {["key1"] = "element1",
     ["key2"] = "element2",
     ["key2"] = "element3"}
```

To add values later in code, use square brackets again to set the key that's associated with the value:

```pseudo
t[mykey] = myvalue
```

Any data type other than `nil` can be used as a key.

## Accessing Table Values

After creating a table with a key-value pair(s), values are indexed through the associated keys using square brackets:

```lua
t = {}
t["a"] = 1 -- New table entry where key="a" and value=1
print(t["a"]) -- Output: 1
```

Values can also be accessed using dot notation:

```lua
print(t.a) -- Output: 1
```

If no key was defined, use a numeric index:

```lua
t = {"a", "b", "c"}
print(t[1]) -- Output: a
```

## Table Functions

The table library is built-in and will automatically work when referencing the `global` keyword, `table`. Below is the list of the available `Table` functions:
