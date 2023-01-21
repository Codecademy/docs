---
Title: '.get()'
Description: 'The get function is used to retrieve the value associated with a particular key in a HashMap.'
Subjects:
  - 'Computer Science'
Tags:
  - 'HashMap'
  - 'Data Types'
  - 'Collections'
  - 'Data Structures'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

In Kotlin, the `get()` function is a method of the Map interface that is used to retrieve the value associated with a particular key.

## Syntax

```pseudo
fun <K, V> Map<K, V>.get(key: K): V?
```

Where,`Map<K, V>` is the interface and the `get()` function is the method of this interface.`K` is the type of the key of the map. `V` is the type of the value associated with the key.`key` is the key for which the associated value should be retrieved.

## Example

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
