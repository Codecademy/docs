---
Title: 'Clamp()'
Description: 'Restricts a value to lie within a specified minimum and maximum range.'
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

The **`Math.Clamp()`** is a static method that returns the value clamped to the inclusive range of min and max.

> **Note:** The static method `Math.Clamp()` was introduced in .NET Core 2.0.

## Syntax

```pseudo
Math.Clamp(value, min, max);
```

**Parameters:**

- `value`: The value to be clamped.
- `min`: The lower bound of the result.
- `max`: The upper bound of the result.

**Return value:**

Returns the value clamped to the inclusive range of min and max.

> **Note:** If value is less than `min`, it returns `min`; if greater than `max`, it returns `max`; otherwise, it returns `value`.

## Example

The following example demonstrates the `Math.Clamp()` method and writes the result to the console.

```cs
using System;

class Program
{
  static void Main()
  {
    int min = 2;
    int max = 8;

    int result = Math.Clamp(10, min, max);
    Console.WriteLine(result);
  }
}
```

The example will result in the following output:

```shell
8
```

## Codebyte Example

In this example, a random list of decimal numbers is generated, and `Math.Clamp()` ensures that all stored values stay within the defined range:

```codebyte/csharp
using System;

class Example
{
  static void Main()
  {
    Random random = new Random();
    double[] nums = new double[10];
    int min = 1;
    int max = 50;

    for (int i = 0; i < nums.Length; i++)
    {
      double range = random.NextDouble() * 70 - 10; // -10 to 60
      double limit = Math.Clamp(range, min, max);
      nums[i] = limit;
    }

    foreach (double num in nums)
    {
      Console.WriteLine(num);
    }
  }
}
```
