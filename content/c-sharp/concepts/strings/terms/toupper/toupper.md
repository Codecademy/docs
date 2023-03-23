---
Title: '.ToUpper()'
Description: 'Returns a new string in all uppercase characters based on the passed string.'
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

The **`.ToUpper()`** method is a method in C# that takes a string and returns a copy of this string converted to uppercase. Numbers and symbols are not changed.

## Syntax

```pseudo
somestring.ToUpper()
```

This method will not change the input string.


## Example

In this following example, `originalString` is the string being converted to uppercase, and `uppercaseString` is the new string that contains the uppercase characters. We can see that the original string remains unchanged:

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

Here is the output:

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
        string originalString = "Hi! I'm Codecademy";
        string uppercaseString = originalString.ToUpper();

        Console.WriteLine("Original string: " + originalString);
        Console.WriteLine("Uppercase string: " + uppercaseString);
    }
}
```