---
Title: 'atanh()'
Description: 'Calculates the inverse hyperbolic tangent of a value (x) in radians.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Double'
  - 'Float'
  - 'Math'
  - 'Functions'
CatalogContent:
  - 'learn-kotlin'
  - 'paths/computer-science'
---

The **`atanh()`** method in Kotlin's `math` class calculates the inverse hyperbolic tangent of a number between -1.0 and 1.0 in radians.

## Syntax

```pseudo
import kotlin.math.*
atanh(x)
```

- `x`: A number between `-1.0` and `1.0`, of datatype `Double` or `Float`.

The `Math.atanh()` method returns the value `y` such that `tanh(y) == x`

## Example

The example below show how to implement the `atanh()` method to calculate the inverse hyperbolic tangent of -0.1:

```kotlin
import kotlin.math.*
fun main() {
  
  val result = atanh(-0.1)
  println("$result")
}
```

The above code will output:

```shell
-0.100335348
```

The returned value is `result` such that `tanh(y) == x`.

Special cases:
  `tanh(NaN)` is `NaN`
  `tanh(x)` is `NaN` when `x > 1` or `x < -1`
  `tanh(1.0)` is `+Inf`
  `tanh(-1.0)` is `-Inf`
