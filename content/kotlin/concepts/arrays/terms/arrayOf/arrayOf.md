---
Title: 'arrayOf()'
Description: 'Creates a new array containing the specified elements.'
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

In Kotlin, **`arrayOf()`** is used to create a new array containing the specified elements.

## Syntax

```pseudo
arrayOf(vararg elements: T): Array<T>
```

- `elements: T`: A variable number of elements of type `T` to be included in the array. This is indicated by the `vararg` keyword, allowing any number of elements to be passed.

## Example

This example demonstrates the use of `arrayOf()` to create an array with a specified set of elements:

```kotlin
fun main() {
  val array = arrayOf(10, 20, 30, 40, 50)

  // Print the contents of the array
  println(array.contentToString())
}
```

The above code produces the following output:

```shell
[10, 20, 30, 40, 50]
```
