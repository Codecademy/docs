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

The **`.cos()`** method returns the trigonometric cosine of the given angle. The result is in the range [-1, 1].

## Syntax

```pseudo
Math.cos(angle)
```

- `angle`: This is the only parameter the `.cos()` method takes and is expressed in radians. 

> **Note:**  If the `angle` is **NaN** or **Infinity**, **NaN** is returned.

## Example

The following example demonstrates the application of `.cos()` method:

```java
public class Check {
  public static void main(String args[]) {
    // convert degrees to radians
    double pi = Math.PI;
    double degree = 60;
    double radian = degree * pi/180;
    //to get output upto first decimal place
    double roundedResult = Math.round(Math.cos(radian) * 10.0) / 10.0;

    System.out.println("Cosine of 60 degrees is " + roundedResult);
  }
}
```

The above example results in the following output:

```shell
Cosine of 60 degrees is 0.5
```
