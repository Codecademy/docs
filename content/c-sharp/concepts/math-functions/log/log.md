
---
Title: '.Log()'
Description: 'Returns the natural logarithm of a given number.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Methods'
  - 'Numbers'
  - 'Arithmetic'
  - 'Functions'
CatalogContent:
  - 'learn-c-sharp'
  - 'paths/computer-science'
---

The **`Math.Log()`** method returns the natural logarithm (base **e**) of a given number.

## Syntax

```pseudo
Math.Log(number);
Math.Log(number, base);
```

The `Math.Log()` method takes either one or two parameters:
1. `number`: A positive `double` type number.
2. `base` (optional): A positive `double` specifying the logarithm's base. If omitted, the base defaults to **e**.

The method returns the logarithm of the given `number` in the specified `base`, with the same type (`double`) as the input.

### Special cases:
- If `number <= 0`, the method returns `NaN`.
- If `number = 0`, the method returns `-Infinity`.
- If `number = PositiveInfinity`, the method returns `PositiveInfinity`.

## Example

The following example demonstrates the `Math.Log()` method to compute the natural logarithm and a logarithm with a specified base. Then, the `Console.WriteLine()` function prints the results to the console:

```cs
using System;

public class Example {
  public static void Main() {
    double number1 = 10.0;
    double number2 = 100.0;
    double baseValue = 10.0;

    double logNatural = Math.Log(number1); // Natural logarithm
    double logBase10 = Math.Log(number2, baseValue); // Logarithm with base 10

    Console.WriteLine("The natural logarithm of " + number1 + " is: " + logNatural);
    Console.WriteLine("The base-10 logarithm of " + number2 + " is: " + logBase10);
  }
}
```

The example will result in the following output:

```shell
The natural logarithm of 10 is: 2.302585092994046
The base-10 logarithm of 100 is: 2
```

## Codebyte Example

The following example is runnable and calculates the natural logarithm of a `double` type number:

```codebyte/csharp
using System;

public class Example {

  public static void Main() {
    double number = 299792458; // Speed of light

    Console.WriteLine("The natural logarithm of " + number + " is: " + Math.Log(number));
  }
}
```
