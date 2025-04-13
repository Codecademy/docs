---
Title: '.log()'
Description: 'Returns the natural logarithm (base e) of a double value as a parameter.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Methods'
  - 'Arithmetic'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **`Math.log()`** method returns the natural logarithm of a number.

## Syntax

```pseudo
Math.log(a);
```

- If `a` is a positive number, the return value is a `double`.
- If `a` is `NaN` or a negative number, the return value is `NaN`.
- If `a` is positive infinity, the return value is positive infinity.
- If `a` is positive or negative zero, the return value is negative infinity.

## Example

The following example demonstrates using `Math.log()` to find natural logs:

```java
import java.lang.Math;

public class Main {
  public static void main(String args[]) {
    double a = 10;
    double b = -6;
    double c = 0;
    double d = -0;

    System.out.println("The result of log(" + a + ") is: " + Math.log(a));
    System.out.println("The result of log(" + b + ") is: " + Math.log(b));
    System.out.println("The result of log(" + c + ") is: " + Math.log(c));
    System.out.println("The result of log(" + d + ") is: " + Math.log(d));
  }
}
```

This will produce the following output:

```shell
The result of log(10.0) is: 2.303
The result of log(-6.0) is: NaN
The result of log(0.0) is: -Infinity
The result of log(0.0) is: -Infinity
```
