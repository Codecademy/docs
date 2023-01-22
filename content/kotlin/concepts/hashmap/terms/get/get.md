---
Title: '.get()'
Description: 'Retrieves and returns the value associated with a particular key in a HashMap.'
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

The **`get()`** retrieves and returns the value associated with a particular key, or `null` if it doesn't exist.

## Syntax

```pseudo
myHashMap.get(key: K): V?
```

The `key` parameter is of [data type](https://www.codecademy.com/resources/docs/kotlin/data-types) `K`. If the `key` exists in `myHashMap`, the associated value, of type `V`, is returned. Otherwise, `null` is returned.

## Example

The following example demonstrates how the `.get()` function is used to retrieve a value:

```kotlin
fun main() {
  val hashMap = HashMap<String, Int>().apply {
    put("apple", 1)
    put("banana", 2)
    put("cherry", 3)
  }
  val value = hashMap.get("apple")
  System.out.println(value)
}
```

This will print the following output:

```
1
```
