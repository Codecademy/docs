---
Title: '.getTime()'
Description: 'Returns the time value of the given Calendar object.'
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

The **`.getTime()`** method of the `Calendar` class returns a [`Date`](https://www.codecademy.com/resources/docs/java/date) object that represents the time value of a given `Calendar` object.

## Syntax

```pseudo
calendar.getTime()
```

## Example

In the example below, a `Calendar` object is created and the current date is retrieved using the `.getTime()` method.

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
