---
Title: 'Math.sin()'
Description: 'Calculates the sine of an angle in radians.'
Subjects:
  - 'Mathematics'
  - 'Programming'
  - 'Computer Science'
Tags:
  - 'Math'
  - 'Functions'
CatalogContent:
  - 'learn-kotlin'
  - 'paths/computer-science'
---

The **`Math.sin()`** method in Kotlin's `Math` class is used to calculate the sine of an angle in radians.

## Syntax

```pseudo
val sineValue = Math.sin(angle)
```

- `angle`: The angle in radians for which you want to calculate the sine.

The `Math.sin()` method returns a value of type `Double` representing the sine of the input angle.

## Example

This example shows how to use the `Math.sin()` method to calculate the sine of an angle:

```kotlin
fun main() {
    val angle = Math.PI / 6.0  // 30 degrees in radians

    val sineValue = Math.sin(angle)
    println("The sine of $angle radians is $sineValue.")
}
```

In this example, the `Math.sin()` method calculates the sine, and the result will be printed as:

```shell
The sine of 0.5235987755982989 radians is 0.49999999999999994.
```
