---
Title: '.Exp()'
Description: 'Returns the result of raising e to the power of a specific number.'
Subjects:
  - 'Computer Science'
  - 'Code Foundations'
Tags:
  - 'Arithmetic'
  - 'Numbers'
  - 'Methods'
CatalogContent:
  - 'learn-c-sharp'
  - 'paths/computer-science'
---

The **`Math.Exp()`** method returns the value of raising `e` to the power of a given number.

`e` stands for Euler's number, an irrational number, with an approximate constant value of 2.71828. It provides a constant base to the natural logarithm or log and can be understood as a limit of a given progression.

![e Formula](https://raw.githubusercontent.com/Codecademy/docs/main/media/e-formula.jpg)

Consequently, the `Math.Exp()` method is the inverse of the `Math.Log()` method.

## Syntax

```pseudo
Math.Exp(double n);
```

The method takes only one parameter; the variable `n` (number) of type `double`. The function will return a positive value of type `double` unless the value passed is one of the following:

- If `n` is `0`, the function will return `1`.
- If `n` is `PositiveInfinity`, the function will return `PositiveInfinity`.
- If `n` is `NegativeInfinity`, the function will return `0`.
- If `n` is `NaN`, the function will return `NaN`.

## Example

The following example applies the `Math.Exp()` method for six different values. The return values are printed with the `Console.WriteLine()` method.

```cs
using System;

namespace MathExpMethod
{
  public class Example
  {
    public static void Main(string[] args)
    {
      double firstCase = Math.Exp(1);
      double secondCase = Math.Exp(-1);
      double thirdCase = Math.Exp(0);
      double fourthCase = Math.Exp(double.PositiveInfinity);
      double fifthCase = Math.Exp(double.NegativeInfinity);
      double sixthCase = Math.Exp(double.NaN);

      Console.WriteLine(firstCase);
      Console.WriteLine(secondCase);
      Console.WriteLine(thirdCase);
      Console.WriteLine(fourthCase);
      Console.WriteLine(fifthCase);
      Console.WriteLine(sixthCase);
    }
  }
}
```

This example results in the following output:

```shell
2.71828182845905
0.367879441171442
1
Infinity
0
NaN
```

## Codebyte Example

The following example is runnable and uses the `Math.Exp()` method to return the value of raising `e` to the power of the given `double` type `number`:

```codebyte/csharp
using System;

public class Example {
  public static void Main() {
    double number = 0;
    double exponential = Math.Exp(number);

    Console.WriteLine("The value of e raised to the power of " + number + " is " + exponential);
  }
}
```
