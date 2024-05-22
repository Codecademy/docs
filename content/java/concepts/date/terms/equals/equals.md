---
Title: '.equals()'
Description: 'Returns a boolean based on a comparison of equivalency between two dates.'
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

The **`.equals()`** method of the `Date` class compares the current `Date` object to the specified object. It will return `true` if the dates are equal (differences evaluated down to the millisecond). Otherwise, it returns `false`.

## Syntax

```pseudo
dateOne.equals(dateTwo)
```

> **Note:** The return type of the method is `boolean` so this method will return either `true` or `false`.

## Example

In this example, the `JavaDateEqualsExample` class demonstrates the use of `.equals()`.

```java
import java.util.Date;

public class JavaDateEqualsExample {

  public static void main(String[] args) {
    // Create a new date object
    Date dateOne = new Date();

    // Print the current date and time
    System.out.println("first date object - current date and Time : " + dateOne);

    // Create a second date object
    Date dateTwo = new Date();

    // Print second date object
    System.out.println("second date object - current date and Time : " + dateTwo);

    // Compare the first and second date object using equals() method
    boolean dateEqual = dateOne.equals(dateTwo);

    // Print the result
    System.out.println("first date object and second date object are equal: " + dateEqual);
    }
}
```

This code will return an output similar to the following:

```shell
first date object - current date and Time : Fri Aug 18 22:55:26 IST 2023
second date object - current date and Time : Fri Aug 18 22:55:26 IST 2023
first date object and second date object are equal: false
```

> **Note:** The output of the above example is `false` because the method considers differences down to the millisecond.
