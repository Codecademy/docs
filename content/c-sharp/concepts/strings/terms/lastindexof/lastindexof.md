---
Title: '.LastIndexOf()'
Description: 'Finds the last occurrence of a specified character or substring within a string.'
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

The **`.LastIndexOf()`** method returns the last occurrence of a specified character or substring within a `string`.

The method returns `-1` if there's no such match.

Additional parameters may be supplied to define the criteria for the search.

## Syntax

```pseudo
// Determines the zero-based index of the last occurrence of char within the string
String.LastIndexOf(char);

// Same as above but uses an additional starting position parameter. The search starts at the startIndex and proceeds backward toward the beginning of the string.
String.LastIndexOf(char, startIndex);

// Same as above but uses an additional searching length parameter. The search starts at the startIndex and proceeds backward toward the beginning of the string for a specified number of character positions.
String.LastIndexOf(char, startIndex, length);

// Determines the zero-based index of the last occurrence of substring within the string
String.LastIndexOf(substring);

// Same as above but uses an additional starting position parameter. The search starts at the startIndex and proceeds backward toward the beginning of the string.
String.LastIndexOf(substring, startIndex);

// Same as above but uses an additional searching length parameter. The search starts at the startIndex and proceeds backward toward the beginning of the string for a specified number of character positions.
String.LastIndexOf(string, startIndex, length);

// Determines the zero-based index of the last occurrence of substring within the string, using the stringComparison method.
String.LastIndexOf(substring, stringComparison);

// Same as above but uses an additional startIndex parameter. The search starts at the startIndex and proceeds backward toward the beginning of the string, using the stringComparison method.
String.LastIndexOf(substring, startIndex, stringComparison);

// Same as above but uses an additional searching length parameter. The search starts at the startIndex and proceeds backward toward the beginning of the string for a specified number of character positions, using the stringComparison method.
String.LastIndexOf(substring, startIndex, length, stringComparison);
```

`.LastIndexOf()` is a method of the `String` object. It may take following parameters:

- `char` is an instance of the Char structure; represents a single letter.
- `string` is an instance of the String object.
- `startIndex` is an Int32 object.
- `length` is an Int32 object.
- `stringComparison` is an enumeration which encapsulates the case- and culture-specific criteria; available fields include:
  - `CurrentCulture` sets the current culture rules.
  - `CurrentCultureIgnoreCase` sets the current culture rules but ignores case.
  - `InvariantCulture` sets the invariant culture's sorting rules (it's a culture that doesn't change based on the user's location).
  - `InvariantCultureIgnoreCase` sets the invariant culture rules but ignores case.
  - `Ordinal` sets ordinal (binary) sort rules to compare strings.
  - `OrdinalIgnoreCase` sets ordinal (binary) sort rules to compare strings but ignores case.

## Example

The following example illustrates a few of the ways the `String.LastIndexOf()` method may be used to determine the last occurrence of a specified character or substring within a `string`.

```cs
using System;

public class HelloWorld
{
    public static void Main(string[] args)
    {
        string baseString = "Hello, I'm Codecademy";
        string compareStr = "m";
        int startIndex = 17;
        int searchLength = 4;
        int result;

        // String.LastIndexOf(string)
        result = baseString.LastIndexOf(compareStr);
        Console.WriteLine("Simple search: {0}", result.ToString());

        // String.LastIndexOf(string, startIndex)
        result = baseString.LastIndexOf(compareStr, startIndex);
        Console.WriteLine("Search using starting position: {0}", result.ToString());

        // String.LastIndexOf(string, startIndex, length)
        result = baseString.LastIndexOf(compareStr, startIndex, searchLength);
        Console.WriteLine("Search using starting position & searching length: {0}", result.ToString());

        // String.LastIndexOf(string, startIndex, length, stringComparison)
        compareStr = "C";
        StringComparison strCmp = StringComparison.InvariantCultureIgnoreCase;
        result = baseString.LastIndexOf(compareStr, startIndex, strCmp);
        Console.WriteLine("Search using starting position & string comparison: {0}", result.ToString());
    }
}
```

This is what is printed to the console:

```shell
Simple search: 19
Search using starting position: 9
Search using starting position & searching length: -1
Search using starting position & string comparison: 15
```

## Codebyte Example

In this example, the `String.LastIndexOf()` is used with `compareStr`, `startIndex` and `strCmp` parameters to determine the last occurrence of a substring within the string:

```codebyte/csharp
using System;

public class HelloWorld
{
    public static void Main(string[] args)
    {
        string baseString = "Hello, I'm Codecademy";
        string compareStr = "C";
        int startIndex = 17;
        StringComparison strCmp = StringComparison.InvariantCultureIgnoreCase;

        int result = baseString.LastIndexOf(compareStr, startIndex, strCmp);
        Console.WriteLine("Search using starting position & string comparison: {0}", result.ToString());
    }
}
```
