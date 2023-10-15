---
Title: '.getWeeksInWeekYear()'
Description: 'Returns the total number of weeks in a week year.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Methods'
  - 'Calendar'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **`.getWeeksInWeekYear()`** method of the `Calendar` class returns an integer representing the number of weeks in a **week year**.

## Syntax

```pseudo
calendar.getWeeksInWeekYear()
```

> **Note:** The concept of a **week-based year** is important in some calendar systems, especially when dealing with fiscal years or other non-standard year definitions. The number of weeks in a week-based year can vary depending on factors such as the starting day of the week and whether the year contains partial weeks at the beginning or end.

## Example 1

The example below demonstrates the use of the `.getWeeksInWeekYear()` method.

```java
import java.util.Calendar;
public class CalendargetWeeksInWeekYearExample {
  public static void main(String args[]){

    // Creating a calendar object
    Calendar cal = Calendar.getInstance();

    // Displaying the calendar
    System.out.println("Current Calendar: " + cal.getTime());

    System.out.println("Weeks in week year: "  + cal.getWeeksInWeekYear());

    cal.setWeekDate(1996, 23, 6 );

    System.out.println("Changed Time: "+cal.getTime());

    // Get the number of weeks in the week-based year
    System.out.println("Weeks in week year: "  + cal.getWeeksInWeekYear());
  }
}
```

This code will return an output similar to the following:

```shell
Current Time:Sun Sep 10 17:32:33 GMT 2023
Weeks in week year :52
Changed Time:Fri Jun 07 17:32:33 GMT 1996
Weeks in week year :52
```
