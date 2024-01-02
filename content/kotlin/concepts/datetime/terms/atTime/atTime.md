---
Title: '.atTime()'
Description: 'Combines date and time using the .atTime() method in Kotlin.'
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

The **`.atTime()`** method in Kotlin is used to combine a date and a time, resulting in a `LocalDateTime` object. This is particularly useful when you need to represent both date and time components together.

## Syntax

```pseudo
fun LocalDate.atTime(hour: Int, minute: Int, second: Int): LocalDateTime
fun LocalDate.atTime(time: LocalTime): LocalDateTime
fun LocalDate.atTime(time: LocalTime, second: Int): LocalDateTime
```

The **atTime()** method can be called on a **LocalDate** object with different parameter combinations. You can specify the hour, minute, and second individually, or provide a **LocalTime** object.

## Example

In this example, we first create a LocalDate object representing December 17, 2023. Then, we use the **.atTime()** method to combine it with different time components. The resulting **LocalDateTime** objects (dateTime1 and dateTime2) represent the combined date and time.

```
import java.time.LocalDate
import java.time.LocalTime
import java.time.LocalDateTime

fun main() {
    val date = LocalDate.of(2023, 12, 17)
    val time = LocalTime.of(15, 30)

    // Combining date and time using atTime()
    val dateTime1: LocalDateTime = date.atTime(12, 0, 0)
    val dateTime2: LocalDateTime = date.atTime(time)
    
    println("DateTime 1: $dateTime1") // DateTime 1: 2023-12-17T12:00
    println("DateTime 2: $dateTime2") // DateTime 2: 2023-12-17T15:30
}
```

Output:
DateTime 1: 2023-12-17T12:00
DateTime 2: 2023-12-17T15:30






