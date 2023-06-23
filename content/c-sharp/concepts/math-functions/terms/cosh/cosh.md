---
Title: '.Cosh()'
Description: 'Returns the hyperbolic cosine of a given angle.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Methods'
  - 'Numbers'
  - 'Arithmetic'
  - 'Functions'
CatalogContent:
  - 'learn-c-sharp'
  - 'paths/computer-science'
---

The **`Math.Cosh()`** class method returns the hyperbolic cosine of a given angle.

## Syntax

```pseudo
Math.Cosh(angle);
```

The `Math.Cosh()` method takes only one parameter, `angle`, an angle in radians of type `double`. The method returns the hyperbolic cosine of the `angle` as a `double` value, except if the value of `angle` equals:

- `NaN` (not a number), then it returns `NaN`.
- `NegativeInfinity`, then it returns `PositiveInfinity`.
- `PositiveInfinity`, then it also returns `PositiveInfinity`.

> **Note:** Depending on the operating system or architecture, the exact result or the input range of the `Math.Cosh()` method may differ due to the differences in the C runtime environment.

## Example

The following example first converts `45` degrees to radians, then uses the `Math.Cosh()` method to return the hyperbolic cosine of that angle. `Math.Round()` rounds up the result to five decimals. Finally, the result is printed using `Console.WriteLine()`:

```cs
using System;

public class Example {
  public static void Main(string[] args) {
    double degrees = 45;
    double radians = degrees * Math.PI/180;

    double hyperbolicCosine = Math.Round(Math.Cosh(radians), 5);

    Console.WriteLine("The hyperbolic cosine of " + degrees + " degrees is: " + hyperbolicCosine);
  }
}
```

The example will result in the following output:

```shell
The hyperbolic cosine of 45 degrees is: 1.32461
```

## Codebyte Example

The following example is runnable and returns the hyperbolic cosine of the `angle` given in degrees:

```codebyte/csharp
using System;

public class Example {
  public static void Main(string[] args) {
    // Angle in degrees
    double angle = 0;

    Console.WriteLine("The hyperbolic cosine of " + angle + " degrees is: " + Math.Round(Math.Cosh(angle * Math.PI/180), 5));
  }
}
```
