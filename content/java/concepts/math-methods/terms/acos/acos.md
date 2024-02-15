---
Title: '.acos()'
Description: 'Returns the inverse cosine of the argument in radians.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Methods'
  - 'Arithmetic'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **`Math.acos()`** method returns the inverse cosine (or arccosine) of the argument in radians.

## Syntax

```pseudo
Math.acos(n)
```

`n` is a `double` between 0 and 1.

## Example

The following example uses `Math.acos()` to return the inverse cosine of `0.0` and `1.0`:

```java
class Main {
  public static void main(String[] args) {
    double arg1 = 0.0;
    double arg2 = 1.0;

    System.out.println(Math.acos(arg1));
    System.out.println(Math.acos(arg2));
  }
}
```

This will produce the following output:

```shell
1.5707963267948966
0.0
```
