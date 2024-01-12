---
Title: '.atTime()'
Description: 'Combines a date and a time, resulting in a LocalDateTime object.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Date'
  - 'Time'
  - 'Kotlin'
CatalogContent:
 - 'learn-kotlin'
 - 'paths/computer-science'
---

The **`.atTime()`** method in Kotlin is used to combine a date and a time, resulting in a `LocalDateTime` object. This is particularly useful when it's needed to represent both date and time components together.

## Syntax

```pseudo
fun LocalDate.atTime(hour: Int, minute: Int, second: Int): LocalDateTime
fun LocalDate.atTime(time: LocalTime): LocalDateTime
fun LocalDate.atTime(time: LocalTime, second: Int): LocalDateTime
```

The `.atTime()` method can be called on a `LocalDate` object with different parameter combinations. The hour, minute, and second can be specified individually, or a `LocalTime` object can be provided.

## Example

In this example,  a `LocalDate` object representing December 17, 2023 is created. Then, the `.atTime()` method is used to combine it with different time components. The resulting `LocalDateTime` objects (dateTime1 and dateTime2) represent the combined date and time.

```kotlin
import kotlinx.datetime.*

fun main() {
    val date = LocalDate(2023, 12, 17)
    val time = LocalTime(15, 30)

    // Combining date and time using atTime()
    val dateTime1: LocalDateTime = date.atTime(12, 0, 0)
    val dateTime2: LocalDateTime = date.atTime(time)
            
    println("DateTime 1: $dateTime1") // DateTime 1: 2023-12-17T15:30
    println("DateTime 2: $dateTime2") // DateTime 2: 2023-12-17T15:30
}
```

The output of the above code is as follows:

```shell
DateTime 1: 2023-12-17T12:00
DateTime 2: 2023-12-17T15:30
```