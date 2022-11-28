---
Title: '.signum()'
Description: 'Used to determine whether a number is positive, negative, zero, or NaN.'
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

The **`Math.signum()`** method determines whether a number is positive, negative, zero, or `NaN`.

## Syntax

```pseudo
Math.signum(num)
```

The `.signum()` method takes a `num` parameter and returns a `double` value that indicates whether `num` is positive, negative, zero, or `NaN`.

Some cases to consider include the following:

- If `num` is positive, a positive non-zero value is returned.
- If `num` is negative, a negative non-zero value is returned.
- If `num` is zero, zero is returned.
- If the value of `num` is `NaN`, `NaN` is returned.

## Example

The following example demonstrates the `.signum()` method and its many use cases:

```java
// Test.java
public class Test {
  public static void main(String[] args) {
    System.out.println(Math.signum(8.75));
    System.out.println(Math.signum(-3.5));
    System.out.println(Math.signum(0));
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
