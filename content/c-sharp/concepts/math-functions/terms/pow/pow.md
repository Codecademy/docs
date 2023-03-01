---
Title: '.Pow()'
Description: 'Returns the result of a given number raised to the power of a second number.'
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

The **`Math.Pow()`** method returns a number raised to the power of a second number.

## Syntax

```pseudo
Math.Pow(num1, num2)
```

`Math.Pow()` takes two values of type `double`. It will return a `double` that is the result of the value `num1` raised to the power of value `num2`.

## Example

The following example demonstrates the `Math.Pow()` method and writes the result to the console.

```cs
using System;

public class Example {
  public static void Main (string[] args) {
    double d1 = 8, d2 = 3;

    Console.WriteLine("8^3 = " + Math.Pow(d1,d2));
  }
}
```

This example results in the following output:

```shell
8^3 = 512
```
