---
Title: '.daysUntil()'
Description: 'Returns the number of days between two Instants.'
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

The **`.daysUntil()`** method calculates the number of whole days between two instants and returns the result as an `Int`. If the number of days is too large to fit within the bounds of the `Int` datatype, the method will return `Int.MAX_VALUE` if the result is positive or `Int.MIN_VALUE` if the result is negative.

## Syntax

```pseudo
firstInstant.daysUntil(secondInstant, TimeZone)
```

- `firstInstant`: The first reference time.
- `secondInstant`: The second time.
- `TimeZone`: The timezone that the calculation should consider zone when determining the number of days between the two `Instant` objects.

## Example

The example demonstrates the use of `.daysUntil()` to calculate the number of days between two `Instants`.

```kotlin
import kotlinx.datetime.*

fun main() {
    val start = Instant.parse("2024-01-01T12:00:00Z")
    val end = Instant.parse("2023-11-01T12:00:00Z")
    val defaultTZ = TimeZone.currentSystemDefault()
    val timeDelta = end.daysUntil(start, defaultTZ)
    println(timeDelta)
}
```

The output of this code will be:

```shell
60
```
