---
Title: '.tan()'
Description: 'Returns the trigonometric tangent of an angle, in radians'
Subjects:
  - 'Computer Science'
Tags:
  - 'Function'
  - 'Methods'
  - 'Arithmetic'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **`Math.tan()`** method returns trigonometric tangent of an angle, in radians. The _function_ accepts all real numbers *except* the values where cos(x) is equal to 0  

## Syntax

```pseudo
Math.tan(double x)
```
Note, here `x` is the _argument_ passed to the function. It accepts all real numbers. 
+ If the argument is `NaN` or an `infinity`, then the result returned is NaN.
+ If the argument is `zero`, then the result is also zero with same sign. 

## Example

Use `Math.tan()` to return the trigonometric tangent for `(x)` in radians:

```java

public class Main {
  public static void main(String[] args) {
    double x = 45.0;    // radians
    System.out.println(Math.tan(x));
    
    x = 0.0;
    System.out.println(Math.tan(x));
  }
}
```

This will produce the following output:

```shell
1.6197751905438615
0.0
```
<!-- ## Codebyte Example

  ```codebyte/java
    import java.util.Scanner;
    import java.lang.Math;

  public class Main {
    public static void main(String[] args) {
          // radians
      System.out.println(Math.tan(x));

      x = 0.0;
      System.out.println(Math.tan(x));
    }
  } 
  ```
 -->