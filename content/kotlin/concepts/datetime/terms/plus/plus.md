---
Title: 'Plus() method' 
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

**Plus() method** is a datetime method that can be used to add two date period instances. Depending on the parameters passed, there are two ways this method can be used.

## 1 - plus(Long amountToAdd, TemporalUnit)

In this example, the method takes two parameters
* **amountToAdd** is the amount of unit to add to the date.
* **unit** is the amount to add. It can be days, weeks, months etc.

## Example using ChronoUnit enum

ChronoUnit enum can be used to add unit to the date because it implements TemporalUnit interface. The fields provided by ChronoUnit are:

- DAYS
- WEEKS
- MONTHS
- YEARS
- DECADES
- CENTURIES
- MILLENIA
- ERAS

```
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

  output = 2023-11-05

  // Created a variable to check the date 12 days from now
  val later = current.plus(12, ChonoUnit.DAYS)

  // The terminal should display the date 12 days from now which is 2023/11/17
  println(later)

  output = 2023-11-17

  // Created a variable to check the date 3 weeks from now
  val later1 = current.plus(3, ChonoUnit.WEEKS)

  // The terminal should display the date 3 weeks from now which is 2023/11/26

  println(later1)

  output = 2023-11-26

  // Created a variable to check the date 3 years from now
  val later2 = current.plus(3, ChonoUnit.YEARS)

  // The terminal should display the date 3 years from now which is 2026/11/05
  println(later2)

  output = 2026-11-05
}
```

## 2- plus(TemporalAmount AmountToAdd)

In this second example, the method takes one parameter
* **amountToAdd** is the amount of unit to add to the the date. 

## Example using TemporalUnit

The Period class can be used to add the amount but may include other type implementing the TemporalAmount Interface.
Here are some example of use for the Period class:
  * Period.of(int years, int months, int days)
  * Period.ofDays(int days)
  * Period.ofWeeks(int weeks)
  * Period.ofMonths(int months)
  * Period.ofYears(int years)

```
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

  output = 2023-11-05

  // Created a variable to check the date 15 days from now
  val later3 = current.plus(Period.ofDays(15))

  // The terminal should display the date 12 days from now which is 2023/11/20
  println(later3)

  output = 2023-11-20

  // Created a variable to display today's date and time
  val current1 = LocalDateTime.now()

  // The terminal should display today's date and time

  println(current1)

  /*
  * The result below include the today's date and time which is
  * everything after the letter "T" which is: 00 H :39 mn: 10 s
  */
  output = 2023-11-05T00:39:10.659123669

  // Created a variable to check the date and time 25 days from now
  val later4 = current1.plus(Period.ofDays(25))

  // The terminal should display the date and time 25 days from now
  println(later4)

  /*
  * The result below is for 25 days from now. It inculdes the date
  * and time which is 2023-11-30T00:39:10.659123669
  */
  output = 2023-11-30T00:39:10.659123669

  // Created a variable to check the date 15 days from now
  val later5 = current.plus(Period.ofMonths(4))

  // The terminal should display the date 4 months from now which is 2024/03/05
  println(later5)

  output = 2024-03-05
}
```