---
Title: '.Atan2()'
Description: 'Returns the angle, in radians, between the positive x-axis and the vector to point (x, y).'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Arithmetic'
  - 'Functions'
  - 'Geometry'
  - 'Methods'
  - 'Numbers'
  - 'Trigonometry'
CatalogContent:
  - 'learn-c-sharp'
  - 'paths/computer-science'
---

The **Math.Atan2()** function returns the angle, in radians, between the positive x-axis and a vector to the point with the given (x, y) coordinates in the Cartesian plane.

## Syntax

```pseudo
Math.Atan2(y, x)
```

The function takes two arguments `y` and `x` of type `double`, representing the `y` and `x` coordinates of a point (x, y).

The return value is the angle θ, measured in radians, for which tan(θ) = `y` / `x`. The resulting angle is between -π and π.

- When `x` > 0 and `y` > 0, in quadrant 1, 0 < θ < π/2.
- When `x` < 0 and `y` > 0, in quadrant 2, π/2 < θ < π.
- When `x` < 0 and `y` < 0, in quadrant 3, -π < θ < -π/2.
- When `x` > 0 and `y` < 0, in quadrant 4, -π/2 < θ < 0.

For points (x, y) on the boundaries of the quadrants:

- When `x` >= 0 and `y` = 0, θ = 0.
- When `x` = 0 and `y` > 0, θ = π/2.
- When `x` < 0 and `y` = 0, θ = π.
- When `x` = 0 and `y` < 0, θ = -π/2.

## Example

The following is an example of the `Math.Atan2()` function:

```cs
using System;

public class Program
{
  public static void Main()
  {
    double x = 4.0;
    double y = 3.0;

    double angleRadians = Math.Atan2(y, x);
    double angleDegrees = angleRadians * (180/Math.PI);

    Console.WriteLine("The angle in radians between the positive x-axis and");
    Console.WriteLine($"a vector to the point ({x}, {y}) is: {angleRadians},");
    Console.WriteLine($"which is equivalent to {angleDegrees} degrees.");
  }
}
```

This example produces the following output:

```
The angle in radians between the positive x-axis and
a vector to the point (4, 3) is: 0.643501108793284,
which is equivalent to 36.869897645844 degrees.
```

## Codebyte Example

The following is a runnable example. Changing the values of the variables will yield different results:

```codebyte/csharp
using System;

class Sample {
  static void Main() {
    double x = -5;
    double y = 0;

    double angleRadians = Math.Atan2(y, x);
    double angleDegrees = angleRadians * (180/Math.PI);

    Console.WriteLine($"point ({x}, {y})");
    Console.WriteLine($"angle in radians: {angleRadians}");
    Console.WriteLine($"angle in degrees: {angleDegrees}");
  }
}
```
