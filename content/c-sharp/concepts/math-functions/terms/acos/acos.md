---
Title: '.Acos()'
Description: 'Returns the inverse cosine of the argument.'
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

The **`Math.Acos()`** method returns the absolute value of the inverse cosine of the argument, measured in radians. In other words, it returns the positive angle whose cosine is the specified number.

## Syntax

```pseudo
Math.Acos(x);
```

The method takes one parameter `x` of the type `double`. It will return a positive value of type `double` except in the following cases:

- If `x` is less than -1, it will return `NaN` (not a number).
- If `x` is greater than 1, it will return `NaN`.
- If `x` is `NaN`, it will return `NaN`.

## Example

The following example prints the results of the `Math.Acos()` method for five different values.

```cs
using System;

namespace MyMathExample
{
    public class Example
    {
        public static void Main(string[] args)
        {
            double a = Math.Acos(0.5);
            double b = Math.Acos(1);
            double c = Math.Acos(-2);
            double d = Math.Acos(4);
            double e = Math.Acos(0);

            Console.WriteLine(a);
            Console.WriteLine(b);
            Console.WriteLine(c);
            Console.WriteLine(d);
            Console.WriteLine(e);
        }
    }
}
```

This results in the following output:

```shell
1.0471975511966
0
NaN
NaN
1.5707963267949
```

## Codebyte Example

The example below uses `Math.Acos()` to calculate the arc cosine of `x`. The result is stored in the `result` variable.

```codebyte/csharp
using System;

class Program
{
    static void Main()
    {
        double x = -1.0;
        double result = Math.Acos(x);

        Console.WriteLine($"The arc cosine of {x} is {result} radians.");
    }
}
```
