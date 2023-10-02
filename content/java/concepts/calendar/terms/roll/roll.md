---
Title: '.roll()'
Description: 'Adds or subtracts a single unit of time from a given calendar.'
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

The **`.roll()`** method for the `Calendar` class can be used to add or subtract a single unit of time on the given calendar without changing the larger fields.

## Syntax

```pseudo
calendar.roll(calndr_field, bool_flag)
```

This method takes two arguments, `calndr_field`, which will be used to select which field of the calendar you will use (`YEAR`, `MONTH`, `DAY`). The second one `bool_flag` will add a single unit of time if `true` or will subtract a single unit of time if `false`.

## Example

In the following example, `.roll()` is being used to add and subtract one year to the calendar being used.

```java
import java.util.*;

public class roll_method {
  public static void main(String args[]) {

    // Creating a calendar.
    Calendar calndr = Calendar.getInstance();

    // Current Year.
    System.out.println("The Current Year is: " + calndr.get(Calendar.YEAR));

    // false will decrement the year by subtracting a single unit of time.
    calndr.roll(Calendar.YEAR, false);

    // Showing year after operation.
    System.out.println("The New Year is: " + calndr.get(Calendar.YEAR));

    // true will increment the year by adding a single unit of time.
    calndr.roll(Calendar.YEAR, true);

    // Showing year after operation.
    System.out.println("The New Year is: " + calndr.get(Calendar.YEAR));
  }
}

```

The output of the above code will be similar to the following:

```shell
The Current Year is: 2023
The New Year is: 2022
The New Year is: 2023
```
