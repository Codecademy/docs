---
Title: '.DivRem()'
Description: 'Calculates the quotient of two numbers and returns the remainder in an output parameter.'
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

The **`.DivRem()`** method calculates the quotient of two numbers and returns the remainder in an output parameter. This method is useful when both the quotient and remainder of a division operation are needed.

## Syntax

```pseudo
Math.DivRem(dividend, divisor, out remainder)
```

- `dividend`: The number to be divided (type `int` or `long`).
- `divisor`: The number to divide by (type `int` or `long`).
- `remainder`: An output parameter that receives the remainder (type `int` or `long`).

The method returns the quotient as an `int` or `long` depending on the parameter types used.

**Note:** This method throws a `DivideByZeroException` if the `divisor` is zero.

## Example

The following example demonstrates using the `.DivRem()` method to calculate both quotient and remainder:

```cs
using System;

public class Example
{
  public static void Main()
  {
    int dividend = 30;
    int divisor = 7;
    int remainder;

    int quotient = Math.DivRem(dividend, divisor, out remainder);

    Console.WriteLine($"Dividend: {dividend}");
    Console.WriteLine($"Divisor: {divisor}");
    Console.WriteLine($"Quotient: {quotient}");
    Console.WriteLine($"Remainder: {remainder}");
  }
}
```

The example above produces the following output:

```shell
Dividend: 30
Divisor: 7
Quotient: 4
Remainder: 2
```

## Codebyte Example

The following runnable example shows how `.DivRem()` can be used with different numbers:

```codebyte/csharp
using System;

public class Program
{
  public static void Main()
  {
    // Example with positive numbers
    int remainder1;
    int quotient1 = Math.DivRem(100, 13, out remainder1);
    Console.WriteLine($"100 divided by 13 = {quotient1} remainder {remainder1}");

    // Example with larger numbers using long
    long remainder2;
    long quotient2 = Math.DivRem(1000000L, 777L, out remainder2);
    Console.WriteLine($"1000000 divided by 777 = {quotient2} remainder {remainder2}");

    // Example with negative dividend
    int remainder3;
    int quotient3 = Math.DivRem(-25, 4, out remainder3);
    Console.WriteLine($"-25 divided by 4 = {quotient3} remainder {remainder3}");
  }
}
```
