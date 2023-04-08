---
Title: '.LastIndexOf()'
Description: 'Find the last occurrence of a specified character or substring within a string'
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

The method return `-1` if there's not such valid search results.

An additional parameters may be supplied to define the criteria for the search.

## Syntax

```pseudo
// Determines the zero-base index of the last occurrence of char within the string
String.LastIndexOf(char);

// Same as above but uses additional starting position. The search starts at the startIndex and proceeds backward toward the beginning of the string.
String.LastIndexOf(char, startIndex);

// Same as above but uses additional searching length. The search starts at the startIndex and proceeds backward toward the beginning of the string for a specified number of character positions.
String.LastIndexOf(char, startIndex, length);


// Determines the zero-base index of the last occurrence of substring within the string
String.LastIndexOf(substring);

// Same as above but uses additional starting position. The search starts at the startIndex and proceeds backward toward the beginning of the string.
String.LastIndexOf(substring, startIndex);

// Same as above but uses additional searching length. The search starts at the startIndex and proceeds backward toward the beginning of the string for a specified number of character positions.
String.LastIndexOf(string, startIndex, length);


// Determines the zero-base index of the last occurrence of substring within the string, using the stringComparison method.
String.LastIndexOf(substring, stringComparison);

// Same as about but use additional startIndex. The search starts at the startIndex and proceeds backward toward the beginning of the string, using the stringComparison method.
String.LastIndexOf(substring, startIndex, stringComparison);

// Same as about but use additional searching length. The search starts at the startIndex and proceeds backward toward the beginning of the string for a specified number of character positions, using the stringComparison method.
String.LastIndexOf(substring, startIndex, lenth, stringComparison);
```

`.LastIndexOf()` is a method of the `String` object. It may take following parameters:

- `char` is an instance of the Char structure; represents a single letter.
- `string` is an instance of the String object.
- `startIndex` is an Int32 object.
- `len` is an Int32 object.
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
        Console.WriteLine("Search using starting postion: {0}", result.ToString());
        
        // String.LastIndexOf(string, startIndex, length)
        result = baseString.LastIndexOf(compareStr, startIndex, searchLength);
        Console.WriteLine("Search using starting postion & searching length: {0}", result.ToString());
        
        // String.LastIndexOf(string, startIndex, length, stringComparison)
        compareStr = "C";
        StringComparison strCmp = StringComparison.InvariantCultureIgnoreCase;
        result = baseString.LastIndexOf(compareStr, startIndex, strCmp);
        Console.WriteLine("Search using starting postion & string comparision: {0}", result.ToString());
    }
}
```

This is what is printed to the console:

```shell
Simple search: 19
Search using starting postion: 9
Search using starting postion & searching length: -1
Search using starting postion & string comparision: 15
```

## Codebyte Example

In this example, the `String.LastIndexOf()` is use with `compareStr`, `startIndex` and  `strCmp` parameters to determine the zero-base index of the last occurrence of substring within the string. The search starts at the startIndex and proceeds backward toward the beginning of the string, using the StringComparison method:

```codebyte/csharp
using System;

public class HelloWorld
{
    public static void Main(string[] args)
    {
        string baseString = "Hello, I'm Codecademy";
        compareStr = "C";
        int startIndex = 17;
        StringComparison strCmp = StringComparison.InvariantCultureIgnoreCase;
        
        int result = baseString.LastIndexOf(compareStr, startIndex, strCmp);
        Console.WriteLine("Search using starting postion & string comparision: {0}", result.ToString());
    }
}
```