---
Title: 'HashMaps'
Description: 'HashMaps are unordered collections of key-value paris that are implemented using a hash table.'
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

**HashMaps** are unordered collections of key-value pairs that are implemented using a [hash table](https://www.codecademy.com/resources/docs/general/hash-table). They offer efficient storage and data retrieval because of how keys are mapped to indices in an array. In Kotlin, a HashMap is represented by the `HashMap` class.

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

## Example

The following example is a small `HashMap` of countries and their capitals, and their:

```kotlin
fun main() {
  val locationsMap = HashMap<String, String>()

  locationsMap.put("USA", "Washington D.C.")
  locationsMap.put("India", "New Delhi")
  locationsMap.put("Nigeria", "Abuja")
  locationsMap.put("France", "Paris")

  for((country, capital) in locationsMap) {
    println("$capital, $country")
  }
}
```

This will print the following output:

```shell
Washington D.C., USA
Abuja, Nigeria
Paris, France
New Delhi, India
```
