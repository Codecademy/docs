---
Title: '.getActualMinimum()'
Description: 'Returns the minimum value allowed for a given calendar field.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Calendar'
  - 'Time'
  - 'Date'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **`.getActualMinimum()`** method returns the minimum value allowed for a given calendar field.

## Syntax

```pseudo
min = cal.getActualMinimum(field);
```

Where `myCalendar` is a `Calendar` object, and `field` is the constant for which the minimum will be returned.

## Example

The below example uses `.getActualMinimum()` to retrieve the minimum value for a year and the minimum value for a month.

```java
import java.util.Calendar;

public class CalendarDemo {
  public static void main(String[] args) {

    // Create a calendar
    Calendar cal = Calendar.getInstance();

    // Return the minimum value that the year field could have
    int a = cal.getActualMinimum(Calendar.YEAR);
    System.out.println("Minimum year: " + a);

    // Return the minimum value that the month field could have
    int i = cal.getActualMinimum(Calendar.MONTH);
    System.out.println("Minimum month: " + i);
  }
}
```

The output from the snippet above would look like this:

```shell
Minimum year: 1
Minimum month: 0
```
