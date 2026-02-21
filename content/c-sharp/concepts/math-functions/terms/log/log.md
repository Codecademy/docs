---
Title: 'Log()'
Description: 'Returns the logarithm of a specified real number, using base e or a specified base.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Arithmetic'
  - 'Method'
  - 'Numbers'
CatalogContent:
  - 'learn-c-sharp'
  - 'paths/computer-science'
---

The **`Math.Log()`** is a static method that returns the logarithm of a specified real number. By default, it calculates the natural logarithm (base e), but it can also compute logarithms using a specified base.

## Syntax

```pseudo
Math.Log(value, baseValue)
```

**Parameters:**

- `value` (double): The real number whose logarithm is to be found. It must be greater than 0.
- `baseValue` (double, optional): The base of the logarithm.

**Return value:**

Returns the logarithm of a specified real number.

> **Note**: If parameter `baseValue` isn't specified, `Math.Log()` returns the natural (base e) logarithm of the specified real number.

## Example 1

The following example demonstrates the `Math.Log()` method and writes the result to the console:

```cs
using System;

class Program
{
  static void Main()
  {
    double num = 2.0;
    double result = Math.Log(num);
    Console.WriteLine(result);
  }
}
```

The example will result in the following output:

```shell
0.693147180559945
```

## Codebyte Example

In this example, the `Math.Log()` method is used to get the logarithm of 100 using 10 as the base, and then, it writes the result to the console:

```codebyte/csharp
using System;

class Program
{
  static void Main()
  {
    double num = 100;
    double newBase = 10;
    double result = Math.Log(num, newBase);
    Console.WriteLine(result);
  }
}
```
