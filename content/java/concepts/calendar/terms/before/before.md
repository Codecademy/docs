---
Title: '.before()'
Description: 'Returns a boolean based on the whether one Calendar instance is before the other given instance.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Methods'
  - 'Calendar'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **`.before()`** method of the `Calendar` class is used to check if one `Calendar` instance is before another.

## Syntax

```pseudo
myCalendar.before(otherCalendar)
```

Returns `true` if the time given by `myCalendar` is before the time given by `otherCalendar`, `false` otherwise.

> **Note:** The `.before()` method returns `false` if the two `Calendar` instances represent the same time.

## Example

In the example below, two `Calendar` instances are created. The first represents the current date and time, the second represents the current date and time plus two hours. The `.before()` method is used to check if the `myCalendar` object is before the `otherCalendar` object. The method is also used to check if the `myCalendar` object is before itself.

```java
import java.util.Calendar;

public class Main {
  public static void main(String[] args) {

    // Create a Calendar instance representing the current date and time
    Calendar myCalendar = Calendar.getInstance();

    // Create another Calendar instance representing the current date and time plus two hours
    Calendar otherCalendar = Calendar.getInstance();
    otherCalendar.add(Calendar.HOUR_OF_DAY, 2);

    // Check if calendar is before otherCalendar
    if (myCalendar.before(otherCalendar)) {
      System.out.println("myCalendar is before otherCalendar");
    } else {
      System.out.println("myCalendar is not before otherCalendar");
    }

    // Check if calendar is before itself
    if(myCalendar.before(myCalendar)) {
      System.out.println("myCalendar is before itself");
    } else {
      System.out.println("myCalendar is not before itself");
    }
  }
}
```

Output for the above code will be:

```shell
myCalendar is before otherCalendar
myCalendar is not before itself
```
