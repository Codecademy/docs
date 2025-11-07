---
Title: 'CopySign()'
Description: 'Returns a value with the magnitude of the first operand and the sign of the second operand.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Functions'
  - 'Math'
  - 'Methods'
  - 'Numbers'
CatalogContent:
  - 'learn-c-sharp'
  - 'paths/computer-science'
---

The **`Math.CopySign()`** method in C# returns a value that combines the magnitude of the first argument with the sign of the second. It’s useful for matching the sign of one number to another while keeping the original magnitude.

## Syntax of C# `Math.CopySign()`

```pseudo
Math.CopySign(double x, double y)
```

**Parameters:**

- `x` (double): The value whose magnitude (absolute value) will be used.
- `y` (double): The value whose sign will be applied to the result.

**Return value:**

- Returns a `double` value with the magnitude of `x` and the sign of `y`.
- If `x` is `NaN`, the result is `NaN`.
- If `y` is `NaN`, the result is treated as if `y` were positive.

## Example: Adjusting velocity based on direction

In this example, `Math.CopySign()` is used to adjust a projectile’s velocity so that its direction matches a steering input:

```cs
using System;

public class CopySignExample
{
  public static void Main()
  {
    double projectileSpeed = 18.75;
    double steeringDirection = -0.5; // Negative indicates reverse direction

    double adjustedVelocity = Math.CopySign(projectileSpeed, steeringDirection);

    Console.WriteLine($"Adjusted velocity: {adjustedVelocity}");
  }
}
```

This program outputs:

```shell
Adjusted velocity: -18.75
```

## Codebyte Example: Standardizing numeric sign alignment

In this example, `Math.CopySign()` ensures a set of magnitudes follow given directional signs, even when the sign is `NaN`:

```codebyte/csharp
using System;

public class Program
{
  public static void Main()
  {
    double[] magnitudes = { 3.5, 12.0, 6.25 };
    double[] directionSamples = { -1.0, 0.0, double.NaN };

    Console.WriteLine("Magnitude\tDirection\tResult");

    for (int i = 0; i < magnitudes.Length; i++)
    {
      double result = Math.CopySign(magnitudes[i], directionSamples[i]);
      Console.WriteLine($"{magnitudes[i],-9}\t{directionSamples[i],-9}\t{result}");
    }
  }
}
```
