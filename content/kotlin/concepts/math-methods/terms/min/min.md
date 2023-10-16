---
Title: '.max()'
Description: 'Returns the smaller of two numbers.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Math Functions'
CatalogContent:
  - 'learn-kotlin'
  - 'paths/computer-science'
---

The **`min()`** function takes two numbers as arguments and returns the smaller of the two numbers.

## Syntax

```pseudo
min(a: Number, b: Number): Number
```

To use this function, you must import the `kotlin.math.min` package.

## Example

The following example demonstrates how the `.min()` method is used

```kotlin
import kotlin.math.min
fun main() {
    val firstNumber = 5
    val secondNumber = 10
    val smallerNumber = min(firstNumber, secondNumber)
    println("The smaller number between $firstNumber and $secondNumber is: $smallerNumber")
}
```

This will print the following output:

```
The smaller number between 5 and 10 is: 5
```

> **Note**: To find the minimum value among multiple numbers, use the `.minOf()` function.
