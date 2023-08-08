---
Title: '.getDisplayName()'
Description: 'Returns a String containing calendar information based on input parameters'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Calendar'
  - 'Methods'
  - 'Maps'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The `.getDisplayName()` method of the `Calendar` class is used to return the string representation of a calendar field value in the given style and locale.

## Syntax

```pseudo

public String getDisplayName(int field, int style, Locale locale)

```

Where `field` is of integer type and refers to the field of the calendar on which the operation is to be performed,  `style` isof integer type and refers to the style that is supposed to be applied to the string representation, and `locale` is of Locale object type and refers to the locale representing the string.

## Example

The following example creates an array and then sorts it.

```java
import java.util.*;
  
public class Calendar_Demo_Locale {
    public static void main(String args[])
    {
  
        // Creating Locale objects class
        Locale first_obj = new Locale("TURKISH", "Turkey");
  
        Locale sec_obj = new Locale("ENGLISH", "UK");
  
        // Displaying the objects
        System.out.println("First"
                           + " object is : " + first_obj);
        System.out.println("Second"
                           + " object is : " + sec_obj);
  
        // Getting the display names
        String obj_nm = first_obj.getDisplayName();
  
        // Displaying the results
        System.out.println("Name of the"
                           + " first object: " + obj_nm);
  
        // Getting the display names
        obj_nm = sec_obj.getDisplayName();
        System.out.println("Name of the"
                           + " second object: " + obj_nm);
    }
}
```

This will output the following:

```shell

First object is : turkish_TURKEY
Second object is : english_UK
Name of the first object: turkish (TURKEY)
Name of the second object: english (UK)

```
