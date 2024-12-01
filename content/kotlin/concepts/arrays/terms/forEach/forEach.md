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

In Kotlin, the **`.forEach()`** method iterates over elements in a collection ([array](https://www.codecademy.com/resources/docs/kotlin/arrays), list, or [set](https://www.codecademy.com/resources/docs/kotlin/sets)) and performs the provided action on each element. It does not modify the original collection or return a new one, making it useful for operations with side effects like printing or logging.

## Syntax

```pseudo
fun <T> Iterable<T>.forEach(action: (T) -> Unit)
```

Or alternatively:

```pseudo
fun <T> Array<T>.forEach(action: (T) -> Unit)
```

- `T`: The type of the elements in the collection (or array).
- `action`: A [function](https://www.codecademy.com/resources/docs/kotlin/functions) that takes an element of type `T` and performs an action on it.

## Example

The following example demonstrates the usage of the `.forEach()` method:

```kotlin
fun main() {
  // Initialize an array of numbers
  val numbers = arrayOf(4, 12, 14, 17, 8)

  // Use .forEach() to print each element multiplied by 2
  numbers.forEach { println(it * 2) }
}
```

The above code generates the following output:

```shell
8
24
28
34
16
```
