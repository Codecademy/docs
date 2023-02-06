---
Title: '.remove()'
Description: 'Used to remove a key-value pair from a HashMap.'
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

The **`.remove()`** method is used to remove a key-value pair from a `HashMap` in Kotlin.

## Syntax

```pseudo
fun <K, V> MutableMap<K, V>.remove(key: K): V?
```

It takes one parameter and returns:

- `key`: the key of the key-value pair to be removed
- `V?` : the value associated with the removed key or null if the key is not found in the map.

## Example

Here is an example of how to use the `.remove()` method in a Kotlin program:

```kotlin
fun main(){
  val myMap = hashMapOf("key1" to "value1", "key2" to "value2")
  val removedValue = myMap.remove("key1")
  print(myMap)
}
```

The output for the above code will be:

```
{key2=value2}
```
