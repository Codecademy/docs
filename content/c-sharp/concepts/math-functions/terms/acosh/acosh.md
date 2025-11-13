---
Title: '.Acosh()'
Description: 'Returns the inverse hyperbolic cosine of a specified number.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Functions'
  - 'Math'
  - 'Methods'
  - 'Numbers'
CatalogContent:
  - 'learn-c-sharp'
  - 'paths/computer-science'
---

The **`Math.Acosh()`** method is a static method that returns the inverse hyperbolic cosine of a specified number.

## Syntax

```pseudo
Math.Acosh(number);
```

**Parameters:**

- `number`: A numeric value of type `double` for which to calculate the inverse hyperbolic cosine. The value must be greater than or equal to 1.

**Return value:**

The `Math.Acosh()` method returns:

- The inverse hyperbolic cosine of the specified number in radians as a `double` if the input is greater than or equal to 1.
- `NaN` if the input is less than 1 or `NaN`.

## Example: Basic Usage of `Math.Acosh()`

In this example, the inverse hyperbolic cosine of a specified number is calculated using the `Math.Acosh()` method, and the result is printed to the console:

```cs
using System;

public class Example
{
  public static void Main()
  {
    double number = 1.5;

    double result = Math.Acosh(number);

    Console.WriteLine($"Math.Acosh({number}) = {result} radians");
  }
}
```

This example outputs the following:

```shell
Math.Acosh(1.5) = 0.9624236501192069 radians
```

## Codebyte Example

In this example, the `Math.Acosh()` method is used to calculate the inverse hyperbolic cosine of a specified number in radians and degrees:

```codebyte/csharp
using System;

public class Example {
  public static void Main() {
    double number = 100.0;

    // Calculate Acosh in radians
    double resultRadians = Math.Acosh(number);

    // Convert radians to degrees
    double resultDegrees = resultRadians * (180.0 / Math.PI);

    // Display results
    Console.WriteLine($"Math.Acosh({number}) = {resultRadians} radians");
    Console.WriteLine($"Math.Acosh({number}) = {resultDegrees} degrees");
  }
}
```
