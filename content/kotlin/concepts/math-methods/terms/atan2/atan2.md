---
Title: '.atan2()'
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

The **`.atan2()`** method in Kotlin's `Math` class is used to calculate the angle (in radians) between the positive x-axis and a point specified by its Cartesian coordinates (x, y).

## Syntax

```pseudo
val angle = Math.atan2(y, x)
```

- x: The x-coordinate of the point.
- y: The y-coordinate of the point.

The .atan2() method returns a value of type Double representing the angle in radians. The result is in the range [-π, π].

## Example

This example shows how use the .atan2() method to calculate the angle between the positive x-axis and a point with coordinates (3.0, 4.0):

```
fun main() {
    val x = 3.0
    val y = 4.0

    val angle = Math.atan2(y, x)
    println("The angle between the positive x-axis and the point ($x, $y) is $angle radians.")
}
```

In this example, the .atan2() method calculates the angle, and the result will output:

```shell
The angle between the positive x-axis and the point (3.0, 4.0) is 0.93 radians.
```
