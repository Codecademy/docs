---
Title: '.toRadians()'
Description: 'Converts an angle in degrees to an approximately equivalent angle in radians.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Functions'
  - 'Methods'
  - 'Arithmetic'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **`Math.toRadians()`** method returns the measurement of an angle in degrees to an equivalent angle in radians.

## Syntax

```pseudo
Math.toRadians(deg)
```

- The `deg` argument is a `double` value.
- The conversion from degrees to radians is generally inexact.

## Example

The following example uses `Math.toRadians()` to convert 180 degrees and 45 degrees to radians:

```java
public class Main {
  public static void main(String[] args) {
    double deg1 = 180.0;
    double deg2= 45.0;
    System.out.println(Math.toRadians(deg1));
    System.out.println(Math.toRadians(deg2));
  }
}
```

This will produce the following output:

```shell
3.141592653589793
0.7853981633974483
```
