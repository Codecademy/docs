---
Title: 'Tables' # Required; the file name should be the same as the title, but lowercase, with dashes instead of spaces, and all punctuation removed
Description: 'Tables are used to store collections of data.' # Required; ideally under 150 characters and starts with a noun (used in search engine results and content previews)
Subjects: # Please only use Subjects in the subjects.md file (https://github.com/Codecademy/docs/blob/main/documentation/subjects.md). If that list feels insufficient, feel free to create a new Subject and add it to subjects.md in your PR!
  - 'Computer Science'
  - 'Lua'
Tags: # Please only use Tags in the tags.md file (https://github.com/Codecademy/docs/blob/main/documentation/tags.md). If that list feels insufficient, feel free to create a new Tag and add it to tags.md in your PR!
  - 'Tables'
  - 'Arrays'
  - 'Libraries'
  - 'Methods'
CatalogContent: # Please use course/path landing page slugs, rather than linking to individual content items. If listing multiple items, please put the most relevant one first
  - 'learn-lua'
---

# **Tables**

This library is internal, and will automatically work when referencing the **global** keyword **table**. In Lua, **Tables** are known as associative [Arrays](https://www.codecademy.com/resources/docs/lua/arrays) which can be referenced with keys instead of just numbers. Any data type other than nil can be used as a key.

## **Functions**

Below are the list of Table methods available.

### table.clear(table : **table**) : void
Clears all Indexes and Values from a table.

### table.clone(table : **table**) : table
Returns a shallow copy of the provided table. A shallow copy refers to an independent clone seperate from its original table.

### table.concat(table : **Array**, separator : string, i : number?, j : number?) : string
Returns the provided table as a string with the provided separator between each value. You may provide a starting index `i` and an ending index `j` but these parameters are _optional_.

### table.create(amount : number, value : any) : table
Returns a new table with the provided value repeated the provided amount of times.

### table.find(haystack: **table**, needle : any, i : number?) : number
Returns the requested needle’s index if found or returns `nil` if the needle does not exist within the provided haystack table.

### table.foreach(table : **table**, callback : function) : void
Iterates through the provided table using the provided callback function. The provided function will receive two parameters, of which are **Index** and **Value** from the current table iteration.

### table.freeze(table : **table**) : void
Freezes the provided table, and makes it **`read-only`**.

### table.isfrozen(table : **table**) : boolean
Returns a **boolean** based on whether the table is in **`read-only`** mode or not.

### table.getn(table : **Array**) : number
Returns the number of elements in the provided table.

### table.insert(table : **Array**, value : any) : void
Inserts the provided value into the provided table while respecting it’s order by placing the value at the end of the array.

### table.pack(values… : concat) : table
Packs the provided values into an **Array**.

### table.unpack(table : **table**) : Tuple
Unpacks values from the provided table as a tuple.

### table.move(source : **table**, s : number, e : number, p : number, destination : **table**) : table
Copies the specified indexes of values from the source table into the provided starting index of the destination table.

### table.remove(table : **Array**, index : number) : any
Removes the value of the specified index and clears the index from the Array.

### table.sort(table : **Array**, compare : **function**) : void
Compares each Index/Value pair within the provided **Array** using the specified comparison function. You must return **true** or **false** within your comparison function ideally by comparing values with a `>` or `<` **operator.