---
Title: '.Asin()'
Description: 'Returns an angle in radians whose sine is a specified number.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Libraries'
  - 'Arithmetic'
  - 'Functions'
CatalogContent:
  - 'learn-c-sharp'
  - 'paths/computer-science'
---

The **Math.Asin()** method computes an angle in radians whose sine is a specified number. In Math, this is known as the inverse sine function.

## Syntax

```pseudo
Math.Asin(value);
```

`value` is the input value of type double, which must be in the range -1 <= `value` <= 1.

Returns an angle measured in radians, of type `double`, whose sine is `value`. If an invalid value is passed to the function, or no value is passed at all, `NaN` is returned.

## Example

The following example prints the results of the `Math.Asin()` method for three different values:

```cs
using System;

public class Example
{
  static void Main()
  {
    double a = Math.Asin(0.5);
    double b = Math.Asin(1);
    double c = Math.Asin(-2);

    Console.WriteLine(a);
    Console.WriteLine(b);
    Console.WriteLine(c);
  }
}
```

This results in the following output:

```shell
0.523598775598299
1.5707963267949
NaN
```

## Codebyte Example

```codebyte/csharp
using System;

class CodecademyDemo
{
    static void Main()
    {
        Double result = Math.Asin(0);
        System.Console.WriteLine("Asin(0) = "+ result + " radians");

        Double result1 = Math.Asin(1);
        System.Console.WriteLine("Asin(1) = "+ result1 + " radians");

        Double result2 = Math.Asin(-1);
        System.Console.WriteLine("Asin(-1) = "+ result2 + " radians");

        Double result3 = Math.Asin(2);
        System.Console.WriteLine("Asin(2) = "+ result3);
    }
}
```
