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

The **`Calendar`** [class](https://www.codecademy.com/learn/learn-java-classes-and-methods) is an abstract class that provides methods for converting between a specific instant in time and a set of calendar fields such as `YEAR`, `MONTH`, `DAY_OF_MONTH`, `HOUR`, and so on. It also provides methods for manipulating the calendar fields, such as getting the date of the next week.

## Syntax

```pseudo
Calendar calendar = Calendar.getInstance();
```

## Example

```java
import java.util.Date;
import java.util.Calendar;

public class CalendarExample {
    public static void main(String[] args) {

        Calendar calendar = Calendar.getInstance();
        int year = calendar.get(Calendar.YEAR);
        int month = calendar.get(Calendar.MONTH);
        int date = calendar.get(Calendar.DATE);

        System.out.printf("Today's date is: %d/%d/%d%n", date, month + 1, year);
    }
}
```

The above code will output:

```shell
Today's date is: 1/8/2023
```

In the above example, we created a `Calendar` object using the `getInstance()` method. Then we used the `get()` method to get the current year, month, date, and day of the month. Note that the month is zero-indexed, so we added one to it to get the correct month.

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
