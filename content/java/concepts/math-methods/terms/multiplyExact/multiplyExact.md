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

The **`.multiplyExact()`** method returns the product of its arguments.

## Syntax

```pseudo
Math.multiplyExact(x, y)
```

The `.multiplyExact()` method takes two parameters: `x` and `y` (a multiplicand and multiplier). Both parameters must be of either [type](https://www.codecademy.com/resources/docs/java/data-types) `int` or `long`.

The `.multiplyExact()` method returns the result of `x` multiplied by `y`.

An [exception](https://www.codecademy.com/resources/docs/java/errors) is thrown if the result exceeds type `int` or `long` or is equal to:

- `Integer.MAX_VALUE`
- `Integer.MIN_VALUE`
- `Long.MAX_VALUE`
- `Long.MIN_VALUE`

## Example

In the following example, the `.multiplyExact()` method first returns the product of two numbers and then throws an exception:

```java
// Main.java
public class Main {
  public static void main(String[] args) {
    int num1 = 8;
    int num2 = 2;
    /*
    Returns the product of the two numbers
    */
    System.out.println(num1 + " multiplied by " + num2 + " equals to " + Math.multiplyExact(num1, num2));

    long c = 299792458;
    long m = Long.MAX_VALUE;
    /*
    Overflow will occur if any one of the arguments is
    Long.MAX_VALUE or Integer.MAX_VALUE.
    */
    System.out.println(Math.multiplyExact(c, m));
  }
}
```

This will produce the following output:

```shell
8 multiplied by 2 equals to 16
Exception in thread "main" java.lang.ArithmeticException: long overflow
        at java.base/java.lang.Math.multiplyExact(Math.java:946)
        at Main.main(Main.java:17)
```
