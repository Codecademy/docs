---
Title: '.isSet()'
Description: 'Checks whether the given calendar field has a value set or not.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Methods'
  - 'Calendar'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **`.isSet()`** is a method that is used to check if a current field has a value or not. The return type is of this method is `Bool`, it returns `true` if the given field has a value set and `false` if it isn't. It returns true when the given parameter has been set by internal field interpretations. `isSet()` belongs to the `Calendar` class and is a non-static method, it is accessible with the class object.

## Syntax

```pseudo
result = myCalendar.isSet(calendar_field)
```

Parameters: The method takes one parameter, `calendar_field`, that refers to the specific field to be operated upon.
Return Value: The method either returns `true` if the value of the field is set, else it returns `false`.

> **Note:** The `Calendar` class has been replaced by the `LocalDate`, `LocalTime`, and `LocalDateTime` classes in the Java 8 and later Date and Time API. These classes provide a more modern and user-friendly API for working with dates and times in Java.

## Example

The following example shows the usage of `java.util.calendar.isSet()` method.

```java
import java.util.*;

public class CalendarDemo {
  public static void main(String[] args) {

  // Create a calendar
    Calendar cal = Calendar.getInstance();

  // Display the current calendar
    System.out.println("Current Day is " + cal.get(Calendar.DAY_OF_MONTH));

  // Determine if the given calendar field has a value set
    boolean b = cal.isSet(Calendar.DAY_OF_MONTH);
    System.out.println("Day of month is set: " + b);

  // Clear day of month
    cal.clear(Calendar.DAY_OF_MONTH);

  // Determine if the given calendar field has a value set
    b = cal.isSet(Calendar.DAY_OF_MONTH);
    System.out.println("Day of month is set: " + b);
   }
}
```

This code will return an output similar to the following:

```shell
Current Day is 6
Day of month is set: true
Day of month is set: false
```