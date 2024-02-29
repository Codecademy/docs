---
Title: 'max()'
Description: 'Finds the greater of two given values.'
Subjects:
  - 'Code Foundation'
  - 'Computer Science'
Tags:
  - 'Math'
  - 'Functions'
  - 'Kotlin'
CatalogContent:
  - 'learn-kotlin'
  - 'paths/computer-science'
---

In Kotlin, the `max()` function is used to return the greater of two given values provided as arguments. It can be used with numeric types such as `Double`, `Float`, `Int`, `Long`, `UInt`, and `ULong`. Both values must be of the same type.

> **Note**: The `max()` function is different from the `maxOf()` function that can take one or more than two arguments. If `max()` is used with more or less than two arguments the program will raise an error.

## Syntax

```pseudo
import kotlin.math.*

val greatestVal = max(x, y)
```

- Where `x` and `y` represent two numeric values of the same type.

## Example

The following example shows the usage of `max()` comparing two `Long` values:

```kotlin
import kotlin.math.*

fun main() {
    val longValue1: Long = 9223372036854775807L
    val longValue2: Long = 9222372036854775807L

    val greatestValue = max(longValue1, longValue2)
    println("The greater value is: $greatestValue")
}
```

Output:

```shell
The greater value is: 9223372036854775807
```

- In the above example, `longValue1` and `longValue2` are both of type `Long`. The _L_ at the end of the numbers is optional and indicates that these are long literals.
