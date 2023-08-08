---
Title: '.Copy()'
Description: 'Copies elements in an array within a certain range.'
Subjects:
  - 'Computer Science'
  - 'Code Foundations'
Tags:
  - 'Arrays'
CatalogContent:
  - 'learn-c-sharp'
  - 'paths/computer-science'
---

The **`.Copy()`** method in [C#](https://www.codecademy.com/resources/docs/c-sharp) copies a range of elements from one array to another array.

## Syntax

```pseudo
Array.Copy(sourceArray, destinationArray, length);

Array.Copy(sourceArray, sourceStartingIndex, destinationArray, destinationStartingIndex, length);
```

`.Copy()` is a static method of the `Array` object. It takes the following arguments:

- `sourceArray` is copied, starting from the first element of the array.
- `destinationArray` is where the `sourceArray` is copied to.
- `length` is specified as an integer and determines how many elements are copied from the source to the destination array.

It is also possible to overload this method with two additional parameters:

- `sourceStartingIndex` is the index where the source array's elements are first copied from.
- `destinationStartingIndex` is the destination array's index to which the elements from the source array are copied to.

## Example

The following example initializes the array `sourceArray` and the array `destinationArray`. Using a `foreach` loop, the contents of `destinationArray` are printed to the console:

```cs
using System;

public class Example
{
  public static void Main(string[] args)
  {
    string[] sourceArray = new string[] { "red", "orange", "yellow", "green", "blue", "indigo", "violet"};
    string[] destinationArray = new string[sourceArray.Length];

    // sourceArray.Length returns the integer for the third parameter, length.
    Array.Copy(sourceArray, destinationArray, sourceArray.Length);
      foreach (string element in destinationArray)
      {
        Console.Write($"{element} ");
      }
  }
}
```

This is printed to the console:

```shell
red orange yellow green blue indigo violet
```

## Codebyte Example

The following codebyte is runnable and shows one of the several overload functions with the `Array.Copy()` method. In this example, `sourceArray` is copied starting from the third element in the array `[2]`and stores elements `[2]`, `[3]`, `[4]` starting as the first element in `destinationArray`. The remaining elements return `0`:

```codebyte/csharp
using System;

public class OverloadExample
{
  public static void Main(string[] args)
  {
      int[] sourceArray = new int[] {10, 20, 30, 40, 50, 60, 70};
                     // array index  [0] [1] [2] [3] [4] [5] [6]
      int[] destinationArray = new int[sourceArray.Length];

      Array.Copy(sourceArray, 2, destinationArray, 0, 3);

      foreach (int element in destinationArray)
      {
        Console.Write($"{element} ");
      }
  }
}
```
