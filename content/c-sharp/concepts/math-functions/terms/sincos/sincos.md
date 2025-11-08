---
Title: '.SinCos()'
Description: 'Returns both the sine and cosine of a given angle simultaneously.'
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

The **`Math.SinCos()`** class method returns both the sine and cosine of a given angle simultaneously as a tuple. This method is more efficient than calling `Math.Sin()` and `Math.Cos()` separately.

## Syntax

```pseudo
(double sin, double cos) = Math.SinCos(angle);
```

The `Math.SinCos()` method takes only one parameter, `angle`, an angle in radians of type `double`. The method returns a tuple containing two `double` values:

- `sin`: The sine of the `angle`
- `cos`: The cosine of the `angle`

If the value of `angle` equals `NaN`, `NegativeInfinity`, or `PositiveInfinity`, both returned values will be `NaN` (not a number).

## Example

The following example first converts `45` degrees to radians, then uses the `Math.SinCos()` method to return both the sine and cosine of that angle. Finally, the `Console.WriteLine()` function prints the results to the console:

```cs
using System;

public class Example {
  public static void Main(string[] args) {
    double degrees = 45;
    double radians = degrees * Math.PI/180;

    (double sine, double cosine) = Math.SinCos(radians);

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

## Codebyte Example

The following example is runnable and returns both the sine and cosine of the `angle` given in degrees:

```codebyte/csharp
using System;

public class Example {

  public static void Main(string[] args) {
    // Angle in degrees
    double angle = 30;

    (double sine, double cosine) = Math.SinCos(angle * Math.PI/180);

    Console.WriteLine("Angle: " + angle + " degrees");
    Console.WriteLine("Sine: " + sine);
    Console.WriteLine("Cosine: " + cosine);
  }
}
```
