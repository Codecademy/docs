---
Title: 'sinh()'
Description: 'Calculates the hyperbolic sine of a given number.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Math'
  - 'Functions'
CatalogContent:
  - 'learn-kotlin'
  - 'paths/computer-science'
---

The **`math.sinh()`** method in Kotlin's `math` class is used to calculate the hyperbolic sine of a given number.

## Syntax

```pseudo
import kotlin.math.sinh
val hyperbolicSine = sinh(number)
```

- `number`: The number, of type `Double` or `Float`, to be used in the calculation of the hyperbolic sine.

## Example

This example shows how to use the `sinh()` method to calculate the hyperbolic sine of a number:

```kotlin
import kotlin.math.sinh
fun main() {
    val number = 2.0

    val hyperbolicSine = sinh(number)
    println("The hyperbolic sine of $number is $hyperbolicSine.")
}
```

The code above will result in the following output:

```shell
The hyperbolic sine of 2.0 is 3.6268604078470186.
```
