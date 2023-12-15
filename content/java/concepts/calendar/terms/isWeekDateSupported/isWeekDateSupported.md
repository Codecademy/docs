---
Title: '.isWeekDateSupported()'
Description: 'Determines if the current Calendar object supports week dates.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Methods'
  - 'Calendar'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **`.isWeekDateSupported()`** method is used to check if the current `Calendar` object supports week dates. The method returns a boolean value, with `true` indicating support for week dates and `false` indicating otherwise. It belongs to the `Calendar` class and is an instance method, making it accessible with the class object.

## Syntax

```pseudo
result = myCalendar.isWeekDateSupported()
```

This method does not have any parameters.

> **Note:** The `Calendar` class has been replaced by the `LocalDate`, `LocalTime`, and `LocalDateTime` classes in the Java 8 and later Date-Time API. These classes provide a more modern and user-friendly API for working with dates and times in Java.

## Example

The following example shows the usage of `java.util.calendar.isWeekDateSupported()` method.

```java
import java.util.*;

public class CalendarDemo {
  public static void main(String[] args) {

  // Create an instance of GregorianCalendar
  Calendar calendar = new GregorianCalendar();

  // Check if the calendar supports week dates
  boolean supportsWeekDates = calendar.isWeekDateSupported();
    if (supportsWeekDates) {
        System.out.println("The calendar supports week dates.");
    } else {
        System.out.println("The calendar does not support week dates.");
    }
  }
}
```

Since the Gregorian Calendar supports week dates, the code will return:

```shell
The calendar supports week dates.
```
