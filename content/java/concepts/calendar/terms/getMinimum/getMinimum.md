---
Title: '.getMinimum()'
Description: 'Returns the minimum value for the given calendar field of this Calendar instance.'
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

The `.getMinimum()` method of the `Calendar` class returns the minimum value for the given calendar field of this `Calendar` class's instance.

## Syntax

```pseudo
calendar.getMinimum(field)
```

## Example

In the following example, `.getMinimum()` returns the minimum value for the `Calendar.DAY_OF_WEEK` field.

```java
import java.util.Calendar;

public class Main {
   public static void main(String[] args) {

      Calendar calendar = Calendar.getInstance();
      System.out.println(calendar.getMinimum(Calendar.DAY_OF_WEEK));
   }
}
```

Output for the above code will be:

```shell
1
```
