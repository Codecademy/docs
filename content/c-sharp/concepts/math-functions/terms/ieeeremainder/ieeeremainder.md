---
Title: '.IEEERemainder()'
Description: 'Returns the remainder resulting from the division of a specified number by another specified number.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Arithmetic'
  - 'Methods'
  - 'Numbers'
  - 'Math'
CatalogContent:
  - 'learn-c-sharp'
  - 'paths/computer-science'
---

The **`.IEEERemainder()`** method returns the remainder resulting from the division of a specified number by another specified number. This method follows the IEEE 754 standard for floating-point arithmetic, which differs from the standard modulo operation.

## Syntax

```pseudo
Math.IEEERemainder(x, y);
```

**Parameters:**

- `x`: The dividend (type `double`).
- `y`: The divisor (type `double`).

**Return value:**

Returns a `double` value equal to `x - (y * n)`, where `n` is the integer nearest to `x / y`. If `x / y` is exactly halfway between two integers, the even integer is returned. Special cases include:

- If the remainder is zero, returns positive zero if `x` is positive, or negative zero if `x` is negative.
- If `y` is zero, returns `NaN` (Not a Number).
- If `x` is infinite, returns `NaN`.
- If `y` is infinite, returns `x`.

> **Note:** The IEEE 754 remainder differs from the modulo operator (`%`). The modulo operator returns a remainder with the same sign as the dividend, while `IEEERemainder()` returns a value based on the formula `x - (y * n)` where `n` is the nearest integer to `x / y`. The result is always within the range of `-|y|/2` to `|y|/2`, and its sign depends on the calculation, not simply on the divisor's sign.

## Example

The following example demonstrates using the `.IEEERemainder()` method to calculate remainders:

```cs
using System;

public class Example
{
    public static void Main()
    {
        double dividend = 10.0;
        double divisor = 3.0;

        double result = Math.IEEERemainder(dividend, divisor);

        Console.WriteLine($"IEEERemainder({dividend}, {divisor}) = {result}");

        // Compare with modulo operator
        double moduloResult = dividend % divisor;
        Console.WriteLine($"{dividend} % {divisor} = {moduloResult}");
    }
}
```

The example above produces the following output:

```shell
IEEERemainder(10, 3) = 1
10 % 3 = 1
```

## Codebyte Example

The following runnable example shows how `.IEEERemainder()` works with different values and compares it to the standard modulo operator:

```codebyte/csharp
using System;

public class Program
{
    public static void Main()
    {
        // Example showing difference between IEEERemainder and modulo
        double x1 = 7.0;
        double y1 = 3.0;
        Console.WriteLine($"IEEERemainder({x1}, {y1}) = {Math.IEEERemainder(x1, y1)}");
        Console.WriteLine($"{x1} % {y1} = {x1 % y1}");
        Console.WriteLine();

        // Example with negative dividend
        double x2 = -16.3;
        double y2 = 4.1;
        Console.WriteLine($"IEEERemainder({x2}, {y2}) = {Math.IEEERemainder(x2, y2)}");
        Console.WriteLine($"{x2} % {y2} = {x2 % y2}");
        Console.WriteLine();

        // Example where IEEERemainder differs more from modulo
        double x3 = 9.0;
        double y3 = 5.0;
        Console.WriteLine($"IEEERemainder({x3}, {y3}) = {Math.IEEERemainder(x3, y3)}");
        Console.WriteLine($"{x3} % {y3} = {x3 % y3}");
    }
}
```
