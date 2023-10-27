---
Title: '.abs()'
Description: 'Returns the absolute value of the argument.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Methods'
  - 'Arithmetic'
CatalogContent:
  - 'learn-kotlin'
  - 'paths/computer-science'
---

## Description

The `.abs()` method in Kotlin's Math library is used to calculate the absolute value of a numeric expression. The absolute value is the non-negative value of a number, effectively removing its negative sign, if present.

### Syntax

```pseudo
Math.abs(n)
```

`n`: A numeric expression (e.g., `Int`, `Long`, `Double`, `Float`, etc.) for which you want to calculate the absolute value.

The method takes the numeric expression n as its argument and returns the absolute value, ensuring that the result is always a non-negative value.

## Example 

```kotlin
import kotlin.math.abs

fun main() {
    val x = -6.5
    val y = 2
    val z = -340.8

    val absoluteX = abs(x)
    val absoluteY = abs(y)
    val absoluteZ = abs(z)

    println("Absolute value of x: $absoluteX")
    println("Absolute value of y: $absoluteY")
    println("Absolute value of z: $absoluteZ")
}
```

In this example, the **`abs`** function is imported from the `kotlin.math` library and employed to calculate the absolute values of different numeric expressions. The results are subsequently printed to the console. 

The output of this code will be:

```shell
Absolute value of x: 6.5
Absolute value of y: 2
Absolute value of z: 340.8
```

The **`.abs()`** method is notably useful when ensuring that a value is treated as positive, irrespective of its original sign.
