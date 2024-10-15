---
Title: '.map()'
Description: 'Transforms elements in a collection by applying a specified transformation function, resulting in a new collection with the transformed values.'
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

In Kotlin, the **`.map()`** method transforms elements in a collection (Array, List, or Set) using the provided logic. It does not modify the original collection, ensuring data permanence, which can be useful in scenarios where the original data must remain unchanged.

## Syntax

```pseudo
fun <T, R> Iterable<T>.map(transform: (T) -> R): List<R>
```

Or alternatively:

```pseudo
fun <T, R> Array<T>.map(transform: (T) -> R): List<R>
```

- `T`: The type of the elements in the original collection (or array).
- `R`: The type of the elements in the resulting list after transformation.
- `transform`: A function that takes an element of type `T` and returns a transformed value of type `R`.

It returns a `List<R>` containing the transformed elements.

## Example

The following example uses the `.map()` function:

```kotlin
fun main() {
    // Initialize an Array of numbers.
    val numbers = arrayOf(4, 12, 14, 17, 8)

    // Use .map() to multiply each element by 2
    val doubledNumbers = numbers.map { it * 2 } // Transforms each element by multiplying it by 2

    // Print the transformed array
    println(doubledNumbers)
}
```

The code above generates the following output:

```shell
[8, 24, 28, 34, 16]
```
