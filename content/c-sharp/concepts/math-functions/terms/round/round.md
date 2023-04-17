---
Title: '.Round()'
Description: 'Returns a value rounded to the nearest integer.'
Subjects:
  - 'Code Functions'
  - 'Computer Science'
Tags:
  - 'Methods'
  - 'Numbers'
  - 'Arithmetic'
  - 'Functions'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **Math.Round()** class method returns a value rounded to the nearest integer.

## Syntax

```pseudo
Math.Round(value1, value2, value3);
```

The `Math.Round()` method takes up to threee parameters:

- `value1` is the only required parameter and is either a decimal or double.
- `value2` wouls be an integer ranging from -2,147,483,648 or 2,147,483,647 (int32), or it oculd be a specific mode which is called from the `MidpointRounding` enum.
-`value3` would be the mode if `value2` was of type int32. The modes include: `ToEven`, `AwayFromZero`, `ToZero`, and `TowardZero`,

## Example

The following example passes one argument as a parameter: 

```cs
using System;

Public Class Example {
    public static void Main(string[] args){
        deicmal al1 = 10.2;
        val1 = Math.Round(val1);

        Console.WriteLine("Rounded value is " + val1);
    }
}
```

The example will result in the following output:

``shell
Rounded value is 10
```

## Codebyte Example

The following example passes three arguents into the method:

``codebyte/csharp
using Sytem;

public class Example {

    public static void Main(string[] args) {
        decimal val1 = 20.5em;
        int val2 = 0;
    }
}