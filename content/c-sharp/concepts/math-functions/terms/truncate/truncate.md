---
Title: '.Truncate()'
Description: 'Returns the integer part of a specified number by removing any fractional digits.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Methods'
  - 'Numbers'
  - 'Arithmetic'
  - 'Functions'
CatalogContent:
  - 'learn-c-sharp'
  - 'paths/computer-science'
---

The **`Math.Truncate()`** class method returns the integer part of a specified number by removing any fractional digits.

## Syntax

```pseudo
Math.Truncate(d);
The Math.Truncate() method takes one parameter, d, which is the number to truncate (this can be a double or decimal). The method returns the integer part of d (of the same type), except if the value of d equals:

NaN, then it returns NaN.

NegativeInfinity, then it returns NegativeInfinity.

PositiveInfinity, then it also returns PositiveInfinity.

Note: Math.Truncate() always rounds towards zero. This means Truncate(2.8) is 2, and Truncate(-2.8) is -2. This is different from Math.Floor(), which always rounds down (e.g., Math.Floor(-2.8) would be -3).

Example
The following example demonstrates the Math.Truncate() method with both a positive and a negative double. It highlights how the method rounds towards zero in both cases.

using System;

public class Example {
  public static void Main(string[] args) {
    double positiveValue = 12.9;
    double negativeValue = -4.7;

    Console.WriteLine("Truncating " + positiveValue + " gives: " + Math.Truncate(positiveValue));
    Console.WriteLine("Truncating " + negativeValue + " gives: " + Math.Truncate(negativeValue));
  }
}

This example results in the following output:

Truncating 12.9 gives: 12
Truncating -4.7 gives: -4

Codebyte Example
The following example is runnable and returns the truncated value of the given number:
using System;

public class Example {
  public static void Main(string[] args) {
    // Number to truncate
    double number = 2.71828;

    Console.WriteLine("The truncated value of " + number + " is: " + Math.Truncate(number));

    // Example with a negative number
    double negativeNumber = -3.14159;
    Console.WriteLine("The truncated value of " + negativeNumber + " is: " + Math.Truncate(negativeNumber));
  }
}
```
