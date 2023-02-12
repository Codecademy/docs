---
Title: 'Math.Max()'
Description: 'Returns the larger of two specified numbers.'
Subjects:
  - 'Computer Science'
  - 'Code Foundations'
Tags:
  - 'Methods'
  - 'Arithmetic'
CatalogContent:
  - 'learn-c-sharp'
  - 'paths/computer-science'
---

The **`Math.Max()`** method returns the larger of two specified numbers.

## Syntax

```pseudo
//returns the greater value from the two numbers
Math.Max(num1, num2)
```

## Example

The following example compares two integers `i1` and `i2` and writes greater to the console.

```cs
using System;

class Program {
  public static void Main (string[] args) {
    int i1 = -234, i2 = 345;

    Console.WriteLine("Math.Max (int) = " + Math.Max(i1,i2));
  }
}
```

## Codebyte Example

The following example demonstrates `Math.Max()` function that compares two numbers, an `int` and `double`, and writes greater to the console. This is a runnable example.

```codebyte/csharp
using System;

class Program {
  public static void Main (string[] args) {
    int i1 = 234;
    double d1=1000.1;

    Console.WriteLine("Math.Max (int, double) = " + Math.Max(i1,d1));
  }
}
```