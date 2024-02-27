---
Title: '.getWeekYear()'
Description: 'Returns the week year.'
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

The **`.getWeekYear()`** method of the `Calendar` class returns the time represented by a `Calendar` object in the form of the week year.

## Syntax

```pseudo
calendar.getWeekYear()
```

Returns the week year represented by this `Calendar` object in as an `integer`.

## Example

This example code shows the basic use of the `.getWeekYear()` method:

```java
import java.util.Calendar;

// CalendarGetWeekYearExample.java
public class CalendarGetWeekYearExample{
  public static void main(String[] args) {

    // Create a Calendar instance
    Calendar calendar = Calendar.getInstance();

    // Get the current time in weekyear
    long currentWeekYear = calendar.getWeekYear();

    // Prints current time in week year
    System.out.println("Current Week Year: " + currentWeekYear);
  }
}
```

The output should be similar to:

```shell
Current Week Year: 2023
```
