---
Title: '.getAvailableLocales()'
Description: 'Returns an array of all locales available in java runtime environment.'
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

The `.getAvailableLocales()` method of the `Calendar` class is used to return an array of all locales. getAvailableLocals() method is a static method.

## Syntax

```pseudo

public static Locale[] getAvailableLocales()  

```

## Example

The following example displays the available locales.

```java

import java.util.Locale;  

public class JavaCalendargetavailablelocalsExample1 {  
public static void main(String args[]) {  
       // an object of local class called strlocal(array) is created   
       Locale[] strlocal = new Locale[5];  
  
      // all available locals are accessed and stored in strlocal  
      strlocal = Locale.getAvailableLocales();  
  
      // print all available locals   
      System.out.println("The first 5 locales installed in runtime environment are :-\n");  
      for (int i = 0; i < 6; i++) {  
         System.out.println(strlocal[i].getISO3Country());  
        }  
   }  
}  

```

This will output the following:

```shell

The first 5 locales installed in runtime environment are :-
ARE
JOR
SYR
HRV
BEL

```