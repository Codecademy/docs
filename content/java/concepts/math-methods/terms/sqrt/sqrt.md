---
Title: '.sqrt()'
Description: 'Returns the positive, properly rounded square root of a double-type value.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Methods'
  - 'Arithmetic'
  - 'Sqrt'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **`Math.sqrt()`** method returns the square root of a double value passed to it as an argument.

## Syntax

```pseudo
Math.sqrt(double num)
```

The `.sqrt()` method takes one parameter.

## Example

This example shows the working of the `Math.sqrt()` method.  

```java
public class Check {
  public static void main(String args[]) {
       double x = 64.0;  
       System.out.println(Math.sqrt(x));
       double y = 49.0;
       System.out.println(Math.sqrt(y));
   }
}
```

This results in the following output:

```java
8.0
7.0
```


