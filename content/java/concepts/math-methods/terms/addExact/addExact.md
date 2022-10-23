---
Title: '.addExact()'
Description: 'Returns the sum of its arguments.'
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

The **`Math.addExact()`** method returns the sum of its arguments. It will throw an [exception](https://www.codecademy.com/resources/docs/java/errors) if the result overflows either `int` or `long`.

## Syntax

```pseudo
Math.addExact(a, b)
```

Both parameters `a` and `b` must either be of type `int` or `long`.

An exception is thrown if either parameter is equal to `Integer.MAX_VALUE`, `Long.MAX_VALUE`, or the result exceeds type `int` or `long`.

## Example

This following example returns the sum of two values with the `.addExact()` method:

```java
// Main.java
public class Main {
  public static void main(String[] args) {
    int a = 575;
    int b = 209;
    System.out.println(Math.addExact(a, b));

    /*
    Overflow will occur if any one of the argument is
    Long.MAX_VALUE or Integer.MAX_VALUE.
    */
    long x = Long.MAX_VALUE;
    long y = 86712;
    System.out.println(Math.addExact(x, y));
  }
}
```

This will produce the following output:

```shell
784
Exception in thread "main" java.lang.ArithmeticException: long overflow
        at java.base/java.lang.Math.addExact(Math.java:845)
        at Main.main(Main.java:13)
```
