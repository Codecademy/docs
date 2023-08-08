---
Title: '.getDisplayName()'
Description: 'Returns a String containing calendar field information based on input parameters'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Calendar'
  - 'Methods'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The `.getDisplayName()` method of the `Calendar` class is used to return the string representation of a calendar field value in the given style and locale.

## Syntax

```pseudo

public String getDisplayName(int field, int style, Locale locale)

```

Where `field` is of integer type and refers to the field of the calendar on which the operation is to be performed,  `style` is of integer type and refers to the style that is supposed to be applied to the string representation, and `locale` is of Locale object type and refers to the locale representing the string.

## Example

The following example displays the day of the week.

```java

import java.util.Calendar;
import java.util.Locale;

public class Main {

  public static void main(String[] args) {

    Calendar now = Calendar.getInstance();
    Locale locale = Locale.getDefault();

    String n = now.getDisplayName(Calendar.DAY_OF_WEEK, Calendar.LONG, locale);
    
    System.out.printf(n);
  }
}

```

This will output the following:

```shell

<Current day of the week> For eg., Tuesday

```