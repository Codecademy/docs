---
Title: '.Pow()'
Description: 'Returns the result of a given number raised to the power of a second number.'
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

The **`Math.Pow()`** method returns a number raised to the power of a second number.

## Syntax

```pseudo
Math.Pow(num1, num2)
```

`Math.Pow()` takes two values of type `double`. It will return a `double` that is the result of the value `num1` raised to the power of value `num2`.

## Example

The following example demonstrates the `Math.Pow()` method and writes the result to the console.

```cs
using System;

public class Example {
  public static void Main (string[] args) {
    double d1 = 8, d2 = 3;

    Console.WriteLine("8^3 = " + Math.Pow(d1,d2));
  }
}
```

This example results in the following output:

```shell
8^3 = 512
```

## Codebyte Example

The following example is runnable and uses the `Math.Pow()` method to return a `double` type value of `2` raised to the power of `10`:

```codebyte/csharp
using System;

public class Example {
  public static void Main() {
    double number = 2, power = 10;
    double value = Math.Pow(number, power);

    Console.WriteLine("The value of " + number + " raised to the power of " + power + " is " + value);
  }
}
```
## Codebyte Example

The following example uses the `Pow` method to calculate the value that results from raising 2 to a power ranging from 0 to 32.

```codebyte/csharp
int value = 2;
for (int power = 0; power <= 32; power++)
   Console.WriteLine($"{value}^{power} = {(long)Math.Pow(value, power):N0} (0x{(long)Math.Pow(value, power):X})");

// The example displays the following output:
//     2^0 = 1 (0x1)
//     2^1 = 2 (0x2)
//     2^2 = 4 (0x4)
//     2^3 = 8 (0x8)
//     2^4 = 16 (0x10)
//     2^5 = 32 (0x20)
//     2^6 = 64 (0x40)
//     2^7 = 128 (0x80)
//     2^8 = 256 (0x100)
//     2^9 = 512 (0x200)
//     2^10 = 1,024 (0x400)
//     2^11 = 2,048 (0x800)
//     2^12 = 4,096 (0x1000)
//     2^13 = 8,192 (0x2000)
//     2^14 = 16,384 (0x4000)
//     2^15 = 32,768 (0x8000)
//     2^16 = 65,536 (0x10000)
//     2^17 = 131,072 (0x20000)
//     2^18 = 262,144 (0x40000)
//     2^19 = 524,288 (0x80000)
//     2^20 = 1,048,576 (0x100000)
//     2^21 = 2,097,152 (0x200000)
//     2^22 = 4,194,304 (0x400000)
//     2^23 = 8,388,608 (0x800000)
//     2^24 = 16,777,216 (0x1000000)
//     2^25 = 33,554,432 (0x2000000)
//     2^26 = 67,108,864 (0x4000000)
//     2^27 = 134,217,728 (0x8000000)
//     2^28 = 268,435,456 (0x10000000)
//     2^29 = 536,870,912 (0x20000000)
//     2^30 = 1,073,741,824 (0x40000000)
//     2^31 = 2,147,483,648 (0x80000000)
//     2^32 = 4,294,967,296 (0x100000000)
```