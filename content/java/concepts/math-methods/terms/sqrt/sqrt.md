---
Title: '.sqrt()'
Description: 'Returns the square root of a value of type double passed to it as argument.'
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

The **`Math.sqrt()`** method returns the ` Square root ` of a value of type double passed to it as argument.

## Syntax

```pseudo
public static double sqrt(double a)
Parameter :
a : the value whose square root is to be returned.
Return :
This method returns the positive square root value of 
the argument passed to it.
```

The `.sqrt()` method takes one parameters.

## Example

To show working of `java.lang.Math.sqrt()` method.  

```java
import java.lang.Math;
  
class Code {
  
    // driver code
    public static void main(String args[])
    {
        double a = 30;
  
        System.out.println(Math.sqrt(a));
  
        a = 45;
  
        System.out.println(Math.sqrt(a));
  
        a = 60;
  
        System.out.println(Math.sqrt(a));
  
        a = 90;
  
        System.out.println(Math.sqrt(a));
    }
}
```

## Output:

```java
5.477225575051661
6.708203932499369
7.745966692414834
9.486832980505138
```


