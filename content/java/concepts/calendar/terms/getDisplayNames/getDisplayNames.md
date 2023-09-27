---
Title: '.getDisplayNames()'
Description: 'Returns a map containing all string representations of Calendar field values in the given style and locale.'
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

The `.getDisplayNames()` method of the `Calendar` class returns a map containing the string representations of the field values in the given style and locale.

## Syntax

```pseudo
calendar.getDisplayNames(field, style, locale)
```

Where:

- `field`: The calendar field for which the display names are returned. For example, `Calendar.MONTH`.
- `style`: The style applied to the display names. For example, `Calendar.LONG`.
- `locale`: The locale for which the display names are returned. For example, `Locale.US`.

It can return `null` if there are no display names for the given field and style in the given locale.

The function will throw a [`NullPointerException`](https://www.codecademy.com/resources/docs/java/errors/nullpointerexception) if `locale` is `null`.

## Example

In the following example, `.getDisplayNames()` returns a map containing all the days of the week in short form for the US locale. The days are paired with integer values representing the index of the day in the week (Sunday is 1, Monday is 2, etc.).

```java
import java.util.Calendar;
import java.util.Locale;
import java.util.Map;

public class Main {
   public static void main(String[] args) {

      Calendar calendar = Calendar.getInstance();
      Map<String, Integer> map = calendar.getDisplayNames(
        Calendar.DAY_OF_WEEK, Calendar.SHORT, Locale.US
      );

      for (Map.Entry<String, Integer> entry : map.entrySet()) {
        System.out.println(entry.getKey() + " : " + entry.getValue());
      }
   }
}
```

Output for the above code will be:

```shell
Thu : 5
Tue : 3
Wed : 4
Sat : 7
Fri : 6
Sun : 1
Mon : 2
```
