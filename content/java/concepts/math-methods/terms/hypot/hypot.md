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

The **`Math.hypot()`** method is used to get the hypotenuse of a right-angled triangle. It returns sqrt(x<sup>2</sup> + y<sup>2</sup>), where _x_ and _y_ are variable type `double`. It does not return intermediate overflow or underflow, which means the `.hypot()` method will not fail due to overflow or underflow of an _x<sup>2</sup>_ or _y<sup>2</sup>_ value.

## Syntax

```pseudo
Math.hypot(x, y)
```

The return type for `.hypot()` is `double`. If either the `x` or `y` parameter is infinite, the result is positive infinity. If neither argument is infinite, but one or both parameters are `NaN`, the result is `NaN`.

## Example

The following example demonstrates using `.hypot()` to find the hypotenuse of a right-angled triangle:

```java
public class Test {
    public static void main(String args[]) {
        double base_x = 8;
        double height_y = 10;
        System.out.println(Math.hypot(base_x, height_y));
    }
}
```

This results in the following output:

```java
12.806248474865697
```
