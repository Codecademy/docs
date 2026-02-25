---
Title: '.IEEERemainder()'
Description: 'Returns the remainder of dividing two specified numbers as defined by the IEEE 754 standard.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Arithmetic'
  - 'Functions'
  - 'Methods'
  - 'Numbers'
CatalogContent:
  - 'learn-c-sharp'
  - 'paths/computer-science'
---

The **`Math.IEEERemainder()`** method returns the remainder resulting from the division of one specified number by another, as defined by the IEEE 754 standard. This differs from the modulo operator (`%`) in how it handles the remainder calculation.

## Syntax

```pseudo
Math.IEEERemainder(x, y);
```

**Parameters:**

- `x`: The dividend (type `double`).
- `y`: The divisor (type `double`).

**Return value:**

Returns a `double` value equal to `x - (y * n)`, where `n` is the closest integer to `x / y`. If `x / y` is exactly halfway between two integers, `n` is chosen to be the even integer. Special cases include:

- If the result is zero, it has the same sign as `x`
- If `y` is zero, returns `NaN`
- If `x` is infinity, returns `NaN`
- If `x` is `NaN`, returns `NaN`
- If `y` is infinity, returns `x`

> **Note:** The IEEE remainder differs from the standard modulo operation. For example, `5 % 3` equals `2` in C#, but `Math.IEEERemainder(5, 3)` equals `-1` because `5 / 3` rounds to `2` (nearest integer), and `5 - (3 * 2) = -1`.

## Example

The following example demonstrates using the `Math.IEEERemainder()` method and shows how it differs from the modulo operator:

```cs
using System;

public class IEEERemainderExample
{
  public static void Main()
  {
    double dividend = 5.0;
    double divisor = 3.0;

    double ieeeRemainder = Math.IEEERemainder(dividend, divisor);
    double moduloRemainder = dividend % divisor;

    Console.WriteLine($"Dividend: {dividend}");
    Console.WriteLine($"Divisor: {divisor}");
    Console.WriteLine($"IEEE Remainder: {ieeeRemainder}");
    Console.WriteLine($"Modulo Remainder: {moduloRemainder}");
  }
}
```

The example above produces the following output:

```shell
Dividend: 5
Divisor: 3
IEEE Remainder: -1
Modulo Remainder: 2
```

## Codebyte Example

The following runnable example demonstrates how `Math.IEEERemainder()` behaves differently from the modulo operator in various scenarios:

```codebyte/csharp
using System;

public class Program
{
  public static void Main()
  {
    // Compare IEEE remainder with modulo operator
    double[] dividends = { 5.0, 7.0, 14.0, -5.0 };
    double[] divisors = { 3.0, 4.0, 4.0, 3.0 };

    Console.WriteLine("Dividend\tDivisor\t\tIEEE Rem\tModulo");
    Console.WriteLine("--------------------------------------------------------");

    for (int i = 0; i < dividends.Length; i++)
      {
        double ieee = Math.IEEERemainder(dividends[i], divisors[i]);
        double modulo = dividends[i] % divisors[i];
        Console.WriteLine($"{dividends[i]}\t\t{divisors[i]}\t\t{ieee}\t\t{modulo}");
      }
  }
}
```
