---
Title: 'sqrt()'
Description: 'Calculates the square root of a given number.'
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

The **`math.sqrt()`** method in Kotlin's `math` class is used to calculate the square root of a given number.

## Syntax

```pseudo
import kotlin.math.sqrt
val squareRoot = sqrt(number)
```

- `number`: The number for which the square root is to be calculated. It should be a non-negative value (zero or a positive number) of type `Double` or `Float`.

The method returns a number, of the same type given, representing the square root. The result is a non-negative value or `NaN` if the input is negative.

## Example

This example shows how to use the `sqrt()` method to calculate the square root of a number:

```kotlin
import kotlin.math.sqrt
fun main() {
    val number = 25.0

    val squareRoot = sqrt(number)
    println("The square root of $number is $squareRoot.")
}
```

The code above will result in the following output:

```shell
The square root of 25.0 is 5.0.
```
