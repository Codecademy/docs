---
Title: '.Pow()'
Description: 'Calculates the first input number to the power of the second input number.'
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

The **`Math.Pow()`** method returns the first input number raised to the power of the second input number.

## Syntax

```pseudo
Math.Pow(num1, num2)
```

`Math.Pow()` returns the calculated value of `num1` to the power of `num2`.

## Example

The following example calculates the first double value `d1` to the power of the second double value `d2` and writes the result to the console.

```cs
using System;

public class Example {
  public static void Main (string[] args) {
    double d1 = 8, d2 = 3;

    Console.WriteLine("Math.Pow (double) = " + Math.Pow(d1,d2));
  }
}
```

This example results in the following output:

```shell
Math.Pow (double) = 512
```
