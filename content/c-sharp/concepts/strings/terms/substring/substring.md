---
Title: '.Substring()'
Description: 'Returns the substring of a string instance starting at a given index.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Methods'
  - 'Strings'
CatalogContent:
  - 'learn-c-sharp'
  - 'paths/computer-science'
---

The **`.Substring()`** method is a string method that returns a substring of a string starting at the specified index. It will return all characters from that index to the end unless a maximum length is specified. If the starting index equals the string length, it returns an empty string (`""`). If the index is greater than the string length, it throws an `ArgumentOutOfRangeException`.

## Syntax

```pseudo
.Substring(int startIndex)
```

Or, alternatively:

```pseudo
.Substring(int startIndex, int length)
```

- `startIndex`: The index from where the substring starts.
- `Length` (Optional): The number of characters to include in the substring..

## Example

In this example, `.Substring()` is used to return the substring of "Codecademy" starting at index `4` and includes all characters from that position to the end of the string:

```cs
using System;

public class Program
{
    public static void Main()
    {
        string str = "Codecademy";
        Console.WriteLine(str.Substring(4));
    }
}
```

The above example results in the following output:

```shell
cademy
```

## Example 2

In this example, `.Substring()` is used with the optional `length` parameter to return a substring of 6 characters starting from index `2` of the string `"Codecademy"`.

```cs
using System;

public class Program
{
    public static void Main()
    {
        string str = "Codecademy";
        Console.WriteLine(str.Substring(2, 6));
    }
}
```

The above code generates the following output:

````shell
decade

## Codebyte Example

The below code demonstrates how to use the Substring method:

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
````
