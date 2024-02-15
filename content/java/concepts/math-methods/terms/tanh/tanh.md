---
Title: '.tanh()'
Description: 'Returns the hyperbolic sine of a double-type value.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Arithmetic'
  - 'Functions'
  - 'Methods'
  - 'Numbers'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **`Math.tanh()`** method returns the hyperbolic sine of a `double`-type value.

## Syntax

```pseudo
Math.tanh(double num)
```

The `.tanh()` method takes a single `num` parameter that represents the angle (given in radians) whose hyperbolic tangent is to be determined. The return type of the `.tanh()` method is a `double`.

Some special cases for the `.tanh()` method include the following:

- If `num` is `NaN`, then the result is `NaN`.
- If `num` is `zero`, then the result is a `zero` with the same sign as the argument.
- If `num` is `positive` infinity, then the result is `+1.0`.
- If `num` is `negative` infinity, then the result is `-1.0`.

The computed result will be within 2.5 units of least precision (ulps) of the exact result.

## Example

The following example demonstrates the application of the `.tanh()` method:

```java
// Check.java
public class Check {
  public static void main(String args[]) {
    // Value of num in degrees
    double num = 45.0;

    // Convert into radians
    num = Math.toRadians(num);

    // Compute and print hyperbolic tangent
    System.out.println(Math.tanh(num));
  }
}
```

This results in the following output:

```shell
0.6557942026326724
```
