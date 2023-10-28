---
Title: 'round()'
Description: 'Rounds a given number to the nearest integer.'
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

The **`round()`** function in Kotlin's `math` package rounds a given number to the nearest integer. If the number is equidistant between two integers, it rounds to the integer that is even.

## Syntax

```pseudo
round(a)
```

- `a`: the number (either `Double` or `Float`) to be rounded

The `round()` function returns the rounded number.

## Example

This example uses the `round()` function to determine the rounded value of each number in a list:

```kotlin
import kotlin.math.round

fun main() {
  val numbers = listOf(5.4, 5.5, 5.6, 6.4, 6.5, 6.6)
  for (number in numbers) {
    val roundedNumber = round(number)
    println("$number rounded is: $roundedNumber")
  }
}
```

> **Note:** The numbers `5.5` and `6.5` are equidistant between neighboring integers. Since 6 is even, the `round()` function returns `6.0` for both `5.5` and `6.5`.

The output of this code will be:

```shell
5.4 rounded is: 5.0
5.5 rounded is: 6.0
5.6 rounded is: 6.0
6.4 rounded is: 6.0
6.5 rounded is: 6.0
6.6 rounded is: 7.0
```
