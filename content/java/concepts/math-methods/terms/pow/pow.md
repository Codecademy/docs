---
Title: '.pow()'
Description: 'Returns the first argument raised to the power of the second argument.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Methods'
  - 'Arithmetic'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **`Math.pow()`** method returns a double value of the first argument raised to the power of the second argument.

## Syntax

```pseudo
Math.pow(b, p)
```

`b` and `p` are both `double` values.

## Example

The following example uses `Math.pow()` to return `3.0` raised to the power of `2.0`:

```java
public class Main {
  public static void main(String[] args) {

    double base = 3.0;
    double power = 2.0;

    System.out.println(Math.pow(base, power));
    // Output: 9.0
  }
}
```
