---
Title: '.toInstant()'
Description: 'Converts a string representing an instant in ISO-8601 format, which includes both date and time components along with the time zone offset, into an Instant value.'
Subjects:
  - 'Mobile Development'
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Android'
  - 'Kotlin'
  - 'Date'
CatalogContent:
  - 'learn-kotlin'
  - 'paths/computer-science'
---

**`.toInstant()`** is a simple way to convert a date and time string into a format that can be easily used by Kotlin programs. The conversion results in obtaining an Instant value, which is a standardized representation of time that is independent of time zones. Essentially, it helps transform a textual representation of a moment in time into a format that can be more easily manipulated and compared programmatically.

## Syntax

```pseudo
fun String.toInstant(): Instant
```
* String: This is the type of the receiver object for the function.
* toInstant(): This is the name of the function.
* Instant: This is the return type of the function.

## Example

```kotlin
val iso8601String = "2023-11-13T11:04:44+00:00"

// Convert the ISO-8601 string to an Instant value.
val instant = iso8601String.toInstant()

// Print the Instant value.
println(instant)
```

Output:

```shell
2023-11-13T11:04:44Z
```
