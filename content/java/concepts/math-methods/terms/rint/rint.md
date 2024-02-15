---
Title: '.rint()'
Description: 'Returns a double that is rounded to the closest whole integer.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Functions'
  - 'Methods'
  - 'Arithmetic'
  - 'Numbers'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **`Math.rint()`** returns a double that is rounded to the closest whole integer.

## Syntax

```pseudo
Math.rint(num)
```

The `.rint()` method takes a double `num` parameter and returns a double.

Some edge cases for the `.rint()` method include the following:

- If the value of `num` is passed an integer, then it is returned as a double.
- If the value of `num` is `NaN` or positive/negative infinity, then the value of `num` is returned.
- If the value of `num` is positive/negative zero, then `0.0` is returned.

## Example

The following example demonstrates the `.rint()` method:

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
