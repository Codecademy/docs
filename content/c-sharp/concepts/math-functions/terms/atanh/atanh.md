---
Title: 'Atanh()'
Description: 'Returns the inverse hyperbolic tangent of a number.'
Subjects:
  - 'Computer Science'
  - 'Code Foundations'
Tags:
  - 'Methods'
  - 'Numbers'
  - 'Arithmetic'
CatalogContent:
  - 'learn-c-sharp'
  - 'paths/computer-science'
---

The **`Math.Atanh()`** method returns the inverse hyperbolic tangent (hyperbolic arctangent) of a specified number. The inverse hyperbolic tangent is the value whose hyperbolic tangent is the input number.

## Syntax

```pseudo
Math.Atanh(value);
```

The `Math.Atanh()` method takes one parameter:

- `value`: A double-precision floating-point number in the range -1 to 1, representing the hyperbolic tangent value.

## Return Value

The `Math.Atanh()` method returns:

- The inverse hyperbolic tangent of the `value` as a `double`.
- `NaN` (Not a Number) if the `value` is less than -1 or greater than 1.
- `NegativeInfinity` if the `value` is exactly -1.
- `PositiveInfinity` if the `value` is exactly 1.

## Example

### Basic Example

The following example demonstrates the basic usage of `Math.Atanh()`:

```codebyte/csharp
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
Atanh(0.5) = 0.5493061443340549
```

## Codebyte Example

The following example is runnable and shows how `Math.Atanh()` behaves with different input values:

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
