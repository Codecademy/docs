---
Title: '.add()'
Description: 'Adds or subtracts a specified amount of time to/from the given Calendar field.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Methods'
  - 'Calendar'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **`.add()`** method of the `Calendar` class is used to manipulate and modify a `Calendar` instance by adding or subtracting a specified amount of time to/from a specific calendar field.

## Syntax

```pseudo
myCalendar.add(field, amount)
```

- `field`: An integer constant representing the field to which the amount of time should be added or subtracted (e.g.,`Calendar.YEAR`, `Calendar.MONTH`, `Calendar.DAY_OF_MONTH`).
- `amount`: An integer value representing the amount of time to add or subtract from the specified field. A positive value adds time, and a negative value subtracts time.

## Example

The example below demonstrates how to use the `.add()` method to manipulate a `Calendar` instance:

```java
import java.util.Calendar;

public class Main {
  public static void main(String[] args) {

    // Create a Calendar instance representing the current date and time
    Calendar myCalendar = Calendar.getInstance();

    // Add 2 years to the current date
    myCalendar.add(Calendar.YEAR, 2);
    System.out.println("Modified Date after adding 2 years: " + myCalendar.getTime());

    // Add 3 months to the current date
    myCalendar.add(Calendar.MONTH, 3);
    System.out.println("Modified Date after adding 3 months: " + myCalendar.getTime());

    // Subtract 10 days from the current date
    myCalendar.add(Calendar.DAY_OF_MONTH, -10);
    System.out.println("Modified Date after subtracting 10 days: " + myCalendar.getTime());
  }
}
```

Output for the above code will vary depending on the current date but will look similar to:

```shell
Modified Date after adding 2 years: Tue Sep 16 11:07:52 CEST 2025
Modified Date after adding 3 months: Tue Dec 16 11:07:52 CET 2025
Modified Date after subtracting 10 days: Sat Dec 06 11:07:52 CET 2025
```
