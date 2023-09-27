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
