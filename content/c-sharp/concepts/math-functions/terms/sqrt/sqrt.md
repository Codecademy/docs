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

The `.Sqrt()` function will can take on one parameter at a time. As shown above _x_ is the value we want to find the sqaure root of.

## Example

The following example will implement how `Math.Sqrt()` will take its given value in the function and return its square root by print it with the `Console.WriteLine()` method.

```cs
using System;

namespace MySqaureRoot
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

## Codebyte Example

The following example is runnable and will return each given numbers square root.

```codebyte/csharp
using System;

namespace MySqaureRoot
{
    public class Example
    {
        public static void Main(string[] args)
        {
            double a = Math.Sqrt(256);
            double b = Math.Sqrt(-256);
            double c = Math.Sqrt(500);
            double d = Math.Sqrt(0.144);

            Console.WriteLine(a);
            Console.WriteLine(b);
            Console.WriteLine(c);
            Console.WriteLine(d);
        }
    }
}
```