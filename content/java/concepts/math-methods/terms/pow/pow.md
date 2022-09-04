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
    // Output: 9.0

    System.out.println(Math.pow(base, 0.0));
    // Anytime the exponent is 0 the output will be 1.0

    System.out.println(Math.pow(0.0, exponent));
    // Anytime the base is 0 and the exponent is greater than 0 the output will 0.0

    double notANumber = Double.NaN;
    double negInfinity = Double.NEGATIVE_INFINITY;

    System.out.println(Math.pow(notANumber, exponent));
    // Anytime the base is NaN and the exponent is nonzero the output will NaN

    System.out.println(Math.pow(0.0, negInfinity));
    // Anytime the base is 0 and the exponent is less than 0, the output will be Infinity
  }
}
```
