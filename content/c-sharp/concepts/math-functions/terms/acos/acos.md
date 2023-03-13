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

The **`Math.Acos()`** method returns the absolute value of the inverse cosine of the argument measured in radians. In other words: It returns the positive angle whose cosine is the specified number.

## Syntax

```pseudo
Math.Acos(x);
```

The method takes only one parameter, the variable `x`, of type `double`. The function will return a positive value of type `double` unless the value passed is one of the following:
-If `x` is less than -1, the function will return `NaN` (not a number).
-If `x` is greater than 1, the function will return `NaN`.
-If `x` is `NaN`, the function will return `NaN`.

## Example

The following example demonstrates the `Math.Acos()` method for five different values. The return values are printed with the `Console.WriteLine()` method.

```cs
using System;

namespace MySquareRoot
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

This example results in the following output:

```shell
1.0471975511966
0
NaN
NaN
1.5707963267949
```
