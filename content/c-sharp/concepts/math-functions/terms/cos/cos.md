---
Title: '.Cos()'
Description: 'Returns the cosine of a given angle.'
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

The **`Math.Cos()`** class method returns the cosine of a given angle.

## Syntax

```pseudo
Math.Cos(angle);
```

The `Math.Cos()` method takes only one parameter, `angle`, an angle in radians of type `double`. The method returns the cosine of the `angle` as a `double` value or `NaN` (not a number) if the value of `angle` equals:

- `NaN`
- `NegativeInfinity`
- `PositiveInfinity`

## Example

The following example first converts `60` degrees to radians, then uses the `Math.Cos()` method to return the sine of that angle. Finally, the `Console.WriteLine()` function prints the result to the console:

```cs
using System;

public class Example {
  public static void Main(string[] args) {
    double degrees = 60;
    double radians = degrees * Math.PI/180;

    double cosine = Math.Cos(radians);

    Console.WriteLine("The cosine of " + degrees + " degrees is: " + cosine);
  }
}
```

The example will result in the following output:

```shell
The cosine of 60 degrees is: 0.5
```

## Codebyte Example

The following example is runnable and returns the cosine of the `angle` given in degrees:

```codebyte/csharp
using System;

public class Example {

  public static void Main(string[] args) {
    // Angle in degrees
    double angle = 0;

    Console.WriteLine("The cosine of " + angle + " degrees is: " + Math.Cos(angle * Math.PI/180));
  }
}
```
