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

To add values to the table, use square brackets to set the key that's associated with the value:

```pseudo
t[mykey] = myvalue
```

Any data type other than `nil` can be used as a key.

## Accessing Table Values

After creating a table with a key-value pair(s), values can be indexed into through the associated keys using square brackets:

```lua
t = {}
t["a"] = 1 -- New table entry where key="a" and value=1
print(t["a"]) -- Output: 1
```

Values can also be accessed using dot notation:

```lua
print(t.a) -- Output: 1
```

## Methods

The table library is built-in and will automatically work when referencing the `global` keyword, `table`. Below is the list of the available `Table` methods:

- table.clear(mytable): Clears all Indexes and Values from a table.
- table.clone(mytable): Returns a shallow copy of the provided table. A shallow copy refers to an independent clone separate from its original table.
- table.concat(mytable, separatorstring, indexi, indexj): Returns the provided table as a string with the provided separator between each value. You may provide a starting index `i` and an ending index `j` but these parameters are _optional_.
- table.create(amount : number, value : any): Returns a new table with the provided value repeated the provided amount of times.
- table.find(mytable, myvalue, index): Returns the requested needle’s index if found or returns `nil` if the needle does not exist within the provided haystack table.
- table.foreach(mytable, callback): Iterates through the provided table using the provided callback function. The provided function will receive two parameters, which are **Index** and **Value** from the current table iteration.
- table.freeze(mytable): Freezes the provided table, and makes it `read-only`.
- table.isfrozen(mytable): Returns a **boolean** based on whether the table is in `read-only` mode or not.
- table.getn(mytable): Returns the number of elements in the provided table.
- table.insert(mytable, myvalue): Inserts the provided value into the provided table while respecting its order by placing the value at the end of the array.
- table.pack(values… : concat)e: Packs the provided values into an `Array`.
- table.unpack(mytable): Unpacks values from the provided table as a tuple.
- table.move(sourcetable, s : number, e : number, p : number, destinationtable): Copies the specified indexes of values from the source table into the provided starting index of the destination table.
- table.remove(mytable, myindex): Removes the value of the specified index and clears the index from the Array.
- table.sort(mytable, comparisonfunction): Compares each Index/Value pair within the provided `Array` using the specified comparison function. The comparison function must return `true` or `false`, ideally, by comparing values with a `>` or `<` **operator.
