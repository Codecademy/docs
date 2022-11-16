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

The **Math.ulp()** method returns the unit of least precision of a given number. It calculates the distance between the given `float` or `double` value and the `float` `double` value next larger in magnitude.

## Syntax

```pseudo
Math.ulp(num);
```

- The `num` parameter can either be of type `float` or `double`.
- The return type will be the same as the parameter type.

Special cases include the following:

- If `num` is `NaN`, `NaN` will be returned.
- If `num` is positive or negative Zero then `ulp(num)` will be `Double.MAX_VALUE` or `Float.MAX_VALUE` meaning the minimum numbers that `float` or `double` can represent.
- If `num` is positive or negative infinity `ulp(num)` will be postive infinity.
- If `num` is a number `ulp(num)` is equal to `ulp(-num)`.
- If the argument is `Double.MAX_VALUE` or `Float.MAX_VALUE` `ulp(num)` will be 2<sup>971</sup> for double and 2<sup>104</sup> for float.

## Example 1

```java
// ulp of a number
import java.lang.Math

public class Test {
  public static void main(String args[]) {
    float num = 23.44;
    System.out.println(Math.ulp(num));
  }
}
```

Output:

```shell
3.552713678800501E-15
```

## Example 2

```java
// some special cases
import java.lang.Math

public class Test {
  public static void main(String args[]) {
    float num = 23.44;
    System.out.println(Math.ulp(num) + " = "  + Math.ulp(-num));
    System.out.println(Math.ulp(0/0.));
    System.out.println(Math.ulp(0.));
    System.out.println(Math.ulp(1./0));
  }
}
```

Output:

```shell
3.552713678800501E-15 = 3.552713678800501E-15
NaN
4.9E-324
Infinity
```
