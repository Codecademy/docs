---
Title: '.after()'
Description: 'Compares whether the current instance of Calendar occurs after the time represented by the specified object.'
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

The **`.after()`** method determines whether one date or time occurs chronologically after another date or time. It takes two instances of date or time objects as input and returns a boolean value; `true` if the first instance is later in time than the second instance, and `false` otherwise. This method is commonly used to compare and order events, appointments, or other time-related data.

## Syntax

```pseudo
result = myCalendar.after(time);
```

> **Note:** Please note that the `Calendar` class has been replaced by the `LocalDate`, `LocalTime`, and `LocalDateTime` classes in the Java 8 and later Date and Time API. These classes provide a more modern and user-friendly API for working with dates and times in Java.

## Example

In this example, `calendar1` is set to August 1, 2023, and `calendar2` is set to September 1, 2023. Then, the `.after()` method is used to compare these two instances.

```java
import java.util.Calendar;

public class CalendarExample {
  public static void main(String[] args) {
    // Create two instances of Calendar
    Calendar calendar1 = Calendar.getInstance();
    Calendar calendar2 = Calendar.getInstance();

    // Set different dates for each instance
    calendar1.set(2023, Calendar.AUGUST, 1); // August 1, 2023
    calendar2.set(2023, Calendar.SEPTEMBER, 1); // September 1, 2023

    // Check if calendar1 is after calendar2
    boolean isAfter = calendar1.after(calendar2);

    if (isAfter) {
      System.out.println("calendar1 is after calendar2");
    } else {
      System.out.println("calendar1 is not after calendar2");
    }
  }
}

```

The above code will output:

```shell
calendar1 is not after calendar2
```
