---
Title: '.cos()'
Description: 'Returns the trigonometric cosine of the specified angle.'
Subjects:
  - 'Computer Science'
  - 'Code Foundations'
Tags:
  - 'Arithmetic'
  - 'Functions'
  - 'Methods'
  - 'Numbers'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **`Math.cos()`** method returns the trigonometric cosine of an angle argument, given in radians.

## Syntax

```pseudo
Math.cos(angle)
```

- The result is in the range [-1, 1].
- If the `angle` is **NaN** or **Infinity**, **NaN** is returned.

> **Note:** The `angle` parameter is expressed in radians.

## Example

The following example demonstrates the application of `.cos()` method:

```java
public class Check {
  public static void main(String args[]) {
    // convert degrees to radians
    double pi = Math.PI;
    double degree = 60;
    double radian = degree * pi/180;
    System.out.println( "Cosine of 60 degrees is " + Math.cos(radian));
  }
}
```

The above example results in the following output:

```shell
Cosine of 60 degrees is 0.5
```