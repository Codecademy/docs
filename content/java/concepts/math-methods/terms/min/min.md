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
- The `num1` and `num2` arguments can be of <a href="https://www.codecademy.com/resources/docs/java/data-types">type</a> int, float, double or long.

## Example

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
