---
Title: '.setFirstDayOfWeek()'
Description: 'Sets the first day of the week.'
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

The **`.setFirstDayOfWeek()`** method of the `Calendar` class sets what the first day of all weeks will be by accepting an integer value that represents a specific day of the week.

> **Note:** Most countries consider either Saturday, Sunday, or Monday to be the first day of the week. For example, the United States recognizes Sunday as the first day of the week, while Monday is observed as the first day of the week in India.

## Syntax

```pseudo
calendar.setFirstDayOfWeek(day_val)
```

This method takes only one argument, `day_val`, which is an integer that represents one of seven days of the week (e.g. `Calendar.FRIDAY`). It does not return a value.

## Example

In the example below, the `.setFirstDayOfWeek()` method is used to change the first day of the week.

```java
import java.util.Calendar;

public class FirstDayOfWeek {
  public static void main(String[] args) {
    // Creates a calendar object.
    Calendar cal = Calendar.getInstance();

    // Retrieves and prints the current first day of the week.
    int firstDay = cal.getFirstDayOfWeek();
    System.out.println("First day of the week: " + firstDay);

    // Changes the first day of the week.
    cal.setFirstDayOfWeek(Calendar.SATURDAY);
    int newFirstDay = cal.getFirstDayOfWeek();
    System.out.println("New first day of the week: " + newFirstDay);
  }
}
```

This code returns the following output:

```shell
First day of the week: 1
New first day of the week: 7
```
