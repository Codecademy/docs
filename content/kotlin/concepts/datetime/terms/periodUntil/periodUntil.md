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

The **`.periodUntil()`** function is used to calculate the difference between two `LocalDate` or `Instant` instances. This returns an object representing the difference between the two dates in terms of years, months, and days.

## Syntax

```pseudo
expect fun LocalDate.periodUntil(other: LocalDate): DatePeriod
```

- `DatePeriod` gives the difference between two instants, decomposed into date and time components where all time components are equal to zero.
- `LocalDate` represents a specific civil date without a reference to a particular time zone.

> **Note:** This method is part of `kotlinx-datetime` library which is published to Maven central. Maven central repository should be added to the file first.

Maven central repository must be added to the `build.gradle.kts` file first if it is not already there;

```pseudo
repositories {
  mavenCentral()
}
```

To use the library in a single-platform project, a dependency must be added to the dependencies block.

```pseudo
dependencies {
implementation("org.jetbrains.kotlinx:kotlinx-datetime:0.4.1")
}
```

## Example

```kotlin
import java.time.LocalDate
import kotlinx.datetime.periodUntil

fun main() {
  val startDate = LocalDate.of(2023,11,2)
  val endDate = LocalDate.of(2023,11,3)

  val period = startDate.periodUntil(endDate)

  println("difference: $period.days day")
}
```

`startDate` and `endDate` given above are the `LocalDate` instances representing the start-date and the end-date.

The result of the above code is as follows:

```shell
difference: 1 day
```
