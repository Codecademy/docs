---
Title: '.log1p()'
Description: 'Returns the natural logarithm (base e) of the sum of a double value as a parameter and 1.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Methods'
  - 'Arithmetic'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **`Math.log1p()`** method returns the natural logarithm of a number plus 1.

## Syntax

```pseudo
Math.log1p(a);
```

- If `a` is a positive number, the return value is a `double`.
- If `a` is `NaN` or less than -1, the return value is `NaN`.
- If `a` is -1, the return value is negative infinity
- If `a` is positive infinity, the return value is positive infinity.
- If `a` is positive or negative zero, the return value is positive or negative zero.

## Example

The following example demonstrates using the `.log1p()` method to find natural logs:

```java
// Main.java
public class Main {
  public static void main(String args[]) {
    double a = 23;
    double b = -42;
    double c = 0;
    double d = -0;

    System.out.println("The result of log1p(" + a + ") is: " + Math.log1p(a));
    System.out.println("The result of log1p(" + b + ") is: " + Math.log1p(b));
    System.out.println("The result of log1p(" + c + ") is: " + Math.log1p(c));
    System.out.println("The result of log1p(" + d + ") is: " + Math.log1p(d));
  }
}
```

This will produce the following output:

```shell
The result of log1p(23.0) is: 3.1780538303479458
The result of log1p(-42.0) is: NaN
The result of log1p(0.0) is: 0.0
The result of log1p(0.0) is: 0.0
```
