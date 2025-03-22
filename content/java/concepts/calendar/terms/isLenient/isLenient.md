---
Title: '.isLenient()'
Description: 'Returns a boolean identifying a given calendar instance as lenient or not.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Methods'
  - 'Calendar'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **`.isLenient()`** method of the `Calendar` class returns `True` if the interpretation of this `Calendar` is lenient else it returns `False`.

## Syntax

```pseudo
calendar.isLenient()
```

> **Note:** When a `Calendar` is lenient, it allows date and time values that may not make sense in a real-world context. For example, `February 30th` or a time value of `25:70:90` would be accepted. When a `Calendar` is non-lenient, it enforces stricter rules, and attempting to set invalid date or time values will throw exceptions, such as `IllegalArgumentException`.

## Example 1

The example below demonstrates the use of the `.isLenient()` method.

```java
import java.util.Calendar;
public class CalendarIsLenientExample {
  public static void main(String args[]){

    // Creating a calendar object
    Calendar cal = Calendar.getInstance();

    // Displaying the calendar
    System.out.println("Current Calendar: " + cal.getTime());

    // Checking the leniency
    boolean leniency = cal.isLenient();

    // Displaying the leniency
    System.out.println("Calendar is" + " lenient: " + leniency);
  }
}
```

This code will return an output similar to the following:

```shell
Current Calendar: Wed Sep 06 17:51:57 GMT 2023
Calendar is lenient: true
```

## Example 2

The example below demonstrates the use of the `.isLenient()` method.

```java
import java.util.Calendar;
public class CalendarIsLenientExample{
  public static void main(String args[]){

    // Creating a calendar object
    Calendar cal = Calendar.getInstance();

    // Displaying the calendar
    System.out.println("Current Calendar: " + cal.getTime());

    // Checking the leniency
    boolean leniency = cal.isLenient();
    cal.setLenient(false);
    leniency = cal.isLenient();

    // Displaying the leniency
    System.out.println("Calendar is" + " lenient: " + leniency);
  }
}
```

This code will return an output similar to the following:

```shell
Current Calendar: Wed Sep 06 17:57:00 GMT 2023
Calendar is lenient: false
```
