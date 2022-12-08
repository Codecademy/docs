---
Title: '.Clear()'
Description: 'Clears the contents of an array, returning each element to its default value.'
Subjects:
  - 'Computer Science'
  - 'Code Foundations'
Tags:
  - 'Arrays'
CatalogContent:
  - 'learn-c-sharp'
  - 'paths/computer-science'
---

The `.Clear()` method is used to clear the contents of an array, returning each element to its default value.

## Syntax

```pseudo
// Clears the array myArray
Array.Clear(myArray);

// Clears N elements from myArray starting at index
Array.Clear(myArray, index, N);
```

`.Clear()` is a static method of the `Array` object. When it is called with just an array as an argument, it clears the whole array. When it is called with an array, a start index, and a number, it clears `N` amount of elements in the array starting from the specified `index` by zeroing, falsifying, or nulling out all the elements (depending on the array's element type).

## Example

The following example initializes `myArray` with values, and clears it from a specified index; the number of elements cleared is set to the length of the array using the [`.Length`](https://www.codecademy.com/resources/docs/c-sharp/arrays/length) property:

```cs
using System;

public class Example
{
  public static void Main(string[] args)
  {
    int[] myArray = {0, 1, 2, 3, 4};

    Array.Clear(myArray, 0, myArray.Length);

    System.Console.WriteLine(myArray[2]); // Output: 0
  }
}
```
