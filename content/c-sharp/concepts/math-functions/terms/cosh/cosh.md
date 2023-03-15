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

The `Math.Cosh()` method takes only one parameter, `angle`, an angle in radians of type `double`. The method returns the hyperbolic cosine of the `angle` as a `double` value or the given `angle` as a  `double` value if the value of `angle` equals:

- `NaN`
- `NegativeInfinity`
- `PositiveInfinity`

> **Note:** Depending on the used operating system or architecture, the exact result or the input range of the `Math.Cosh()` method may differ due to the differences in the C runtime environment.

## Example

The following example first converts `88` degrees to radians, then uses the `Math.Cosh()` method to return the hyperbolic cosine of that angle, and `Math.Round()` rounds up the result to five decimals. Finally, the `Console.WriteLine()` function prints the result to the console:

```cs
using System;
public class Example {
  public static void Main(string[] args) {
    double degrees = 88;
    double radians = degrees * Math.PI/180;
    double hyperbolicCosine = Math.Round(Math.Cosh(radians), 5);
    Console.WriteLine("The hyperbolic cosine of " + degrees + " degrees is: " + hyperbolicCosine);
  }
}
```

The example will result in the following output:

```shell
The hyperbolic cosine of 88 degrees is: 2.2151
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
