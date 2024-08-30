---
Title: 'cosh()'
Description: 'Computes the hyperbolic cosine of an angle.'
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

The **`cosh()`** method in Kotlin's `math` class computes the hyperbolic cosine of a angle given in radians.

## Syntax

```pseudo
import kotlin.math.*
val y = cosh(x)
```

`x`: An angle of type `Double` or `Float`.

Special cases:

- `cosh(NaN)` yields `NaN`
- `cosh(+Inf|-Inf)` yields `+Inf`

## Example

The following code is basic implementation of `math.cosh()`.

```kotlin
import kotlin.math.*
fun main(){
  val x = 30.0
  val y = cosh(x)

  //print results
  println(y)
}
```

This example will output:

```shell
1.1402383210764286
```
