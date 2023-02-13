---
Title: '.Floor()'
Description: 'Math.floor() rounds down and returns the largest whole integer less than or equal to the given number.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Libraries'
  - 'Arithmetic'
  - 'Functions'
CatalogContent:
  - 'learn-c-sharp'
  - 'paths/build-web-apps-with-asp-net'
---

**Math.floor()** is a static method that always rounds down and returns the largest whole integer less than or equal to the given number.

## Syntax
In C#, the Math.floor() method is used to find the largest whole integer which is less than or equal to the argument passed in.  The floor method accepts arguments in float and double format.  Code using Math.floor() must have access to the System namespace.

```pseudo
Math.floor(x);
```


## Example
The following example uses Math.floor() to return the largest whole number before 5.05

```cs
using System;

public class Floor {
    public static void Example() {
        Math.floor(5.05);
        //returns 5
    }
}
```

## Codebyte Example (if applicable)
Math.floor() has practical applications where a non-whole number would not make sense.  For example, if you were required to take only full vacation days, but you have 11.5 days accrued, the only relevant number to you is the largest whole number below 11.5


```codebyte/csharp
using System;

public class Vacation {
    public float vacationDaysAccrued = 11.5;

    public static void VacationAvailableToUse() {
        Math.floor(vacationDaysAccrued);
        //returns 11 when called
    }
}
```