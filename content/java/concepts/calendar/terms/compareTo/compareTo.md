---
Title: '.compareTo()'
Description: 'Compares a passed Calendar object with an existing Calendar object.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Calendar'
  - 'Date'
  - 'Methods'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **`.compareTo()`** method of the `Calendar` class is used to compare the time values or the millisecond offsets of two `Calendar` objects.

## Syntax

```pseudo
result = myCalendar.compareTo()
```

The method returns an `Integer` value and can return any one of the following:

- The method returns `0` if the `otherCalendar` is equal to the `myCalendar` object.
- The method returns `1` if the time of the `myCalendar` object is ahead of the `otherCalendar` object.
- The method returns `-1` if the time of the `myCalendar` object is behind the `otherCalendar` object.

## Example

This example illustrates a basic implementation of the `.compareTo()` method:

```java
import java.util.*;

public class CalendarClassDemo {
  public static void main(String args[])
  {
    // Creating a calendar object
    Calendar calndr1 = Calendar.getInstance();

    // Creating another calendar object
    Calendar calndr2 = new GregorianCalendar(2018, 12, 2);

    // Comparing the time
    int val = calndr1.compareTo(calndr2);

    // Displaying the result of comparison
    System.out.println("First" + " comparison result is: " + val);

    // Comparing the time
    val = calndr2.compareTo(calndr1);

    // Displaying the result of comparison
    System.out.println("Second"+ " comparison result is: "+ val);
  }
}
```

Output for the above code will be:

```shell
First comparison result is: 1
Second comparison result is: -1
```
