---
Title: '.cbrt()'
Description: 'Returns the cube root of a double-type value.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Arithmetic'
  - 'Documentation'
  - 'Functions'
  - 'Numbers'
CatalogContent:
  - 'learn-java'
  - 'path/computer-science'
---

The **`Math.cbrt()`** method returns the cube root of a `double` value.

## Syntax

```pseudo
Math.cbrt(double num)
```

The `.cbrt()` method will return the cube root of `num`. The value of `num` can be any real number. Edge cases for this method include:

- If the argument is `NaN`, the return value will be `NaN`.
- If the argument is ±infinity, the return value will be ±infinity.

## Example

Here is an example using the `Math.cbrt()` method:

```java
public class Main {
  public static void main(String[] args) {
    double a = 27.0;
    System.out.println("Math.cbrt(" + a + ") returns: " + Math.cbrt(a));

    double b = -8.0;
    System.out.println("Math.cbrt(" + b + ") returns: " + Math.cbrt(b));
  }
}
```

This will result in the following output:

```shell
Math.cbrt(27.0) returns: 3.0
Math.cbrt(-8.0) returns: -2.0
```
