---
Title: '.round()'
Description: 'Returns an int or long value that is closest to the number provided.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Methods'
  - 'Arithmetic'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **`Math.round()`** method returns an `int` or `long` value that is closest to the number provided.

## Syntax

```pseudo
Math.round(n)
```

The `.round()` method takes one parameter `n`, the value that is to be rounded.

## Example

The following example demonstrates using `.round()` to round the value 1.8 to the nearest integer:

```java
public class Test {
  public static void main(String args[]) {
    int n = Math.round(1.8);
    int m = Math.round(5.2);
    System.out.println(n);
    System.out.println(m);
  }
}
```

This will produce the following output:

```shell
2
5
```
