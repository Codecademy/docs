---
Title: '.round()'
Description: 'Rounds a floating-point number to its nearest integer.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Math Functions'
CatalogContent:
  - 'learn-kotlin'
  - 'paths/computer-science'
---

The **`round()`** function takes a floating-point number as an argument and returns the nearest integer value. If the number is equidistant between two integers, it will round to the integer that is even.

## Syntax

```pseudo
round(a: Double): Long
```

To use this function, you must import the `kotlin.math.round` package.

## Example

The following example demonstrates how the `.round()` method is used:

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

This will print the following output:

```
5.4 rounded is: 5
5.5 rounded is: 6 // equidistant between 5 and 6
5.6 rounded is: 6

6.4 rounded is: 6
6.5 rounded is: 6 // equidistant between 6 and 7
6.6 rounded is: 7
```

In this example, the number `5.5` is equidistant between 5 and 6. Since 6 is even, the `.round()` method returns 6. The same is true for `6.5`. Since 6 is even, the `.round()` method returns 6.

> **Note**: The `round()` function returns a Long value. If you want to obtain a rounded Double value, you can use the `roundToLong()` function on a Double and then convert it back to Double, or use `roundToInt()` to obtain an Int value.
