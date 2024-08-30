---
Title: 'asinh()'
Description: 'Returns the inverse hyperbolic sine of a numeric argument.'
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

The **`asinh()`** function returns the inverse hyperbolic sine of a number.

## Syntax

```pseudo
asinh(x)
```

The function accepts one mandatory parameter `x`. It can be any value i.e., `negative`, `positive`, or `zero`. The argument can be of `Double`, `Float` or `Long` datatype.

The function returns the inverse hyperbolic sine of the argument. The return value will be of the same type as the argument.

## Example

The example below demonstrates how to use the method to return the value of the inverse hyperbolic sine of `1.0`.

```kotlin
import kotlin.math.asinh
fun main() {
    // Calculate the inverse hyperbolic sine of 1.0
    val result = asinh(1.0)

    // Print the result
    println(result)
}
```

The output will be:

```shell
0.881373587019543
```
