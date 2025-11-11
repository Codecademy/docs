---
Title: '.Clamp()'
Description: 'Returns the value clamped to the inclusive range of min and max.'
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

## Example

The following example demonstrates the `Math.Clamp()` method and writes the result to the console.

```cs
int min = 2;
int max = 8;

int result = Math.Clamp(10, min, max);

Console.WriteLine(result);
```

The example will result in the following output:

```shell
8
```

## Codebyte Example

In this codebyte example, the `nums` array is declared with a fixed size of 10 elements. For each element, a random decimal number between -10 and 60 is generated. Then, the `Math.Clamp` method ensures that the value store in the array stays within the range defined by `min` and `max`.

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
            double range = random.NextDouble() * 70 - 10; // -10 and 60
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
