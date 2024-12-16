---
Title: '.PadRight()'
Description: 'Adds padding to the right side of a string to ensure it reaches a specified total length.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Strings'
  - 'Characters'
  - 'Methods'
  - 'Functions'
CatalogContent:
  - 'learn-c-sharp'
  - 'paths/computer-science'
---

The **`.PadRight()`** method in C# is used to add padding characters to the right of a string to achieve a specified total length. By default, it uses spaces as the padding character, but a custom character can also be specified.

## Syntax

```pseudo
string.PadRight(int totalWidth, char paddingChar)
```

- `totalWidth`: The desired total length of the string, including padding. If the specified width is less than the string's length, no padding is added.
- `paddingChar`(Optional): The character to use for padding. Defaults to a space character (`' '`).

> **Note**: The `.PadRight()` method does not modify the original string. It generates and returns a new string with padding applied to achieve the specified total width.

## Example

### Default Padding with Spaces

```cs
using System;
class Program
{
    static void Main()
    {
        string name = "John";
        string paddedName = name.PadRight(10);
        Console.WriteLine($"'{paddedName}'");
    }
}
```

The above code generates the output as follows:

```shell
'John      '
```

### Custom Padding Character

```cs
using System;

class NameFormatter
{
    public static void Main(string[] args)
    {
        string name = "John";
        string paddedName = name.PadRight(10, '-');
        Console.WriteLine($"'{paddedName}'");
    }
}
```

The output of the above code will be:

```shell
'John------'
```

### Handling Shorter Total Width

If the specified `totalWidth` is less than the length of the string, the original string is returned:

```cs
using System;

class NamePaddingExample
{
    public static void Main(string[] args)
    {
        string name = "John";
        string result = name.PadRight(3);
        Console.WriteLine($"'{result}'");
    }
}
```

Here's what the output of this code will be:

```shell
'John'
```

## Codebyte Example

Run the following example to understand how the `.PadRight()` method works:

```codebyte/csharp
using System;

class Program
{
    static void Main()
    {
        string word = "Align";
        // Pad with spaces to a total width of 15
        Console.WriteLine("'" + word.PadRight(15) + "'");

        // Pad with asterisks to a total width of 15
        Console.WriteLine("'" + word.PadRight(15, '*') + "'");
    }
}
```
