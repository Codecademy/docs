---
Title: '.Floor()'
Description: 'Rounds down and returns the largest whole integer less than or equal to the given number.'
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

```pseudo
Math.Floor(x);
```

- The `Math.Floor()` method is used to find the largest whole integer which is less than or equal to the argument, `x`, that is passed in. The argument can be of a float or double type.
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
