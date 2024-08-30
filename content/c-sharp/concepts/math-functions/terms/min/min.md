---
Title: '.Min()'
Description: 'Returns the smaller of two specified numbers.'
Subjects:
  - 'Computer Science'
  - 'Code Foundations'
Tags:
  - 'Methods'
  - 'Numbers'
  - 'Arithmetic'
CatalogContent:
  - 'learn-c-sharp'
  - 'paths/computer-science'
---

The **`Math.Min()`** method returns the lesser of two specified numbers.

## Syntax

```pseudo
Math.Min(num1, num2)
```

`Math.Min()` returns the lesser value from `num1` and `num2`.

## Example

The following example compares two integers `i1` and `i2` and writes the lesser integer to the console.

```cs
using System;

public class Example {
  public static void Main (string[] args) {
    int i1 = -134, i2 = 268;

    Console.WriteLine("Math.Min (int) = " + Math.Min(i1,i2));
  }
}
```

This example results in the following output:

```shell
Math.Min (int) = -134
```

## Codebyte Example

Try changing the values of xint1 and xint2 to see the results.

```codebyte/csharp
string str = "{0}: The lesser of {1,3} and {2,3} is {3}.";

int xInt1 = 267, xInt2 = -39;

Console.WriteLine("Display the lesser of two values:\n");
Console.WriteLine(str,"--> ", xInt1, xInt2, Math.Min(xInt1, xInt2));
```
