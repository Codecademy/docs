---
Title: '.getAvailableCalendarTypes()'
Description: 'Returns an unmodifiable Set containing all calendar types supported by Calendar in the runtime environment'
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

The `getAvailableCalendarTypes()` method belongs to the `Calendar` class, which is included in the java.util package. This method returns an unmodified Set that contains all calendar types supported by `Calendar` in the Java runtime environment.


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

```shell
All Available Calendar types: 
gregory
buddhist
japanese
```