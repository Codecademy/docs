---
Title: '.Tanh()'
Description: 'Computes the hyperbolic tangent of a given angle in radians.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Arithmetic'
  - 'Numbers'
  - 'Classes'
CatalogContent:
  - 'learn-c-sharp'
  - 'paths/computer-science'
---

The **`Math.Tanh()`** method returns the hyperbolic tangent of a given angle in radians.

## Syntax

```pseudo
Math.Tahn(x);
```

This method accepts a single parameter,`x`, which is the angle in radians. It returns the hyperbolic tangent value of `x`.

## Example

The example below declares two double values, `x` and `y`, and then calculates the hyperbolic tangent of `x` using the `Math.Tanh()` function. The resulting value is stored in `y`. Finally, the value of `y` is printed to the console.

```cs
using System;

public class Program
{
  public static void Main()
  {
    double x = 2;
    double y = Math.Tanh(x);

    Console.WriteLine(y);
    // Output: 0.9640275800758169
  }
```

## Codebyte Example

This example is runnable and demonstrates the `Math.tanh()` function:

```codebyte/csharp
using System;
public class program
{
  public static void Main(string[] args)
  {
    double num1 = 60.0, num2 = 0.0, num3 = 1.0;
    double tanhvalue = Math.Tanh(num1);
    Console.WriteLine("The tanh of num1 = " + tanhvalue);

    tanhvalue = Math.Tanh(num2);
    Console.WriteLine("The tanh of num2 = " + tanhvalue);

    tanhvalue = Math.Tanh(num3);
    Console.WriteLine("The tanh of num3 = " + tanhvalue);
    }
  }
```
