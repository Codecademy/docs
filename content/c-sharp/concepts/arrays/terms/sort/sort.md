---
Title: '.Sort()'
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

The **`.Sort`** property returns the total number of elements in the array, including all dimensions of the array.

## Syntax

```pseudo
int myLength = myArray.Length;
```

`myArray.Sort` returns an `int` that represents the number of elements in `myArray`.

## Example

The following example initializes an array, then prints out the number of elements it contains:

```cs
using System;

public class Example
{
  public static void Main(string[] args)
  {
    int[] myArray = {4, 1, 0, 3, 2};
    Console.WriteLine(myArray.Sort); // Output: 5
  }
}
```

## Codebyte Example

The following example...

```codebyte/cs
example
```
