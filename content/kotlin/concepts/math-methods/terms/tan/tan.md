---
Title: 'tan()'
Description: 'Returns the tangent of an angle.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Double'
  - 'Float'
  - 'Methods'
  - 'Functions'
CatalogContent:
  - 'learn-kotlin'
  - 'paths/computer-science'
---

The **`tan()`** function is used to calculate the tangent of an angle. The tangent of an angle is the ratio of the length of the opposite side to the length of the adjacent side in a right triangle.

## Syntax

```pseudo
tan(x)
```

- The function accepts one mandatory parameter `x`. They all take an angle in radians as `Double` or `Float` as a parameter.
- The function returns a `Double` value, which is the tangent of the angle.

## Example

The example below demonstrates how to use the `tan()` function in Kotlin to calculate the tangent of the angle `45` degrees in radians.

```kotlin
import kotlin.math.*
fun main() {
  val angleInRadians = Math.toRadians(45.0)
  val tangent = tan(angleInRadians)

  println(tangent)
}
```

The output will be:

```shell
1.0
```
