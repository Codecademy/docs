---
Title: 'max()'
Description: 'Determines the greater value between two Number values.'
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

The **`max()`** function in Kotlin's `math` class is used to determine the greater value between two numbers of the same `Number` type.

## Syntax

```pseudo
max(a, b)
```

- `a`: The number of type `Number` to be compared
- `b`: Another number, of the same type as `a`

The `max()` function returns the greater value between `a` and `b`. If either value is `NaN`, the function returns `NaN`.

> **Note**: To compare more than two numbers, use `maxOf()`.


## Example

This example uses `max()` to determine the greater value of two numbers:

```kotlin
import kotlin.math.max
fun main() {
    val maxValue = max(3.4, 3.5)
    println(maxValue)
}
```

The `max()` method compares `3.4` and `3.5` and returns the greater number. 

The output of this code will be:

```shell
3.5
```
