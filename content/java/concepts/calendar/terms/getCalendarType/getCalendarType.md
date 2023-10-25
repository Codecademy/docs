---
Title: 'getCalendarType()' 
Description: 'Retrieves the type or format of the calendar represented by the Calendar object, returns a string representing the calendar type' 
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

The **get CalendarType** method is a function available in the Calendar class in Java. It is used to retrieve the type or format of the calendar represented by the Calendar object. This method returns a string representing the calendar type, such as "gregory", "japanese", "buddhist", etc. This method does not accept any argument as a parameter.

## Syntax

```java
public String getCalendarType()
```

## Example

No parameter is passed to this method.

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
This example returns the calendar type or class name of that calendar type:

```java
Type of Calendar is: gregory
```
