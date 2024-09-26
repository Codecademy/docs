---
Title: '.map()'
Description: 'map() is a Kotlin method that transforms elements in a collection.'
Subjects: 
  - 'Code Foundations'
  - 'Mobile Development'
Tags: 
  - 'Android'
  - 'Arrays'
  - 'Map'
  - 'Kotlin'
CatalogContent: 
  - 'learn-kotlin'
  - 'paths/computer-science'
---

**map()** is a Kotlin method that transforms elements in a collection (Array, List, or Set) using the provided logic. It does not modify the original collection, which can be useful when data permanence is required.


## Syntax
collection.map { element -> transformation logic }


##Example
```pseudo
fun main () {
//Initialize an Array of numbers.
val numbers = arrayof(4, 12, 14, 17, 8)

//Use map() to multiply each element by 2
val doubledNumbers = numbers.map { it * 2 }

//Print the transformed array
println(doubledNumbers)
 }
