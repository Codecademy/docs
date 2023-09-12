**Lua .insert()**

The Lua **.insert()** method inserts values into a table. This method takes three parameters: the table's name, the index, and the element to insert. The index is an optional parameter.


## Prototype

table.insert(tableName, insertIndex, insertValue)

## Parameters

- `tableName`: this is the table to update, by inserting the new value, `insertValue`.
- `insertIndex`: optional parameter, to specify where in the `tableName`'s structure to insert `insertValue`.
- `insertValue`: the actual vale to insert into `tableName`.

## Return
The **table.insert()** method returns an array, the original table, with the value inserted.

All your files and folders are presented as a tree in the file explorer. You can switch from one to another by clicking a file in the tree.

## Sample

```
tableExample = {"This", "Lua", "method"}
insertValue_1 = {"for Codecademy"}
insertValue_2 = {".insert() is a"}

-- Example 1
table.insert(tableExample, insertValue_1)
-- Example 2
table.insert(tableExample, 1, insertValue_1)

-- Example 1 returns the following structure: {"This", "Lua", "method", "for", "Codecademy"}
-- Example 2 returns the following structure: {".insert() is a", "Lua", "method"}
```