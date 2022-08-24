---
Title: '.atan()'
Description: 'Returns the inverse tangent of the argument in radians.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Methods'
  - 'Arithmetic'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **`Math.atan()`** method returns the inverse tangent (or arctangent) of the argument in radians.

## Syntax

```pseudo
Math.atan(n)
```

`n` is a `double` whose arctangent is returned.

## Example

The following example uses `Math.atan()` to return the inverse tangent of `1.0`:

```java
public class Main {
  public static void main(String[] args) {

    double x = 1.0;

    System.out.println(Math.atan(x));
    // Output: 0.7853981633974483
  }
}
```
