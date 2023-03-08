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

**Math.Sin()** is a class method that always rounds up to the next full integer. It is used to return the smallest integer greater than or equal to the specified number.

## Syntax

```pseudo
Math.Sin(angle);
```

- The method takes only one parameter, `angle`, the number to be rounded (as a `decimal` or `double` type).

## Example

The following example uses `Math.Sin()` to return the next full integer.

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
