---
Title: '.SinCos()'
Description: 'Returns both the sine and cosine of a given angle.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Arithmetic'
  - 'Functions'
  - 'Methods'
  - 'Numbers'
CatalogContent:
  - 'learn-c-sharp'
  - 'paths/computer-science'
---

The **`Math.SinCos()`** method returns both the sine and cosine of a specified angle (in radians) as a [tuple](https://www.codecademy.com/resources/docs/python/tuples).

## Syntax

```pseudo
Math.SinCos(angle);
```

**Parameters:**

- `angle`: A double-precision floating-point number representing an angle in radians.

**Return value:**

The method returns a tuple containing both the sine and cosine of the `angle` as `double` values. If the value of `angle` equals `NaN`, `NegativeInfinity`, or `PositiveInfinity`, the method returns `NaN` for both values.

> **Note:** This method is more efficient than calling `Math.Sin()` and `Math.Cos()` separately when both values are needed.

## Example 1

In this example, the code converts 45 degrees to radians and uses the `Math.SinCos()` method to return both the sine and cosine of that angle:

```cs
using System;

public class Example {
  public static void Main(string[] args) {
    double degrees = 45;
    double radians = degrees * Math.PI/180;

    var (sine, cosine) = Math.SinCos(radians);

    Console.WriteLine("The sine of " + degrees + " degrees is: " + sine);
    Console.WriteLine("The cosine of " + degrees + " degrees is: " + cosine);
  }
}
```

The example will result in the following output:

```shell
The sine of 45 degrees is: 0.7071067811865476
The cosine of 45 degrees is: 0.7071067811865476
```

## Example 2

In this example, both sine and cosine values of a 30° angle are calculated using `Math.SinCos()`:

```cs
using System;

public class Example {

  public static void Main(string[] args) {
    // Angle in degrees
    double angle = 30;

    var (sine, cosine) = Math.SinCos(angle * Math.PI/180);

    Console.WriteLine("The sine of " + angle + " degrees is: " + sine);
    Console.WriteLine("The cosine of " + angle + " degrees is: " + cosine);
  }
}
```

The output of this code is:

```shell
The sine of 30 degrees is: 0.5
The cosine of 30 degrees is: 0.8660254037844386
```

> **Note:** The `Math.SinCos()` method is supported starting from .NET 6 and later. It is not available in earlier .NET versions.
