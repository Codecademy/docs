---
Title: '.setMinimalDaysInFirstWeek()'
Description: 'Sets how many minimal days required in the first week of the year.'
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

The **`.setMinimalDaysInFirstWeek()`** method of the `Calendar` class sets the minimal number of days required in the first week of a year based on the the amount of days passed as an argument to the method.

## Syntax

```pseudo
calendar.setMinimalDaysInFirstWeek(int day)
```

This method takes only one argument, `int day`, which is an integer constant representing the number of days which will be set as the minimal days required in the first week of the year.

## Example

In the following example, `.setMinimalDaysInFirstWeek()` is used to set the minimal days required in the first week of the year.

```java
import java.util.Calendar;

public class calendarSetMinimalDaysInFirstWeekExample {

  public static void main(String[] args) {
    // Create a calendar instance
    Calendar cal = Calendar.getInstance();

    // Set the minimal days required in the first week
    int day = 2;
    cal.setMinimalDaysInFirstWeek(day);

    // Print the minimal number of days required in the first week
    int min = cal.getMinimalDaysInFirstWeek();
    System.out.println("Minimal Days in Week: " + min);
  }

}
```

The output of the above code will be:

```shell
Minimal Days in Week: 2
```
