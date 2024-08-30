---
Title: '.tanh()'
Description: 'Computes the hyperbolic tangent of an angle.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Methods'
  - 'Functions'
CatalogContent:
  - 'learn-kotlin'
  - 'paths/computer-science'
---

The **`.tanh()`** method in Kotlin's `math` class computes the hyperbolic tangent of an angle given in radians. The method takes the angle as its one and only parameter and returns the computed value as `Double` or `Float` type.

## Syntax

```pseudo
tanh(x)
```

-`x`: This parameter takes a value of an angle in `Double` or `Float` type.

## Example

The following code is basic implementation of `math.tanh()`.

```kotlin
import kotlin.math.*
fun main() {
  val x = 1.0
  val y = tanh(x)
  // print results
  println(y)
}
```

This example will output:

```shell
0.7615941559557649
```
