---
Title: '.toDatePeriod()'
Description: 'Parses the ISO-8601 duration representation as a DatePeriod.'
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

The **`toDatePeriod()`** function parses ISO-8601 duration representations and returns a `DatePeriod` object. ISO-8601 duration representation is a string that starts with the letter `P` followed by a sequence of numbers and units. The numbers represent the number of units, and the units can be days, weeks, months, years, hours, minutes, or seconds.

## Syntax

```pseudo
fun String.toDatePeriod(): DatePeriod
```

The function returns a `DatePeriod` object with two properties:

- _start_: the start date of the duration.
- _endInclusive_: the end date of the duration, inclusive.

## Example

This example demonstrates how to use **`toDatePeriod`** the function to parse ISO-8601 duration representations and create `DatePeriod` objects.

```kotlin
import kotlinx.datetime.toDatePeriod
fun main() {
  // Create a DatePeriod object representing one day.
  val oneDayPeriod = "P1D".toDatePeriod()

  // Print the start and end dates of the DatePeriod object.
  println("Start date: ${oneDayPeriod.start}")
  println("End date: ${oneDayPeriod.endInclusive}")

  // Create a DatePeriod object representing one week.
  val oneWeekPeriod = "P7D".toDatePeriod()

  // Print the start and end dates of the DatePeriod object.
  println("Start date: ${oneWeekPeriod.start}")
  println("End date: ${oneWeekPeriod.endInclusive}")

  // Create a DatePeriod object representing one month.
  val oneMonthPeriod = "P1M".toDatePeriod()

  // Print the start and end dates of the DatePeriod object.
  println("Start date: ${oneMonthPeriod.start}")
  println("End date: ${oneMonthPeriod.endInclusive}")

  // Create a DatePeriod object representing one year.
  val oneYearPeriod = "P1Y".toDatePeriod()

  // Print the start and end dates of the DatePeriod object.
  println("Start date: ${oneYearPeriod.start}")
  println("End date: ${oneYearPeriod.endInclusive}")
}
```

The output will be similar to the following:

```shell
Start date: 2023-11-02T22:50:34.000Z
End date: 2023-11-03T22:50:34.000Z
Start date: 2023-11-02T22:50:34.000Z
End date: 2023-11-09T22:50:34.000Z
Start date: 2023-11-02T22:50:34.000Z
End date: 2023-12-02T22:50:34.000Z
Start date: 2023-11-02T22:50:34.000Z
End date: 2024-11-02T22:50:34.000Z
```
