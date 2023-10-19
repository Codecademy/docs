---
Title: '.atanh()'
Desciption: 'Computes the inverse hyperbolic tangent of the value x'
Subjects:
  - 'Data Science'
  - 'Computer Science'
  - 'Mobile Developement'
Tags:
  - 'Android'
  - 'Math'
CatalogContent:
  - 'learn-kotlin'
  - 'paths/computer-science'
---

The **`.atanh()`** method computes the hyperbolic tangent of the value `x`.<br>The returned value is `y` such that `.tanh(y) == x`.

## Syntax:

```pseudo
  import kotlin.math.*
  Math.atanh(x)
```

## Example:
```kotlin
  import kotlin.math.*
  fun main() {
    val x = 0.76159416
    Math.atanh(x)
//returns 1.00000001
}
```
