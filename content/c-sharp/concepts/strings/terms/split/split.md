---
Title: '.Split()'
Description: 'Divides a string into an array of substrings based on specified delimeter(s).'
Subjects:
  - 'Computer Science'
Tags:
  - 'Strings'
  - 'Libraries'
  - 'Methods'
CatalogContent:
  - 'learn-c-sharp'
  - 'paths/computer-science'
---

The **`.Split()`** method breaks a string into substrings based on specified delimiter(s), which can be a character, an array of characters, or a string. It returns an array of strings containing the split substrings.

## Syntax

The various overloads of the `.Split()` method in C# are as follows:

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

       // To remove spaces, specify ', ' as the delimiter.
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

Run the following example to understand how the `.String()` method works:

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
