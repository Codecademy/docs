---
Title: '.nextUp()'
Description: 'Returns the floating-point value adjacent to the argument in a positive direction.'
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

The **`Math.nextUp()`** method accepts a parameter, and returns the floating-point value adjacent to it in the positive direction.

## Syntax

Argument passed can be either of type `double` or `float`.

```pseudo
Math.nextUp(val)
```

The following are some of the special cases for this method:

- If the argument is `NaN`, the result is `NaN`.
- If the argument is positive infinity, the result is positive infinity.
- If the argument is zero, the result is `double` or `float`'s `MIN_VALUE`.

## Example

The following example demonstrates the `.nextUp()` method:

```java
public class Check {
  public static void main(String args[]) {
    float val= 21.474856f;
    System.out.println(Math.nextUp(val));
  }
}
```

This results in the following output:

```shell
21.474857
```
