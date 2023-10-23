---
Title: 'sin()'
Description: 'Calculates the sine of an angle in radians.'
Subjects:
  - 'Mathematics'
  - 'Code Foundation'
  - 'Computer Science'
Tags:
  - 'Math'
  - 'Functions'
CatalogContent:
  - 'learn-kotlin'
  - 'paths/computer-science'
---

The **`math.sin()`** method in Kotlin's `math` class is used to calculate the sine of an angle in radians.

## Syntax

```pseudo
import kotlin.math.sin
val sineValue = sin(angle)
```

- `angle`: The angle in radians for which you want to calculate the sine.

The `math.sin()` method returns a value of type `Double` representing the sine of the input angle.

## Example

This example shows how to use the `math.sin()` method to calculate the sine of an angle:

```kotlin
import kotlin.math.*
fun main() {
    val angle = PI / 6.0  // 30 degrees in radians

    val sineValue = sin(angle)
    println("The sine of $angle radians is $sineValue.")
}
```

This results in the following output:

```shell
The sine of 0.5235987755982989 radians is 0.49999999999999994.
```
