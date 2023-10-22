---
Title: 'atanh()'
Description: 'Calculates the inverse hyperbolic tangent of a value.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
  - 'Mathmatics'
Tags:
  - 'Double'
  - 'Float'
  - 'Methods'
  - 'Functions'
CatalogContent:
  - 'learn-kotlin'
  - 'paths/computer-science'
---

The **`atanh()`** method in Kotlin's `math` class returns the inverse hyperbolic tangent of any number between `-1.0` and `1.0` in radians.

## Syntax

```pseudo
import kotlin.math.*
val y = math.atanh(x)
```

- `x`: A number between `-1.0` and `1.0`, of type `Double` or `Float`.

### Special Cases

  - tanh(NaN) = NaN
  - tanh(x) = NaN if x > 1 || x < -1
  - tanh(1.0) = +Inf
  - tanh(-1.0) = -Inf

## Example

The following code is a basic implementation of `math.atanh(x)`.
```kotlin
import kotlin.math.*
fun main() {
  val x = -0.1
  val y = atanh(x)

  // Print results
  println('y')
}
```

It will output:

```shell
-0.100335348
```

The returned value is `y` such that `tanh(y) == x`.



