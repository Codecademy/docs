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

The **`.getTimeZone()`** method in the `Calendar` class is used to return the current time-zone of a given calendar.

## Syntax

```pseudo
time_zone = myCalendar.getTimeZone();
```

- `myCalendar` is a `Calendar` class object for which the time zone is being retrieved.
- `time_zone` is a `TimeZone` class object returned from the `.getTimeZone()` method.

## Example

The following code demonstrates the use of the `.getTimeZone()` method.

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

The above code will return an output similar to:

```shell
The current Time zone is: Coordinated Universal Time
```
