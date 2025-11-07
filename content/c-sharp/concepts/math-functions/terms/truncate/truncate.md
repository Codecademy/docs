---
Title: '.Truncate()'
Description: 'Returns the integer part of a specified number by removing any fractional digits.'
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

The **`Math.Truncate()`** method in C# returns the integer part of a specified number by removing any fractional digits. It works with both `decimal` and `double` types.

## Syntax

```pseudo
Math.Truncate(double d)
```

Or, alternatively:

```pseudo
Math.Truncate(decimal d)
```

**Parameters:**

- `d` (`double` | `decimal`): The number whose fractional part is to be discarded.

**Return value:**

- Returns a `double` if a `double` is passed and a `decimal` if a `decimal` is passed.
- Special values like `NaN`, `PositiveInfinity`, and `NegativeInfinity` are returned as-is.

> **Note:** `Math.Truncate()` always rounds towards zero. This means `Math.Truncate(2.8)` is 2, and `Math.Truncate(-2.8)` is -2. This is different from `Math.Floor()`, which always rounds down (e.g., `Math.Floor(-2.8)` would be -3).

## Example 1: Using `double`

In this example, a double value is truncated to its integer part:

```cs
using System;

public class Example {
  public static void Main() {
    double positiveValue = 12.9;
    double negativeValue = -4.7;

    Console.WriteLine("Truncating " + positiveValue + " gives: " + Math.Truncate(positiveValue));
    Console.WriteLine("Truncating " + negativeValue + " gives: " + Math.Truncate(negativeValue));
  }
}
```

This example results in the following output:

```shell
Truncating 12.9 gives: 12
Truncating -4.7 gives: -4
```

## Example 2: Using `decimal`

In this example, a `decimal` value is truncated without using the `m` suffix by explicitly casting a `double` to `decimal`:

```cs
using System;

public class Example {
  public static void Main() {
    decimal decValue = (decimal)45.678;
    decimal negDecValue = (decimal)-23.456;

    Console.WriteLine("Truncating decimal " + decValue + " gives: " + Math.Truncate(decValue));
    Console.WriteLine("Truncating decimal " + negDecValue + " gives: " + Math.Truncate(negDecValue));
  }
}
```

The output of this code is:

```shell
Truncating decimal 45.678 gives: 45
Truncating decimal -23.456 gives: -23
```

## Codebyte Example

In this example, both `double` and `decimal` values are truncated in a small array of numbers:

```codebyte/csharp
using System;

public class Example {
  public static void Main() {
    double[] doubles = { 3.1415, -7.89, 0.99 };
    decimal[] decimals = { (decimal)12.345, (decimal)-6.78 };

    Console.WriteLine("Double values truncated:");
    foreach (double d in doubles) {
      Console.WriteLine(Math.Truncate(d));
    }

    Console.WriteLine("\nDecimal values truncated:");
    foreach (decimal d in decimals) {
      Console.WriteLine(Math.Truncate(d));
    }
  }
}
```
