---
Title: '.Ceiling()'
Description: 'Returns the smallest integer which is greater or equal to a given number.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Libraries'
  - 'Arithmetic'
  - 'Functions'
Catalog Content:
  - 'learn-c-sharp'
  - 'paths/computer-science'
---

**Math.Celiling()** is a class method that always rounds up to the next full integer. It is used to return the smallest integer greater than or equal to the specified number.

## Syntax

```pseudo
public static decimal Ceiling (decimal val);
public static double Ceiling(double val)
```

- The Ceiling method operates both functionalities in decimal and double.

## Example 1

The following example uses `Math.Ceiling(decimal)` to return the next full integer.

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

## Example 2

The following example uses `Math.Ceiling(double)` to return the next full integer.

```cs
// Include the System namespace
using System;
public class Demo {
   public static void Main(){
      double val1 = 10.1;
      double val2 = 85.99;
      double val3 = -85.99;
      Console.WriteLine("Solution = " + Math.Ceiling(val1));
      Console.WriteLine("Solution = " + Math.Ceiling(val2));
      Console.WriteLine("Solution = " + Math.Ceiling(val3));
   }
}
```

The example will result in the following output:

```shell
Solution = 11
Solution = 86
Solution = -55
```