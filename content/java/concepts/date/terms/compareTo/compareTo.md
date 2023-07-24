---
Title: '.compareTo()'
Description: 'Compares two date objects.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Date'
  - 'Methods'
  - 'Comparison'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **`Date.compareTo()`** method compares one Date object with another and returns an integer value accordingly.

## Syntax

```pseudo
thisDate.compareTo(argumentDate)
```

The `Date.compareTo()` takes only one parameter:

- `argumentDate`: A `Date` object to be compared chronologically with the given date.

It returns

- the value `0` if the argument Date is equal to this Date.
- a value `less than 0` if this Date is before the Date argument.
- a value `greater than 0` if this Date is after the Date argument.

The function throws a single exception that is [NullPointerException](https://www.codecademy.com/resources/docs/java/errors/nullpointerexception) if the argumentDate is null.

## Example

The following example shows the implementation of `Date.compareTo()`:

```java
import java.util.Date;

public class Main {
  public static void main(String[] args) {

    Date firstDate = new Date(2023, 1, 18);
    Date secondDate = new Date(2023, 1, 19);
    Date thirdDate = new Date(2023, 1, 18);
    Date fourthDate = new Date(2023, 1, 17);
    Date nullDate = null;

    System.out.println("Comparing firstDate and secondDate: " + firstDate.compareTo(secondDate));
    System.out.println("Comparing firstDate and thirdDate: " + firstDate.compareTo(thirdDate));
    System.out.println("Comparing firstDate and fourthDate: " + firstDate.compareTo(fourthDate));
    System.out.println("Comparing firstDate and nullDate: " + firstDate.compareTo(nullDate));
   }
}
```

The output will be:

```shell
Comparing firstDate and secondDate: -1
Comparing firstDate and thirdDate: 0
Comparing firstDate and fourthDate: 1
Exception in thread "main" java.lang.NullPointerException
       at java.base/java.util.Date.getMillisOf(Date.java:956)
       at java.base/java.util.Date.compareTo(Date.java:979)
       at Main.main(Main.java:15)
```
