---
Title: '.getCalendarType()'
Description: 'Retrieves the type or format of the calendar represented by the Calendar object, returns a string representing the calendar type.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Methods'
  - 'Classes'
  - 'Attributes'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **`.getCalendarType()`** method is available in the `Calendar` class in Java. It is used to retrieve the type or format of the calendar represented by the `Calendar` object. This method returns a string representing the calendar type, such as "gregory", "japanese", "buddhist", etc. This method does not accept any arguments.

## Syntax

```pseudo
someCalendar.getCalendarType()
```

- `someCalendar`: The given calendar to be addressed.

## Example

The following code demonstrates how to use the `.getCalendarType()` method to obtain and display the type of calendar used by the Calendar instance, which represents the default calendar for the current locale in Java.

```java
import java.util.Calendar;

public class MyClass {
  public static void main(String[] args) {
    // Create a Calendar instance representing the default calendar for the current locale
    Calendar calendar = Calendar.getInstance();

    // Get the calendar type and store it in a variable
    String calendarType = calendar.getCalendarType();

    // Display the calendar type
    System.out.println("Type of Calendar is: " + calendarType);
  }
}
```

This example returns the following output:

```shell
Type of Calendar is: gregory
```
