---
Title: '.Cbrt()'
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

The **`Math.Cbrt()`** method returns the cube root of the number given.

## Syntax
```pseudo
Math.Cbrt(x);
```

The method takes only one parameter, the variable `x`, of type `double`. The function will return a value of type `double` unless the value passed is one of the following:

- If `x` is `NaN`, the function will return `NaN`.
- If `x` is `PositiveInfinity`, the function will return `PositiveInfinity`.
- If `x` is `NegativeInfinity`, the function will return `NegativeInfinity`.
- If `x` is negative, the function will return the real cube root (a negative value).

## Example

The following example demonstrates the `Math.Cbrt()` method. Four different values are passed to the method, and the return values are printed with the `Console.WriteLine()` method.
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
3
-2
10
0.5
```

## Codebyte Example

The following example is runnable and uses the `Math.Cbrt()` method to return a `double` type value of the cube root of `64`:
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