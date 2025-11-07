---
Title: '.BigMul()'
Description: 'Returns the full product of two integers, preventing overflow.'
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

The **`Math.BigMul()`** method multiplies two integers of the same type and returns the full product as a larger data type to prevent overflow.

## Syntax

```pseudo
Math.BigMul(x, y);
```

**Parameters:**

- `x`, `y`: The integers to be multiplied. These can be of type `int`, `uint`, `long`, or `ulong`.

**Return value:**

Returns the full product of `x` and `y` as a single 64-bit or 128-bit integer, depending on the input type:

- If `x` and `y` are of type `int` or `uint`, the return type is `long` and `ulong`, respectively.
- If `x` and `y` are of type `long` or `ulong`, the return type is `Int128` and `UInt128`, respectively.

> **Note:** The `Int128` and `UInt128` types are available starting in .NET 9. For earlier versions, use the three-parameter overload of `Math.BigMul()` to split the result into high and low 64-bit parts.

## Example: Basic Usage

The following example computes the full product of two `int` values and two `long` values:

```cs
using System;

public class Example {
  public static void Main (string[] args) {
    // Integer values (32-bit)
    int intX = 100000;
    int intY = 500000;

    // Long values (64-bit)
    long longX = -3000000000;
    long longY = 4000000000;

    // Compute the products
    long intResult = Math.BigMul(intX, intY);
    Int128 longResult = Math.BigMul(longX, longY);

    // Display results
    Console.WriteLine($"Math.BigMul({intX}, {intY}) = {intResult}");
    Console.WriteLine($"Math.BigMul({longX}, {longY}) = {longResult}");
  }
}
```

This example outputs the following:

```shell
Math.BigMul(100000, 500000) = 50000000000
Math.BigMul(-3000000000, 4000000000) = -12000000000000000000
```

## Codebyte Example

The following example demonstrates the use of `Math.BigMul()` to calculate the product of two integers that would normally cause an overflow with standard multiplication:

```codebyte/csharp
using System;

public class Example {
  public static void Main (string[] args) {
    int x = 200000;
    int y = 300000;

    // Normal multiplication (overflow)
    int normalResult = x * y;

    // Math.BigMul() (no overflow)
    long bigMulResult = Math.BigMul(x, y);

    Console.WriteLine($"Normal multiplication (overflow): {normalResult}");
    Console.WriteLine($"BigMul (no overflow): {bigMulResult}");
  }
}
```
