---
Title: 'atan2()'
Description: 'Calculates the angle between the positive x-axis and a point (x, y) in radians.'
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

The **`atan2()`** method in Kotlin's `math` class is used to calculate the angle (in radians) between the positive x-axis and a point specified by its Cartesian coordinates (x, y).

## Syntax

```pseudo
import kotlin.math.*
val angle = atan2(y, x)
```

- `x`: The x-coordinate of the point.
- `y`: The y-coordinate of the point.

The `atan2()` method returns a value of type double representing the angle in radians. The result will be in the range of _-π_ to _π_.

## Example

This example shows how use the `atan2()` method to calculate the angle between the positive x-axis and a point with coordinates (3.0, 4.0):

```kotlin
import kotlin.math.*
fun main() {
  val x = 3.0
  val y = 4.0

  val angle = atan2(y, x)
  println("The angle between the positive x-axis and the point ($x, $y) is $angle radians.")
}
```

The code above will result in the following output:

```shell
The angle between the positive x-axis and the point (3.0, 4.0) is 0.9272952180016122 radians.
```
