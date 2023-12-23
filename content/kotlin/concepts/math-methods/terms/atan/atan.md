---
Title: 'atan()'
Description: 'Returns the arc tangent of a value.'
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

The **`atan()`** method in Kotlin's `math` class is used to calculate the arc tangent of a value. It returns the value of the angle in the range from _-PI/2_ to _PI/2_ radians.

## Syntax

```pseudo
atan(x)
```

- `x`: The number for which the arc tangent is to be calculated.

The `atan()` method returns a value of type `double` or `float` depending also on the type of the input respectively. If the argument passed is `NaN`, the method will return `NaN`.

## Example

This example shows how to use the `atan()` method to calculate the arc tangent of `90.0`:

```kotlin
import kotlin.math.*

fun main(){
    println(atan(90.0))
}
```

The output of this code will be:

```shell
1.5596856728972892
```
