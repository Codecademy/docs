---
Title: '.Tan()'
Description: 'Returns the tangent of a given angle.'
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

In C#, the **`Math.Tan()`** method returns the tangent of a given angle.

## Syntax

```pseudo
Math.Tan(angle);
```

The `Math.Tan()` method takes only one parameter, `angle`, an angle in radians of type `double`. The method returns the tangent of the `angle` as a `double` value or `NaN` (not a number) if the value of `angle` equals:

- `NaN`
- `NegativeInfinity`
- `PositiveInfinity`

## Example

The following example converts 30 degrees to radians and then uses the `Math.Tan()` method to calculate the tangent of that angle. Finally, `Console.WriteLine()` outputs the result to the console:

```cs
using System;

public class Example {
  public static void Main(string[] args) {
    // Define an angle in degrees
    double degrees = 30;

    // Convert the angle to radians
    double radians = degrees * Math.PI/180;

    // Calculate the tangent of the angle
    double tangent = Math.Tan(radians);

    // Display the result
    Console.WriteLine("The tangent of " + degrees + " degrees is: " + tangent);
  }
}
```

The above example will result in the following output:

```shell
The tangent of 30 degrees is: 0.5773502691896257
```

## Codebyte Example

The following example is runnable and returns the tangent of the `angle` given in degrees:

```codebyte/csharp
using System;
public class Example {
  public static void Main(string[] args) {
    double degrees = 45;
    double radians = degrees * Math.PI/180;
    double tangent = Math.Tan(radians);
    Console.WriteLine("The tangent of " + degrees + " degrees is: " + tangent);
  }
}
```
