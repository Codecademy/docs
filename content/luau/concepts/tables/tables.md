---
Title: 'Tables'
Description: 'Tables are data structures that are capable of storing values of any type other than nil.'
Subjects:
  - 'Developer Tools'
  - 'Game Development'
Tags:
  - 'Collections'
  - 'Data Structures'
CatalogContent:
  - 'paths/computer-science'
---

In the context of Luau and Roblox, **tables** are a data structure that can store multiple values of any type that isn't `nil`, including booleans, numbers, strings, functions, and other tables.

## Syntax

The syntax for an empty table is:

```pseudo
local table = {}
```

Tables can be defined using curly braces (`{}`). The `local` keyword is primarily used to declare local variables. It is not used specifically for instantiating tables. In order to instantiate a table with elements the syntax will look something like this:

```lua
local table = {"amy", "john", "bob"}
```

The above example is instantiated like an [array](https://www.codecademy.com/resources/docs/javascript/arrays), but as mentioned above, table data types are capable of storing any form of data other than `nil`. Here is another example:

```lua
local profile = {"john",  24, "Atlanta",  false}
```

Not only can tables be used as arrays, but you can even use them as [dictionaries](https://www.codecademy.com/resources/docs/python/dictionaries). Here is an example of a table in the form of a dictionary with an array data type included:

```lua
local profile = {
    username = "john_doe",
    level = 12,
    experience = 500,
    items = {"sword", "shield", "knife", "helmet"},
}
```

### Accessing Items

If a given table is set up like an array, an important thing to note is that the index begins at `1` rather than at `0` as it is for other languages. Let's use this table as an example:

```lua
 items = {"sword", "shield", "knife", "helmet"}
```

To print the first item of the table to the console, the call will look like this:

```lua
print(items[1])
```

Calling items from a table when it's formatted like a dictionary is a little different. The value of items can be obtained by the keys. Below is an example of how to obtain the `username` value from the `profile` table.

```lua
-- Creating the profile table
local profile = {
    username = "john_doe",
    level = 12,
    experience = 500,
    items = {"sword", "shield", "knife", "helmet"},
}

-- Printing the username in the table
print(profile.username)
```

## Table Functions

The following functions are used to work with tables:
