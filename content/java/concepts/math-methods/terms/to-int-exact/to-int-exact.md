---
Title: '.toIntExact()'
Description: 'Returns the integer value of a long type argument. An exception is thrown if the value of argument overflows that of an int.'
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

The **`Math.toIntExact()`** method returns the integer value of a `long` type. An [exception](https://www.codecademy.com/resources/docs/java/errors) is thrown if the argument's value overflows that of an `int`.

## Syntax

```pseudo
Math.toIntExact(long val)
```

In the function `Math.toIntExact(long val)`, the parameter `val` is of type `long`. The function will return an `int`.

If the value of `val` is greater than 2147483647L or is less than -2147483648L, then the following exception will be thrown:

```shell
Exception in thread "main" java.lang.ArithmeticException: integer overflow
at java.base/java.lang.Math.toIntExact
```

## Example

The following example demonstrates the application of `.toIntExact()` method:

```java
public class Check {
  public static void main(String args[]) {
       long val= 2147483647L;
       System.out.println(Math.toIntExact(val));
   }
}
```

This results in the following output:

```java
2147483647
```
