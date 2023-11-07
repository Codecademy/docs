---
Title: '.plus()' 
Description: 'Plus method allows to add two dateTimeperiod instances.'
Subjects:
  - 'Computer science'
  - 'Code Foundations'
Tags:
  - 'Methods'
  - 'DateTime'
CatalogContent:
  - 'learn-kotlin'
  - 'paths/computer-science'
---

**`Plus() method`** is a datetime method that can be used to add two date period instances. Depending on the parameters passed, there are two ways this method can be used.

## Syntax 1

```pseudo
plus(Long amountToAdd, TemporalUnit)
```
- `amountToAdd`: is the amount of unit to add to the date.
- `TemporalUnit`: is the amount to add. It can be days, weeks, months etc.

`ChronoUnit` enum can be used to add unit to the date because it implements TemporalUnit interface. The fields provided by ChronoUnit are:

- `DAYS`
- `WEEKS`
- `MONTHS`
- `YEARS`
- `DECADES`
- `CENTURIES`
- `MILLENIA`
- `ERAS`

## Example 

```kotlin
/** Imported time API from java and
* ChronoUnit enum from java.time.temporal Interface
*/

import java.time.*
import java.time.temporal.ChronoUnit;

fun main() {
  // Created an instance of today's date
  val current = LocalDate.now()

  // The terminal should display today's date which is 2023/11/05
  println(current)

  // Created a variable to check the date 12 days from now
  val later = current.plus(12, ChonoUnit.DAYS)

  // The terminal should display the date 12 days from now which is 2023/11/17
  println(later)
}
```

This will be the outputs

```shell
output1 = 2023-11-05
output2 = 2023-11-17
```

## Syntax 2

```pseudo
plus(TemporalAmount amountToAdd)
```

- `amountToAdd`: is the amount of unit to add to the date.

The `Period` class can be used to add the amount but may include other type implementing the TemporalAmount Interface.
Here are some example of use for the Period class:

 - `Period.of(int years, int months, int days)`
 - `Period.ofDays(int days)`
 - `Period.ofWeeks(int weeks)`
 - `Period.ofMonths(int months)`
 - `Period.ofYears(int years)`

## Example 

```kotlin
/** Imported time API from java and
* ChronoUnit enum from java.time.temporal Interface
*/

import java.time.*
import java.time.temporal.ChronoUnit;

fun main() {
  // Created an instance of today's date
  val current = LocalDate.now()

  // The terminal should display today's date which is 2023/11/05
  println(current)

  // Created a variable to check the date 15 days from now
  val later1 = current.plus(Period.ofDays(15))

  // The terminal should display the date 12 days from now which is 2023/11/20
  println(later1)  
}
```

This will be the outputs

```shell
output3 = 2023-11-05
output4 = 2023-11-20
```