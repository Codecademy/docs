---
Title: '.atDate()'
Description: 'Combines a date and time into a LocalDateTime object.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Date'
  - 'Time'
  - 'Kotlin'
CatalogContent:
  - 'learn-kotlin'
  - 'paths/computer-science'
---

The **`.atDate()`** method in Kotlin is a function that combines date and time into a `LocalDateTime` object. This method is beneficial when creating a complete timestamp by merging separate `LocalDate` and `LocalTime` instances.

## Syntax

```pseudo
localTime.atDate(localDate)
```

- `localTime`: The time component.
- `localDate`: The date component.

## Example

This example demonstrates combining a time and a date:

```kotlin
import java.time.LocalDate
import java.time.LocalTime
import java.time.LocalDateTime
fun main() {
  val date = LocalDate.of(2023, 12, 25)
  val time = LocalTime.of(15, 30)
  val dateTime = time.atDate(date)
  println(dateTime)
}
```

The above example will give the following output:

```shell
2023-12-25T15:30
```
