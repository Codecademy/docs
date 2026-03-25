---
Title: 'Log10()'
Description: 'Returns the base-10 logarithm of a specified number.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Arithmetic'
  - 'Functions'
  - 'Math'
  - 'Methods'
CatalogContent:
  - 'learn-c-sharp'
  - 'paths/computer-science'
---

In C#, the **`Math.Log10()`** [method](https://www.codecademy.com/resources/docs/c-sharp/methods) calculates the base-10 logarithm of a given number. This logarithm represents the power to which 10 must be raised to obtain the input value. The method is defined in the `System` namespace.

## Syntax

```pseudo
Math.Log10(number);
```

**Parameters:**

- `number`: A `double` value whose base-10 logarithm is computed.

**Return value:**

Returns a `double` that represents the base-10 logarithm of `number`.

Return values for different inputs:

- If the input is a positive number, the method returns its base-10 logarithm.
- If the input is `0`, the method returns `NegativeInfinity`.
- If the input is a negative number, the method returns `NaN`.
- If the input is `NaN`, the method returns `NaN`.
- If the input is `PositiveInfinity`, the method returns `PositiveInfinity`.
- If the input is `NegativeInfinity`, the method returns `NaN`.

## Example

The example below demonstrates the return values of `Math.Log10()` for different inputs:

```cs
using System;

class Geeks {
  public static void Main(String[] args) {
    double a = 4.55;
    double b = 0;
    double c = -2.45;
    double nan = Double.NaN;
    double positiveInfinity = Double.PositiveInfinity;
    double negativeInfinity = Double.NegativeInfinity;

    Console.WriteLine(Math.Log10(a));
    Console.WriteLine(Math.Log10(b));
    Console.WriteLine(Math.Log10(c));
    Console.WriteLine(Math.Log10(nan));
    Console.WriteLine(Math.Log10(positiveInfinity));
    Console.WriteLine(Math.Log10(negativeInfinity));
  }
}
```

The output of the code is:

```shell
0.658011396657112
-Infinity
NaN
NaN
Infinity
NaN
```

## Codebyte Example

This codebyte example calculates the base-10 logarithm of a given number and prints the result:

```codebyte/csharp
using System;

class Program {
  static void Main() {
    double x = 10.0;
    double result = Math.Log10(x);

    Console.WriteLine($"The base-10 logarithm of {x} is {result}");
  }
}
```
