---
Title: '.sinh()'
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

The **`Math.sinh()`** method returns the hyperbolic sine of a `double`-type value.

## Syntax

```pseudo
Math.sinh(double num)
```

The return type of the `.sinh()` method is a `double`.

Some special cases for the `.sinh()` method include the following:

- If `num` is `NaN`, then the result is `NaN`.
- If `num` is infinite, then infinity is returned with the same sign as `num`.
- If `num` is zero, then zero is returned with the same sign as `num`.

The computed result will be within 2.5 units of least precision (ulps) of the exact result.

## Example

The following example demonstrates the application of `.sinh()` method:

```java
// Check.java
public class Check {
  public static void main(String args[]) {
    double num = 64.0;
    System.out.println(Math.sinh(num));
  }
}
```

This results in the following output:

```shell
3.1175745404058084E27
```
