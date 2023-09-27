---
Title: 'Arrays'
Description: 'Arrays are collections of items of the same data-type with 0-based indexing that are stored at contiguous memory locations.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Arrays'
  - 'Data Types'
  - 'Data Structures'
CatalogContent:
  - 'learn-kotlin'
  - 'paths/computer-science'
---

**Arrays** are collections of items of the same data type with 0-based indexing that are stored at contiguous memory locations.

## Syntax

```pseudo
// Array class instance
arrayOne = arrayOf<Type>(values)
arrayTwo = Array(size) iteratorFunction

// Array of primitive types
arrayThree: TypeArray = typeArrayOf(values)
arrayFour = TypeArray(size) iteratorFunction
```

Instances of the `Array` class are created in either of the following ways:

- The `arrayOf()` function accepts an optional `<Type>` and a comma-separated list of `values`.
- With the `Array()` class constructor that accepts a `size` parameter and an `iteratorFunction` for populating the array.

Arrays of primitive type values can also be created:

- In lieu of `TypeArray`, actual class names (e.g., `IntArray`) should be used for typing or constructing the new array.
  - The `TypeArray()` constructor uses a `size` parameter as well as an `iteratorFunction`.
- The `typeArrayOf()` function uses a list of `values` to create an array of a certain data type (e.g., `intArrayOf()`).

## Example

The following example uses the `Array()` class constructor to create and populate a `num` array. The elements are then printed:

```kotlin
fun main() {
  val num = Array(5, {i-> i*1})
  for (i in 0..num.size - 1) {
    print(" " + num[i])
  }
  println()
}
```

This prints the following output:

```shell
0 1 2 3 4
```
