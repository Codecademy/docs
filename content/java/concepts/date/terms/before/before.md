---
Title: '.before()'
Description: 'Checks if one date occurs before another.'
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

The **`Date.before()`** method checks whether a date occurs before another specified date, and returns a boolean value.

## Syntax

```pseudo
firstDate.before(secondDate)
```

The `Date.before()` takes only one parameter:

- `secondDate`: A `Date` object to be compared chronologically with the first date.

It returns `true` if the `firstDate` is before the `secondDate` and returns `false` if the `firstDate` is after the `secondDate`. However, if a date value is null, it will raise a [NullPointerException](https://www.codecademy.com/resources/docs/java/errors/nullpointerexception).

## Example

The following example shows the implementation of `Date.before()`:

```java
import java.util.Date;

public class Main {
   public static void main(String[] args) {

      Date firstDate = new Date(2023, 1, 18);
      Date secondDate = new Date(2023, 1, 19);
      Date thirdDate = null;

      System.out.println("Is firstDate before secondDate: " + firstDate.before(secondDate));
      System.out.println("Is secondDate before firstDate: " + secondDate.before(firstDate));
      System.out.println("Is thirdDate before firstDate:" + firstDate.before(thirdDate));
   }
}
```

The output will be:

```shell
Is firstDate before secondDate: true
Is secondDate before firstDate: false
Exception in thread "main" java.lang.NullPointerException: Cannot invoke "Object.getClass()" because "date" is null
        at java.base/java.util.Date.getMillisOf(Date.java:957)
        at java.base/java.util.Date.before(Date.java:916)
        at Main.main(Main.java:12)
```
