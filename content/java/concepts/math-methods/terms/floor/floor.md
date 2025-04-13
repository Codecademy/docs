---
Title: '.floor()'
Description: 'Returns the largest integer value that is less than or equal to the argument. When the provided value is either an integer, zero, not a number, or positive or negative infinity.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Documentation'
  - 'Numbers'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **`Math.floor()`** method returns the largest integer value that is less than or equal to the argument.

## Syntax

```pseudo
Math.floor(x);
```

The `num` parameter can either be a floating-point value or a variable that points to a floating-point value. The return value is the same as `num` under the following conditions:

- `num` is already an integer.
- `num` is `NaN`, infinity, or zero (positive or negative).

## Example 1

In the case of double values, `Math.floor()` returns the next integer value below the provided double value. In the case of integers provided, these will return the same value as provided:

```java
// Example.java
public class Example {
  public static void main(String args[]) {
    System.out.println(Math.floor(-3.9));
    System.out.println(Math.floor(1.0001));
    System.out.println(Math.floor(0));
  }
}
```

This will produce the following output:

```shell
-4.0
1.0
0.0
```

## Example 2

The following example features unsuccessful calls to the `Math.floor()` method:

```java
// Example.java
public class Example {
  public static void main(String args[]) {
    System.out.println(Math.floor(2.0 % 0));
    System.out.println(Math.floor(Double.POSITIVE_INFINITY));
  }
}
```

This will produce the following output:

```shell
NaN
Infinity
```
