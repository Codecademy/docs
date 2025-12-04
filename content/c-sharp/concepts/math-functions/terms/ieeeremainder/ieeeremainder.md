---
Title: '.IEEERemainder()'
Description: 'Returns the remainder resulting from the division of two specified numbers according to the IEEE 754 standard.'
Subjects:
  - 'Computer Science'
  - 'Code Foundations'
Tags:
  - 'Methods'
  - 'Numbers'
  - 'Arithmetic'
  - 'Functions'
CatalogContent:
  - 'learn-c-sharp'
  - 'paths/computer-science'
---

The **`Math.IEEERemainder()`** method returns the remainder resulting from the division of two specified numbers according to the IEEE 754 standard. This differs from the standard modulo (%) operator in how it calculates the remainder.

## Syntax

```pseudo
Math.IEEERemainder(x, y)
```

**Parameters:**

- `x`: A `double` representing the dividend (the number to be divided).
- `y`: A `double` representing the divisor (the number to divide by).

**Return value:**

Returns a `double` representing the remainder of `x` divided by `y` according to IEEE 754. Special cases include:

- If `x` is `NaN`, returns `NaN`.
- If `y` is `NaN`, returns `NaN`.
- If `x` is positive or negative infinity, returns `NaN`.
- If `y` is zero, returns `NaN`.

The IEEE remainder differs from the modulo operator (%) in that it uses the rounding mode of "round to nearest" when computing the quotient. The result can be negative even if both operands are positive.

## Example

The following example demonstrates the `Math.IEEERemainder()` method and compares it with the modulo operator:

```cs
using System;

public class Example
{
  public static void Main()
  {
    double dividend = 17.8;
    double divisor = 4.0;

    double ieeeRemainder = Math.IEEERemainder(dividend, divisor);
    double moduloRemainder = dividend % divisor;

    Console.WriteLine($"Dividend: {dividend}");
    Console.WriteLine($"Divisor: {divisor}");
    Console.WriteLine($"IEEE Remainder: {ieeeRemainder}");
    Console.WriteLine($"Modulo Remainder: {moduloRemainder}");
  }
}
```

This example results in the following output:

```shell
Dividend: 17.8
Divisor: 4.0
IEEE Remainder: 1.8000000000000007
Modulo Remainder: 1.8
```

> **Note:** The slight difference in the IEEE Remainder output (1.8000000000000007) is due to floating-point precision limitations in binary representation.

## Codebyte Example

The following example is runnable and demonstrates how `Math.IEEERemainder()` handles different values:

```codebyte/csharp
using System;

public class Example
{
  public static void Main()
  {
    // Example 1: Positive numbers
    Console.WriteLine("Example 1: Positive numbers");
    Console.WriteLine($"IEEERemainder(10, 3) = {Math.IEEERemainder(10, 3)}");
    Console.WriteLine($"Modulo (10 % 3) = {10 % 3}");
    Console.WriteLine();

    // Example 2: Negative dividend
    Console.WriteLine("Example 2: Negative dividend");
    Console.WriteLine($"IEEERemainder(-10, 3) = {Math.IEEERemainder(-10, 3)}");
    Console.WriteLine($"Modulo (-10 % 3) = {-10 % 3}");
    Console.WriteLine();

    // Example 3: Demonstrating the key difference
    Console.WriteLine("Example 3: Showing IEEE remainder behavior");
    Console.WriteLine($"IEEERemainder(5, 3) = {Math.IEEERemainder(5, 3)}");
    Console.WriteLine($"Modulo (5 % 3) = {5 % 3}");
  }
}
```
