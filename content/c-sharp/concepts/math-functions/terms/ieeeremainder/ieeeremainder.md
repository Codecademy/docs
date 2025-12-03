---
Title: '.IEEERemainder()'
Description: 'Returns the remainder resulting from the division of a specified number by another specified number.'
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

The C# **`Math.IEEERemainder()`** method is a static method that returns the remainder resulting from the division of a specified number by another specified number. This method follows the IEEE 754 standard for floating-point arithmetic, which differs from the standard modulo operation.

## Syntax of C# `Math.IEEERemainder()`

```pseudo
Math.IEEERemainder(dividend, divisor);
```

**Parameters:**

- `dividend`: A `double` value representing the number to be divided (the numerator).
- `divisor`: A `double` value representing the number to divide by (the denominator).

**Return value:**

Returns a `double` representing the remainder of dividing `dividend` by `divisor` according to IEEE 754. The result can be negative, zero, or positive. Special cases include:

- If `dividend` or `divisor` is `NaN` (Not a Number), returns `NaN`.
- If `dividend` is positive or negative infinity, returns `NaN`.
- If `divisor` is zero, returns `NaN`.
- If `divisor` is positive or negative infinity and `dividend` is not infinity, returns `dividend`.

## Example 1: Basic Usage of C# `Math.IEEERemainder()`

This example demonstrates the fundamental use of the `Math.IEEERemainder()` method to calculate remainders according to IEEE 754:

```cs
using System;

public class BasicIEEERemainderExample
{
  public static void Main()
  {
    // Basic examples
    double result1 = Math.IEEERemainder(10, 3);
    double result2 = Math.IEEERemainder(17.8, 4.1);
    double result3 = Math.IEEERemainder(15, 4);
    double result4 = Math.IEEERemainder(-10, 3);

    // Display results
    Console.WriteLine($"Math.IEEERemainder(10, 3) = {result1}");
    Console.WriteLine($"Math.IEEERemainder(17.8, 4.1) = {result2}");
    Console.WriteLine($"Math.IEEERemainder(15, 4) = {result3}");
    Console.WriteLine($"Math.IEEERemainder(-10, 3) = {result4}");
  }
}
```

The output of this code is as follows:

```shell
Math.IEEERemainder(10, 3) = 1
Math.IEEERemainder(17.8, 4.1) = 1.4000000000000004
Math.IEEERemainder(15, 4) = -1
Math.IEEERemainder(-10, 3) = -1
```

## Example 2: IEEE Remainder vs. Standard Modulo

This example shows the difference between IEEE remainder and the standard modulo operator (`%`), highlighting how `Math.IEEERemainder()` can return negative results:

```cs
using System;

public class IEEERemainderVsModulo
{
  public static void Main()
  {
    double[] dividends = { 10.0, 15.0, 20.0, 25.0 };
    double divisor = 6.0;

    Console.WriteLine("Comparing IEEE Remainder vs. Standard Modulo:");
    Console.WriteLine("Dividend\tDivisor\t\tIEEE Remainder\t\tStandard Modulo");
    Console.WriteLine("------------------------------------------------------------------------");

    foreach (double dividend in dividends)
    {
      double ieeeResult = Math.IEEERemainder(dividend, divisor);
      double moduloResult = dividend % divisor;

      Console.WriteLine($"{dividend}\t\t{divisor}\t\t{ieeeResult}\t\t\t{moduloResult}");
    }
  }
}
```

The output of this code is as follows:

```shell
Comparing IEEE Remainder vs. Standard Modulo:
Dividend        Divisor         IEEE Remainder          Standard Modulo
------------------------------------------------------------------------
10              6               -2                      4
15              6               3                       3
20              6               2                       2
25              6               1                       1
```

## Codebyte Example: Angle Normalization Using `Math.IEEERemainder()`

This example demonstrates using `Math.IEEERemainder()` to normalize angles in a physics simulation or graphics application:

```codebyte/csharp
using System;

public class AngleNormalization
{
  public static void Main()
  {
    // Angles in degrees
    double[] angles = { 45.0, 180.0, 270.0, 390.0, -45.0, 720.0 };

    Console.WriteLine("Normalizing Angles to [-180, 180) Range:");
    Console.WriteLine("Original Angle\t\tNormalized Angle");
    Console.WriteLine("------------------------------------------");

    foreach (double angle in angles)
    {
      // Normalize to [-180, 180) range using IEEE remainder
      double normalizedAngle = Math.IEEERemainder(angle, 360.0);

      Console.WriteLine($"{angle} degrees\t\t{normalizedAngle} degrees");
    }

    Console.WriteLine("\nNote: IEEE remainder helps normalize angles symmetrically around zero.");
  }
}
```

## Frequently Asked Questions

### 1. What is the difference between `Math.IEEERemainder()` and the modulo operator (`%`)?

The `Math.IEEERemainder()` method follows IEEE 754 standard and can return negative values to give the remainder closest to zero. The modulo operator (`%`) always returns a value with the same sign as the dividend. For example, `Math.IEEERemainder(10, 6)` returns `-2`, while `10 % 6` returns `4`.

### 2. When should I use `Math.IEEERemainder()` instead of the `%` operator?

Use `Math.IEEERemainder()` when you need IEEE 754 compliant remainder calculations, such as in scientific computing, angle normalization, or when working with numerical algorithms that require symmetric remainders around zero.

### 3. What does `Math.IEEERemainder()` return when the divisor is zero?

When the divisor is zero, `Math.IEEERemainder()` returns `NaN` (Not a Number), following IEEE 754 standard behavior for undefined operations.

### 4. Can `Math.IEEERemainder()` work with integer types?

The method signature accepts `double` parameters, but integers will be implicitly converted to `double` when passed to the method. However, the return value will always be a `double`.
