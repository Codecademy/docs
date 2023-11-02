---
Title: '.periodUntil()'
Description: 'Returns an object representing the difference between two dates in terms of years, months, and days.'
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

The **`.periodUntil()`** function is used to calculate the difference between two `LocalDate` or `Instant` instances. This returns an `object` representing the difference between the two dates in terms of years, months, and days.

## Syntax

```pseudo
expect fun LocalDate.periodUntil(other: LocalDate): DatePeriod
```

`DatePeriod`gives the difference between two instants, decomposed into date and time components where all time components are equals to zero.

## Example

```kotlin
val startDate = LocalDate.of(2023,11,2)
val endDate = LocalDate.of(2023,11,3)

val period = startDate.periodUntil(endDate)

println("difference: $period.days day")
```

`startDate` and `endDate` given above are the `LocalDate` instances representing the start-date and the end-date.

```shell
difference: 1 day
```
