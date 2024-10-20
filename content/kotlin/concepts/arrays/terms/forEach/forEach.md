---
Title: '.forEach()'
Description: 'Iterates over elements in a collection and performs a specified action on each element, without producing a new collection.'
Subjects:
  - 'Code Foundations'
  - 'Mobile Development'
Tags:
  - 'Android'
  - 'Arrays'
  - 'ForEach'
  - 'Kotlin'
CatalogContent:
  - 'learn-kotlin'
  - 'paths/computer-science'
---

In Kotlin, the **`.forEach()`** method iterates over elements in a collection (Array, List, or Set) and performs the provided action on each element. It does not modify the original collection and does not return a new collection, making it useful for operations that have side effects like printing or logging.

## Syntax

```pseudo
fun <T> Iterable<T>.forEach(action: (T) -> Unit)
```

Or alternatively:

```pseudo
fun <T> Array<T>.forEach(action: (T) -> Unit)
```

- `T`: The type of the elements in the collection (or array).
- `action`: A function that takes an element of type T and performs an action.

## Codebyte Example

The following example demonstrates the usage of the `.forEach()` function:

```kotlin
fun main() {
    // Initialize an Array of numbers.
    val numbers = arrayOf(4, 12, 14, 17, 8)

    // Use .forEach() to print each element multiplied by 2
    numbers.forEach { println(it * 2) } // Prints each element multiplied by 2
}
```

The code generates the following output:

```shell
8
24
28
34
16
```
