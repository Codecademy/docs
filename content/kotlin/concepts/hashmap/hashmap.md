---
Title: 'HashMaps'
Description: 'A HashMap is used to store items as a key-value pairs. The keys and values can be of either same or different types.'
Subjects:
  - 'Computer Science'
Tags:
  - 'HashMap'
  - 'Data Types'
  - 'Collections'
  - 'Data Structures'
CatalogContent:
  - 'learn-kotlin'
  - 'paths/computer-science'
---

A `HashMap` is a data structure that maps keys to values and is implemented using a hash table. It is an efficient way to store and retrieve data because it uses a hash function to map keys to indices in an array, so that keys can be found quickly. In Kotlin, a `HashMap` is represented by the `HashMap` class.

## Syntax

```pseudo
val map = HashMap<KeyType, ValueType>()
```

Here, `KeyType` is the type of the keys in the map, and `ValueType` is the type of the values.

You can also specify the types when you create an instance of the `HashMap` class like this:

```pseudo
val map: HashMap<KeyType, ValueType> = HashMap()
```

You can also use the `mutableMapOf()` function to create a mutable HashMap:

```pseudo
val map = mutableMapOf<KeyType, ValueType>()
```

And you can use the `mapOf()` function to create an immutable `HashMap`:

```pseudo
val map = mapOf<KeyType, ValueType>()
```
