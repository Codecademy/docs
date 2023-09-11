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

The `**.setLenient()**` method of the `calender` class is used to set the lineacy of the interpretation of date and time. i.e., it is used to specify whether the internpretation of date and time should be lenient or not. 
The method takes one boolean value as a parameter.

> **Note:** When a `Calendar` is lenient, it allows date and time values that may not make sense in a real-world context. For example, `February 30th` or a time value of `25:70:90` would be accepted. When a `Calendar` is non-lenient, it enforces stricter rules, and attempting to set invalid date or time values will throw exceptions, such as `IllegalArgumentException`.

## Syntax

```pseudo
calender.setLenient(boolean lenient)
```
Parameter: set `lenient` as false for more strict interpretation, that is, leniency is turned off. Set true for leniency to be turned on.

> **Note:** You can use the `.isLenient()` method to check if given calender instance is lenient or not.

## Example 1

This example shows what happens when you dont use .setLeient() method.

```java
import java.text.SimpleDateFormat;
import java.util.Date;

public class DateParsingExample {
    public static void main(String[] args) throws Exception {

        //defining the date pattern
        String DATE_PATTERN = "MM/dd/yyyy"; 

        //creating instance of the SimpleDateFormat class.
        SimpleDateFormat sdf = new SimpleDateFormat(DATE_PATTERN);

        Date d = sdf.parse("2012/11/1");
        System.out.println(d);
    }
}
```

Above code returns the output:
```shell
Wed Aug 11 00:00:00 IST 168
```

As you can see, the date given was not in the specified format. But instead of giving an error, it accepts it, and now we have a date object which is entirely incorrect.

## Example 2

This example shows how to use .setLenient() correctly.

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

```java
import java.text.SimpleDateFormat;
import java.util.Date;

public class DateParsingExample {
    public static void main(String[] args) throws Exception {
        String DATE_PATTERN = "MM/dd/yyyy"; //defining the date pattern
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

