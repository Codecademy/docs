---
Title: '.Sign()'
Description: 'Returns an integer value indicating the sign of a number.'
Subjects:
  - 'Computer Science'
  - 'Code Foundations'
Tags:
  - 'Functions'
  - 'Math'
  - 'Numbers'
  - 'Methods'
CatalogContent:
  - 'learn-c-sharp'
  - 'paths/computer-science'
---

The **`Math.Sign()`** method is a static method that returns an integer value indicating the sign of a specified number.

## Syntax

```pseudo
Math.Sign(number);
```

**Parameters:**

- `number`: The numeric value for which to determine the sign. This can be of type: `sbyte`, `short`, `int`, `long`, `float`, `double`, `decimal` or `IntPtr`.

**Return value:**

Returns an integer value that indicates the sign of the specified number:

- `-1`: if the number is negative
- `0`: if the number is equal to zero
- `1`: if the number is positive

## Example: Basic Usage

In this example, the sign of various numeric values is determined using the `Math.Sign()` method and printed to the console.

```cs
using System;

public class Example {
  public static void Main () {
    // Example numeric values
    int numInt = -50;
    float numFloat = 0.0f;
    double numDouble = 2.7;
    decimal numDecimal = -0.01m;

    // Determine the sign of each number
    int numIntSign = Math.Sign(numInt);
    int numFloatSign = Math.Sign(numFloat);
    int numDoubleSign = Math.Sign(numDouble);
    int numDecimalSign = Math.Sign(numDecimal);

    // Print the results
    Console.WriteLine($"Math.Sign({numInt}) = {numIntSign}");
    Console.WriteLine($"Math.Sign({numFloat}) = {numFloatSign}");
    Console.WriteLine($"Math.Sign({numDouble}) = {numDoubleSign}");
    Console.WriteLine($"Math.Sign({numDecimal}) = {numDecimalSign}");
  }
}
```

This example outputs the following:

```shell
Math.Sign(-50) = -1
Math.Sign(0) = 0
Math.Sign(2.7) = 1
Math.Sign(-0.01) = -1
```

## Codebyte Example

In this example, a random number between -100 and 100 is generated, and its sign is determined using the `Math.Sign()` method. A message is printed to indicate whether the random number is negative, positive, or zero.

```codebyte/csharp
using System;

public class Example {
  public static void Main () {
    // Initialize random number generator
    var randNumGenerator = new Random();

    // Generator random number between -100 and 100
    int randomNum = randNumGenerator.Next(-100, 100);

    // Determine the sign of randomNum
    int randomNumSign = Math.Sign(randomNum);

    // Print message based on sign
    if (randomNumSign == -1) {
    Console.WriteLine($"Random number, {randomNum}, is negative.");
    } else if (randomNumSign == 1) {
    Console.WriteLine($"Random number, {randomNum}, is positive.");
    } else {
    Console.WriteLine($"Random number, {randomNum}, is zero.");
    }
  }
}
```
