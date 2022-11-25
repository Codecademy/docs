---
Title: '.multiplyExact()'
Description: 'Returns the product of its arguments.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Function'
  - 'Methods'
  - 'Arithmetic'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **`Math.multiplyExact()`** method returns the product of its arguments. It is a static method and it is accessed by using the `Math` class.

## Syntax

```pseudo
Math.multiplyExact(x, y)
```

The `.multiplyExact()` method takes two parameters: `x` and `y`. Both parameters must be of either type `int` or `long`.

The `.multiplyExact()` method returns the result of `x` multiplied by `y`.

An [exception](https://www.codecademy.com/resources/docs/java/errors) is thrown if the result exceeds type `int` or `long`; or if either parameter is equal to:

- `Integer.MAX_VALUE` or
- `Integer.MIN_VALUE` or
- `Long.MAX_VALUE` or
- `Long.MIN_VALUE`.

## Example

The following example returns the product of two values with the `.multiplyExact()` method:

```java
// Main.java
public class Main {
  public static void main(String[] args) {
    int num1 = 8;
    int num2 = 2;
    System.out.println(num1 + " multiplied by " + num2 + " equals to " + Math.multiplyExact(num1, num2));

    /*
    Overflow will occur if any one of the arguments is
    Long.MAX_VALUE or Integer.MAX_VALUE.
    */
    long c = 299792458;
    long m = Long.MAX_VALUE;
    System.out.println(Math.multyplyExact(c, m));
  }
}
```

This will produce the following output:

```shell
8 multiplied by 2 equals to 16
Exception in thread "main" java.lang.ArithmeticException: long overflow
        at java.base/java.lang.Math.multiplyExact(Math.java:946)
        at Main.main(Main.java:13)
```
