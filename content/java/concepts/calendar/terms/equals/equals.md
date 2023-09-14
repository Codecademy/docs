---
Title: '.equals()'
Description: 'Used to determine if two Calendar objects are equal.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Calendar'
  - 'Methods'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **`equals()`** method in the Java `Calendar` class is used to determine if two calendar objects are equal. It compares the time values of the two calendar instances to check if they represent the same point in time.

## Syntax

```pseudo
result = myCalendar.equals(obj)
```

The `equals()` method has one parameter, `obj`, and returns a boolean value. It is used to compare the time values of the calling calendar instance and the provided object. The comparison is based on the underlying time values, regardless of any additional calendar fields or time zone settings.

If the time values of both calendar instances are equal, the method returns `true`, indicating that they represent the same point in time. Conversely, if the time values are not equal, the method returns `false`.

> **Note:** This comparison solely considers the time values and does not take into account other calendar fields or time zone differences.

## Example

In this example, the `equals()` method is used to compare two `Calendar` instances, `cal1` and `cal2`. The time values of both instances are set to the same point in time using the `cal2.setTimeInMillis(cal1.getTimeInMillis())` method.

```java
import java.util.Calendar;

public class CalendarEqualsExample {
  public static void main(String[] args) {
    // Create two Calendar instances
    Calendar cal1 = Calendar.getInstance();
    Calendar cal2 = Calendar.getInstance();

    // Set the time of cal2 to be the same as cal1
    cal2.setTimeInMillis(cal1.getTimeInMillis());

    // Check if cal1 and cal2 represent the same point in time
    boolean areEqual = cal1.equals(cal2);

    System.out.println("Are cal1 and cal2 equal? " + areEqual);
  }
}
```

This results in the following output:

```shell
Are cal1 and cal2 equal? true
```
