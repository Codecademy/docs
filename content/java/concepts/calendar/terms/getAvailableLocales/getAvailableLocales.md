---
Title: '.getAvailableLocales()'
Description: 'The `.getAvailableLocales()` method of `Calendar` class provides an array of locales, representing specific geographical or cultural regions.'
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

In Java, the `.getAvailableLocales()` method of `Calendar` class provides an array of locales, representing specific geographical or cultural regions. These locales are essential for localizing date and time representations, ensuring that such information aligns with the conventions and language preferences of diverse regions and cultures. This functionality serves as a cornerstone for developing applications that cater to a wide-ranging audience with varying language and culture preferences.

## Syntax

The syntax for the .getAvailableLocales() method is as follows:

```pseudo
public static synchronized Locale[] getAvailableLocales()
```

- `public`: This method is accessible from outside the class.
- `static`: You can call this method on the Calendar class itself without creating an instance.
- `synchronized`: The method is thread-safe, making it suitable for concurrent access.
- `Locale[]`: The method returns an array of `Locale` objects, representing available locales.

## Example

The following example demonstrates the practical application of the .getAvailableLocales() method. It starts with importing the necessary packages and then proceeds to retrieve the available locales. Finally, it displays the names of these locales.

```java
import java.util.Calendar;
import java.util.Locale;

public class CalendarLocaleExample {
    public static void main(String[] args) {
        // Get the available locales
        Locale[] availableLocales = Locale.getAvailableLocales();

        // Display the available locales:
        System.out.println("Available Locales:");

        // Output: Arabic (United Arab Emirates), Arabic (Jordan), Arabic (Syria), Croatian (Croatia), French (Belgium), Spanish (Panama), ...
        for (Locale locale : availableLocales) {
            System.out.println(locale.getDisplayName());
        }
    }
}
```
