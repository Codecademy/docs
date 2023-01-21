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

In Kotlin, the `put()` function is used to add a key-value pair to a map. It is a member function of the `MutableMap` interface, which means it can be called on any object that implements this interface, such as a `HashMap` or `LinkedHashMap`.

## Syntax

```pseudo
fun <K, V> MutableMap<K, V>.put(key: K, value: V): V?
```

It takes in two parameters:

- key: the key of the key-value pair to add or update in the map.
- value: the value of the key-value pair to add or update in the map.

## Example

To add a key-value pair to a `HashMap` in Kotlin, you can use the `put()` function. For example:

```kotlin
fun main(){
val map = HashMap<String, Int>()
map.put("apple", 1)
map.put("banana", 2)
map.put("cherry", 3)
}
```

We can also use the index operator `[]` to add a key-value pair to the `HashMap`. For example:

```kotlin
fun main(){
val map = HashMap<String, Int>()

map["apple"] = 1
map["banana"] = 2
map["cherry"] = 3
}
```
