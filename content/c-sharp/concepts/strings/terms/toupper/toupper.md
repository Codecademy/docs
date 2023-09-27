---
Title: '.ToUpper()'
Description: 'Returns a new string with all uppercase characters.'
Subjects:
  - 'Computer Science'
  - 'Code Foundations'
Tags:
  - 'Strings'
  - 'Methods'
CatalogContent:
  - 'learn-c-sharp'
  - 'paths/computer-science'
---

In C#, the **`.ToUpper()`** method returns a new string with all the characters converted to uppercase. Numbers and symbols are not changed.

This method does not modify the original string, but instead, it creates a new string that contains the uppercase version of the original string.

## Syntax

```pseudo
somestring.ToUpper()
```

This method will not change the input string.

## Example

In the following example, `originalString` is the string being converted to uppercase, and `uppercaseString` is the new string that contains the uppercased characters. The original string remains unchanged:

```cs
using System;

class Program
{
  static void Main(string[] args)
  {
    originalString = "Hello World"
    string uppercaseString = originalString.ToUpper();

    Console.WriteLine(originalString);
    Console.WriteLine(uppercaseString);
  }
}
```

This will output:

```shell
Hello World
HELLO WORLD
```

## Codebyte Example

The example below converts a given string to uppercase and stores this value in a new string variable named `uppercaseString`:

```codebyte/csharp
using System;

class Program
{
    static void Main(string[] args)
    {
        originalString = "Hello World"
        string uppercaseString = originalString.ToUpper();

        Console.WriteLine(originalString);
        Console.WriteLine(uppercaseString);
    }
}
```
