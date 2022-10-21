---
Title: '.nextAfter()'
Description: 'Returns the floating-point number next to the first argument in the direction of the second argument.'
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

The **Math.nextAfter()** method returns the floating-point number next to the first argument in the direction of the second argument.

## Syntax

```pseudo
Math.nextAfter(start, direction)
```

- The first argument `start` can be of type `double` or `float`.
- The second argument `direction` can only be of type `double`.
- The return type for `.nextAfter()` is of `double` or `float`, and matches the type of the first argument.
- If `direction` > `start`, then return result is > `start`.
- If `direction` < `start`, then return result is < `start`.
- If `direction` == `start`, then value of direction is `returned`.

Some special cases for `.nextAfter()` include:

- If one or both arguments are `NaN`, the result is `NaN`.
- If both arguments are signed zero, the direction of the result is unchanged.
- If the first argument is positive or negative `MIN_VALUE`, and the second argument has a value which would return a result with a smaller magnitude, zero is returned with the same sign as the first argument.
- If the first argument is infinity and the second argument has a value which would return a result with a smaller magnitude, `MAX_VALUE` is returned with the same sign as the first argument.
- If the first argument is positive or negative `MAX_VALUE`, and the second argument has a value which would return a result with a larger magnitude, infinity is returned with the same sign as the first argument.

## Example

The following example demonstrates using `.nextAfter()`:

```java
// Test.java
public class Test {
  public static void main(String args[]) {
    float start = 1.15f;
    double direction = 5.37;
    System.out.println(Math.nextAfter(start, direction));
  }
}
```

This results in the following output of type `float`:

```shell
1.1500001
```
