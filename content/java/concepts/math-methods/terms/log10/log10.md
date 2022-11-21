---
Title: '.log10()'
Description: 'Returns the logarithm base 10 of a double value as a parameter.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Methods'
  - 'Arithmetic'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **`Math.log10()`** method returns the base-10 logarithm of a number.

## Syntax

```pseudo
Math.log10(a);
```

- If `a` is a positive number, the return value is a `double`.
- If `a` is `NaN` or a negative number, the return value is `NaN`.
- If `a` is positive infinity, the return value is positive infinity.
- If `a` is negative or positive zero, the return value is negative infinity.
- If `a` is 10<sup>n</sup> for integer `n`, the return value is `n`.

## Example

The following example demonstrates using the `.log10()` method to find base-10 logarithms:

```java
// Main.java
public class Main {
  public static void main(String args[]) {
    double a = 10;
    double b = -6;
    double c = 0;
    double d = -0;

    System.out.println("The result of log10(" + a + ") is: " + Math.log10(a));
    System.out.println("The result of log10(" + b + ") is: " + Math.log10(b));
    System.out.println("The result of log10(" + c + ") is: " + Math.log10(c));
    System.out.println("The result of log10(" + d + ") is: " + Math.log10(d));
  }
}
```

This will produce the following output:

```shell
The result of log10(10.0) is: 1
The result of log10(-6.0) is: NaN
The result of log10(0.0) is: -Infinity
The result of log10(0.0) is: -Infinity
```
