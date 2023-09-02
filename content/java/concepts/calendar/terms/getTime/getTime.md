---
Title: '.getTime()'
Description: 'Returns a Date object representing the Calendar object's time value.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Date'
  - 'Methods'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **`.getTime()`** method of the `Calendar` class returns a `Date` object that represents the time value of the `Calendar` object.

## Syntax

```pseudo
calendar.getTime()
```

## Example

In the example below, a `Calendar` object is created and the current date is retrieved using the **`.getTime()`** method.

```java
import java.util.Calendar;
import java.util.Date;

public class Main {
  public static void main(String[] args) {

    // Create a Calendar instance
    Calendar calendar = Calendar.getInstance();

    // Get the current date object
    Date currentDate = calendar.getTime();

    // Print the current date
    System.out.println("Current date: " + currentDate);
  }
}
```

The output should be similar to:

```shell
Current date: Sat Sep 02 13:10:27 GMT 2023
```
