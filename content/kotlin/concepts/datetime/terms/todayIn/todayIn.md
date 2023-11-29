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

The **`.todayIn()`** method returns a date when called on a `Clock` while passing a `TimeZone` argument.

## Syntax

```pseudo
myClock.todayIn(myTimeZone)
```

- `myClock`: A Clock providing a source for Instants (e.g., 2023-11-21, 00:00:00 UTC+0). `Clock.System` is the clock that refers to the current platform for the current time.
- `myTimeZone`: An instance of the `TimeZone` class (e.g., America/Los_Angeles).

## Example

The example below demonstrates a basic implementation of `.todayIn` that returns the current date.

```kotlin
// Import all classes from kotlinx.datetime package.
import kotlinx.datetime.*

fun main() {
  val myLocalDate = Clock.System.todayIn(timeZone = TimeZone.currentSystemDefault())
  println(myLocalDate)
}
```

This example results in an output similar to the following:

```shell
2023-11-21
```
