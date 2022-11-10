---
Title: '.sin()'
Description: 'Returns the sine of an angle given in radians.'
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

The **`Math.sin()`** method returns the sine of an angle given in radians. The function accepts all real numbers.

## Syntax

```pseudo
Math.sin(double x)
```

Here, `x` is the argument passed to the function. **`Math.sin()`** accepts all real numbers as arguments.

- If the argument is `NaN` or an `infinity`, then the result returned is NaN.
- If the argument is `zero`, then the result is also zero.

## Example

This example uses `.sin()` to return the sine for `(x)`:

```java
// Main.java

public class Main {
  public static void main(String[] args) {
    double x = Math.PI / 2.0;    // Radians
    System.out.println(Math.sin(x));

    x = 0.0;
    System.out.println(Math.sin(x));
  }
}
```

This will produce the following output:

```shell
1.0
0.0
```
