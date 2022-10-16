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

The **`Math.toIntExact()`** method returns the integer value of a `long` type argument. An [exception](https://www.codecademy.com/resources/docs/java/errors) is thrown if the value of argument overflows that of an `int`.

## Syntax

```pseudo
Math.toIntExact(long val)
```

The return type of the `.toIntExact()` method is an `int` type value. The data type of the `val` parameter is `long`.

- If the value of 'val' is greater than 2147483647L or is lesser than -2147483648L then an exception of following manner will be thrown.

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
