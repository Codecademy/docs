---
Title: 'atanh()'
Description: 'Calculates the inverse hyperbolic tangent of a value'
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

The **`atanh()`** method in Kotlin's `math` class returns the inverse hyperbolic tangent of a number between `-1.0` and `1.0` in radians.

## Syntax

```pseudo
atanh(x)
```

- `x`: A number between `-1.0` and `1.0`, of datatype `Double` or `Float`.

## Example

The `Math.atanh()` method returns the value `y` such that `tanh(y) == x`

```kotlin
import kotlin.math.atanh
fun main() {
  // Calculate inverse hyperbolic tangent of -0.1 and save as result
  val result = atanh(-0.1)

  // Print results
  println(result)
}
```

The output will be:

```shell
-0.100335348
```

The returned value is `result` such that `tanh(y) == x`.

Special cases:
  `tanh(NaN)` is `NaN`
  `tanh(x)` is `NaN` when `x > 1` or `x < -1`
  `tanh(1.0)` is `+Inf`
  `tanh(-1.0)` is `-Inf`
