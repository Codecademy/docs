---
Title: '.offsetAt()'
Description: 'Finds the offset from UTC this time zone has at the specified instant of physical time.'
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

The **`.offsetAt()`** method is used to find the offset from UTC(Coordinated Universal time) for a specific time zone at a specified `instant` in physical time.

## Syntax

```pseudo
fun TimeZone.offsetAt(instant: Instant): UtcOffset
```

- `Instant`: A moment in time.
- `UtcOffset`: An offset from UTC (Coordinated Universal Time).
- `TimeZone`: Provides a conversion between `Instant` and `LocalDateTime` values using a collection of rules.

## Example

The example given below provides the offset for `Asia/Kolkata` time zone at a specified instant.

```kotlin
import kotlinx.datetime.Instant
import kotlinx.datetime.TimeZone

fun main() {
  val instant = Instant.parse("2023-11-07T12:00:00Z")
  val timeZone = TimeZone.of("Asia/Kolkata")

  val offset = timeZone.offsetAt(instant)

  println("At $instant, the offset from UTC in ${timeZone.id} is $offset.")
}

```

> **Note:** The string `2023-11-07T12:00:00Z` specifies date and time of November 7, 2023, at 12:00:00 UTC. The `T` separates the date and time components, and `Z` indicates that the time is in UTC.

The above example will result in the following output:

```shell
At 2023-11-07T12:00:00Z, the offset from UTC in Asia/Kolkata is +05:30.
```
