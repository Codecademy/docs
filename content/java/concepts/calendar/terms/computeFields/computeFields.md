---
Title: '.computeFields()'
Description: 'Synchronizes the set calendar's object new time with the calendar's field values.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Calendar'
  - 'Methods'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **`.computeFields()`** method of the `Calendar` class converts the current millisecond time value `time` to calendar field values in `fields[]`

## Syntax

```pseudo
calendar.computeFields()
```

> **Note:** computeFields() method is a non-static method, it is accessible with the `class` object. Trying to access it with the `class` name throws an error.

## Example

The example below demonstrated the `computeFields()` method. `CalendarComputeFieldExample` class was instantiated and its calendar set to the year `2024`, `computeFields()` is then called on it to sync up with the `calendar` field values with a new time that is set for the `calendar` object.

```java
import java.util.*;

public class CalendarComputeFieldExample extends GregorianCalendar {
 public static void main(String[] args) {
    // Instantiate a new Calendar object
    CalendarComputeFieldExample cal = new CalendarComputeFieldExample();

    // print the current date
    System.out.println("Current date is: " + cal.getTime());

    // clear the calendar
    cal.clear();

    // set a new year and call computeFields()
    cal.set(GregorianCalendar.YEAR, 2024);
    System.out.println("New date is: " + cal.getTime());
    cal.computeFields();

    // print the current date
    System.out.println("New date is: " + cal.getTime());
    }
}
```

Ouput:

```shell
Current date is: Fri Aug 18 20:54:51 GMT 2023
New date is: Mon Jan 01 00:00:00 GMT 2024
New date is: Mon Jan 01 00:00:00 GMT 2024
```
