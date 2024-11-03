---
Title: '.PadLeft()'
Description: 'Pads the beginning of a string with spaces or a specified character to reach a specified total length.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Strings'
  - 'Characters'
  - 'Methods'
CatalogContent:
  - 'learn-c-sharp'
  - 'paths/computer-science'
---

In C#, the **`.PadLeft()`** method adds padding to the start of a string until it reaches the specified total length. If a padding character is not specified, it defaults to spaces. This method returns a new string, leaving the original string unchanged.

## Syntax

```pseudo
// Pads the string with spaces to reach the specified total width.
string.PadLeft(int totalWidth);
```

Or, alternatively:

```pseudo
// Pads the string with a specified character to reach the specified total width.
string.PadLeft(int totalWidth, char paddingChar);
```

- `totalWidth`: The desired total length of the string after padding.
- `paddingChar` (Optional): The character used for padding. If not specified, a space is used by default.

## Example

The following example illustrates the usage of `.PadLeft()` in various scenarios:

```cs
using System;

class Program
{
    static void Main()
    {
        string str = "Codecademy";  // length - 10
        Console.WriteLine($"String: '{str}'");

        // Case 1: Padding with default space character
        string paddingDefault = str.PadLeft(15);
        Console.WriteLine($"Case 1: '{paddingDefault}'");

        // Case 2: Padding with a specific character
        char paddingChar = '.';
        string paddingWithChar = str.PadLeft(15, paddingChar);
        Console.WriteLine($"Case 2: '{paddingWithChar}'");

        // Case 3: Total width is less than string length
        string noPadding = str.PadLeft(1);
        Console.WriteLine($"Case 3: '{noPadding}'");
    }
}
```

The above example gives the following output:

```shell
String: 'Codecademy'
Case 1: '     Codecademy'
Case 2: '.....Codecademy'
Case 3: 'Codecademy'
```
