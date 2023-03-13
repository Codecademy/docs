---
Title: '.Sin()'
Description: 'Returns the sine of a given angle.'
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

The **`Math.Sin()`** class method returns the sine of a given angle.

## Syntax

```pseudo
Math.Sin(angle);
```

The `Math.Sin()` method takes only one `double` type parameter, `angle`, the angle in radians to calculate the sine of it. The `Math.Sin()` method returns the sine of the `angle` as `double` value.

## Example

The following example first converts `30` degrees to radians and then uses `Math.Sin()` method to return the sine of that angle. Finally the `Console.WriteLine()` function prints the result to the console:

```cs
// Include the System namespace
using System;

public class Example {
  public static void Main(string[] args) {
    double degrees = 30;
    //Convert degrees to radians
    double radians = degrees * Math.PI/180;

    Console.WriteLine("The sine of " + degrees + " degrees is: " + Math.Sin(radians));
  }
}
```

The example will result in the following output:

```shell
The sine of 30 degrees is: 0.5
```
