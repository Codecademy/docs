---
Title: '.getActualMaximum()'
Description: 'A Calendar class method that returns the maximum value the specified calendar field could have, based on the time value of the calendar'
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

The **`.getActualMaximum()`** method of the `Calendar` class retrieves the maximum value the specified calendar field could have, based on the time value of the calendar.

## Syntax

```pseudo
calendar.getActualMaximum(int field)
```

## Parameters

`int field`: The calendar field the maximum value is to be retrieved from. For example `Calendar.MONTH` and `calendar.YEAR`

## Example

In the following example, `.getActualMax()` is used to retrieve the maximum value of both the `Calendar.MONTH` and `Calendar.YEAR` fields.

```java
import java.util.*;

public class CalendarMaxDemo {
   public static void main(String[] args) {

        //Creating a calendar instance 
      Calendar calendar = Calendar.getInstance();

        //Retrieving the maximum value  the year field  can have   
        int year = 
            calendar.getActualMaximum(Calendar.YEAR);
            system.out.println("Maximum year is: " + year);

        //Retrieving the maximum value the month field can have 

        int month = 
            calendar.getActualMaximum(Calendar.MONTH);
            system.out.println("Maximum MONTH is: " + month); 

   }
}
```

The output of the above code will be:

```shell
Maximum year is: 292278994
Maximum MONTH is: 11
```
