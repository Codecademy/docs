---
Title: '.complete()'
Description: 'A method to fill in any empty fields of a Calendar instance.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Methods'
  - 'Calendar'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **`.complete()`** method of the `Calendar` class is used to fill in any empty fields in the `Calendar` instance.

## Syntax

```pseudo
someCalendar.complete()
```

> **Note:** If the time value has not been calculated from the calendar field values, the `.computeTime()` method is called. Then to calculate all calendar field values, the `.computeFields()` method is called.

## Example

The example below demonstrates the use of the `.complete()` method.

```java
import java.util.GregorianCalendar;
public class CalendarCompleteExample extends GregorianCalendar {
  public static void main(String[] args) {

    // Create a new calendar
    CalendarCompleteExample cal = new CalendarCompleteExample();

    // Print the current date
    System.out.println("The current date is : " + cal.getTime());

    // Clear the calendar
    cal.clear();

    // Set a new year and call complete()
    cal.set(GregorianCalendar.YEAR, 2021);
    cal.complete();

    // Print the current date
    System.out.println("New date is : " + cal.getTime());

   }
}
```

This code will return an output similar to the following;

```shell
The current date is: Mon Aug 14 15:39:33 UTC 2023
The new date is: Tue Jan 01 00:00:00 UTC 2021
```
