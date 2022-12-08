---
Title: '.min()'
Description: 'Returns the minimum value from the given two arguments.'
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

The **`Math.min()`** method returns the minimum value from the given two arguments.

## Syntax

```pseudo
Math.min(num1, num2)
```

- The `.min()` method takes two parameters `num1` and `num2`.
- The `num1` and `num2` arguments can be of [type](https://www.codecademy.com/resources/docs/java/data-types) int, float, double or long.

## Example 1

The following example uses the `.min()` method to print the minimum of two numbers:

```java
public class Main {
    public static void main(String[] args){
        int num1 = 50;
        int num2 = 10;

        System.out.println(Math.min(num1, num2));
    }
}
```

This results in the following output:

```shell
10
```

## Example 2

The following example uses the `.min()` method to print the minimum of three numbers:

```java
public class Main {
    public static void main(String[] args){
        int num1 = 4;
        int num2 = 10;
        int num3 = 1;

        System.out.println(Math.min(Math.min(num1, num2),num3));
    }
}
```

This results in the following output:

```shell
1
```
