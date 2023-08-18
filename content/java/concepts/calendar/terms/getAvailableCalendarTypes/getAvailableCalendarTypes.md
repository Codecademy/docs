---
Title: '.getAvailableCalendarTypes()'
Description: 'A method that is used to get list of all available calendar types in Java.'
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

The `.getAvailableCalendarTypes()` method is a part of `Calendar` class. This method is used to get all available calendar types that are in the `java.until` package. It also returns an unmodified `Set`. Each calendar type has a different unique way of counting days, months and years. For example, the Japanese calendar would be distinctive from the Gregorian or Hijri calendar.

## Syntax

```pseudo
getAvailableCalendarTypes()
```

> **Note:** The calendar types don't include aliases, such as "gregorian" for "gregory"

## Example

The following example demonstrates the basic use of the method.

```java
import java.util.Calendar;
import java.util.Set;
public class getCalendars {
 public static void main(String[] args) throws InterruptedException {
 System.out.println(" All available calendar types: ");
 Set set = Calendar.getAvailableCalendarTypes();
 for(Object s:set){
 System.out.println(s);
     }
   }
}
```

This code returns the following output:

```shell
All available calendar types:
gregory
buddhist
japanese
```
