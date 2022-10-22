---
Title: '.max()'
Description: 'Returns the maximum value from the given two arguments.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Methods'
  - 'Function'
  - 'Arithmetic'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **`Math.max()`** method returns the maximum value from the given two arguments.

## Syntax

```pseudo
Math.max(num1, num2)
```

- The `.max()` method takes two parameters `num1` and `num2`.
- `num1` and `num2` can be of [type](https://www.codecademy.com/resources/docs/java/data-types) `int`, `float`, `double` or `long`.

## Example 1

The following example uses the `.max()` method to print the maximum of two numbers:

```java
// Main.java
public class Main {
  public static void main(String[] args){
    int num1 = 50;
    int num2 = 10;

    System.out.println(Math.max(num1, num2));
  }
}
```

This results in the following output:

```shell
50
```

## Example 2

The following example uses the `.max()` method to print the maximum of three numbers:

```java
public class Main {
  public static void main(String[] args){
    int num1 = 4;
    int num2 = 10;
    int num3 = 1;

    System.out.println(Math.max(Math.max(num1, num2),num3));
  }
}
```

This results in the following output:

```shell
10
```
