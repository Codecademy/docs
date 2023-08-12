---
Title: '.getActualMinimum()'
Description: 'Returns the minimum value that the specified calendar field could have based on the time value of this calendar'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Calendar'
  - 'Time Value'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The `.getActualMinimum()` method returns the minimum possible value that the specified calendar field could have 

## Syntax
```pseudo
//Instance of a calendar is created
Calendar cal = Calendar.getInstance();

//This returns the minimum value of the calendar field provided
min = cal.getActualMinimum(Calendar.YEAR);
```

The method above returns the minimum value for a calendar year

## Example

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
