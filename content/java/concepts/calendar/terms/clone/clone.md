---
Title: '.clone()'
Description: 'Returns a copy of a Calendar object.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Calendar'
  - 'Date'
  - 'Methods'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **`.clone()`** method of the `Calendar` class is used to return a copy of a Calendar object.

## Syntax

```pseudo
result = myCalendar.clone()
```

Returns a copy of the `myCalendar` `Calendar` object.

## Example

This example creates a calendar, displays it, clones it and displays its clone.

```java
import java.util.*;

public class CalendarCloneExample {
  public static void main(String args[])
  {
    // Create a calendar object
    Calendar original_calendar = new GregorianCalendar(1971, 8, 13);

    // Print original calendar
    System.out.println(original_calendar.getTime());

    // Cloning the original
    Calendar copy_calendar = (Calendar) original_calendar.clone();

    // Print copy calendar
    System.out.println(copy_calendar.getTime());
  }
}
```

Output for the above code will be:

```shell
Mon Sep 13 00:00:00 UTC 1971
Mon Sep 13 00:00:00 UTC 1971
```
