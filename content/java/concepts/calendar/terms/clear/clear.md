---
Title: '.clear()'
Description: 'A method designed to reset or clear specific fields of a Calendar instance.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Methods'
  - 'Calendar'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The method **`.clear()`** method of the `Calendar` class is used to reset or clear specific fields of the given instance to their default values. It allows the reset of individual fields, such as `YEAR`, `MONTH`, `DAY_OF_MONTH`, `HOUR`, etc., to their initial state.

## Syntax

```pseudo
myCalendar.clear()
myCalendar.clear(field)
```

> **Note:** Without any parameters, the `.clear` method clears all fields of the `Calendar` instance, thereby resetting it to its initial state. The `.clear(field)` method allows a specific field to be cleared by providing the corresponding field constant from the `Calendar` class.

## Example

In this example, the `CalendarClearExample` class demonstrates the use of `.clear()` and `.clear(field)` methods. The first part clears all fields of the `Calendar` instance, while the second part clears the `YEAR` field, effectively setting it to its default value (which is 1970).

```java
import java.util.Calendar;

public class CalendarClearExample {
    public static void main(String[] args) {
        // Create a Calendar instance representing the current date and time
        Calendar calendar = Calendar.getInstance();

        System.out.println("Before clearing: " + calendar.getTime());

        // Clear all fields using clear()
        calendar.clear();

        System.out.println("After clearing all fields: " + calendar.getTime());

        // Set the calendar to a specific date and time
        calendar.set(Calendar.YEAR, 2023);
        calendar.set(Calendar.MONTH, Calendar.JULY);
        calendar.set(Calendar.DAY_OF_MONTH, 19);
        calendar.set(Calendar.HOUR_OF_DAY, 15);
        calendar.set(Calendar.MINUTE, 30);

        System.out.println("Before clearing specific field: " + calendar.getTime());

        // Clear the YEAR field using clear(int field)
        calendar.clear(Calendar.YEAR);

        System.out.println("After clearing YEAR field: " + calendar.getTime());
    }
}
```

This code will return an output similar to the following:

```shell
Before clearing: Wed Jul 19 17:39:21 UTC 2023
After clearing all fields: Thu Jan 01 00:00:00 UTC 1970
Before clearing specific field: Tue Jul 19 15:30:00 UTC 2023
After clearing YEAR field: Thu Jan 01 15:30:00 UTC 1970
```
