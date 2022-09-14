---
Title: '.rint()'
Description: 'Returns the closest double value depending on the value of the argument.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Functions'
  - 'Methods'
  - 'Arithmetic'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **`Math.rint()`** returns the closest double value depending on the value of the argument.

## Syntax

```pseudo
Math.rint(num)
```

The return type of the `.rint()` method and data type of the `num` parameter is a double.

Some edge cases for the `.rint()` method include the following:

- If the value of `num` is equal to an integer, then the result of the method is the value of `num`.
- If the value of `num` is NaN or infinity, then the result of the method is the value of `num`.
- If the value of `num` is positive or negative zero, then the result of the method is zero.

## Example

The following example shows the application of the `.rint()` method:

```java
public class Test {
  public static void main(String[] args) {

    System.out.println(Math.rint(8.75));
    // When the whole number is odd and the fractional part is .5, round up.
    System.out.println(Math.rint(3.5));
    // When the whole number is even and the fractional part is .5, round down.
    System.out.println(Math.rint(6.5));

    // Edge cases
    System.out.println(Math.rint(-0));
    System.out.println(Math.rint(Double.NaN));
    System.out.println(Math.rint(Double.POSITIVE_INFINITY));
    System.out.println(Math.rint(Double.NEGATIVE_INFINITY));
  }
}
```

This will produce the following output:

```shell
9.0
4.0
6.0
0.0
NaN
Infinity
-Infinity
```
