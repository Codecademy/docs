---
Title: '.filterNot()'
Description: 'Returns all elements of the original sequence not present in the predicate.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Filter'
  - 'Collections'
  - 'Strings'
CatalogContent:
  - 'learn-kotlin'
  - 'paths/computer-science'
---

The **`.filterNot()`** method will filter elements from a Kotlin sequence based on whether or not the same element is present in the given predicate.

## Syntax

```pseudo
String.filterNot(predicate)
```

-`String`: The collection of elements to be filtered. -`predicate`: The collection of elements to be filtered out.

## Example

The example demonstrates the use of `.filterNot()` to remove any pairs in the map with a value less than `2`, and then to filter out any pairs with the key `c`.

```kotlin
fun main() {
  val originalMap = mapOf("a" to 1, "b" to 2, "c" to 3)

  val filteredMap = originalMap.filterNot(it.value < 2)
  println(filteredMap)

  val filteredMap2 = originalMap.filterNot(it.key == "c")
  println(filteredMap2)
}
```

The output of this code will be:

```shell
{b=2, c=3}
{a=1, b=2}
```
