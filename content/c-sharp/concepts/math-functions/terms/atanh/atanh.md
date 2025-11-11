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

The method returns:
- A double-precision floating-point number representing the inverse hyperbolic tangent of `value` in radians.
- `Double.NaN` if the value is less than -1 or greater than 1.
- `Double.NegativeInfinity` if the value equals -1.
- `Double.PositiveInfinity` if the value equals 1.

## Example

The following example demonstrates the use of the `Math.Atanh()` method:

```cs
using System;

class AtanhExample
{
    static void Main()
    {
        // Calculate inverse hyperbolic tangent for various values
        double value1 = 0.5;
        double value2 = -0.5;
        double value3 = 0;
        
        Console.WriteLine($"Atanh({value1}) = {Math.Atanh(value1)}");
        Console.WriteLine($"Atanh({value2}) = {Math.Atanh(value2)}");
        Console.WriteLine($"Atanh({value3}) = {Math.Atanh(value3)}");
        
        // Edge cases
        Console.WriteLine($"Atanh(1) = {Math.Atanh(1)}");
        Console.WriteLine($"Atanh(-1) = {Math.Atanh(-1)}");
        Console.WriteLine($"Atanh(2) = {Math.Atanh(2)}");
    }
}
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
