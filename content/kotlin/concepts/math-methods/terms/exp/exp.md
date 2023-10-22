---
Title: 'exp()'
Description: 'Returns e raised to the power of a given number.'
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

The **`exp()`** method in Kotlin's `math` class is used to calculate Euler's number _e_ raised to the power of a given number.

## Syntax

```pseudo
exp(number)
```

- `number`: A number of type `Double` or `Float`. The method returns a number, of the same type given.

## Example

This example demonstrates a basic implementation of the `exp()` method.

```kotlin
import kotlin.math.exp
fun main() {
    val number = 3.0
    val ePowNumber = exp(number)
    println("Euler's number e raised to the power of $number is $ePowNumber.")
}
```

The code above will result in the following output:

```shell
Euler's number e raised to the power of 3.0 is 20.085536923187668.
```
