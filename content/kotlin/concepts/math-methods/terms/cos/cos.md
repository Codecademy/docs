---
Title: 'cos()'
Description: 'Calculates the cosine of an angle in radians.'
Subjects:
  - 'Mathematics'
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Math'
  - 'Functions'
CatalogContent:
  - 'learn-kotlin'
  - 'paths/computer-science'
---

The **`math.cos()`** method in Kotlin's `math` class is used to calculate the cosine of an angle in radians.

## Syntax

```pseudo
val cosineValue = cos(angle)
```

- `angle`: The angle in radians for which to calculate the `cosine`.
- The `math.cos()` method returns a value of type `Double` representing the cosine of the input angle.

## Example

The example below demonstrates how to use `math.cos()` method to calculate the cosine of an angle:

```kotlin
import kotlin.math.*
fun main() {
    val angle = PI / 3.0  // 60 degrees in radians

    val cosineValue = cos(angle)
    println("The cosine of $angle radians is $cosineValue.")
}
```

This results in the following output:

```shell
The cosine of 1.0471975511965979 radians is 0.5000000000000001.
```
