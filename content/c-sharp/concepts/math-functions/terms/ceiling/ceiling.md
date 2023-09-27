---
Title: '.Ceiling()'
Description: 'Returns the smallest integer which is greater than or equal to a given number.'
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

**`Math.Ceiling()`** is a class method that always rounds up to the next full integer. It is used to return the smallest integer greater than or equal to the specified number.

## Syntax

```pseudo
Math.Ceiling(val);
```

- The method takes only one parameter, `val`, the number to be rounded (as a `decimal` or `double` type).

## Example

The following example uses `Math.Ceiling()` to return the next full integer.

```cs
// Include the System namespace
using System;
public class Demo {
   public static void Main(){
      decimal val1 = 6.64M;
      decimal val2 = -9.02M;
      Console.WriteLine("Solution = " + Math.Ceiling(val1));
      Console.WriteLine("Solution = " + Math.Ceiling(val2));
   }
}
```

The example will result in the following output:

```shell
Solution = 7
Solution = -9
```

## Codebyte Example

The following example is runnable and uses the `Math.Ceiling()` method to return the smallest whole number that is greater than or equal to the given `double` type `number`:

```codebyte/csharp
using System;

public class Example {
  public static void Main() {
    double number = 3.14159;
    double ceiling = Math.Ceiling(number);

    Console.WriteLine("The ceiling value of " + number + " is " + ceiling);
  }
}
```
