---
Title: '.Cos()'
Description: 'Returns the cosine of a given angle.'
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

The **`Math.Cos()`** class method returns the cosine of a given angle.

## Syntax

```pseudo
Math.Cos(angle);
```

The `Math.Cos()` method takes only one `double` type parameter, `angle`, the angle in radians, to calculate the cosine of it. The `Math.Cos()` method returns the cosine of the `angle` as a `double` value.

## Example

The following example first converts `60` degrees to radians and then uses `Math.Cos()` method to return the cosine of that angle. Finally, the `Console.WriteLine()` function prints the result to the console:

```cs
using System;

public class Example {
  public static void Main(string[] args) {
    double degrees = 60;
    //Convert degrees to radians
    double radians = degrees * Math.PI/180;

    Console.WriteLine("The cosine of " + degrees + " degrees is: " + Math.Cos(radians));
  }
}
```

The example will result in the following output:

```shell
The cosine of 60 degrees is: 0.5
```

## Codebyte Example

The following example is runnable and returns the cosine of the `angle` given in degrees:

```codebyte/csharp
using System;

public class Example {

  public static void Main(string[] args) {
    double angle = 0;
    double angleRad = angle * Math.PI/180;

    Console.WriteLine("The cosine of " + angle + " degrees is: " + Math.Cos(angleRad));
  }
}
```
