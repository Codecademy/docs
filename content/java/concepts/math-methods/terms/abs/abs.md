---
Title: '.abs()'
Description: 'Returns the absolute value of the argument.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Methods'
  - 'Arithmetic'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **`Math.abs()`** method returns the absolute value of the argument.

## Syntax

```pseudo
Math.abs(n)
```

Absolute values are the non-negative versions of the value without considering the positive/negative sign.

## Example

The following example uses `Math.abs()` to return the absolute values of `-6.5`, `2`, and `-340.8`:

```java
class AbsoluteValue {
  public static void main(String[] args) {
    double x = -6.5;
    int y = 2;
    double z = -340.8;

    System.out.println(Math.abs(x));
    System.out.println(Math.abs(y));
    System.out.println(Math.abs(z));
  }
}
```

This produces the following output:

```shell
6.5
2
340.8
```
