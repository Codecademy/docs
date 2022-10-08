---
Title: '.floor()'
Description: 'Returns the double value that is less than or equal to the argument and is equal to the nearest mathematical integer.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Methods'
  - 'Functions'
  - 'Numbers'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **`Math.floor()`** method returns a  `integer` value that is less than or equal to argument and is equal to the nearest mathematical integer.

## Syntax

```pseudo
Math.floot()
```

The `.floor()` method takes `integer` as an argument whose floor value is to be determined.

## Example

The following example demonstrates using  of `java.lang.Math.floor()` method. 
:

```java
public class Test {
    public static void main(String args[]) 
    { 
        double a = 4.3; 
        double b = 1.0 / 0; 
        double c = 0.0; 
        double d = -0.0; 
        double e = -2.3; 
  
        System.out.println(Math.floor(a)); 
  
        // Input Infinity, Output Infinity 
        System.out.println(Math.floor(b)); 
  
        // Input Positive Zero, Output Positive Zero 
        System.out.println(Math.floor(c)); 
  
        // Input Negative Zero, Output Negative Zero 
        System.out.println(Math.floor(d)); 
  
        // Input -2.3, Output -3.0 
        // Nearest Integer(-3.0) < less than (-2.3) 
        System.out.println(Math.floor(e)); 
    } 
}
```

The output will be a `integer` type
```
4.0
Infinity
0.0
-0.0
-3.0
```
