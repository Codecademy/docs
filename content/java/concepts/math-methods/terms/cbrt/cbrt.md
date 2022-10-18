---
Title: '.cbrt()'
Description: 'Returns the positive, properly rounded cube root of a double-type value.'
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

The **`Math.cbrt()`** method returns the positive, properly rounded cube root of a double-type value.

## Syntax

```pseudo
Math.cbrt(double num)
```

The return type of the `.cbrt()` method is a double. The data type of the `num` parameter is also a double. However, if a decimal is not provided, `num` will still be treated like a double-type.

Some edge cases for the `.cbrt()` method include the following:

- If `num` is less than zero or it is not a numeric type `NaN`, then `NaN` is returned.
- If `num` is positive infinity `Double.POSITIVE_INFINITY`, then `Infinity` is returned.

## Example

The following example showcases the `.cbrt()` method being applied to two variables:

```java
public class Check {
  public static void main(String args[]) {
       double x = 64.0;
       System.out.println(Math.cbrt(x));
       double y = 8.0;
       System.out.println(Math.cbrt(y));
   }
}
```

This results in the following output:

```java
4.0
2.0
```
