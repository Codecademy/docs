---
Title: '.after()'
Description: 'Checks if a date occurs after a specified date.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Date'
  - 'Methods'
  - 'Booleans'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **`Date.after()`** method checks whether a date occurs after a specified date and returns a boolean value.

## Syntax

```pseudo
firstDate.after(secondDate)
```

The `Date.after()` takes only one parameter:

- `secondDate`: A `Date` object to be compared chronologically with the first date.

It returns `true` if the `firstDate` is after the `secondDate` and returns `false` if the `firstDate` is before the `secondDate`. However, if the `secondDate` is null, it will raise a [NullPointerException](https://www.codecademy.com/resources/docs/java/errors/nullpointerexception).

## Example

The following example shows the implementation of `Date.after()`:

```java
import java.util.Date;

public class Main {
   public static void main(String[] args) {

      Date firstDate = new Date(2020, 1, 18);
      Date secondDate = new Date(2020, 1, 19);
      Date thirdDate = null;

      System.out.println("Is secondDate after firstDate: " + secondDate.after(firstDate));
      System.out.println("Is firstDate after secondDate: " + firstDate.after(secondDate));
      System.out.println("Is thirdDate after firstDate:" + firstDate.after(thirdDate));
   }
}
```

The output will be:

```shell
Is secondDate after firstDate: true
Is firstDate after secondDate: false
Exception in thread "main" java.lang.NullPointerException
        at java.base/java.util.Date.getMillisOf(Date.java:956)
        at java.base/java.util.Date.after(Date.java:929)
        at Main.main(Main.java:12)
```
