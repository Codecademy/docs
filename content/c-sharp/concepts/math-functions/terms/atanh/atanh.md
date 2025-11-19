---
Title: 'Atanh()'
Description: 'Returns the inverse hyperbolic tangent of a number.'
Subjects:
  - 'Computer Science'
  - 'Code Foundations'
Tags:
  - 'Arithmetic'
  - 'Methods'
  - 'Numbers'
CatalogContent:
  - 'learn-c-sharp'
  - 'paths/computer-science'
---

The **`Math.Atanh()`** method returns the inverse hyperbolic tangent (hyperbolic arctangent) of a specified number. The inverse hyperbolic tangent is the value whose hyperbolic tangent is the input number.

## Syntax

```pseudo
Math.Atanh(value);
```

**Parameters:**

- `value`: A double-precision floating-point number in the range `-1` to `1`, representing the hyperbolic tangent value.

**Return value:**

The `Math.Atanh()` method returns the inverse hyperbolic tangent of the given `value` as a `double`.

It returns:

- `NaN` (Not a Number) if the `value` is less than `-1` or greater than `1`.
- `NegativeInfinity` if the `value` is exactly `-1`.
- `PositiveInfinity` if the `value` is exactly `1`.

## Example: Basic Usage of `Math.Atanh()`

The following example demonstrates the basic usage of `Math.Atanh()`:

```cs
using System;

class Program
{
  static void Main()
  {
    double value = 0.5;
    double result = Math.Atanh(value);
    Console.WriteLine($"Atanh({value}) = {result}");
  }
}
```

This will output:

```shell
Atanh(0.5) = 0.5493061443340548
```

## Codebyte Example

In this example, different values are passed to `Math.Atanh()` to observe how the result changes:

```codebyte/csharp
using System;

class Program
{
  static void Main()
  {
    double[] testValues = { 0.25, 0.5, 0.75, 0.9, -0.5 };

    foreach (double value in testValues)
    {
      double result = Math.Atanh(value);
      Console.WriteLine($"Atanh({value}) = {result:F4}");
    }
  }
}
```
