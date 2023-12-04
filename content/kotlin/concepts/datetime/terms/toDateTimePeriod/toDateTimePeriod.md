---
Title: '.toDateTimePeriod()'
Description: 'Interprets an ISO-8601 formatted duration string, converting it into a DateTimePeriod object.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Methods'
  - 'Data Structures'
  - 'Date'
  - 'Time'
CatalogContent:
  - 'learn-kotlin'
  - 'paths/computer-science'
---

The **`.toDateTimePeriod()`** method in Kotlin is a versatile function that transforms an ISO-8601 formatted string into a `DateTimePeriod` object. This conversion is particularly useful when working with durations, especially when expressing durations in terms of years, months, days, hours, minutes, seconds, and nanoseconds.

## Syntax

```pseudo
isoString.toDateTimePeriod()
```

- `isoString`: A string representing a length of time utilizing the ISO-8601 format (e.g., 1 day = `P1D`, 1 hour = `PT1H`).

> **Note:** This method can also operate on `Duration` objects that are part of the `kotlin.time` library, but this is still experimental and many of the original methods have been deprecated.

## Example

```kotlin
import kotlinx.datetime.*

fun main() {
  val newPeriod = "P3DT12H".toDateTimePeriod()
  val theDays = newPeriod.days
  val theHours = newPeriod.hours

  println("Total days in the period: $theDays")
  println("Total hours in the period: $theHours")
}
```

The code above will output the following:

```shell
Total days in the period: 3
Total hours in the period: 12
```

> **Note:** An `IllegalArgumentException` is raised if the total number of months in hours, minutes, seconds, and nanoseconds overflows a Long or if the string cannot be parsed.
