---
Title: '.plus()'
Description: 'Adds a datetime object with a specified datetime period.'
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

The **`.plus()`** function adjusts a DateTime object by adding a specified period of time to it, such as days, hours, or minutes. It can be applied to instances of `datetime` classes provided by the Kotlin `datetime` package, such as `Instant`, `LocalDate`, `DateTimePeriod`, and `DatePeriod`.

## Syntax

The syntax of the `.plus()` function depends on the type of datetime class and the arguments. The following are examples of possible syntaxes:

```pseudo
// for an Instant object
fun Instant.plus(Int/Long, DateTimeUnit, Timezone): Instant

fun Instant.plus(DateTimePeriod, Timezone): Instant

// for a LocalDate object
fun LocalDate.plus(Int/Long, DateTimeUnit): LocalDate

fun LocalDate.plus(DatePeriod): DatePeriod

// for adding two DateTimePeriod instances
fun DateTimePeriod.plus(DateTimePeriod): DateTimePeriod

// for adding two DatePeriod instances
fun DatePeriod.plus(DatePeriod): DatePeriod
```

The function returns a new <DateTimeType> instance with the given period added to the original `datetime` object. Refer [here](https://www.codecademy.com/resources/docs/kotlin/datetime/DateTimePeriod) for more information on `DateTimePeriod`.

> **Note:** An `DateTimeArithmeticException` will be thrown if the result exceeds the boundaries of the value type or the unit.

## Example

The following example shows how to use the `.plus()` function to add a day to a given date:

```kotlin
import kotlinx.datetime.*

fun main() {
  val randomDate = "2023-01-01T12:00:00.00+00:00".toInstant()
  val oneDay = DateTimePeriod(days = 1)

  // add one day to the current date
  val finalDate = randomDate.plus(oneDay, TimeZone.UTC)

  println(finalDate)
}
```

The above example will give the following output:

```shell
2023-01-02T12:00:00Z
```
