---
Title: '.monthsUntil()'
Description: 'Returns the number of months between two dates.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Date'
  - 'Instant'
CatalogContent:
  - 'learn-kotlin'
  - 'paths/computer-science'
---

The **`.monthsUntil()`** method calculates the number of whole months between two instants and returns the result as an `Int`. If the number of months is too large to fit within the bounds of the `Int` datatype, the method will return `Int.MAX_VALUE` if the result is positive or `Int.MIN_VALUE` if the result is negative.

## Syntax

```pseudo
firstInstant.monthsUntil(secondInstant, TimeZone)
```

- `firstInstant`: The first reference time.
- `secondInstant`: The second reference time.
- `TimeZone`: The timezone that the calculation should consider when determining the number of months between the two `Instant` objects.

## Example

The example demonstrates the use of `.monthsUntil()` to calculate the number of months between two `Instants`:

```kotlin
import kotlinx.datetime.*

fun main() {
  val beginMonth = Instant.parse("2023-12-01T12:00:00Z")
  val endMonth = Instant.parse("2024-12-01T12:00:00Z")
  val defaultTZ = TimeZone.currentSystemDefault()
  val monthsUntil = beginMonth.monthsUntil(endMonth, defaultTZ)
  println(monthsUntil)
}
```

The output for the above code will be as follows:

```shell
12
```
