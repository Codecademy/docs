---
Title: 'CopySign()'
Description: 'Returns a value with the magnitude of one number and the sign of another.'
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

The C# **`Math.CopySign()`** method returns a value with the magnitude of the first argument and the sign of the second argument. It is helpful when aligning numeric signs while preserving absolute values.

## Syntax of C# `Math.CopySign()`

```pseudo
Math.CopySign(magnitude, sign);
```

**Parameters:**

- `magnitude`: A `double` or `float` whose absolute value will be used in the result.
- `sign`: A `double` or `float` whose sign will be applied to the result.

**Return value:**

- Returns a `double` or `float` that combines the magnitude of `magnitude` with the sign of `sign`.
- If `magnitude` is `NaN`, the result is `NaN`.
- If `sign` is `NaN`, the result preserves the magnitude of `magnitude` with a positive sign.

## Example

The following example keeps a projectile speed positive while matching the direction of a steering input:

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

## Codebyte Example

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
