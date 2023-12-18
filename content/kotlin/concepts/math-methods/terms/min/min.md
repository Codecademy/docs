---
Title: 'min()'
Description: 'Determines the smaller of two Number values.'
Subjects:
  - 'Code Foundation'
  - 'Computer Science'
Tags:
  - 'Math'
  - 'Functions'
CatalogContent:
  - 'learn-kotlin'
  - 'paths/computer-science'
---

The **`min()`** function in Kotlin's `math` class is used to determine the smaller value between two numbers of the same `Number` type.

## Syntax

```pseudo
min(a, b)
```

- `a`: The number of type `Number` to be compared.
- `b`: Another number, of the same type as `a`.

The `min()` function returns the smaller value between `a` and `b`. If either value is `NaN`, the function returns `NaN`.

> **Note**: To compare more than two numbers, use `minOf()`.

## Example

This example demonstrates how to use the `min()` function to determine the smaller value of two numbers:

```kotlin
import kotlin.math.min

fun main() {
  val minValue = min(3.4, 3.5)
  println(minValue)
}
```

The `min()` function compares `3.4` and `3.5` and returns the smaller number.

The output of this code will be:

```
3.4
```
