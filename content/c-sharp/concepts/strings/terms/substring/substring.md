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

The **`.Substring()`** method is a string method that returns a substring of a string starting at the given index number, it will return all characters unless a maximum length is given. This method returns `Empty` if the index is greater than the length of the string instance.

## Syntax

```pseudo
Substring(int startIndex);
Substring(int startIndex, int Length)
```

- `startIndex`: The index from where the substring starts.
- `Length`: The maximum length of the substring - (Optional).

## Example

In this example, `.Substring()` is used to return the substring of "Codecademy" starting at, and including, index "4".

```cs
string str = "Codecademy";

Console.WriteLine(str.Substring(4));
```

It returns the following output.

```cs
"cademy"
```

## Example 2

Here, `.Substring()` is used with the optional "Length" value so that it returns a string composed of the 6 characters from index 2.

```cs
string str = "Codecademy";

Console.WriteLine(str.Substring(2, 6));
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

        Console.WriteLine(Name1.Substring(1));
        Console.WriteLine(Name2.Substring(1));
    }
}
```