---
Title: '.get()'
Description: 'Returns the value of the given calendar field.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Calendar'
  - 'Methods'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **`.get()`** method of the `Calendar` class is used to return the value of the given calendar field.

## Syntax

The `get(int field)` is used to retrieve the value of a specific date or time field, indicated by the provided field argument.

```pseudo
public int get(int field)
```

## Example 1

This example demonstrates a basic implementation of the `.get` function. The code acquires the present year, month, and day of the month from a `Calendar` instance, adjusting the month representation to account for the 0-based index.

```java
import java.util.Calendar;

public class CalendarExample {
    public static void main(String[] args) {
        // Create a Calendar instance
        Calendar calendar = Calendar.getInstance();

        // Get the year, month, and day of the month
        int year = calendar.get(Calendar.YEAR);
        // Month values are 0-based (0 = January, 11 = December)
        int month = calendar.get(Calendar.MONTH);
        int dayOfMonth = calendar.get(Calendar.DAY_OF_MONTH);

        // Display the retrieved values
        System.out.println("Current Year: " + year);
        // Adding 1 to adjust for 0-based months
        System.out.println("Current Month: " + (month + 1));
        System.out.println("Day of the Month: " + dayOfMonth);
    }
}
```

The output of the provided example would vary based on the current date when the code is executed. Here's a general idea of what the output might look like:

```shell
Current Year: 2023
Current Month: 8
Day of the Month: 9
```

## Example 2

This example employs the `Calendar` class to set a fixed date (July 16, 2022) within a `Calendar` instance. It retrieves the year, month, and day of the month from the configured instance and displays them in a formatted output on the console.

```java
import java.util.Calendar;

public class FixedDateCalendarExample {
    public static void main(String[] args) {
        // Create a Calendar instance and set it to a fixed date
        Calendar calendar = Calendar.getInstance();
        calendar.set(2022, Calendar.JULY, 16);

        // Get the year, month, and day of the month
        int year = calendar.get(Calendar.YEAR);
        int month = calendar.get(Calendar.MONTH);
        int dayOfMonth = calendar.get(Calendar.DAY_OF_MONTH);

        // Display the retrieved values
        System.out.println("Fixed Date: " + year + "-" + (month + 1) + "-" + dayOfMonth);
    }
}
```

This will output the following:

```shell
Fixed Date: 2022-7-16
```
