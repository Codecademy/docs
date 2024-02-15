`---
Title: '.Round()'
Description: 'Returns a value rounded to the nearest integer.'
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

The **`Math.Round()`** class method returns a value rounded to the nearest integer.

## Syntax

```pseudo
Math.Round(value1, value2, value3);
```

The `Math.Round()` method takes up to three parameters:

- `value1` is the only required parameter and is either a decimal or double.
- `value2` would be an integer ranging from -2,147,483,648 to 2,147,483,647 (int32), or it could be a specific mode that is called from the `MidpointRounding` `enum`.
- `value3` would be the mode if `value2` was of type int32. The modes include: `ToEven`, `AwayFromZero`, `ToZero`, and `TowardZero`.

## Example

The following example passes one argument as a parameter:

```cs
using System;

public class Example {
  public static void Main(string[] args) {
    decimal val1 = 10.2m;
    val1 = Math.Round(val1);

    Console.WriteLine("Rounded value is " + val1);
  }
}
```

The example will result in the following output:

```shell
Rounded value is 10
```

## Codebyte Example

The following example passes three arguments into the method:

```codebyte/csharp
using System;

public class Example {

  public static void Main(string[] args) {
    decimal val1 = 20.5m;
    int val2 = 0;
    MidpointRounding mode = MidpointRounding.ToEven;

    Console.WriteLine("Rounded value is " + Math.Round(val1, val2, mode));
  }
}
```
