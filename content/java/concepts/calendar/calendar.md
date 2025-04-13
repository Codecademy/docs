---
Title: 'Calendar'
Description: 'An abstract class that represents dates and time and has methods for converting between a given moment in time and a number of calendar attributes.'
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

The **`Calendar`** [class](https://www.codecademy.com/resources/docs/java/classes) is an abstract class that represents dates and time. The class has methods for converting between a given moment in time and a number of calendar attributes such as `YEAR`, `MONTH`, `DAY_OF_MONTH`, `HOUR`, and so on.

## Syntax

```pseudo
Calendar calendar = Calendar.getInstance();
```

> **Note:** The `.getInstance()` function creates an object that represents the current date and time.

## Example

In the example below, a `Calendar` object is created using the `getInstance()` method. Then the `set()` method is used to set the year, month, date, hour, minute, and second. Finally, the `getTime()` method is used to get the date. Note that the month is zero-based, so January is 0, February is 1, and so on. Also, the `set()` overload could have been used that takes all the parameters at once.

```java
import java.util.Date;
import java.util.Calendar;

public class CalendarExample {
    public static void main(String[] args) {

        Calendar calendar = Calendar.getInstance();
        calendar.set(Calendar.YEAR, 2023);
        calendar.set(Calendar.MONTH, 0);
        calendar.set(Calendar.DATE, 8);
        calendar.set(Calendar.HOUR_OF_DAY, 0);
        calendar.set(Calendar.MINUTE, 0);
        calendar.set(Calendar.SECOND, 0);

        // calendar.set(2023, 0, 8, 0, 0, 0);

        Date date = calendar.getTime();

        System.out.println(date);
    }
}
```

The above code will output:

```shell
Sun Jan 08 00:00:00 GMT 2023
```

## Fields

There are many fields in the `Calendar` class. Here are some of the most important ones:

- `YEAR`: The field indicating the year.
- `MONTH`: The field indicating the month.
- `DAY_OF_MONTH`: The field indicating the day of the month.
- `DATE`: Synonym for `DAY_OF_MONTH`.
- `HOUR`: The field indicating the hour of the day.
- `MINUTE`: The field indicating the minute within the hour.
- `SECOND`: The field indicating the second within the minute.
- `MILLISECOND`: The field indicating the millisecond within the second.

## Methods

Methods of the `Calendar` class include:
