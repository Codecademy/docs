---
Title: '.Sort()'
Description: 'Arranges the elements of an array in ascending or alphabetical order.'
Subjects:
  - 'Computer Science'
  - 'Code Foundations'
Tags:
  - 'Arrays'
CatalogContent:
  - 'learn-c-sharp'
  - 'paths/computer-science'
---

The **`.Sort()`** array method arranges the elements of an array in ascending or alphabetical order.

## Syntax

```pseudo
Array.Sort(myArray);
```

`.Sort()` is a static method of the `Array` object. It takes one parameter, `myArray`, a one-dimensional zero-based array.

## Example

The following example initializes the `letters` array with strings, then uses the `.Sort()` method to arrange the strings alphabetically. Finally, a `foreach` loop passes each element of the sorted array to the `Console.Write()` method to be printed:

```cs
using System;

public class Example
{
  public static void Main(string[] args)
  {
    string[] letters = {"M", "Y", "E", "T", "P"};

    Array.Sort(letters);

    foreach (string letter in letters)
    {
      System.Console.Write(letter + " ");
    }
  }
}
```

This example results in the following output:

```shell
E M P T Y
```

## Codebyte Example

The following example is runnable and returns the numbers in the `numbers` array in ascending order:

```codebyte/csharp
using System;

public class Example
{
  public static void Main(string[] args)
  {
    int[] numbers = {5895, 4810, 5364};

    Array.Sort(numbers);

    foreach (int number in numbers)
    {
      System.Console.Write(number + " ");
    }
  }
}
```
