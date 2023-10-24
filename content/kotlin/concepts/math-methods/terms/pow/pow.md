---
Title: 'pow()'
Description: 'Calculates a number raised to the power of another number.'
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

The **`pow()`** method in Kotlin's `math` class is used to calculate a number raised to the power of another number. It takes two parameters - the base (number to be raised to a power) and the exponent (the power to which the base is raised). The base and component can be either a double or float but not an integer.

## Syntax

```pseudo
import kotlin.math.*
fun base: Double.pow(exponent: Double): Double
fun base: Double.pow(exponent: Float): Float
```

- `base`: The base number.
- `exponent`: The number that raises the base number.

The `pow()` method returns a value of type double or float.

## Example

This example shows how use the `pow()` method to calculate 5.0 raised to the power of 2.5:

```kotlin
import kotlin.math.pow

fun main() {
  val base = 5.0
  val exponent = 2.5

 val result = base.pow(exponent)
  println("$base raised to the power of $exponent is $result.")
}
```

The code above will result in the following output:

```shell
5.0 raised to the power of 2.5 is 55.90169943749474.
```
