---
Title: 'Tables'
Description: 'In the context of luau and Roblox, tables are data types that can store any types of value.'
Codecademy Hub Page: 'https://www.codecademy.com/catalog/language/luau'
CatalogContent:
  - 'paths/computer-science'
Subjects:
  - 'Developer Tools'
  - 'Game Development'
Tags:
  - 'Markdown'
  - 'GitHub'
  - 'Documentation'
---

The table data type can store multiple values of any type that isn't nil, including booleans, numbers, strings, functions, and other tables.

The syntax for an empty table is:

```
local table = {}
```

In the context of [Luau](https://www.codecademy.com/resources/docs/luau), the local keyword is primarily used to declare local variables. It is not used specifically for instantiating tables. You can use the local keyword to create local variables of various types, including tables, numbers, strings, functions, and more. What creates the table is the curly braces in the syntax ({}). If you want to instantiate a table with parameters you can write something like this:

```
local table = {"amy", "john", "bob"} 
```

The above example is instantiated like an array, but as mentioned above, table data types are capable of storing any form of data other than nil. Here is another example:

```
local profile = {"john",  24, "Atlanta",  false}
```

Not only can tables be used as arrays, but you can even use them as dictionaries. Here is an example of a table in the form of a dictionary with an array data type included:

```
local profile = {
    username = "john_doe",
    level = 12,
    experience = 500,
    items = {"sword", "shield", "knife", "helmet"},
}
```


### Accessing Items


If your table is set up like an array, an important thing to note is that the index begins at 1 rather than at 0 as it is for other languages. Let's use this table as an example:

```
 items = {"sword", "shield", "knife", "helmet"}
```

If you want to print the first item of the table in the console, you'd have to call it like this:

```
print(items[1])
```

Calling items from a table when it's formatted like a dictionary is a little different. You can get the value of items by the keys. Below is an example of how you can get the username value from the profile table.

```
//creating the profile table
local profile = {
    username = "john_doe",
    level = 12,
    experience = 500,
    items = {"sword", "shield", "knife", "helmet"},
}

//printing the username in the table 
print(profile.username)
```