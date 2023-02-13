---
Title: 'Math.Max()'
Description: 'Returns the larger of two specified numbers.'
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

The **`Math.Max()`** method returns the larger of two specified numbers.

## Syntax

```pseudo
Math.Max(num1, num2)
```
`Math.Max()` returns the greater value from `num1` and `num2`.

## Example

The following example compares two integers `i1` and `i2` and writes the greater integer to the console.

```cs
using System;

public class Example {
  public static void Main (string[] args) {
    int i1 = -234, i2 = 345;

    Console.WriteLine("Math.Max (int) = " + Math.Max(i1,i2));
  }
}
```

This example results in the following output:

```shell
Math.Max (int) = 345
```
