---
Title: 'Calendar'
Description: 'Calendar is an abstract class that provides methods for converting between a specific instant in time and a set of calendar fields'
Subjects:
  - 'Computer Science'
Tags:
  - 'Classes'
  - 'Date'
  - 'Methods'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **`Calendar`** [class](https://www.codecademy.com/learn/learn-java-classes-and-methods) is an abstract class that provides methods for converting between a specific instant in time and a set of calendar fields such as `YEAR`, `MONTH`, `DAY_OF_MONTH`, `HOUR`, and so on. It also provides methods for manipulating the calendar fields, such as getting the date of the next week.

## Syntax

```pseudo
Calendar calendar = Calendar.getInstance();
```

## Example

```java
import java.util.Date;

public class CalendarExample {
    public static void main(String[] args) {

        Calendar calendar = Calendar.getInstance();
        Date currentDate = calendar.getTime();

        System.out.println("Current date and time: " + currentDate);
    }
}
```

The output for the above code will resemble the following, with values for the current date:

```shell
Current date and time: Wed Jun 16 12:34:56 GMT 2023
```

In the above code, the `Calendar` class is imported from the `java.util` package. Inside the main method, `calendar` is assigned the current date and time. Finally, the value is logged to the console.

## Fields

There are many fields in the `Calendar` class. Here are some of the most important ones:

- `YEAR`: The field indicating the year.
- `MONTH`: The field indicating the month.
- `DAY_OF_MONTH`: The field indicating the day of the month.
- `HOUR`: The field indicating the hour of the day.
- `MINUTE`: The field indicating the minute within the hour.
- `SECOND`: The field indicating the second within the minute.
- `MILLISECOND`: The field indicating the millisecond within the second.

## Methods

Here are some important aspects and methods of the `Calendar` class:

- Creating a `Calendar` object:
  - `Calendar.getInstance()`: Creates an object representing the current date and time.
  - `Calendar.getInstance(TimeZone zone)`: Creates a `Calendar` object with the specified time zone.
  - `Calendar.getInstance(Locale aLocale)`: Creates a `Calendar` object with the specified locale.
  - `Calendar.getInstance(TimeZone zone, Locale aLocale)`: Creates a `Calendar` object with the specified time zone and locale.
- Object methods:
  - `.getTime()`: Returns a `Date` object representing this `Calendar`'s time value. You can read more about the `Date` class [here](/content/java/concepts/date/date.md).
  - `.get(int field)`: Returns the value of the given calendar field.
  - `.getMaximum(int field)`: Returns the maximum value for the given calendar field.
  - `.getMinimum(int field)`: Returns the minimum value for the given calendar field.
  - `.add(int field, int amount)`: Adds or subtracts the specified amount of time to the given calendar field.
