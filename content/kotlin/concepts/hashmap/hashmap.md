---
Title: 'HashMaps'
Description: 'HashMaps are unordered collections of key-value pairs that are implemented using hash tables.'
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

The types can also be specified when creating an instance of the `HashMap` class like this:

```pseudo
val map: HashMap<KeyType, ValueType> = HashMap()
```

The `mutableMapOf()` function is used to create a mutable HashMap:

```pseudo
val map = mutableMapOf<KeyType, ValueType>()
```

The `mapOf()` function is used to create an immutable `HashMap`:

```pseudo
val map = mapOf<KeyType, ValueType>()
```

## Accessing Item

To access the elements of a `HashMap`, the `get()` function is used to retrieve the value for a given key. For example:

```kotlin
val map = HashMap<String, Int>().apply {
    put("apple", 1)
    put("banana", 2)
    put("cherry", 3)
}

val value = map.get("apple")
```

The output for the above code will be:

```
1
```

If the `HashMap` contains the specified key, the index operator returns the value for that key. If the key is not found, it returns `null`.

The `containsKey()` function is used to check if a HashMap contains a given key:

```kotlin
if (map.containsKey("apple")) {
    // do something
}
```

The `forEach()` function is used to iterate over the key-value pairs in the HashMap:

```kotlin
map.forEach { key, value ->
    println("$key -> $value")
}
```

## Adding an item

To add a key-value pair to a `HashMap` in Kotlin, the `put()` function is used. For example:

```kotlin
val map = HashMap<String, Int>()

map.put("apple", 1)
map.put("banana", 2)
map.put("cherry", 3)
```

The index operator `[]` can also be used to add a key-value pair to the `HashMap`. For example:

```kotlin
val map = HashMap<String, Int>()

map["apple"] = 1
map["banana"] = 2
map["cherry"] = 3
```

The `putAll()` function can be used to add all the key-value pairs from another map to the `HashMap`:

```kotlin
val map1 = HashMap<String, Int>().apply {
    put("apple", 1)
    put("banana", 2)
}

val map2 = HashMap<String, Int>().apply {
    put("cherry", 3)
    put("date", 4)
}

map1.putAll(map2)  // adds "cherry" -> 3 and "date" -> 4 to map1
```

## Removing an item

To remove a key-value pair from a `HashMap` in Kotlin, the `remove()` function is used. For example:

```kotlin
val map = HashMap<String, Int>().apply {
    put("apple", 1)
    put("banana", 2)
    put("cherry", 3)
}

map.remove("banana")  // removes "banana" -> 2 from the map
```

The `remove()` function can be used to remove a key-value pair from the `HashMap` only if the value matches a certain condition. For example:

```kotlin
val map = HashMap<String, Int>().apply {
    put("apple", 1)
    put("banana", 2)
    put("cherry", 3)
}

map.remove("cherry") { it == 3 }  // removes "cherry" -> 3 from the map
map.remove("apple") { it == 3 }  // does not remove anything, the value for "apple" is not 3
```
