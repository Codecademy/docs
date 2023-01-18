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

**HashMaps** are unordered collections key-value pairs that are implemented using a [hash table](https://www.codecademy.com/resources/docs/general/hash-table). They offer efficient storage and data retrieval because of how keys are mapped to indices in an array. In Kotlin, a HashMap is represented by the `HashMap` class.

## Syntax

```pseudo
val map = HashMap<KeyType, ValueType>()
```

Here, `KeyType` is the type of the keys in the map, and `ValueType` is the type of the values.

The types can also be specified when creating an instance of the `HashMap` class like this:

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
