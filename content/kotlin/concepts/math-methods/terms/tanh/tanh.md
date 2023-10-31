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

The **`.tanh()`** method in Kotlin's `math` class computes the hyperbolic tangent of an angle given in radians.

## Syntax

```pseudo
import kotlin.math.*
val y = tanh(x)
```

The function accepts one mandatory parameter `x`. The argument can be of `Double` or `Float` datatype and it returns a value of the same type.

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
