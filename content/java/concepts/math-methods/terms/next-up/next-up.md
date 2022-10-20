---
Title: '.nextUp()'
Description: 'Returns the floating-point value adjacent to the argument in the direction of positive infinity.'
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

The **`Math.nextUp()`** method returns the floating-point value adjacent to the argument passed as the parameter in the direction of positive infinity.

## Syntax

Argument passed can be either of type `double` or `float`.

```pseudo
Math.nextUp(val)
```

The following are some of the special cases for this method:

- If the argument is `NaN`, the result is `NaN`.
- If the argument is positive infinity, the result is positive infinity.
- If the argument is zero, the result is either `Double.MIN_VALUE` or `Float.MIN_VALUE` for types `double` and `float` respectively.

## Example

The following example demonstrates the application of `.nextUp()` method:

```java
public class Check {
  public static void main(String args[]) {
       float val= 21.474856f;
       System.out.println(Math.nextUp(val));
   }
}
```

This results in the following output:

```java
21.474857
```
