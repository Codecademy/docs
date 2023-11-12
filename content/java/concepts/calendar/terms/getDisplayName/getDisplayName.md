---
Title: '.getDisplayName()'
Description: 'Returns the string representation (display name) of the calendar field value in the given style and locale. If no string representation is applicable, null is returned.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Date'
  - 'Methods'
  - 'Calendar'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **`.getDisplayName()`** method of the `Calendar` class returns the string representation (display name) of the calendar field value in the given style and locale. If no string representation is applicable, null is returned.

## Syntax

```pseudo
calendarInstance.getDisplayName(calendarField, calendarStyle, locale)
```

- `calendarInstance`: An instance of a calendar.
- `calendarField`: The first parameter field, specifies the calendar field for which the display name is returned. Possible values for the field parameter include: `Calendar.MONTH`, `Calendar.DAY_OF_WEEK`, and `Calendar.YEAR`.
- `calendarStyle`: The second parameter, style, specifies the style in which the display name should be presented. Possible values for the style parameter include: `Calendar.SHORT`, and `Calendar.LONG`. They can return a short and long form of the display name, respectively.
- `locale`: The third parameter, locale, specifies the locale to display the name. Possible values for the field parameter include: `Locale.US`, `Locale.FRANCE`, `Locale.GERMANY`, etc.

## Examples

This code will print the name of the current month in the default locale.

```java
import java.util.Calendar;
import java.util.Locale;

public class GetDisplayName {

  public static void main(String[] args) {
    // Create a Calendar object.
    Calendar calendar = Calendar.getInstance();

    // Get the display name for the month in the current locale.
    String monthName = calendar.getDisplayName(Calendar.MONTH, Calendar.SHORT, Locale.getDefault());

    // Print the month name.
    System.out.println(monthName);
  }
}
```

The output for the code above:

```shell
Oct
```

Here is another example of how to use the getDisplayName() method with three parameters. The code will print the name of the current month in the French locale.

```java
import java.util.Calendar;
import java.util.Locale;

public class GetDisplayName {

  public static void main(String[] args) {
    // Create a Calendar object.
    Calendar calendar = Calendar.getInstance();

    // Get the display name for the month in the French locale.
    String monthName = calendar.getDisplayName(Calendar.MONTH, Calendar.LONG, Locale.FRENCH);

    // Print the month name.
    System.out.println(monthName);
  }
}
```

Output for the code above:

```shell
octobre
```
