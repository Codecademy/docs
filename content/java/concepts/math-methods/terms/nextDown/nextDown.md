---
Title: '.nextDown()'
Description: 'Returns the floating-point value adjacent to the parameter provided in the direction of negative infinity.'
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

The **`Math.nextDown()`** method returns the floating-point value adjacent to the parameter provided in the direction of negative infinity.

## Syntax

```pseudo
Math.nextDown(x)
```

- The `x` parameter can be of type `double` or `float`.
- The return type is of `double` or `float`.
- Though it is the opposite of [`.nextAfter()`](https://www.codecademy.com/resources/docs/java/math-methods/nextAfter), the `.nextDown()` method is semantically equivalent to `nextAfter(d, Double.NEGATIVE_INFINITY);` or `nextAfter(f, Float.NEGATIVE_INFINITY);`.

> **Note:** A `.nextDown()` implementation may run faster than its equivalent `.nextAfter()` call.

Special cases include the following:

- If `x` is `NaN`, the result is `NaN`.
- If `x` is negative infinity, the result is negative infinity.
- If `x` is zero, the result is `-Double.MIN_VALUE` or `-Float.MIN_VALUE`.

## Example

The following is an example of the `.nextDown()` method:

```java
// Test.java
public class Test {
  public static void main(String args[]) {
    double d = 23.44;
    System.out.println(Math.nextDown(d));
  }
}
```

This results in the following output:

```shell
23.439999999999998
```
