---
Title: 'acosh()'
Description: 'Returns the inverse hyperbolic cosine of a numeric argument.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Kotlin'
  - 'Math'
  - 'Methods'
  - 'Functions'
CatalogContent:
  - 'learn-kotlin'
  - 'paths/computer-science'
---

The **`acosh()`** function is used to calculate the inverse hyperbolic cosine(arccosh) of a given number.

## Syntax

```pseudo
acosh(x)
```

The function accepts one mandatory parameter `x`, which should be a numeric value greater than or equal to `1`. The argument can be of `Double` and `Float` datatype.

> **Note**: It returns the hyperbolic arccosine of the argument, which represents a real number.

## Example

The example below demonstrates how to use `acosh()` to calculate the hyperbolic arccosine of `2.0`.

```kotlin
import kotlin.math.acosh
fun main() {
    val x = 2.0
    val result = acosh(x)
    println(result)
}
```

The output will be:

```shell
1.3169578969248166
```
