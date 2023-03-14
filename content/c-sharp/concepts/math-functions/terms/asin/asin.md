---
Title: '.Asin()'
Description: 'Returns an angle in radians whose sine is a specified number.'
Subjects: 
  - 'Computer Science'
Tags:
  - 'Libraries'
  - 'Arithmetic'
  - 'Functions'
CatalogContent:
  - 'learn-c-sharp'
  - 'paths/computer-science'
---

The **Math.Asin()** function computes an angle in radians whose sine is a specified number. In Math, this is known as the inverse sine function.

## Syntax

```pseudo
Math.Asin(value);

`value`: the input value, which must be in the range -1 <= `value` <= 1

Returns an angle measured in radians, of type `double`, whose sine is `value`. If an invalid value is passed to the function, or no value is passed at all, `NaN` is returned.

## Codebyte Example

```cs
using System;
class CodeacademyDemo
{
    static void Main()
    {
        Double result = Math.Asin(0);
        System.Console.WriteLine("Asin(0) = "+ result + " radians"); // 0

        Double result1 = Math.Asin(1);
        System.Console.WriteLine("Asin(1) = "+ result1 + " radians"); // 1.57079633

        Double result2 = Math.Asin(-1);
        System.Console.WriteLine("Asin(-1) = "+ result2 + " radians"); // -1.57079633

        Double result3 = Math.Asin(2);
        System.Console.WriteLine("Asin(2) = "+ result3); // NaN
    }
}
```
