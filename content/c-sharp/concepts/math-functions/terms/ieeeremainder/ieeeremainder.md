---
Title: 'IEEERemainder()'
Description: 'Returns the IEEE remainder resulting from the division of two specified numbers.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Arithmetic'
  - 'Methods'
  - 'Numbers'
CatalogContent:
  - 'learn-c-sharp'
  - 'paths/computer-science'
---

The **`Math.IEEERemainder()`** [method](https://www.codecademy.com/resources/docs/c-sharp/methods) in C# returns the IEEE remainder resulting from the division of a specified number by another specified number. This method differs from the standard remainder operator (`%`) as it uses rounding rather than floor division.

## Syntax

```pseudo
Math.IEEERemainder(double x, double y)
```

**Parameters:**

- `x` (double): The dividend.
- `y` (double): The divisor.

**Return value:**

The method will return a value of [type](https://www.codecademy.com/resources/docs/c-sharp/data-types) `double` calculated using the formula `x - (y * Q)`, where `Q` is the quotient of `x / y` rounded to the nearest integer (using banker's rounding for ties).

Special cases:

- If the result is zero, `+0` is returned if `x` is positive, or `-0` if `x` is negative.
- If `y` is zero, the method will return `NaN`.
- If `x` is `NaN`, the method will return `NaN`.
- If `y` is `NaN`, the method will return `NaN`.

## Example

In this example, different numeric values are passed to `Math.IEEERemainder()` to demonstrate how it differs from the standard remainder operator:

```cs
using System;

namespace MyIEEERemainder {
  public class Example {
    public static void Main(string[] args) {
      double a = Math.IEEERemainder(17, 4);
      double b = Math.IEEERemainder(11, 3);
      double c = Math.IEEERemainder(27.7, 4.1);
      double d = Math.IEEERemainder(-16, 5);

      Console.WriteLine(a);
      Console.WriteLine(b);
      Console.WriteLine(c);
      Console.WriteLine(d);
    }
  }
}
```

This example results in the following output:

```shell
1
-1
-0.6999999999999993
-1
```

## Codebyte Example

In this example, `Math.IEEERemainder()` is used to calculate the IEEE remainder and compare it with the standard remainder operator:

```codebyte/csharp
using System;

public class Example {
  public static void Main() {
    double x = 17;
    double y = 5;

    double ieeeRemainder = Math.IEEERemainder(x, y);
    double standardRemainder = x % y;

    Console.WriteLine("IEEE Remainder: " + ieeeRemainder);
    Console.WriteLine("Standard Remainder: " + standardRemainder);
  }
}
```
