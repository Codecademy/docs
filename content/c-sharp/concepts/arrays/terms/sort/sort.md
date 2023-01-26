---
Title: '.Sort()'
Description: 'Arranges the elements of the array in ascending or in alphabetical order.'
Subjects:
  - 'Computer Science'
  - 'Code Foundations'
Tags:
  - 'Arrays'
CatalogContent:
  - 'learn-c-sharp'
  - 'paths/computer-science'
---

The **`.Sort()`** array method arranges the elements of the array in ascending or alphabetical order.

## Syntax

```pseudo
Array.Sort(myArray);
```

`.Sort()` is a static method of the `Array` object. It takes one parameter, `myArray`, a one-dimensional zero-based array. The `.Sort()` method arranges the elements of the `myArray` in ascending or alphabetical order.

## Example

The following example initializes the `letters` array with letters, then uses the `.Sort()` method to arrange the letters alphabetically. Finally, the `Console.Write()` method prints the sorted array to the console with a `foreach` loop:

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

The following example is runnable and returns the numbers of the `numbers` array in ascending order:

```codebyte/cs
using System;

public class Example
{
  public static void Main(string[] args)
  {
    int[] numbers = {5895, 4810, 5364};
    Array.Sort(numbers);
    foreach (int number in numbers)
    {
      System.Console.Write(number + " "); // Output: 4810 5364 5895 
    }
  }
}
```
