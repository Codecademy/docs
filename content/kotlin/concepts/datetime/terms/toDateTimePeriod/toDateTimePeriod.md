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

The **`.toDateTimePeriod()`** method in Kotlin is a versatile function that transforms a Duration object into a DateTimePeriod representation. This conversion is useful when dealing with durations in Kotlin's date and time API, especially when the durations need to be expressed in terms of years, months, days, hours, minutes, seconds, and nanoseconds. The method normalizes the duration into a human-readable format for easier interpretation and manipulation.

## Syntax

```pseudo
duration.toDateTimePeriod(): DateTimePeriod
```

- **duration:** This is a Duration object representing a length of time.

> **Note:** The method returns a DateTimePeriod object, which is a normalized representation of the input duration in terms of larger time units (years, months, days, etc.).

## Example

```kotlin
import kotlin.time.Duration
import kotlinx.datetime.DateTimePeriod

fun main() {
    // Durations for different activities in hours
    val designingDuration = Duration.hours(31)  
    val codingDuration = Duration.hours(57) 
    val testingDuration = Duration.hours(14)    

    // Summing up all durations
    val totalDuration = designingDuration + codingDuration + testingDuration

    // Optionally, adding some extra time for breaks 
    val totalWithDurationBreaks = totalDuration + Duration.hours(12)

    // Converting the total duration with breaks to a DateTimePeriod
    val dateTimePeriod = totalWithDurationBreaks.toDateTimePeriod()

    println("Total Duration in DateTimePeriod: $dateTimePeriod")
}
```

The expected output should be similar to the following:

```mathematica
Total Duration in DateTimePeriod: DateTimePeriod(days = 4, hours = 18)
```

>**Note:** `Exception Throws (IllegalArgumentException)-` if the total number of months in hours, minutes, seconds, and nanoseconds overflows a Long.
