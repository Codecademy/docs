---
Title: 'sinh()'
Description: 'Calculates the hyperbolic sine of a given number.'
Subjects:
  - 'Mathematics'
  - 'Programming'
  - 'Computer Science'
Tags:
  - 'Math'
  - 'Functions'
CatalogContent:
  - 'learn-kotlin'
  - 'paths/computer-science'
---

The **`Math.sinh()`** method in Kotlin's `Math` class is used to calculate the hyperbolic sine of a given number.

## Syntax

```pseudo
val hyperbolicSine = Math.sinh(number)
```

- `number`: The number for which you want to calculate the hyperbolic sine.

The `Math.sinh()` method returns a value of type `Double` representing the hyperbolic sine of the input number.

## Example

This example shows how to use the `Math.sinh()` method to calculate the hyperbolic sine of a number:

```kotlin
fun main() {
    val number = 2.0

    val hyperbolicSine = Math.sinh(number)
    println("The hyperbolic sine of $number is $hyperbolicSine.")
}
```

The code above will result in the following output:

```shell
The hyperbolic sine of 2.0 is 3.6268604078470186.
```
