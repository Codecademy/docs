---
Title: '.before()'
Description: 'The method returns true if the time represented by this Calendar is before the time represented by when Object.'
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

**`java.util.Calendar.before()`** is a method in `Calendar` class of java.util package. The method returns true if the time represented by this Calendar is before the time represented by when Object. If it is not the case, false is returned.

## Syntax

```
public boolean before(Object when)

Where, when is the Object 
that is to be compared.
```

## Example 1

```java
// Implementation to show the usage
// of before(Object when) method of
// Calendar class
import java.util.*;
  
class GFG {
  
    public static void main(String[] args)
        throws InterruptedException
    {
  
        // creating calendar object
        Calendar cal_obj1 = Calendar.getInstance();
  
        // printing current date
        System.out.println("Time 1 : " + cal_obj1.getTime());
  
        // sleep for 3 seconds
        Thread.sleep(3000);
  
        // creating Calendar object
        Calendar cal_obj2 = Calendar.getInstance();
  
        // printing current date
        System.out.println("Time 2 : " + cal_obj2.getTime());
  
        // checking if 1st date is before 2nd date
        // and printing the result
        System.out.println(cal_obj1.before(cal_obj2));
    }
}
```

Output:

```shell
Time 1 : Wed Feb 28 15:43:19 IST 2018
Time 2 : Wed Feb 28 15:43:22 IST 2018
true
```

## Example 2

```java
// Implementation to show the usage
// of before(Object when) method of
// Calendar class
import java.util.*;
  
class GFG {
  
    public static void main(String[] args)
    {
  
        // creating calendar objects
        Calendar cal_obj1 = Calendar.getInstance();
        Calendar cal_obj2 = Calendar.getInstance();
  
        // displaying the current date
        System.out.println("Current date is : " + cal_obj1.getTime());
  
        // changing year in cal_obj2 calendar
        cal_obj2.set(Calendar.YEAR, 2010);
  
        // displaying the year
        System.out.println("Year is " + cal_obj2.get(Calendar.YEAR));
  
        // check if calendar date is before current date
        System.out.println("Result : " + cal_obj1.before(cal_obj2));
    }
}
```

Output:

```shell
Current date is : Wed Feb 28 15:50:16 IST 2018
Year is 2010
Result : false
```

## Example 3

```java
class GFG {
  
    public static void main(String[] args)
    {
  
        // creating calendar objects
        Calendar cal_obj1 = Calendar.getInstance();
        Calendar cal_obj2 = Calendar.getInstance();
  
        // displaying the current date
        System.out.println("Current date is : " + cal_obj1.getTime());
  
        // changing year in cal_obj2 calendar
        cal_obj2.set(Calendar.YEAR, 2025);
  
        // displaying the year
        System.out.println("Year is " + cal_obj2.get(Calendar.YEAR));
  
        // check if calendar date is before current date
        System.out.println("Result : " + cal_obj1.before(cal_obj2));
    }
}
```

This will output the following:

```shell
Current date is : Wed Feb 28 16:15:55 IST 2018
Year is 2025
Result : true
```