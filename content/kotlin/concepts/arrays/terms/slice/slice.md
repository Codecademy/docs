---
Title: '.slice()'
Description: 'Creates a new list containing elements from the specified range or indices of an array.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Arrays'
  - 'Elements'
  - 'Kotlin'
  - 'Functions'
CatalogContent:
  - 'learn-kotlin'
  - 'paths/computer-science'
---

In Kotlin, the **`.slice()`** function is used to create a new list containing elements from the specified range or indices of an array.

## Syntax

```pseudo
array.slice(indices: IntRange): List<T>
```

Or, alternatively:

```pseudo
array.slice(indices: List<Int>): List<T>
```

- `indices: IntRange`: A range of indices from which the elements will be selected.
- `indices: List<Int>`: A list of specific indices representing the elements to be included in the new list.

## Example

The following example demonstrates the usage of the `.slice()` function with both `IntRange` and `List<Int>`:

```kotlin
fun main() {
  val array = arrayOf(10, 20, 30, 40, 50)

  // Using IntRange to slice the array
  val sliceRange = array.slice(1..3) // Includes elements at indices 1, 2, and 3
  println("Slice using IntRange: $sliceRange")

  // Using List<Int> to slice the array
  val sliceList = array.slice(listOf(0, 2, 4))  // Selects elements at indices 0, 2, and 4
  println("Slice using List<Int>: $sliceList")
}
```

The above code produces the following output:

```shell
Slice using IntRange: [20, 30, 40]
Slice using List<Int>: [10, 30, 50]
```
