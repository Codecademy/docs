---
Title: 'HashMaps'
Description: 'HashMaps are unordered collections of key-value paris that are implemented using a hash table.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Hash Maps'
  - 'Data Types'
  - 'Collections'
  - 'Data Structures'
CatalogContent:
  - 'learn-kotlin'
  - 'paths/computer-science'
---

**HashMaps** are unordered collections of key-value pairs that are implemented using a [hash table](https://www.codecademy.com/resources/docs/general/data-structures/hash-table). They offer efficient storage and data retrieval because of how keys are mapped to indices in an array. In Kotlin, a HashMap is represented by the `HashMap` class.

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

A mutable or immutable `HashMap` is created with the `mutableMapOf()` or `mapOf()` methods, respectively:

```pseudo
val mutableMap = mutableMapOf<KeyType, ValueType>()
val immutableMap = mapOf<KeyType, ValueType>()
```

## Accessing Items

To access an item in a `HashMap`, the indexing operator `[]` is used with the key of the desired value. If the key exists in the hashmap, the indexing operator will return the corresponding value. If the key does not exist in the hashmap, the indexing operator will return null.

```kotlin
fun main() {
  val locationsMap = HashMap<String, String>()

  locationsMap.put("USA", "Washington D.C.")
  locationsMap.put("India", "New Delhi")
  locationsMap.put("Nigeria", "Abuja")
  locationsMap.put("France", "Paris")

  val capital = locationsMap["USA"]
  println(capital)
}
```

This will print the following output:

```shell
Washington D.C.
```

You can also use the `.get(key)` method to access the value associated with a specific key. This method returns the value associated with the key if it exists in the hashmap, or null if it does not.

```kotlin
val capital = locationsMap.get("India")
println(capital)
```

This will print the following output:

```shell
New Delhi
```

## Adding Items

To add an item to a hashmap, you can use the `.put(key, value)` method. This method adds a new key-value pair to the hashmap. If the key already exists in the hashmap, the value associated with the key is updated.

```kotlin
locationsMap.put("China", "Beijing")
```

The indexing operator `[]` can also be used to add a new key-value pair to the hashmap. This method is useful to add a new item to the hashmap and it is not known if the key already exists.

```kotlin
locationsMap["Germany"] = "Berlin"
```

The following prints the capital cities of the countries:

```kotlin
fun main() {
  val locationsMap = HashMap<String, String>()

  locationsMap.put("USA", "Washington D.C.")
  locationsMap.put("India", "New Delhi")
  locationsMap.put("Nigeria", "Abuja")
  locationsMap.put("France", "Paris")
  locationsMap.put("China", "Beijing")
  locationsMap["Germany"] = "Berlin"

  for((country, capital) in locationsMap) {
    println("$capital, $country")
  }
}
```

The output will be:

```shell
Washington D.C., USA
Beijing, China
Abuja, Nigeria
Paris, France
Berlin, Germany
New Delhi, India
```
