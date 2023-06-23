---
Title: 'Math Functions'
Description: 'Common mathematical functions can be performed using the System.Math class.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Libraries'
  - 'Arithmetic'
  - 'Functions'
CatalogContent:
  - 'learn-c-sharp'
  - 'paths/build-web-apps-with-asp-net'
---

**Mathematical functions** can be performed using the `System.Math` class. `System.Math` is a static class that is included within .NET as part of the `System` namespace. [.NET](https://dotnet.microsoft.com/en-us/learn/dotnet/what-is-dotnet) is a free, cross-platform, open source developer platform created by Microsoft.

## Syntax

The `Math` class can be accessed by including the `System` namespace within a `.cs` file by adding the following line:

```pseudo
// Include the System namespace
using System;
```

The `Math` class is static and is accessed without needing to create an instance.

## Example

The following example uses the `Math.Pow()` method to return the result of `4` raised to the power of `2`:

```cs
// Include the System namespace
using System;

public class Example
{
  public static void Main(string[] args)
  {
    // Raise 4 to power of 2
    double x = Math.Pow(4,2);

    System.Console.WriteLine("x = {0}", x);
    // Output: x = 16
  }
}
```

In cases where access to `System.Math` is required but access to the entire `System` namespace is not, an alternative syntax can be used instead. The following example uses an alternative syntax and returns the floor of `3/2` using the `System.Math.Floor()` method:

```cs
public class Example
{
  public static void Main(string[] args)
  {
    // Round down the result of 3/2
    double x = System.Math.Floor((double)3/2);

    System.Console.WriteLine("x = {0}", x);
    // Output: x = 1
  }
}
```

Below are a selected list of `System.Math` methods:
