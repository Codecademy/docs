---
Title: '.max()'
Description: 'Returns the larger of two numbers.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Math Functions'
CatalogContent:
  - 'learn-kotlin'
  - 'paths/computer-science'
---

The **`max()`** function takes two numbers as arguments and returns the larger of the two numbers.

## Syntax

```pseudo
max(a: Number, b: Number): Number
```

To use this function, you must import the `kotlin.math.max` package.

## Example

The following example demonstrates how the `.max()` method is used

```kotlin
import kotlin.math.max
fun main() {
    val firstNumber = 5
    val secondNumber = 10
    val largerNumber = max(firstNumber, secondNumber)
    println("The higher number between $firstNumber and $secondNumber is: $largerNumber")
}
```

This will print the following output:

```
The higher number between 5 and 10 is: 10
```

> **Note**: To find the maximum value among multiple numbers, use the `.maxOf()` function.
