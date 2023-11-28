---
Title: '.todayIn()'
Description: 'Returns a date for the given Clock value and time zone passed.'
Subjects:
  - 'Computer Science'
  - 'Code Foundations'
Tags:
  - 'Methods'
  - 'Date'
  - 'Kotlin'
CatalogContent:
  - 'learn-kotlin'
  - 'paths/computer-science'
---

The **`.todayIn()`** method returns a date when called on an Instant value of `Clock` while passing a `TimeZone` argument.

## Syntax

```pseudo
Clock.System.todayIn(timeZone: TimeZone.currentSystemDefault())
```

- `Clock.System`: records a moment in time, also known as an Instant (e.g., 2023-11-21, 00:00:00 UTC+0). Two possible ways to get an Instant are by using `Clock.now` or `Clock.System`.
- `TimeZone.currentSystemDefault()`: pulls and records an instance of the current system time zone (e.g., America/Los_Angeles).

## Example

```kotlin
// Import all classes from kotlinx.datetime package.
import kotlinx.datetime.*

fun main() {
  val myLocalDate = Clock.System.todayIn(timeZone = TimeZone.currentSystemDefault())
  println(myLocalDate)
}
```

This example results in the following output:

```shell
2023-11-21
```
