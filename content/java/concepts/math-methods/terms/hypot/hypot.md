---
Title: '.hypot()'
Description: 'Returns the hypotenuse of a right-angled triangle.'
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

The **`Math.hypot()`** method returns the hypotenuse of a right-angled triangle. The hypotenuse is the square root of x<sup>2</sup> + y<sup>2</sup>, where `x` and `y` (of type `double`) are the sides that form the right angle. It does not return intermediate overflow or underflow, which means the `.hypot()` method will not fail due to overflow or underflow of a x<sup>2</sup> or y<sup>2</sup> value.

## Syntax

```pseudo
Math.hypot(x, y)
```

- The return type for `.hypot()` is `double`.
- If either the `x` or `y` parameter is infinite, the result is positive infinity.
- If neither argument is infinite, but one or both parameters are `NaN`, the result is `NaN`.

## Example

The following example demonstrates using `.hypot()` to find the hypotenuse of a right-angled triangle:

```java
// Test.java
public class Test {
  public static void main(String args[]) {
    double base_x = 8;
    double height_y = 10;
    System.out.println(Math.hypot(base_x, height_y));
  }
}
```

This results in the following output:

```shell
12.806248474865697
```
