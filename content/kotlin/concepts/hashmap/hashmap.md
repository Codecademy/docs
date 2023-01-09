---
Title: 'HashMap'
Description: 'HashMap is used to store items as a key-value pairs. The keys and values can be of either same or different types.'
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

## Accessing Item

To access the elements of a `HashMap`, you can use the `get()` function to retrieve the value for a given key. For example:

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

You can also use the `containsKey()` function to check if a HashMap contains a given key:

```kotlin
if (map.containsKey("apple")) {
    // do something
}
```

Finally, you can use the `forEach()` function to iterate over the key-value pairs in the HashMap:

```kotlin
map.forEach { key, value ->
    println("$key -> $value")
}
```

## Adding a item

To add a key-value pair to a `HashMap` in Kotlin, you can use the `put()` function. For example:

```kotlin
val map = HashMap<String, Int>()

map.put("apple", 1)
map.put("banana", 2)
map.put("cherry", 3)
```

You can also use the index operator `[]` to add a key-value pair to the `HashMap`. For example:

```kotlin
val map = HashMap<String, Int>()

map["apple"] = 1
map["banana"] = 2
map["cherry"] = 3
```

Finally, you can use the `putAll()` function to add all the key-value pairs from another Map to the `HashMap`:

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
