---
Title: '.acos()'
Description: 'Calculates the arccosine, or inverse cosine of a value, returning the angle in radians.'
Subjects:
  - 'Code Foundation'
  - 'Computer Science'
Tags:
  - 'Math'
  - 'Functions'
CatalogContent:
  - 'learn-kotlin'
  - 'paths/computer-science'
---

The **`.acos()`** method in Kotlin's `math` class is used to calculate the arccosine of a given value, returning the corresponding angle in radians.

## Syntax

```pseudo
import kotlin.math.*
val angle = acos(value)
```

`value`: The given value to be used in the arccosine calculation. The value should be in the range `-1` to `1`.

The `.acos()` method returns a value of type `double` representing the angle in radians. The result will be in the range `0` to `PI`.

## Example

This example shows how to use the `acos()` method to calculate the arccosine of a value:

```kotlin
import kotlin.math.*

fun main() {
    val value = 0.5
    val angle = acos(value)
    println("The arccosine of $value is $angle radians.")
}
```

The output of this code will be:

```shell
The arccosine of 0.5 is 1.0471975511965979 radians.
```
