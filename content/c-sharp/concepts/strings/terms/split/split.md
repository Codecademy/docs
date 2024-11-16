---
Title: '.Split()'
Description: 'Divides a string into an array of substrings based on specified delimiter(s).'
Subjects:
  - 'Computer Science'
  - 'Code Foundations'
Tags:
  - 'Strings'
  - 'Libraries'
  - 'Methods'
CatalogContent:
  - 'learn-c-sharp'
  - 'paths/computer-science'
---

The **`.Split()`** method divides a string into an array of substrings based on specified delimiter(s), which can be a character, an array of characters, or a string.

## Syntax

The `.Split()` method can be used in the following ways:

```pseudo
Split(String[], Int32, StringSplitOptions)
```

Splits a string into a maximum number of substrings using the strings in an array as delimiters.

```pseudo
Split(Char[], Int32, StringSplitOptions)
```

Splits a string into a maximum number of substrings using the characters in an array as delimiters.

```pseudo
Split(String[], StringSplitOptions)
```

Splits a string into substrings based on the strings in an array.

```pseudo
Split(Char[])
```

Splits a string into substrings based on the characters in an array.

```pseudo
Split(Char[], StringSplitOptions)
```

Splits a string into substrings based on the characters in an array.

```pseudo
Split(Char[], Int32)
```

Splits a string into a maximum number of substrings based on the characters in an array. 

- `StringSplitOptions`: Represents an enumeration that defines whether to include empty substrings `(StringSplitOptions.None)` or exclude them `(StringSplitOptions.RemoveEmptyEntries)`.
- `int count`: Represents the maximum number of substrings to return.

## Example

The following examples demonstrates the use of `.Split()` method:

```cs
using System;

class EqualsMethod {

    public static void Main(string[] args)
    {
        string s1 = "Rivers, Mountains, Oceans";

        string[] subs = s1.Split(',');
        foreach (var sub in subs)
        {
          Console.WriteLine($"Substring: {sub}");
        }

       // To remove spaces alongwith the comma, specify ', ' as the delimiter.
        subs = s1.Split(", ");
        foreach (var sub in subs)
        {
          Console.WriteLine($"Substring: {sub}");
        }

        // To limit the number of substrings to 2, specify the optional parameter
        subs = s1.Split(", ", 2);
        foreach (var sub in subs)
        {
          Console.WriteLine($"Substring: {sub}");
        }
    }
}
```

This example results in the following output:

```shell
Substring: Rivers
Substring:  Mountains
Substring:  Oceans
Substring: Rivers
Substring: Mountains
Substring: Oceans
Substring: Rivers
Substring: Mountains, Oceans
```

## Codebyte Example

This example demonstrates how the `.Split()` method works in C# for splitting a string based on delimiters (in this case, commas and spaces).

```codebyte/csharp
using System;

class EqualsMethod {

    public static void Main(string[] args)
    {
        string s1 = "Rivers, Mountains, Oceans";

        string[] subs = s1.Split(',');
        foreach (var sub in subs)
        {
          Console.WriteLine($"Substring: {sub}");
        }

        // To remove spaces too, we can specify ', ' as the delimeter
        subs = s1.Split(", ");
        foreach (var sub in subs)
        {
          Console.WriteLine($"Substring: {sub}");
        }
    }
}
```
