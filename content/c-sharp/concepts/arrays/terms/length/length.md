---
Title: '.Length'
Description: 'Returns the total number of elements in the array.'
Subjects:
  - 'Computer Science'
  - 'Code Foundations'
Tags:
  - 'Arrays'
CatalogContent:
  - 'learn-c-sharp'
  - 'paths/computer-science'
---

The **`.Length`** property returns the total number of elements in the array, including all dimensions of the array.

## Syntax

```pseudo
int myLength = myArray.Length;
```

`myArray.Length()` returns an `int` that represents the number of elements in `myArray`.

## Example

The following example initializes an array, then prints out the number of elements it contains:

```cs
using System;

public class Example
{
  public static void Main(string[] args)
  {
    int[] myArray = {0, 1, 2, 3, 4};
    Console.WriteLine(myArray.Length); // Output: 5
  }
}
```
