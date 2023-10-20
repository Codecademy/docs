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

The **`atanh()`** method in Kotlin's `math` class returns the inverse hyperbolic tangent of a number between `-1.0` and `1.0`.

## Syntax

```pseudo
val inverseHypTan = Math.atanh(x)
```

- `x`: A number between `-1.0` and `1.0`, of datatype `Double` or `Float`.

## Example

The `Math.atanh()` method returns the value `y` such that `tanh(y) == x`

```kotlin
fun main() {
  // Calculate inverse hyperbolic tangent of -0.1 and save as result
  val x = -0.1
  val result = atanh(x)

  // Print results
  println($result)
}
```

It will output:

```shell
-0.100335348
```

The returned value is `result` such that `tanh(y) == x`.

Special cases:
  `tanh(NaN)` is `NaN`
  `tanh(x)` is `NaN` when `x > 1` or `x < -1`
  `tanh(1.0)` is `+Inf`
  `tanh(-1.0)` is `-Inf`
