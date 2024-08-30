---
Title: '.DateTimePeriod()'
Description: 'Returns a DateTimePeriod object to indicate the time difference between two dates.'
Subjects:
  - 'Computer Science'
  - 'Code Foundations'
Tags:
  - 'Methods'
  - 'Data Structures'
  - 'Time'
CatalogContent:
  - 'learn-kotlin'
  - 'paths/computer-science'
---

The **`.DateTimePeriod()`** function creates a DateTimePeriod object indicating the time difference between two dates, including nanoseconds. When no arguments are passed, it defaults to a DatePeriod object. This function allows the definition of the duration in years, months, days, hours, minutes, seconds, and nanoseconds between the specified dates.

## Syntax

```pseudo
fun DateTimePeriod(
    years: Int,
    months: Int,
    days: Int,
    hours: Int,
    minutes: Int,
    seconds: Int,
    nanoseconds: Long
): DateTimePeriod
```

The function accepts a maximum of seven parameters, and it is advisable to explicitly name the arguments during function construction, such as DateTimePeriod(years = 1, months = 12). When all time components are set to zero, the function yields a DatePeriod object.

> **Note:** An `IllegalArgumentException` will be thrown by the function in case any of the inputs surpasses the capacity of a Long.

## Example

The following example shows how to use the `.DateTimePeriod()` function to add two weeks to a given date.

```kotlin
import kotlinx.datetime.* // import all classes from datetime package

fun main() {
  //Create an Instant for 2023-12-25 12:00 UTC zone from an ISO 8601 String
  val currDate = "2023-12-25T12:00:00.00+00:00".toInstant()

  // Create a new DateTimePeriod for 2 weeks
  val twoWeeks = DateTimePeriod(days = 14)

  // add 2 weeks to the current date
  val newDate = currDate.plus(twoWeeks, TimeZone.UTC)

  println(newDate)
}
```

The output is as follows:

```shell
2024-01-08T12:00:00Z
```
