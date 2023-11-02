---
Title: '.Month'
Description: 'Retrieves the month from a Kotlin DateTime object as an integer.'
Subjects:
  - 'Kotlin'
  - 'DateTime'
Tags:\
  - 'Date'
  - 'Methods'
  - 'Kotlin'
CatalogContent:
  - 'learn-kotlin'
  - 'paths/computer-science'
---


The **`.Month()`** method in Kotlin is used to retrieve the month from a given date object. This method is essential when working with `date` and `time` in Kotlin, allowing developers to extract and manipulate the month component of a date. It's particularly useful in scenarios where the month needs to be displayed, compared, or used in calculations. In Kotlin's date-time API, the month is typically represented as an integer, where `1` corresponds to `January` and `12` to `December`.

## Syntax

```kotlin
val month: Int = date.Month()
```

- *date*: An instance of a date object from which you want to extract the month.
- *month*: This is an integer representing the month extracted from the date object. Typically, in Kotlin, months are represented as integers ranging from 1 (January) to 12 (December).

## Example

```kotlin
import java.time.LocalDate

fun main() {
    val currentDate = LocalDate.now() 
    val month = currentDate.monthValue

    println("The current month is: $month")
}
```

In this example, `LocalDate.now()` is used to get the current date. The `.monthValue` property (which serves a similar purpose to a `.Month()` method) of the `LocalDate` object is then called to retrieve the month from the current date. The month is then printed to the console. Assuming the current date is November 1, 2023, the output will be `11`.

> **Note**: Kotlin's standard library doesn't directly provide a `.Month()` method. Instead, the standard way to get the month from a date in Kotlin is by using Java's `java.time.LocalDate` and its monthValue` property as shown in the example. Adjustments might be needed based on the specific libraries and versions in use.