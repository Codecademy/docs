---
Title: '.minus()'
Description: 'Returns the difference between two dates or a date and a unit of time.'
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

The **`.minus()`** method returns the difference between two dates or it can subtract a unit of time from a given date. It will operate on both `Instant` and `LocalDate` objects.

## Syntax

```pseudo
firstDate.minus(secondDate, aTimeZone)
firstDate.minus(timeValue, aTimeUnit)
```

The `.minus()` method can be used in the two basic forms documented above. The first method can be used to subtract to date objects and can include a time zone as a third argument. The second method takes a date object and subtracts a given length of time.

- `firstDate`, `secondDate` : The method supports the use of both `Instant` and `LocalDate` objects.
- `aTimeZone`: The time zone relevant to the given operation.
- `timeValue`: A `Long` or `Int` value that represents the length of time to be deducted.
- `aTimeUnit`: A unit of time or a date unit, depending on whether the objects are of type `Instant` or `LocalDate` respectively.

## Examples

The code below demonstrates the multiple ways in which `.minus()` can be implemented.

```kotlin
import kotlinx.datetime.*

fun main() {
  // Create an Instant values for xmas and new years from an ISO 8601 String
  val instantXmas = "2023-12-25T12:00:00.00+00:00".toInstant()
  val instantNewYr = "2024-01-01T12:00:00.00+00:00".toInstant()

  // Create an LocalDate values for xmas and new years
  val localXmas = LocalDate(2023,12, 25)
  val localNewYr = LocalDate(2024,1,1)

  // Create a new DateTimePeriod for 1 week
  val sevenDays = DatePeriod(days = 7)

  // Get the difference between the Instant objects created
  val resultA = instantXmas.minus(instantNewYr, TimeZone.UTC)
  val resultB = instantNewYr.minus(7 * 24, DateTimeUnit.HOUR) // Must be a time unit
  val resultC = instantNewYr.minus(sevenDays, TimeZone.UTC)

  // Equivalent operations with LocalDate objects
  val resultD = localXmas.minus(localNewYr)
  val resultE = localNewYr.minus(7, DateTimeUnit.DAY) // Must be a date unit
  val resultF = localNewYr.minus(sevenDays)

  println(resultA)
  println(resultB)
  println(resultC)
  println(resultD)
  println(resultE)
  println(resultF)
 }
```

The output of this code will be:

```shell
-P7D
2023-12-25T12:00:00Z
2023-12-25T12:00:00Z
-P7D
2023-12-25
2023-12-25
```
