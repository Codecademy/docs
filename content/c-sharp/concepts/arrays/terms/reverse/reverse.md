---
Title: '.Reverse()'
Description: 'Reverses the sequence of a subset of the elements in a one-dimensional array.'
Subjects:
  - 'Computer Science'
  - 'Code Foundations'
Tags:
  - 'Arrays'
  - 'Methods'
CatalogContent:
  - 'learn-c-sharp'
  - 'paths/build-web-apps-with-asp-net'
---

The **`.Reverse()`** method reverses the sequence of a subset of the elements in a one-dimensional array.

## Syntax

```pseudo
Array.Reverse(sourceArray, index, length);
```

`.Reverse()` takes the following parameters:

- `sourceArray`, the array to be reversed
- `index`, an integer specifying the start of the subset
- `length`, an integer specifying the number of elements of the subset

If the method is run without specifying and index and length, then the entire array will be reversed.

## Example

The following example initializes `spamLetters` with values, and reverses the sequence:

```cs
using System;

public class Example
{
  public static void Main(string[] args)
  {
    string[] spamLetters = {"S", "P", "A", "M"};

    Array.Reverse(spamLetters);

    foreach (string s in spamLetters)
    {
      System.Console.Write(s + " ");
    }
  }
}
```

The code returns the following output:

```shell
M A P S
```

## Codebyte Example

The following example uses the `.Reverse()` method to flip the final 4 characters of an array.

```codebyte/csharp
using System;

public class Example
{
  public static void Main(string[] args)
  {
    string[] alphaBit = {"L", "M", "N", "O", "P"};

    Array.Reverse(alphaBit, 1, 4);

    foreach (string a in alphaBit)
    {
      System.Console.Write(a + " ");
    }
  }
}
```
