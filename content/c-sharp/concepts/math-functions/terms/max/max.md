---
Title: '.Max()'
Description: 'Returns the greater of two specified numbers.'
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

The **`Math.Max()`** method returns the greater of two specified numbers.

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

## Codebyte Example

The following example is runnable and uses the `Math.Max()` method to return the greater number from the given two `integer` type numbers, `number1` and `number2`:

```codebyte/csharp
using System;

public class Example {
  public static void Main() {
    int number1 = 12756, number2 = 12104;
    int max = Math.Max(number1, number2);

    Console.WriteLine("The max value of " + number1 + " and " + number2 + " is " + max);
  }
}
```
