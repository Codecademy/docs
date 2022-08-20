---
Title: '.asin()'
Description: 'Returns the inverse sine of the argument in radians.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Methods'
  - 'Arithmetic'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **`Math.asin()`** method returns the inverse sine (or arcsine) of the argument in radians.

## Syntax

```pseudo
Math.asin(n)
```

`n` is a `double` between 0 and 1.

## Example

The following example uses `Math.asin()` to return the inverse sine of `1.0`:

```java
public class Main {
  public static void main(String[] args) {

    double x = 1.0;

    System.out.println(Math.asin(x));
    // Output: 1.5707963267948966

  }
}
```
