---
Title: '.put()'
Description: 'Adds a key-value pair to a hash map.'
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

In Kotlin, the `.put()` method is used to add a key-value pair to a hash map. It is a member function of the `MutableMap` interface, which means it can be called on any object that implements this interface, such as a `HashMap` or `LinkedHashMap`.

## Syntax

```pseudo
myHashMap.put(key, value)
```

It takes in two parameters:

- The `key` of the key-value pair to add or update in the hash map.
- The `value` of the key-value pair to add or update in the hash map.

## Example

To add a key-value pair to a `HashMap` in Kotlin, the `.put()` method can be used:

```kotlin
fun main() {
  val map = HashMap<String, Int>()

  map.put("apple", 1)
  map.put("banana", 2)
  map.put("cherry", 3)

  println(map)
}
```

This will output:

```shell
{banana=2, apple=1, cherry=3}
```
