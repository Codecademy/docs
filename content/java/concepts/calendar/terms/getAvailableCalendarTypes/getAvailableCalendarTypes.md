---
Title: '.getAvailableCalendarTypes()'
Description: 'A method that is used to get list of all available calendar types in Java. With the combination of the Calendar() method, getAvailableCalendarTypes() informs you about the many ways of measuring time.'
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

The `.getAvailableCalendarTypes()` method is a part of `Calendar` class. This method is used to get all available calendar types that are in the `java.until` package. It also  returns an unmodified `Set`. Each calendar type has a different unique way of counting days, months and years. For example, the Japanese calendar would be distinctive from the Gregorian or Hijri calendar.


## Syntax
```pseudo
getAvailableCalendarTypes ()
```
> **Note:** The calendar types don't include aliases, such as "gregorian" for "gregory"

## Example


 ```java
import java.util.Calendar;  
import java.util.Set;  
public class CalendargetavailablecalendartypeExample2 {  
  public static void main(String[] args) throws InterruptedException {  
  System.out.println(" All Available Calendar types: ");  
  Set set = Calendar.getAvailableCalendarTypes();  
  for(Object s:set){  
  System.out.println(s);  
      }                     
    }  
}  
```

This code returns the following output:

```shell
All Available Calendar types: 
gregory
buddhist
japanese
```