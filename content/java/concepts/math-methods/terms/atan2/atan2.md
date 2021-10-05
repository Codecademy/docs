---
Title: 'Math.atan2()'
Description: 'Returns the counterclockwise angle, in radians, between a (x,y) point and the positive x-axis.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Methods'
  - 'Arithmetic'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

Returns the counterclockwise angle, in radians, between a (x,y) point and the positive x-axis.

## Syntax

Note that the order of arguments is first the Y coordinate, then the X coordinate.

```java
Math.atan2(y,x)
```

## Example

Use `Math.atan2()` to return the angle of point `(0.0, 1.0)` and the x-axis:

```java
public class Main {
  public static void main(String[] args) {

    double x = 0.0;
    double y = 1.0;

    System.out.println(Math.atan2(y, x));
    // Output: 1.5707963267948966
  }
}
```
