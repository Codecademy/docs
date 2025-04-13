---
Title: '.getAvailableLocales()'
Description: 'Returns an array of locales, which represent specific geographical or cultural regions.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Date'
  - 'Time'
  - 'Methods'
  - 'Calendar'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

In Java, the **`.getAvailableLocales()`** method of `Calendar` class offers an array of locales, representing specific geographical or cultural regions. These locales are crucial for localising date and time representations, ensuring that such information aligns with the conventions and language preferences of various regions and cultures. This functionality acts as a cornerstone for developing applications that serve a broad audience with different language and culture preferences.

## Syntax

The syntax for the `.getAvailableLocales()` method is as follows:

```pseudo
theLocale.getAvailableLocales()
```

- `theLocale`: The given region to be addressed.
- The method returns an array of `Locale` objects, representing available locales.

## Example

The following example demonstrates the practical application of the `.getAvailableLocales()` method. It starts with importing the necessary packages and then proceeds to retrieve the available locales. Finally, it displays the names of these locales.

```java
import java.util.Calendar;
import java.util.Locale;

public class CalendarLocaleExample {
  public static void main(String[] args) {

    Locale[] availableLocales = Locale.getAvailableLocales();

    System.out.println("Available Locales:");

    for (Locale locale : availableLocales) {
      System.out.println(locale.getDisplayName());
    }
  }
}
```

The code above will return an output similar to the following:

```shell
Available Locales:
Arabic (United Arab Emirates)
Arabic (Jordan), Arabic (Syria)
Croatian (Croatia)
French (Belgium)
Spanish (Panama)
...
```
