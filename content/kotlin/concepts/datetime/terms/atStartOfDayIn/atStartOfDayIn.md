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

The **`.atStartOfDayIn()`** function is used to obtain the start of the day `LocalDateTime` in a specific time zone. It returns an `Instant` (an instantaneous point in time. It is like a super-accurate clock in Kotlin which helps us pinpoint the exact moment when something happens in our code) that corresponds to the start of a date in a particular time zone.

## Syntax

```pseudo
fun LocalDate.atStartOfDayIn(TimeZone): Instant
```

- `LocalDate`: represents a date without reference to a particular time zone.
- `TimeZone`: represents a time zone in which date and time calculations are performed.
- `Instant`: a moment in time.

## Example

The following example demonstrates how to use `.atStartOfDayIn`.

```kotlin
import kotlinx.datetime.*

fun main() {
    val todaysDate = LocalDate(2023, 11, 18)
    val myTimeZone = TimeZone.UTC
    val startOfToday = todaysDate.atStartOfDayIn(myTimeZone)
    println("Start of the day November 18th, 2023 in UTC is: $startOfToday")
}

```

The output of the example above is:

```shell
Start of the day November 18th, 2023 in UTC is: 2023-11-18T00:00Z
```
