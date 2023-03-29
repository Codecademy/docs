---
Title: '.Sinh()'
Description: 'Returns the hyperbolic sine of a given angle.'
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

The **`Math.Sinh()`** class method returns the hyperbolic sine of a given angle.

## Syntax

```pseudo
Math.Sinh(angle);
```

The `Math.Sinh()` method takes only one parameter: an `angle` in radians of type `double`. The method returns the hyperbolic sine of the angle as a `double` value, except if the value of `angle` equals:

- `NaN` (not a number), then it returns `NaN`.
- `NegativeInfinity`, then it returns `NegativeInfinity`.
- `PositiveInfinity`, then it returns `PositiveInfinity`.

> **Note:** Depending on the operating system or architecture, the exact result or the input range of the `Math.Sinh()` method may differ due to the differences in the C runtime environment.

## Example

The following example first converts `88` degrees to radians, then uses the `Math.Sinh()` method to return the hyperbolic sine of that angle. `Math.Round()` rounds up the result to five decimals. Finally, the `Console.WriteLine()` function prints the result to the console:

```cs
using System;

public class Example {
  public static void Main(string[] args) {
    double degrees = 88;
    double radians = degrees * Math.PI/180;
    double hyperbolicSine = Math.Round(Math.Sinh(radians), 5);

    Console.WriteLine("The hyperbolic sine of " + degrees + " degrees is: " + hyperbolicSine);
  }
}
```

The example will result in the following output:

```shell
The hyperbolic sine of 88 degrees is: 2.2151
```

## Codebyte Example

The following example is runnable and returns the hyperbolic sine of the `angle` given in degrees:

```codebyte/csharp
using System;

public class Example {
  public static void Main(string[] args) {
    // Angle in degrees
    double angle = 0;

    Console.WriteLine("The hyperbolic sine of " + angle + " degrees is: " + Math.Round(Math.Sinh(angle * Math.PI/180), 5));
  }
}
```
