---
Title: '.from()'
Description: 'Returns an instant object of a given Date.'
Subjects:
  - 'Data Science'
  - 'Computer Science'
  - 'Discrete Math'
Tags:
  - 'Date'
  - 'Time'
  - 'Methods'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **'Date.from()'** method returns an `Instant` object of a given `Date`. An `Instant` provides more accuracy than a `Date` because it reports nanoseconds (while `Dates` are limited to milliseconds).

## Syntax

```pseudo
someDate.from(inst)
```

The `Date.from()` method is used in combination with an `Instant` object `inst`.

In Java `from` is not a keyword. The `from` method can be used with the [Date](https://www.codecademy.com/resources/docs/java/date) class to retrieve the current day, date, time, timezone and year.

```java
Date today = new Date();
Instant inst = Instant.now();
System.out.println(today.from(inst));
```

## Example

The following example uses the words `"apples"` and `"oranges"` to avoid syntax confusion:

```java
import java.time.Instant;
import java.util.Date;

class JavaDateDemo {
    public static void main(String args[])
    {
        // This line creates a Date object called "apples".
        Date apples = new Date();

        // This line creates an Instant object called "oranges".
        Instant oranges = Instant.now();

        // This line displays the instant using the .from() method.
        System.out.println(
                "Present day, date, time, timezone and year: "
                        + apples.from(oranges));
    }
}
```

The output will be the exact day, date, time, timezone and year of the moment the query is submitted:

```shell
Present day, date, time, timezone and year: Wed Aug 02 11:06:16 AKDT 2023
```
