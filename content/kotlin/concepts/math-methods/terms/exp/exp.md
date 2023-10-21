---
Title: 'exp()'
Description: 'Calculates the Euler's number e raised to the power of the value of a given number.'
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

The **`exp()`** method in Kotlin's `math` class is used to calculate the Euler's number e raised to the power of the value of the given number.

## Syntax

```pseudo
exp(number)
```

- `number`: The number for which you want to calculate the Euler's number e raised to the power. It should be of type `Double` or `Float`.

The method returns a number, of the same type given. 

## Example

This example shows how to use the `exp()` method to calculate the Euler's number e raised to the power of the value of the given number.

```kotlin
import kotlin.math.exp
fun main() {
    val number = 3.0
    val ePowNumber = exp(number)
    println("The Euler's number e raised to the power of $number is $ePowNumber.")
}
```

The code above will result in the following output:

```shell
The Euler's number e raised to the power of 3.0 is 20.085536923187668.
```