---
Title: '.periodUntil()'
Description: 'Returns an object representing the difference between two dates.'
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

The **`.periodUntil()`** function is used to calculate the difference between two `LocalDate` or `Instant` instances. This returns an object representing the difference between the two dates in terms date or time components depending on if the arguments are `LocalDate` or `Instant` objects respectively.

## Syntax

```pseudo
firstDate.periodUntil(secondDate)
```

- `firstDate`, `secondDate`: Specific civil dates without a reference to a particular time zone.
- The return is a `DatePeriod` object that yields the difference between the dates in either date or time units.

> **Note:** This method is part of the `kotlinx-datetime` library and will require some configuration prior to use, please see their documentation for implementation details.

## Example

In the example given below `startDate` and `endDate` are the `LocalDate` instances representing the start-date and the end-date.

```kotlin
import kotlinx.datetime.*

fun main() {
  val startDate = LocalDate(2023,11,2)
  val endDate = LocalDate(2023,11,3)

  val period = startDate.periodUntil(endDate)

  println("difference: $period")
}
```

The result of the above code is as follows:

```shell
difference: P1D
```
