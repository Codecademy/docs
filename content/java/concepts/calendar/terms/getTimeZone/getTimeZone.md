---
Title: '.getTimeZone()'
Description: 'Returns the current time-zone of a given Calendar.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Methods'
  - 'Time'
  - 'Date'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **`.getTimeZone()`** method in Calendar class is used to return the current time-zone of a given Calendar.

## Syntax

```pseudo
TimeZone time_zone = myCalendar.getTimeZone();
```
myCalendar is a Calendar class object. The Calendar is an abstract class that provides methods for converting between a specific instant in time and a set of calendar fields such as YEAR, MONTH, DAY_OF_MONTH, HOUR, and so on, and for manipulating the calendar fields, such as getting the date of the next week.
time_zone is a TimeZone class Object. The Java TimeZone class is a class that represents time zones, and is helpful when doing calendar arithmetics across time zones. The java.util.TimeZone class is used in conjunction with the java.util.Calendar class.

The following code creates a Calendar class object and then assigns the object's current time zone to a TimeZone object. The result is then printed to the screen. 

```java
import java.util.*;
 
public class Calendar_Demo {
    public static void main(String args[])
    {
        // Creating a calendar object
        Calendar calndr = Calendar.getInstance();
 
        // Getting the time zone of calendar
        TimeZone time_zone = calndr.getTimeZone();
 
        // Displaying the current time zone
        System.out.println("The current Time zone is: "
                           + time_zone.getDisplayName());
    }
}

```

The above code will output:

```shell
The current Time zone is: Coordinated Universal Time
```
