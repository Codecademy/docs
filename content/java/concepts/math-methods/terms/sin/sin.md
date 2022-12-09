---
Title: '.sin()'
Description: 'Returns the trigonometric sine of the specified angle.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Arithmetic'
  - 'Functions'
  - 'Methods'
  - 'Numbers'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **`Math.sin()`** method returns the sine of an angle argument, given in radians. The result is in the range [-1,1].

## Syntax

```pseudo
Math.sin(angle)
```
The `angle` parameter is expressed in radians.

   - returns the `trigonometric` sine of the specified angle
  -  returns `NaN` if the specified angle is NaN or infinity

## Example

The following example demonstrates the application of `.sin()` method:

```java
// Check.java
public class Check {
  public static void main(String args[]) {
  // convert degrees to radians
  double pi = Math.PI;
  double degree = 60;
  double radian = degree * pi/180;
  System.out.println( "Sine of 60 degrees is " + Math.sin(radian));
  }
}
```

This results in the following output:

```java
Sine of 60 degrees is 0.866025
```
