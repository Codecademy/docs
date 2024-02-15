---
Title: '.pow()'
Description: 'Returns the first argument raised to the power of the second argument.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Functions'
  - 'Methods'
  - 'Arithmetic'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **`Math.pow()`** method returns a double value of the first argument raised to the power of the second argument.

## Syntax

```pseudo
Math.pow(base, exponent)
```

The `base` and `exponent` arguments are both `double` values.

It's important to note that edge cases with special arguments such as `0.0`, `infinity`， or `NaN` will produce special results as shown in the example below.

## Example

The following example uses `Math.pow()` to return `3.0` raised to the power of `2.0`:

```java
public class Main {
  public static void main(String[] args) {

    double base = 3.0;
    double exponent = 2.0;

    System.out.println(Math.pow(base, exponent));

    System.out.println(Math.pow(base, 0.0));

    System.out.println(Math.pow(0.0, exponent));

    double notANumber = Double.NaN;
    double negInfinity = Double.NEGATIVE_INFINITY;

    System.out.println(Math.pow(notANumber, exponent));

    System.out.println(Math.pow(0.0, negInfinity));
  }
}
```

This will produce the following output:

```shell
9.0
1.0
0.0
NaN
Infinity
```
