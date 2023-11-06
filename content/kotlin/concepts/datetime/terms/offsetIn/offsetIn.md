---
Title: '.offsetIn()'
Description: 'Provides the time zone offset at a specific point in time.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Date'
  - 'Methods'
CatalogContent:
  - 'learn-kotlin'
  - 'paths/computer-science'
---

The **`.offsetIn()`** function is used to obtain the time zone offset at a specific point in time. It provides the difference between the local time and UTC for a given moment.

## Syntax

```pseudo
fun Instant.offsetIn(timeZone: TimeZone): UtcOffset
```

- `Instant`: a moment in time.
- `utcOffset`: An offset from UTC (Coordinated Universal Time).
- `TimeZone`: provides a conversion between `Instant` and `LocalDateTime` values using a collection of rules.

## Example

```kotlin
import kotlinx.datetime.TimeZone

fun main() {
  val currentTime = Instant.now()
  val timeZone = TimeZone.of("Asia/Kolkata")

  val offset = currentTime.offsetIn(timeZone)

  println("Offset from UTC in Kolkata is $offset.")
}
```

The code given above provides the offset for the current time in `Asia/Kolkata` time zone.

> **Note:** The string `Asia/Kolkata` above is a zoneId (returns the time zone identified by the provided zoneId). These IDs are usually in the form of `area/city`.

Output:

```shell
Offset from UTC in Kolkata is +05:30.
```
