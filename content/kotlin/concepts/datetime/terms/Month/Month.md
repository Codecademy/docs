---
Title: 'Month()'
Description: 'Returns an instance of a month object based on the integer given.'
Subjects:
  - 'Code Foundations'
  - 'Data Science'
Tags:
  - 'Date'
  - 'Methods'
  - 'Calendar'
CatalogContent:
  - 'learn-kotlin'
  - 'paths/computer-science'
---

The **`Month()`** method in Kotlin is used to retrieve the month from a given integer. This method is essential when working with `date` and `time` in Kotlin, allowing developers to extract and manipulate the month component of a date.

## Syntax

```pseudo
val currMonth = Month(num)
```

- `currMonth`: A month type value such as `DECEMBER`.
- `num`: This is an integer representing the month extracted from the date object. Typically, in Kotlin, months are represented as integers ranging from `1` (January) to `12` (December).

## Example

This example demonstrates the basic use of the `Month()` method.

```kotlin
import kotlinx.datetime.*

fun main() {
    val currentMonth = Month(11)

    println("The current month is: $currentMonth")
}
```

The output will be:

```shell
The current month is: NOVEMBER
```
