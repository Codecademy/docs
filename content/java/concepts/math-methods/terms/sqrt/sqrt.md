---
Title: '.sqrt()'
Description: 'Returns the positive, properly rounded square root of a double-type value.'
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

The **`Math.sqrt()`** method returns the positive, properly rounded square root of a double-type value.

## Syntax

```pseudo
Math.sqrt(double num)
```

The return type of the `.sqrt()` method is a double. The data type of the `num` parameter is also a double. However, if a decimal is not provided, `num` will still be treated like a double-type.

Some edge cases for the `.sqrt()` method include the following:

- If `num` is less than zero or it is not a numeric type (`NaN`), then `NaN` is returned.
- If `num` is positive infinity (`Double.POSITIVE_INFINITY`), then `Infinity` is returned.

## Example

The following example showcases the `.sqrt()` method being applied to two variables:

```java
public class Check {
  public static void main(String args[]) {
       double x = 64.0;
       System.out.println(Math.sqrt(x));
       double y = 49.0;
       System.out.println(Math.sqrt(y));
   }
}
```

This results in the following output:

```java
8.0
7.0
```
