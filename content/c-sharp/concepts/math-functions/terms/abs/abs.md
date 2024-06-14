---
Title: '.Abs()'
Description: 'Returns the absolute value of a given number.'
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

The **`Math.Abs()`** class method returns the absolute value of a given number.

## Syntax

```pseudo
Math.Abs(number);
```

The `Math.Abs()` method takes only one parameter, `number`, a `decimal`, `double` or `integer` type number. The method returns the absolute value of the `number` with the same type as the `number`, except if the value of `number` equals:

- `NaN` (not a number), then it returns `NaN`
- `NegativeInfinity`, then it returns `PositiveInfinity`
- `PositiveInfinity`, then it also returns `PositiveInfinity`

## Example

The following example uses the `Math.Abs()` method to return the absolute value of a `decimal` and a `double` type number. Then, the `Console.WriteLine()` function prints the results to the console:

```cs
using System;

public class Example {
  public static void Main() {
    decimal num1 = -1.23M;
    double num2 = 6.674E-11;

    decimal abs1 = Math.Abs(num1);
    double abs2 = Math.Abs(num2);

    Console.WriteLine("The absolute value of " + num1 + " is: " + abs1);
    Console.WriteLine("The absolute value of " + num2 + " is: " + abs2);
  }
}
```

The example will result in the following output:

```shell
The absolute value of -1.23 is: 1.23
The absolute value of 6.674E-11 is: 6.674E-11
```

## Codebyte Example

The following example is runnable and returns the absolute value of a `double` type number:

```codebyte/csharp
using System;

public class Example {

  public static void Main() {
    double number = 299792458;

    Console.WriteLine("The absolute value of " + number + " is: " + Math.Abs(number));
  }
}
```
