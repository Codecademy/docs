---
Title: '.Floor()'
Description: 'Returns the largest whole integer which is less than or equal to the given number.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Libraries'
  - 'Arithmetic'
  - 'Functions'
CatalogContent:
  - 'learn-c-sharp'
  - 'paths/computer-science'
---

**`Math.Floor()`** is a static method that rounds down and returns the largest whole integer that is less than or equal to the given number.

## Syntax

```pseudo
Math.Floor(x);
```

- The `Math.Floor()` method is used to find the largest whole integer that is less than or equal to the argument, `x`, passed in. The argument can be of a `float` or `double` type.
- The `System` namespace is required to access this method.

## Example

The following example uses `Math.Floor()` to return the largest whole number.

```cs
// Include the System namespace
using System;

public class Floor {
    public static void Main() {
        Console.WriteLine(Math.Floor(5.05));
    }
}
```

The example will result in the following output:

```shell
5
```

## Codebyte Example

The following example is runnable and uses the `Math.Floor()` method to return the largest whole number that is less than or equal to the given `double` type `number`:

```codebyte/csharp
using System;

public class Example {
  public static void Main() {
    double number = 3.14159;
    double floor = Math.Floor(number);

    Console.WriteLine("The floor value of " + number + " is " + floor);
  }
}
```
