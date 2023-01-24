---
Title: '.put()'
Description: 'Used to add a key-value pair to a map.'
Subjects:
  - 'Code Foundations'
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

In Kotlin, the `.put()` method is used to add a key-value pair to a map. It is a member function of the `MutableMap` interface, which means it can be called on any object that implements this interface, such as a `HashMap` or `LinkedHashMap`.

## Syntax

```pseudo
fun <K, V> MutableMap<K, V>.put(key: K, value: V): V?
```

It takes in two parameters:

- The `key` of the key-value pair to add or update in the map.
- The `value` of the key-value pair to add or update in the map.

## Example

To add a key-value pair to a `HashMap` in Kotlin, the `.put()` method can be used. For example:

```kotlin
fun main() {
val map = HashMap<String, Int>()
map.put("apple", 1)
map.put("banana", 2)
map.put("cherry", 3)
}
```

The index operator `[]` can be used to add a key-value pair to a `HashMap`. For example:

```kotlin
fun main() {
val map = HashMap<String, Int>()

map["apple"] = 1
map["banana"] = 2
map["cherry"] = 3
}
```
