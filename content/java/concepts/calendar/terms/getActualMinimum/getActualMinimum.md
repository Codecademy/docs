---
Title: '.getActualMinimum()'
Description: 'Returns the minimum value that the specified calendar field could have based on the time value of the calendar.'
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

The **`.getActualMinimum()`** method returns the minimum possible value that the specified calendar field can have.

## Syntax

```pseudo
min = cal.getActualMinimum(field);
```
Where `myCalendar` is a `Calendar` object, and `field` is the constant for the field to retrieve the minimum for.


## Example

The below example uses getActualMinimum() to retrieve the minimum value for a year and the minimum value for a month

```java
import java.util.Calendar;

public class CalendarDemo {
  public static void main(String[] args) {

    // Create a calendar
    Calendar cal = Calendar.getInstance();

    // return the minimum value that the year field could have
    int a = cal.getActualMinimum(Calendar.YEAR);
    System.out.println("Minimum year :" + a);

    // return the minimum value that the month field could have
    int i = cal.getActualMinimum(Calendar.MONTH);
    System.out.println("Minimum month :" + i);
  }
}
```

The output from the snippet above would look like this:

```shell
Minimum year :1
Minimum month :0
```
