---
Title: '.sort()'
Description: 'Returns a sorted array, modifying the original array in-place to arrange its elements in ascending order.'
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

The **`.sort()`** function in Kotlin sorts the elements of an array in ascending order in-place, meaning it rearranges the original array. It does not return a new array but modifies the existing one, making the change directly to the array.

## Syntax

```pseudo
arrayName.sort()
```

- `arrayName`: Refers to the variable that holds the array to be sorted.

## Example

This example demonstrates the use of `.sort()` to sort the elements of an array in ascending order:

```kotlin
fun main() {
  val array = arrayOf(5, 2, 9, 1, 4)

  // Sort the array in ascending order
  array.sort()

  // Print the array contents
  println(array.contentToString())
}
```

The above code produces the following output:

```shell
[1, 2, 4, 5, 9]
```
