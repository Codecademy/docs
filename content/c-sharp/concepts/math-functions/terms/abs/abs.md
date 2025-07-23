---
Title: 'Abs()'
Description: 'Returns the absolute value of a specified number.'
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

The C# **`Math.Abs()`** method is a static method that returns the absolute value of a specified number. The absolute value of a number is its distance from zero on the number line, always expressed as a positive value or zero.

## Syntax of C# `Math.Abs()`

```pseudo
Math.Abs(number);
```

**Parameters:**

- `number`: The numeric value for which to calculate the absolute value. This can be of type `decimal`, `double`, `float`, `int`, `long`, `sbyte`, `short`, or `IntPtr`.

**Return value:**

Returns the absolute value of the specified number with the same data type as the input parameter. Special cases include:

- If the input is `NaN` (Not a Number), returns `NaN`
- If the input is negative infinity, returns positive infinity
- If the input is positive infinity, returns positive infinity

## Example 1: Basic Usage of `Math.Abs()` in C#

This example demonstrates the fundamental use of the `Math.Abs()` method with different numeric types to show how it returns the non-negative equivalent of the number:

```cs
using System;

public class BasicAbsExample
{
  public static void Main()
  {
    // Integer examples
    int negativeInt = -42;
    int positiveInt = 15;

    // Decimal examples
    decimal negativeDecimal = -3.14m;
    decimal positiveDecimal = 2.71m;

    // Calculate absolute values
    int absInt1 = Math.Abs(negativeInt);
    int absInt2 = Math.Abs(positiveInt);
    decimal absDecimal1 = Math.Abs(negativeDecimal);
    decimal absDecimal2 = Math.Abs(positiveDecimal);

    // Display results
    Console.WriteLine($"Math.Abs({negativeInt}) = {absInt1}");
    Console.WriteLine($"Math.Abs({positiveInt}) = {absInt2}");
    Console.WriteLine($"Math.Abs({negativeDecimal}) = {absDecimal1}");
    Console.WriteLine($"Math.Abs({positiveDecimal}) = {absDecimal2}");
  }
}
```

The output of this code is as follows:

```shell
Math.Abs(-42) = 42
Math.Abs(15) = 15
Math.Abs(-3.14) = 3.14
Math.Abs(2.71) = 2.71
```

## Example 2: Calculating Temperature Difference using `Math.Abs()`

This example shows how `Math.Abs()` can be used in a real-world scenario to calculate the temperature difference between two values, which is always expressed as a positive number:

```cs
using System;

public class TemperatureDifference
{
  public static void Main()
  {
    // Temperature readings in Celsius
    double morningTemp = -5.2;
    double afternoonTemp = 18.7;
    double eveningTemp = 12.3;

    // Calculate temperature differences
    double morningAfternoonDiff = Math.Abs(afternoonTemp - morningTemp);
    double afternoonEveningDiff = Math.Abs(eveningTemp - afternoonTemp);
    double morningEveningDiff = Math.Abs(eveningTemp - morningTemp);

    // Display results
    Console.WriteLine("Temperature Analysis:");
    Console.WriteLine($"Morning: {morningTemp}C");
    Console.WriteLine($"Afternoon: {afternoonTemp}C");
    Console.WriteLine($"Evening: {eveningTemp}C");
    Console.WriteLine();
    Console.WriteLine("Temperature Differences:");
    Console.WriteLine($"Morning to Afternoon: {morningAfternoonDiff}C");
    Console.WriteLine($"Afternoon to Evening: {afternoonEveningDiff}C");
    Console.WriteLine($"Morning to Evening: {morningEveningDiff}C");
  }
}
```

The output of this code is as follows:

```shell
Temperature Analysis:
Morning: -5.2°C
Afternoon: 18.7°C
Evening: 12.3°C

Temperature Differences:
Morning to Afternoon: 23.9°C
Afternoon to Evening: 6.4°C
Morning to Evening: 17.5°C
```

## Codebyte Example: Financial Loss Calculator Using `Math.Abs()`

This example demonstrates using `Math.Abs()` in financial applications to calculate the magnitude of profit or loss, regardless of whether the value is positive or negative:

```codebyte/csharp
using System;

public class FinancialLossCalculator
{
  public static void Main()
  {
    // Investment performance data
    decimal[] monthlyReturns = { 150.75m, -89.50m, 245.30m, -175.25m, 95.60m };
    string[] months = { "January", "February", "March", "April", "May" };

    decimal totalAbsoluteChange = 0;

    Console.WriteLine("Monthly Investment Performance:");
    Console.WriteLine("Month\t\tReturn\t\tAbsolute Change");
    Console.WriteLine("-----------------------------------------------");

    for (int i = 0; i < monthlyReturns.Length; i++)
    {
      decimal absoluteChange = Math.Abs(monthlyReturns[i]);
      totalAbsoluteChange += absoluteChange;

      string returnType = monthlyReturns[i] >= 0 ? "Profit" : "Loss";
      Console.WriteLine($"{months[i]}\t\t${monthlyReturns[i]:F2}\t\t${absoluteChange:F2} ({returnType})");
    }

    Console.WriteLine("-----------------------------------------------");
    Console.WriteLine($"Total Absolute Change: ${totalAbsoluteChange:F2}");
    Console.WriteLine($"Average Absolute Change: ${totalAbsoluteChange / monthlyReturns.Length:F2}");
  }
}
```

## Frequently Asked Questions

### 1. What happens if I pass a positive number to `Math.Abs()`?

The method returns the same positive number unchanged. For example, `Math.Abs(5)` returns 5.

### 2. Can `Math.Abs()` handle floating-point numbers?

Yes, `Math.Abs()` supports all numeric types including `float`, `double`, and `decimal`. It preserves the data type of the input.

### 3. What does `Math.Abs()` return for zero?

`Math.Abs(0)` returns 0, as the absolute value of zero is zero.

### 4. Can `Math.Abs()` cause overflow exceptions?

Yes, with certain integer types like `Int32.MinValue`, calling `Math.Abs()` can throw an `OverflowException` because the absolute value exceeds the maximum positive value for that type.
