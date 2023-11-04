---
Title: '.daysUntil()'
Description: 'Returns the number of days between two Instants.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Kotlin'
  - 'Instant'
CatalogContent:
  - 'learn-kotlin'
  - 'paths/computer-science'
---

The **`.daysUntil()`** method calculates the number of whole days between two instants and returns the result as an `Int`. If the number of days is too large to fit within the bounds of the `Int` datatype, the method will return `Int.MAX_VALUE` if the result is positive or `Int.MIN_VALUE` if the result is negative.

## Syntax

```pseudo
fun Instant.daysUntil(other: Instant, timeZone: TimeZone): Int
```

- `Instant`: A moment in time.
- `TimeZone`: This parameter is of type `TimeZone`. It indicates that the calculation should consider the time zone when determining the number of days between the two `Instant` objects.

## Example

The example demonstrates the use of `.daysUntil()` to calculate the number of days between two `Instants`.

```kotlin
import java.time.Instant
import java.time.Duration
fun Instant.daysUntil(other: Instant): Long {
// Calculate the duration between 'this' Instant and 'other' Instant
    val duration = Duration.between(this, other)
    
// Convert the duration to days and return the result 
    return duration.toDays()
}
fun main() {
    val t1 = Instant.parse("2008-09-29T12:00:00Z")
    val t2 = t1.plus(Duration.ofHours(125))
    val t3 = t2.daysUntil(t1)
    println(t3)
}
```

The output of this code will be:

```shell
-5
```
