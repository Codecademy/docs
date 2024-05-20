---
Title: '.setLenient()'
Description: 'Sets whether the date/time interpretation should be lenient or not.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Date'
  - 'Methods'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **`.setLenient()`** method of the `Calendar` class is used to set the leniency of the interpretation of date and time. in other words, it is used to specify whether the interpretation of date and time should be strict or not.

> **Note:** When a `Calendar` is lenient, it allows date and time values that may not make sense in a real-world context. For example, `February 30th` or a time value of `25:70:90` would be accepted. When a `Calendar` is non-lenient, it enforces stricter rules, and attempting to set invalid date or time values will throw exceptions, such as `IllegalArgumentException`.

## Syntax

```pseudo
calendar.setLenient(bool_flag)
```

This method has only one parameter, `bool_flag`, which should be set as `false` for a strict interpretation, that is, leniency is turned off. And set to `true` for leniency to be turned on.

> **Note:** The `.isLenient()` method can be used to check if a given calendar is lenient or not.

## Example 1

This example demonstrates a use case for the `.setLenient()` method.

```java
import java.text.SimpleDateFormat;
import java.util.Date;

public class DateParsingExample {
  public static void main(String[] args) throws Exception {

    // Defining the date pattern
    String DATE_PATTERN = "MM/dd/yyyy";

    // Creating an instance of the SimpleDateFormat class
    SimpleDateFormat sdf = new SimpleDateFormat(DATE_PATTERN);

    Date d = sdf.parse("2012/11/1");
    System.out.println(d);
  }
}
```

Above code returns the following output:

```shell
Wed Aug 11 00:00:00 IST 168
```

Note, that the date given was not in the specified format. There should have been an error raised, but instead of giving an error, an incorrect date object was returned.

## Example 2

This example shows an implementation of `.setLenient()`.

```java
import java.text.SimpleDateFormat;
import java.util.Date;

public class DateParsingExample {
  public static void main(String[] args) throws Exception {
    String DATE_PATTERN = "MM/dd/yyyy";
    SimpleDateFormat sdf = new SimpleDateFormat(DATE_PATTERN);

    sdf.setLenient(false);

    Date d = sdf.parse("2012/11/1");
    System.out.println(d);
  }
}
```

Above code returns the output:

```shell
Exception in thread "main" java.text.ParseException: Unparseable date: "2012/11/1"
  at java.base/java.text.DateFormat.parse(DateFormat.java:399)
  at DateParsingExample.main(DateParsingExample.java:11)
```

Now, as we have set the leniency to false using `.setLenient(false)`, it correctly throws an error.

## Example 3

This example shows another implementation of `.setLenient()`, where the date format is followed correctly, and therefore, the code does not throw an error.

```java
import java.text.SimpleDateFormat;
import java.util.Date;

public class DateParsingExample {
  public static void main(String[] args) throws Exception {
    String DATE_PATTERN = "MM/dd/yyyy"; // Defining the date pattern
    SimpleDateFormat sdf = new SimpleDateFormat(DATE_PATTERN);

    sdf.setLenient(false);

    Date d = sdf.parse("11/01/2012");
    System.out.println(d);
  }
}
```

Above code gives the correct output:

```shell
Thu Nov 01 00:00:00 IST 2012
```
