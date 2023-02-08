---
Title: '.Sqrt()'
Description: 'Returns the square root of a number.'
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

The **`Math.Sqrt()`** method returns the square root of the number given.

## Syntax

```pseudo
public static double Sqrt(double x);
```

The method takes only one parameter, the variable `x`, of type `double`. The function will return a positive value of type `double` unless the value passed is one of the following:
-If `x` is negative, the function will return `NaN` (not a number).
-If `x` is `NaN`, the function will return `NaN`.
-If `x` is `PositiveInfinity`, the function will return `PositiveInfinity`.

## Example

The following example will implement how `Math.Sqrt()` will take its given value in the function and return its square root by print it with the `Console.WriteLine()` method.

```cs
using System;

namespace MySquareRoot
    {
        public class Example
        {
            public static void Main(string[] args)
            {
                double x = Math.Sqrt(144);

                Console.WriteLine(x);
            }    
        }
    }
```

This example results in the following output:

```shell
12
```
