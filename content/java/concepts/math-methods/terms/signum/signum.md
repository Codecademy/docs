---
Title: '.signum()'
Description: 'Used to determine whether a number is positive, negative, zero, or NaN'
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

The **`Math.signum()`** determines whether a number is positive, negative, zero, or NaN.

## Syntax

```pseudo
Math.signum(num)
```

The `.signum()` method takes a double `num` parameter and returns a double.

Some edge cases for the `.signum()` method include the following:

- If the value of `num` is `NaN`, `NaN` is returned.

## Example

The following example demonstrates the `.signum()` method:

```java
public class Test {
  public static void main(String[] args) {

    // Returns 1.0 when argument is positive
    System.out.println(Math.signum(8.75));
    // Returns -1.0 when argument is negative
    System.out.println(Math.signum(-3.5));
    // Returns 0 when argument is zero.
    System.out.println(Math.signum(0));

    // Edge cases
    System.out.println(Math.signum(Double.NaN));
  }
}
```

This will produce the following output:

```shell
1.0
-1.0
0
NaN
```
