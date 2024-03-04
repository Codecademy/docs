---
Title: '.computeFields()'
Description: 'Synchronizes the time of a Calendar object with the set field values.'
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

The **`.computeFields()`** method of the `Calendar` class converts the current millisecond time value to the relevant field values in the `Calendar` object.

## Syntax

```pseudo
calendar.computeFields()
```

> **Note:** `computeFields()` method is a non-static method, it is accessible with the `Calendar` instance. Trying to access it with the class name throws an error.

## Example

In the example below the `CalendarComputeFieldExample` class is instantiated and the calendar is set to the year `2024`. Then, the `computeFields()` method is called to sync up the `Calendar` field values with the new time that has been set for the `Calendar` object.

```java
import java.util.*;

public class CalendarComputeFieldExample extends GregorianCalendar {
 public static void main(String[] args) {
  // Instantiate a new Calendar object
  CalendarComputeFieldExample cal = new CalendarComputeFieldExample();

  // Print the current date
  System.out.println("Current date is: " + cal.getTime());

  // Clear the calendar
  cal.clear();

  // Set a new year and call computeFields()
  cal.set(GregorianCalendar.YEAR, 2024);
  System.out.println("New date is: " + cal.getTime());
  cal.computeFields();

  // Print the current date
  System.out.println("New date is: " + cal.getTime());
  }
}
```

This results in the following output:

```shell
Current date is: Fri Aug 18 20:54:51 GMT 2023
New date is: Mon Jan 01 00:00:00 GMT 2024
New date is: Mon Jan 01 00:00:00 GMT 2024
```
