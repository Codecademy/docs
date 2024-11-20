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
  - 'Functions'
CatalogContent:
  - 'learn-c-sharp'
  - 'paths/computer-science'
---

In C#, the **`.PadLeft()`** [method](https://www.codecademy.com/resources/docs/cpp/methods) adds padding to the start of a string until it reaches the specified total length. If a padding character is not specified, it defaults to spaces. This method returns a new string, leaving the original string unchanged.

## Syntax

```pseudo
string.PadLeft(int totalWidth);
```

Or, alternatively:

```pseudo
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
    string str = "Codecademy";  // Length: 10
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

## Codebyte Example

The following runnable example demonstrates different use cases for `.PadLeft()`, including padding with spaces by default and padding with a specified character:

```codebyte/csharp
using System;

class Program {
  static void Main() {
    string str = "Hello World";
    int totalLength = 15;
    char padChar = '.';

    Console.WriteLine($"Original string: '{str}'");

    // Default padding with spaces to reach the specified total length
    string paddingDefault = str.PadLeft(totalLength);
    Console.WriteLine($"Padded with spaces to length {totalLength}: '{paddingDefault}'");

    // Padding with a specific character to reach the specified total length
    string paddingWithChar = str.PadLeft(totalLength, padChar);
    Console.WriteLine($"Padded with '{padChar}' to length {totalLength}: '{paddingWithChar}'");

    // No padding applied if the specified length is less than the string's length
    int shorterLength = 5;
    string noPadding = str.PadLeft(shorterLength);
    Console.WriteLine($"Specified length ({shorterLength}) less than string length: '{noPadding}'");
  }
}
```
