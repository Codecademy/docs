---
Title: '.Floor()'
Description: 'Math.Floor() rounds down and returns the largest whole integer less than or equal to the given number.'
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

**Math.Floor()** is a static method that always rounds down and returns the largest whole integer less than or equal to the given number.

## Syntax
In C#, the Math.Floor() method is used to find the largest whole integer which is less than or equal to the argument passed in.  The .Floor() method accepts arguments in float and double format.  Code using the Math.Floor() method must have access to the System namespace.

```pseudo
Math.Floor(x);
```
- The `Math.Floor()` method is used to find the largest whole integer which is less than or equal to the argument, `x`, passed in.  The method accepts arguments in float and double format.
- Code using the `Math.Floor()` method must have access to the `System` namespace.

## Example
The following example uses Math.Floor() to return the largest whole number before 5.05

```cs
//Include the System namespace
using System;

public class Floor {
    public static void Main() {
        Console.WriteLine(Math.Floor(5.05));
        //returns 5
    }
}
```

## Codebyte Example
Math.Floor() has practical applications where a non-whole number would not make sense.  For example, if you were required to take only full vacation days, but you have 11.5 days accrued, the only relevant number to you is the largest whole number below 11.5.


```codebyte/csharp
using System;

public class Vacation {

    public static void Main() 
    {
        float vacationDaysAccrued = 11.5f;

        Console.WriteLine("You can use " + Math.Floor(vacationDaysAccrued) + " vacation days right now.");
        //returns a string containing 11
    }
}
```
