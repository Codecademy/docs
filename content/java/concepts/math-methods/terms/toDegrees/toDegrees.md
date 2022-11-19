---
Title: '.toDegrees()'
Description: 'Returns an angle measurement converted from radians to degrees.'
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

The **`.toDegrees()`** method converts an angle, measured in radians, to an approximately equivalent angle, measured in degrees.

## Syntax

```pseudo
Math.toDegrees(angle)
```

The [data type](https://www.codecademy.com/resources/docs/java/data-types) of the `angle` parameter and return value of the `.toDegrees()` method is a `double`.

Some edge cases for the `.toDegrees()` method include the following:

- If the argument is `NaN`, this method will return `NaN`.
- If the argument is `zero`, this method will return `zero` with the same sign as the argument.
- If the argument is `infinity`, this method will return `infinity` with the same sign as the argument.

## Example

The following example demonstrates the `.toDegrees()` method being applied to two variables:

```java
// TestDegree.java
public class TestDegrees {
  public static void main(String args[]) {
    double x = 0.5235987756;
    System.out.println(Math.toDegrees(x));

    double y = 1.0471975512;
    System.out.println(Math.toDegrees(y));
  }
}
```

This results in the following output:

```shell
30.0
60.0
```
