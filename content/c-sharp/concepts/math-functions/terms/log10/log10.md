---
Title: 'log10()'
Description: 'Returns the base 10 logarithm of a specified number'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Arithmetic'
  - 'Functions'
  - 'Math'
  - 'Methods'
CatalogContent:
  - 'learn-c-sharp'
  - 'paths/computer-science'
---

In C#, the **Log10()** method is a Math method used to return the base 10 logarithm of a specified number.
The base 10 logarithm (or decimal logarithm) is the continuous function that transforms a product into a sum and whose value is 1 for x = 10.

## Syntax of C# `Math.Log10()

```pseudo
Math.Log10(number);
```

**Parameters**

- `number`: the specified number whose logarithm to be calculated and its type is System.Double.

**Return Value**

Returns the logarithm of `number`(base 10 log of `number`) and its type is System.Double. 
Note: Parameter `number` is always specified as a base 10 number. The return value is depend on the argument passed. 
Below are some cases:
- If the argument is positive then method will return the natural logarithm or log10(number).
- If the argument is zero, then the result is NegativeInfinity.
- If the argument is Negative(less than zero) or equal to NaN, then the result is NaN.
- If the argument is PositiveInfinity, then the result is PositiveInfinity.
- If the argument is NegativeInfinity, then the result is NaN.

## Example

The following example shows Log10() returns for different possible values:

```cs
using System;

class Geeks {

    // Main Method
    public static void Main(String[] args)
    {

        // double values whose logarithm 
        // to be calculated
        double a = 4.55;
        double b = 0;
        double c = -2.45;
        double nan = Double.NaN;
        double positiveInfinity = Double.PositiveInfinity;     
        double negativeInfinity = Double.NegativeInfinity;

        // Input is positive number so output
        // will be logarithm of number
        Console.WriteLine(Math.Log10(a));

        // positive zero as argument, so output 
        // will be -Infinity
        Console.WriteLine(Math.Log10(b));

        // Input is negative number so output
        // will be NaN
        Console.WriteLine(Math.Log10(c));

        // Input is NaN so output
        // will be NaN
        Console.WriteLine(Math.Log10(nan));

        // Input is PositiveInfinity so output
        // will be Infinity
        Console.WriteLine(Math.Log10(positiveInfinity));

        // Input is NegativeInfinity so output
        // will be NaN
        Console.WriteLine(Math.Log10(negativeInfinity));
    }
}
```

Output of the code:

```shell
0.658011396657112
-Infinity
NaN
NaN
Infinity
NaN
```

## Codebyte Example (if applicable)

The following example uses `Math.Log10()` to calculate base 10 logarithm of `x`. The result is stored in the `result` variable.

```codebyte/csharp
using System;

class Program
{
    static void Main()
    {
        double x = 10.0;
        double result = Math.Log10(x);

        Console.WriteLine($"The base 10 logarithm of {x} is {result}");
    }
}
```