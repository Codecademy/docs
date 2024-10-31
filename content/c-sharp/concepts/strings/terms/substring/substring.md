---
Title: '.Substring()'
Description: 'Returns the substring of a string instance starting at a given index'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Strings'
  - 'Methods'
CatalogContent:
  - 'learn-c-sharp'
  - 'paths/computer-science'
---

The **`.Substring()`** method is a string method that returns a substring of a string starting at a given index number, it will return all characters past the index unless a length is given. This method returns `Empty` if the index is greater than the length of the string instance.

## Syntax

```psuedo
Substring(int startIndex);
Substring(int startIndex, int Length)
```

- `startIndex`: The index from where the substring starts.
- `Length`: The length of the substring - (Optional).

## Example

In this example, `.Substring()` is used to return the substring of "Codecademy" starting at, but not including, index "3".

```cs
string str = "Codecademy";

Console.WriteLine(str.Substring(3));
```

It returns the following output.

```cs
"cademy"
```

## Example 2

Here, `.Substring()` is used with the optional "Length" value so that it returns a string composed of the 6 characters after index 1.

```cs
string str = "Codecademy";

Console.WriteLine(str.Substring(1, 6));
```

It returns the following output.
```cs
"decade"
```

## Codebyte Example

In this Codebyte example, `.Substring()` is used to return a name without it's initial letter.

```codebyte/csharp
using System;

public class Example
{
    public static void Main(string[] args)
    {
        string Name1 = "Brad";
        string Name2 = "Angelina";

        Console.WriteLine(Name1.Substring(0));
        Console.WriteLine(Name2.Substring(0));
    }
}
```