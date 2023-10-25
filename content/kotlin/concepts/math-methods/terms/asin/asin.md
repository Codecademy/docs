---
title: 'asin()'
description: 'Returns the arcsine of a numeric argument.'
subjects:
  - 'Code Foundations'
  - 'Computer Science'
tags:
  - 'Double'
  - 'Float'
  - 'Methods'
  - 'Functions'
catalogContent:
  - 'learn-kotlin'
  - 'paths/computer-science'
---

The **`asin()`** function returns the arcsine of a number.

## Syntax

```pseudo
asin(x)
```

The function accepts one mandatory parameter `x`. It should be a numeric value in the range between `-1` and `1` (inclusive). The argument can be of `Double`, `Float`, or `Long` datatype.

The function returns the arcsine of the argument, which represents an angle in radians. The return value will be of the same type as the argument.

## Example

The example below demonstrates how to use the method to return the arcsine of `0.5`.

```kotlin
import kotlin.math.asin
fun main() {
    // Calculate the arcsine of 0.5
    val result = asin(0.5)

    // Print the result
    println(result)
}
```

The output will be:

```shell
0.5235987755982989
```

