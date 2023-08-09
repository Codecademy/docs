---
Title: '.getCalendarType()'
Description: 'Returns the calendar type of the Calendar instance'
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

The `.getCalendarType()` method of the `Calendar` class is used to return a String type of the calendar used.

## Syntax

```pseudo

public String getCalendarType()

```

## Example

The following example displays the type of the calendar.

```java

import java.util.*;

public class MyClass {
  public static void main(String[] args) {
    //creating a Calendar object with specified date
    Calendar Cal = Calendar.getInstance();

    //printing the Calendar
    System.out.println("The Calendar is: " + Cal.getTime());

    //getting the calendar type
    System.out.println("Calendar Type: " + Cal.getCalendarType());
  }
}

```

This will output the following:

```shell

The calendar is: <Current DAY MONTH TIME (HH:MM:SS) UTC YEAR> (For eg., Wed Aug 09 10:00:00 UTC 2023)
The calendar type: gregory

```