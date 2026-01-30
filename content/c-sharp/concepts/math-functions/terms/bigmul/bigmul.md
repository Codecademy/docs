---
Title: '.BigMul()'
Description: 'Multiplies two integer values and returns the full extended result to prevent overflow.'
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

The **`Math.BigMul()`** method multiplies two integer values and returns the full extended result to avoid overflow. It ensures that the product fits within a larger data type when the operands are 32-bit or 64-bit integers.

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

> **Note:** The `Int128` and `UInt128` types were introduced in .NET 7. In earlier versions, `Math.BigMul(long, long, out long high)` can be used to obtain the high and low 64-bit parts of the product.

## Example: Basic Usage

In this example, the full product of two `int` values is calculated without overflow:

```cs
using System;

public class Example {
  public static void Main() {
    // Integer values (32-bit)
    int intX = 100000;
    int intY = 500000;

    // Compute the product safely
    long intResult = Math.BigMul(intX, intY);

    Console.WriteLine($"Math.BigMul({intX}, {intY}) = {intResult}");
  }
}
```

This example outputs the following:

```shell
Math.BigMul(100000, 500000) = 50000000000
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
