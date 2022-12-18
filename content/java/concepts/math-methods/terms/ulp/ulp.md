---
Title: '.ulp()'
Description: 'Returns the size of the unit of last precision of a number.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Methods'
  - 'Arithmetic'
  - 'Documentation'
  - 'Numbers'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **`Math.ulp()`** method returns the unit of least precision of a given number. It calculates the distance between the given `float` or `double` value and the next largest `float` or `double` value in magnitude.

## Syntax

```pseudo
Math.ulp(num);
```

The `num` parameter can be of type `float` or `double` and the return value will be of the same type.

Special cases include the following:

- If `num` is `NaN`, `NaN` will be returned.
- If `num` is positive or negative zero, then the return value will be `Double.MIN_VALUE` or `Float.MIN_VALUE` which is the lowest number a `float` or `double` can represent.
- If `num` is positive or negative infinity, then the return value will be postive infinity.
- If `num` is a number, then `num` will have the same return value as `-num`.
- If `num` is `Double.MAX_VALUE` or `Float.MAX_VALUE`, then the return value will be 2<sup>971</sup> for `double` and 2<sup>104</sup> for `float`.

## Example 1

```java
// Test.java
import java.lang.Math;

public class Test {
  public static void main(String args[]) {
    double num = 23.44;
    System.out.println(Math.ulp(num));
  }
}
```

This will output:

```shell
3.552713678800501E-15
```

## Example 2

```java
import java.lang.Math;

public class Test {
  public static void main(String args[]) {
    double num = 23.44;
    System.out.println(Math.ulp(num) + " = "  + Math.ulp(-num));
    System.out.println(Math.ulp(0/0.));
    System.out.println(Math.ulp(0.));
    System.out.println(Math.ulp(1./0));
  }
}
```

This will output:

```shell
3.552713678800501E-15 = 3.552713678800501E-15
NaN
4.9E-324
Infinity
```
