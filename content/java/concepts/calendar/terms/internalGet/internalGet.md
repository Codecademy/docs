---
Title: '.internalGet()'
Description: 'Returns the value of a given field.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Methods'
  - 'Calendar'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **`.internalGet()`** method is a protected method used to retrieve the value of a field from a `Calendar` instance. In other words, it takes a field as input and returns its corresponding value. This method is generally used within the `Calendar` class or its sub classes.

## Syntax

```pseudo
myCalendar.internalGet(int field)
```

The `.internalGet()` method accepts a `field` constant from the `Calendar` class (e.g. `YEAR`) as its argument and returns the corresponding value.

## Example

In this example, the `InternalGetExample` class inherits the `GregorianCalendar`. The code first instantiates a new object of type `InternalGetExample` with the current date which uses the Gregorian calendar system.

> **Note:** There are multiple calendar systems that `Calendar.getInstance()` provides depending on the locale. These include `GregorianCalendar`, `BuddhistCalendar`, and `JapaneseImperialCalendar`.

```java
import java.util.GregorianCalendar;

public class InternalGetExample extends GregorianCalendar{
  public static void main(String[] args) {

  // Create new instance with current date and time
  InternalGetExample myCalendar = new InternalGetExample();

  // Get the current year, and month
  int year = myCalendar.internalGet(YEAR);

  int month = myCalendar.internalGet(MONTH);

  System.out.println("Current Year: " + year);

  System.out.println("Current Month: " + month);

  }
}
```

This output will vary depending on the current date, it will generally look like the following:

```shell
Current Year: 2023
Current Month: 9
```
