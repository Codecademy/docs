---
Title: '.atStartOfDayIn()'
Description: 'Finds an instant that corresponds to the start of a date in a particular time zone.'
Subjects:
  - 'Computer Science'
  - 'Code Foundations'
Tags:
  - 'Functions'
  - 'Data Structures'
  - 'Time'
  - 'Date'
CatalogContent:
  - 'learn-kotlin'
  - 'paths/computer-science'
---

The **`.atStartOfDayIn()`** function obtains the start of the day `LocalDateTime` in a specific time zone. It returns an `Instant` (an instantaneous point in time. This serves as a highly accurate clock in Kotlin, aiding in pinpointing the exact moment when actions occur in code) corresponding to the start of a date in a particular time zone.

## Syntax

```pseudo
fun LocalDate.atStartOfDayIn(TimeZone): Instant
```

- `LocalDate`: This represents a date without any reference to a specific time zone.
- `TimeZone`: This represents a time zone in which date and time calculations are performed.
- `Instant`: This is a moment in time. It's a point on the time scale that captures the exact time something happens without regard to time zones or local calendars.

## Example

The following example demonstrates how to use `.atStartOfDayIn`:

```kotlin
import kotlinx.datetime.*

fun main() {
    val todaysDate = LocalDate(2023, 11, 18)
    val myTimeZone = TimeZone.UTC
    val startOfToday = todaysDate.atStartOfDayIn(myTimeZone)
    println("Start of the day November 18th, 2023 in UTC is: $startOfToday")
}
```

The above example will result in the following output:

```shell
Start of the day November 18th, 2023 in UTC is: 2023-11-18T00:00Z
```
