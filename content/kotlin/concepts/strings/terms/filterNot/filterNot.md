---
Title: '.filterNot()'
Description: 'when called on an iterable and given a predicate, the function returns all elements of the original sequence not present in the predicate' 
Subjects: 
  - 'Code Foundations'
  - 'Computer Science'
  - 'Mobile Devealopment'
Tags: 
  - 'Filter'
  - 'Collections'
  - 'Kotlin'
CatalogContent:
  - 'learn-kotlin'
  - 'paths/computer-science'
---

The **.filterNot** method will filter elemnts from a Kotlin sequences based on whether or not the same element is present in the given predicate.

## Syntax

```pseudo
inline fun String.filterNot(
    predicate: (Char) -> Boolean
): String
```

`String`: The collection of elements to be filtered. can be any iterable dtype. 

`Predicate`: The collection of elements to be filtered out.

The `.filterNot(predicate)` method returns the collection it was called on, with any values present in `predicate` filtered out

## Example

```kotlin
val originalMap = mapOf("a" to 1, "b" to 2, "c" to 3)

val filteredMap = originalMap.filterNot { it.value < 2 }
println(filteredMap) // {b=2, c=3}


val filteredMap2 = originalMap.filterNot { it.key == 'c'
}
println(filteredMap2) // {a=1, b=2}
```

In the above example .filterNot() is first used to filter out any pairs in the map with a value less than 2, leaving {b=2, c=3}, then used to filter out any pairs with the key 'c', leaving 
{a=1, b=2}.