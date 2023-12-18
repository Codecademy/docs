---
Title: 'hypot()'
Description: 'Returns the hypotenuse of two numbers.'
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

The **`hypot()`** method in Kotlin's `math` class is used to calculate the hypotenuse of two numbers in a way that avoids overflow and underflow. It returns the square root of the sum of the squares of its two arguments. This is also known as the Euclidean norm of a two-dimensional vector.

## Syntax

```pseudo
hypot(x,y)
```

- `x`: One of the two numbers whose hypotenuse is to be calculated.
- `y`: The other number whose hypotenuse is to be calculated.

The `hypot()` method returns a value of type `double`. The following are the special cases:

- `+Inf` if `x` or `y` is infinite.
- `NaN` if `x` or `y` is `NaN` and the other is not infinite.

## Example

This example shows how to use the `hypot()` method to calculate the hypotenuse of `3` and `4`:

```kotlin
import kotlin.math.*

fun main(){
    println(hypot(3.0,4.0))
}
```

The output of this code will be:

```shell
5.0
```
