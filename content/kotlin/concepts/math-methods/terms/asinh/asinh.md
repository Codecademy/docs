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

The function accepts one mandatory parameter `x`. It can be any value i.e. `negative`, `positive`, or `zero`. The parameter can be of  `double`, `float` or `long` datatype. 

The function returns the inverse hyperbolic sine of the argument. The return value can be of `double`, `float` or `long` datatype.

## Example

The example below is finding the value of the inverse hyperbolic sine of 1.0

The `asinh()` function calculates the inverse hyperbolic sine of 1.0, which is 0.881373587019543 and `println(result)`, prints the value of the result variable to the console.

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
