---
Title: '.Substring()'
Description: 'Extracts a portion of a string starting from a specified index position.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Data Types'
  - 'Methods'
  - 'Strings'
CatalogContent:
  - 'learn-c-sharp'
  - 'paths/computer-science'
---

The C# **`.Substring()`** method is a built-in [string](https://www.codecademy.com/resources/docs/c-sharp/strings) method that extracts a portion of a string starting from a specified index position. It returns a new string containing the characters from the starting position to either the end of the string or for a specified length, without modifying the original string.

## Syntax of C# `.Substring()`

```pseudo
public string Substring(int startIndex)
public string Substring(int startIndex, int length)
```

**Parameters:**

- `startIndex`: The zero-based starting position from where the substring begins. The type is `System.Int32`.
- `length` (optional): The number of characters to include in the substring. The type is `System.Int32`.

**Return value:**

Both methods return a new string (`System.String`) containing the extracted substring.

**Exceptions:**

The method throws `ArgumentOutOfRangeException` if:

- `startIndex` is less than zero or greater than the length of the string
- `length` is less than zero
- `startIndex` plus `length` indicates a position not within the current string

## Example 1: Basic Usage of `.Substring()` in C#

This example demonstrates how to use the `.Substring()` method with a single parameter to extract characters from a specific position to the end of the string:

```cs
using System;

public class Program
{
  public static void Main()
  {
    string text = "Hello World";

    // Extract substring from index 6 to the end
    string result = text.Substring(6);

    Console.WriteLine($"Original: {text}");
    Console.WriteLine($"Substring from index 6: {result}");
  }
}
```

The output of this example will be:

```shell
Original: Hello World
Substring from index 6: World
```

This example extracts all characters starting from index 6 (the letter 'W') to the end of the string.

## Example 2: Extract Characters with Length Using `.Substring()`

This example shows how to use the `.Substring()` method with both parameters to extract a specific number of characters:

```cs
using System;

public class Program
{
 public static void Main()
  {
    string email = "user@example.com";

    // Extract username (characters before @)
    int atIndex = email.IndexOf('@');
    string username = email.Substring(0, atIndex);

    // Extract domain (characters after @)
    string domain = email.Substring(atIndex + 1);

    Console.WriteLine($"Email: {email}");
    Console.WriteLine($"Username: {username}");
    Console.WriteLine($"Domain: {domain}");
  }
}
```

The output of this code will be:

```shell
Email: user@example.com
Username: user
Domain: example.com
```

The above example demonstrates extracting the username from an email address and getting a portion of the domain.

## Codebyte Example: Using C# `.Substring()` for File Path Processing

This example shows a real-world scenario where `.Substring()` is used to process file paths and extract file information:

```codebyte/csharp
using System;

public class Program
{
  public static void Main()
  {
    string filePath = "C:\\Documents\\Projects\\MyApplication.exe";

    // Extract filename with extension
    int lastSlash = filePath.LastIndexOf('\\');
    string fileName = filePath.Substring(lastSlash + 1);

    // Extract file extension
    int dotIndex = fileName.LastIndexOf('.');
    string extension = fileName.Substring(dotIndex + 1);

    // Extract filename without extension
    string nameOnly = fileName.Substring(0, dotIndex);

    Console.WriteLine($"Full path: {filePath}");
    Console.WriteLine($"Filename: {fileName}");
    Console.WriteLine($"Extension: {extension}");
    Console.WriteLine($"Name only: {nameOnly}");
  }
}
```

This example processes a file path to extract different components.

## Frequently Asked Questions

### 1. What happens if I pass a negative index to `.Substring()`?

The method will throw an `ArgumentOutOfRangeException` if the `startIndex` is negative or greater than the string length.

### 2. Can `.Substring()` modify the original string?

No, `.Substring()` returns a new string and does not modify the original string, as strings are immutable in C#.

### 3. What's the difference between `.Substring()` and `Span<char>`?

`.Substring()` creates a new string object, while `Span<char>` provides a memory-efficient way to work with string segments without allocation.
