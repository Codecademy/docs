---
Title: '.getActualMaximum()'
Description: 'Returns the actual maximum value for a specific calendar field, conditional on the time value of the calendar.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Date'
  - 'Methods'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **`.getActualMaximum()`** method of the `Calendar` class returns the actual maximum value for a specific calendar field based on the current state of the calendar instance.

## Syntax

```pseudo
calendar.getActualMaximum(int field)
```

This method takes only one argument, `int field`, which is an integer constant representing the calendar field for which the maximum value will be returned. The value is based on factors such as the given day, month or year (e.g. `Calendar.MONTH`).

## Example

In the following example, `.getActualMaximum()` is used to retrieve the maximum value of both the `Calendar.MONTH` and `Calendar.YEAR` fields. This example will return the maximum day in the month of February of the year 2012.

```java
import java.util.Calendar;

 // CalendarMaxExample.java
 public class CalendarMaxExample {
  public static void main(String[] args) {

  // Create a Calendar instance
  Calendar calendar = Calendar.getInstance();

  // Set the year field to 2012
  calendar.set(Calendar.YEAR, 2012);

  // Set the month field to February
  calendar.set(Calendar.MONTH, Calendar.FEBRUARY);

  // Retrieve the actual maximum day in February of the year 2012
  int maxDay = calendar.getActualMaximum(Calendar.DAY_OF_MONTH);

  // Print the result
  System.out.println("Maximum day of the month: " + maxDay);
  }
}
```

The output of the above code will be 29 implying that 2012 was a leap year:

```shell
Maximum day of the month: 29
```
