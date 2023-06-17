---
Title: 'Date'
Description: 'The `Date` class in the `java.util` package is used to represent dates and times in Java'
Subjects:
  - 'Computer Science'
Tags:
  - 'Classes'
  - 'Integers'
  - 'Methods'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

In simple terms, the `Date` [class](https://www.codecademy.com/learn/learn-java-classes-and-methods) represents a specific point in time, down to milliseconds. It internally stores the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 GMT (also known as the Unix epoch).

## Syntax

```pseudo
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

The output for the above code will be:

```shell
Current date and time: Wed Jun 16 12:34:56 GMT 2023
Milliseconds since Unix epoch: 1678450496000
```

In the above code, the `Date` class is imported from the `java.util` package. Inside the main method, a `Date` object named `currentDate` is created using the default constructor. This represents the current date and time. The number of milliseconds since the Unix epoch can be accessed using the `getTime()` method of the `Date` class. In the example, the value is assigned to the variable `currentTimeMillis`. Finally, the current date and time are displayed by printing the `currentDate` object using `System.out.println()`, and the number of milliseconds since the Unix epoch is also printed.
