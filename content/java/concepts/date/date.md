---
Title: 'Date'
Description: 'The Date class in the java.util package is used to represent dates and times in Java.'
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

The **`Date`** [class](https://www.codecademy.com/learn/learn-java-classes-and-methods) represents a specific point in time, down to milliseconds. It provides methods to manipulate and format dates, as well as perform arithmetic and comparison operations. Internally the class uses a base or reference date of January 1, 1970, 00:00:00 GMT (also known as the Unix epoch).

## Example

```java
import java.util.Date;

public class DateExample {
    public static void main(String[] args) {

    Date currentDate = new Date();

    long currentTimeMillis = currentDate.getTime();

    System.out.println("Current date and time: " + currentDate);
    System.out.println("Milliseconds since Unix epoch: " + currentTimeMillis);
}
}
```

The output for the above code will resemble the following, with values for the current date:

```shell
Current date and time: Wed Jun 16 12:34:56 GMT 2023
Milliseconds since Unix epoch: 1678450496000
```

In the above code, the `Date` class is imported from the `java.util` package. Inside the main method, `currentDate` is assigned the current date and time. Next, the `.getTime()` method is used to return the number of milliseconds since the epoch. Finally, both values are logged to the console.

## Methods

Here are some important aspects and methods of the `Date` class:

- Creating a `Date` object:
  - `Date()`: Creates an object representing the current date and time.
  - `Date(long millis)`: Creates a `Date` object with the specified number of milliseconds since January 1, 1970, 00:00:00 GMT (the Unix epoch).
- Getting and setting date components:
  - `.getTime()`: Returns the number of milliseconds since the Unix epoch.
  - `.setTime(long time)`: Sets the time using the specified number of milliseconds.
- Formatting and parsing dates:
  - `.toString()`: Returns a string representation. The default format is not very readable or localized.
  - `SimpleDateFormat` class (from java.text package): Allows formatting and parsing of dates using patterns.
- Comparing dates:
  - `.before(Date when)`: Checks if the given date is before the time specified.
  - `.after(Date when)`: Checks if the given date is after the time specified.
  - `.compareTo(Date anotherDate)`: Returns a value based on the relative order of two dates.
