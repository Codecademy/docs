---
Title: '.tan()'
Description: 'Returns the tangent of an angle given in radians.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Function'
  - 'Methods'
  - 'Arithmetic'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **`Math.tan()`** method returns the tangent of an angle given in radians. The function accepts all real numbers _except_ the values where `cos(x)` is equal to zero.

## Syntax

```pseudo
Math.tan(double x)
```

Here, `x` is the argument passed to the function. **`Math.tan()`** accepts all real numbers as arguments.

- If the argument is `NaN` or an `infinity`, then the result returned is NaN.
- If the argument is `zero`, then the result is also zero with same sign.

## Example

This example uses `.tan()` to return the tangent for `(x)`:

```java
// Main.java

public class Main {
  public static void main(String[] args) {
    double x = Math.PI / 2.0;    // Radians
    System.out.println(Math.tan(x));

    x = 0.0;
    System.out.println(Math.tan(x));
  }
}
```

This will produce the following output:

```shell
1.6197751905438615
0.0
```
