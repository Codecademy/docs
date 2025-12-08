---
Title: 'Asinh()'
Description: 'Returns the inverse hyperbolic sine of a number, in radians.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Arithmetic'
  - 'Method'
  - 'Numbers'
CatalogContent:
  - 'learn-c-sharp'
  - 'paths/computer-science'
---

The **`Math.Asinh()`** method returns the inverse hyperbolic sine of a number, in radians. This method appears frequently in advanced mathematics, including physics, geometry, machine learning, and numerical analysis.

> **Note:** The static method `Math.Asinh()` was introduced in .NET Core 2.1.

## Syntax

```pseudo
Math.Asinh(double value);
```

**Parameters:**

- `value`: A real number. If value is `NaN`, the method returns `NaN`.

**Return value:**

The inverse hyperbolic sine of `value`, in radians.

## Example

The following example demonstrates the `Math.Asinh()` method and writes the result to the console:

```cs
using System;
class Program
{
  static void Main()
  {
    double x = 2;
    double result = Math.Asinh(x);
    Console.WriteLine(result);
  }
}
```

The example will result in the following output:

```shell
1.4436354751788103
```

## Codebyte Example

The following codebyte example uses the `Math.PI` constant field to convert the result to degrees:

```codebyte/csharp
using System;
class Program
{
  static void Main()
  {
    double x = 4;
    double radians = Math.Asinh(x);
    double degrees = radians * (180 / Math.PI);

    Console.WriteLine($"Radians: {radians}");
    Console.WriteLine($"Degrees: {degrees}");
  }
}
```
