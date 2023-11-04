---
Title: '.DateTimePeriod()'
Description: 'Returns a DateTimePeriod object or a DatePeriod object (if all arguments are set to zero) to indicate the time difference between two dates.'
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

The **`DateTimePeriod`** function helps to make a new `DateTimePeriod` object that tells you how much time has passed between two dates (even up to nanoseconds). If nothing is passed into the function, it returns a `DatePeriod` object by default. You can use this function to set how many years, months, days, hours, minutes, seconds, and even nanoseconds are between two dates.

## Syntax

```pseudo
fun DateTimePeriod(
    years: Int = 0,
    months: Int = 0,
    days: Int = 0,
    hours: Int = 0,
    minutes: Int = 0,
    seconds: Int = 0,
    nanoseconds: Long = 0
): DateTimePeriod
```

The function takes in up to seven parameters, and it is recommended to always explicitly name the arguments when constructing the function, like `DateTimePeriod(years = 1, months = 12)`. If all the time components are set to zero, the function will return a `DatePeriod` object.

The function is also streamlined for human readability; for example, `DateTimePeriod(months = 24)` becomes `DateTimePeriod(years = 2)`.

Note that the function will throw an `IllegalArgumentException` if any of the inputs overflows a Long.

## Example

The following example shows how to use the **`DateTimePeriod`** function to add two weeks to a given date.

```kotlin
import kotlinx.datetime.DateTimePeriod
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

The output will be similar to the following:

```shell
2024-01-08T12:00:00Z
```
