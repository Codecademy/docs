---
Title: '.remove()'
Description: 'Used to remove a key-value pair from a HashMap'
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

To remove a key-value pair from a `HashMap` in Kotlin, you can use the `remove()` function.

## Syntax

```pseudo
fun <K, V> MutableMap<K, V>.remove(key: K): V?
```

It takes one argument:

- `key`: the key of the key-value pair to be removed
- `V?` : the value associated with the removed key or null if the key is not found in the map.

## Example

Here is an example of how we can use the `remove()` function in a Kotlin program:

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
