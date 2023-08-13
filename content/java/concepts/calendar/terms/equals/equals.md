---
Title: '.equals()'
Description: 'Adds the equals() method term entry for the Java Calendar class.'
Subjects:
  - 'Learn Java'
Tags:
  - 'Calendar'
  - 'Methods'
CatalogContent:
  - 'learn-java'
---



# `equals()` Method in Java Calendar

The `equals()` method in the Java `Calendar` class is used to determine if two calendar objects are equal. It compares the time values of the two calendar instances to check if they represent the same point in time.

## Syntax

```java
public boolean equals(Object obj) {
    // Implementation details for the equals() method
}
```
# `equals()` Method in Java Calendar

The `equals()` method in the Java `Calendar` class takes an `Object` parameter (`obj`) and returns a boolean value. It is used to compare the time values of the calling calendar instance and the provided object. The comparison is based on the underlying time values, regardless of any additional calendar fields or time zone settings.

If the time values of both calendar instances are equal, the method returns `true`, indicating that they represent the same point in time. Conversely, if the time values are not equal, the method returns `false`.

This comparison solely considers the time values and does not take into account other calendar fields or time zone differences.

---
## Example
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
## Example

In this example, the `equals()` method is used to compare two `Calendar` instances, `cal1` and `cal2`. The time values of both instances are set to the same point in time using the `cal2.setTimeInMillis(cal1.getTimeInMillis())` method.

The `equals()` method compares the time values of the two `Calendar` instances. Since the time values of `cal1` and `cal2` are the same, the `equals()` method returns `true`, indicating that they are equal.

It's important to note that this comparison solely considers the time values and does not take into account other calendar fields or time zone differences.
