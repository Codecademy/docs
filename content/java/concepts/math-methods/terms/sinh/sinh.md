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

The **`Math.sinh()`** method returns the hyperbolic sin of a double-type value.

## Syntax

```pseudo
Math.sinh(double num)
```

The return type of the `.sinh()` method is a double.

Some special cases for the `.sinh()` method include the following:

- If the argument is `NaN`, then the result is `NaN`.
- If the argument is infinite, then the result is an infinity with the same sign as the argument.
- If the argument is zero, then the result is a zero with the same sign as the argument.

The computed result will be within 2.5 ulps of the exact result.

## Example

The following example showcases the application of `.sinh()` method:

```java
public class Check {
  public static void main(String args[]) {
       double num = 64.0;
       System.out.println(Math.sinh(num));
   }
}
```

This results in the following output:

```java
3.1175745404058084E27
```
