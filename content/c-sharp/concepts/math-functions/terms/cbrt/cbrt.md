---
Title: 'Cbrt()'
Description: 'Returns the cube root of the given number.'
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

The **`Math.Cbrt()`** method in C# returns the cube root of a given number. It handles positive, negative, and special floating-point values such as `NaN` and infinities.

## Syntax

```pseudo
Math.Cbrt(double x)
```

**Parameters:**

- `x` (double): The number whose cube root is to be calculated.

**Return value:**

The function will return a value of type `double` unless the value passed is one of the following:

- If `x` is `NaN`, the function will return `NaN`.
- If `x` is `PositiveInfinity`, the function will return `PositiveInfinity`.
- If `x` is `NegativeInfinity`, the function will return `NegativeInfinity`.
- If `x` is negative, returns the real cube root (a negative number).

## Example

In this example, different numeric values are passed to `Math.Cbrt()` to calculate their cube roots:

```cs
using System;

namespace MyCubeRoot {
  public class Example {
    public static void Main(string[] args) {
      double a = Math.Cbrt(27);
      double b = Math.Cbrt(-8);
      double c = Math.Cbrt(1000);
      double d = Math.Cbrt(0.125);

      Console.WriteLine(a);
      Console.WriteLine(b);
      Console.WriteLine(c);
      Console.WriteLine(d);
    }
  }
}
```

This example results in the following output:

```shell
3.0000000000000004
-2
10
0.49999999999999994
```

## Codebyte Example

In this example, the cube root of 64 is calculated using `Math.Cbrt()` and printed to the console:

```codebyte/csharp
using System;

public class Example {
  public static void Main() {
    double number = 64;
    double cubeRoot = Math.Cbrt(number);

    Console.WriteLine("The cube root of " + number + " is " + cubeRoot);
  }
}
```
